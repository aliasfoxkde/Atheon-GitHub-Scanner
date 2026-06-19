package github

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
	"time"
)

// EnhancedClient provides advanced GitHub API integration with authentication and rate limiting
type EnhancedClient struct {
	httpClient      *http.Client
	token           string
	rateLimit       *RateLimit
	maxRetries      int
	retryDelay      time.Duration
	lastRequestTime time.Time
	minRequestDelay time.Duration
}

// NewEnhancedClient creates a new enhanced GitHub API client with authentication
func NewEnhancedClient(token string) *EnhancedClient {
	return &EnhancedClient{
		httpClient: &http.Client{
			Timeout: 60 * time.Second,
			Transport: &http.Transport{
				MaxIdleConns:        10,
				IdleConnTimeout:     30 * time.Second,
				DisableCompression:  false,
				MaxIdleConnsPerHost: 10,
			},
		},
		token:           token,
		rateLimit:       &RateLimit{},
		maxRetries:      5,
		retryDelay:      2 * time.Second,
		minRequestDelay: 100 * time.Millisecond, // Avoid overwhelming the API
	}
}

// GetRepositoryWithAuth fetches repository information with authentication
func (c *EnhancedClient) GetRepositoryWithAuth(ctx context.Context, owner, name string) (*Repository, error) {
	url := fmt.Sprintf("%s/repos/%s/%s", githubAPIBase, owner, name)

	var repo Repository
	err := c.makeRequest(ctx, "GET", url, nil, &repo)
	if err != nil {
		return nil, fmt.Errorf("failed to get repository: %w", err)
	}

	return &repo, nil
}

// SearchRepositoriesWithAuth searches repositories with authentication and pagination
func (c *EnhancedClient) SearchRepositoriesWithAuth(ctx context.Context, query string, sort string, order string, perPage int, page int) ([]*Repository, error) {
	url := fmt.Sprintf("%s/search/repositories?q=%s&sort=%s&order=%s&per_page=%d&page=%d",
		githubAPIBase, query, sort, order, perPage, page)

	var searchResult struct {
		Items []*Repository `json:"items"`
	}

	err := c.makeRequest(ctx, "GET", url, nil, &searchResult)
	if err != nil {
		return nil, fmt.Errorf("failed to search repositories: %w", err)
	}

	return searchResult.Items, nil
}

// GetAllTrendingRepositories fetches trending repositories with intelligent rate limiting
func (c *EnhancedClient) GetAllTrendingRepositories(ctx context.Context, languages []string, limitPerLang int) ([]*Repository, error) {
	var allRepos []*Repository

	for _, language := range languages {
		// Check rate limits
		if c.rateLimit.Remaining < 10 {
			if c.rateLimit.Reset.After(time.Now()) {
				waitDuration := c.rateLimit.Reset.Sub(time.Now()) + time.Second
				fmt.Printf("Rate limit reached, waiting %v before continuing...\n", waitDuration)
				select {
				case <-time.After(waitDuration):
				case <-ctx.Done():
					return nil, ctx.Err()
				}
			}
		}

		repos, err := c.SearchRepositoriesWithAuth(ctx,
			fmt.Sprintf("language:%s stars:>0 pushed:>%s", language, time.Now().AddDate(0, 0, -1).Format("2006-01-02")),
			"stars", "desc", limitPerLang, 1)

		if err != nil {
			fmt.Printf("Warning: Failed to fetch trending repos for %s: %v\n", language, err)
			continue
		}

		allRepos = append(allRepos, repos...)

		// Add delay between language requests
		time.Sleep(c.minRequestDelay)
	}

	return allRepos, nil
}

// makeRequest makes an HTTP request with retry logic and rate limiting
func (c *EnhancedClient) makeRequest(ctx context.Context, method, url string, body io.Reader, result interface{}) error {
	var lastErr error

	for attempt := 0; attempt <= c.maxRetries; attempt++ {
		if attempt > 0 {
			fmt.Printf("Retry attempt %d/%d for %s\n", attempt, c.maxRetries, url)
			time.Sleep(c.retryDelay * time.Duration(attempt))
		}

		// Respect minimum request delay
		if !c.lastRequestTime.IsZero() {
			elapsed := time.Since(c.lastRequestTime)
			if elapsed < c.minRequestDelay {
				time.Sleep(c.minRequestDelay - elapsed)
			}
		}

		// Create request
		req, err := http.NewRequestWithContext(ctx, method, url, body)
		if err != nil {
			return fmt.Errorf("failed to create request: %w", err)
		}

		// Add authentication and headers
		if c.token != "" {
			req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", c.token))
		}
		req.Header.Set("Accept", "application/vnd.github.v3+json")
		req.Header.Set("User-Agent", "Atheon-GitHub-Scanner/1.0")

		// Make request
		resp, err := c.httpClient.Do(req)
		c.lastRequestTime = time.Now()

		if err != nil {
			lastErr = fmt.Errorf("request failed: %w", err)
			continue
		}

		defer resp.Body.Close()

		// Update rate limit info
		c.updateRateLimit(resp)

		// Check for rate limit errors
		if resp.StatusCode == http.StatusForbidden && c.rateLimit.Remaining == 0 {
			resetTime := c.rateLimit.Reset.Sub(time.Now())
			if resetTime > 0 {
				fmt.Printf("Rate limit exceeded, waiting %v until reset...\n", resetTime)
				select {
				case <-time.After(resetTime):
				case <-ctx.Done():
					return ctx.Err()
				}
				continue
			}
		}

		// Check for other errors
		if resp.StatusCode >= 400 {
			bodyBytes, _ := io.ReadAll(resp.Body)
			lastErr = fmt.Errorf("GitHub API returned status %d: %s", resp.StatusCode, string(bodyBytes))

			// Don't retry on client errors (4xx except 429)
			if resp.StatusCode >= 400 && resp.StatusCode < 500 && resp.StatusCode != 429 {
				return lastErr
			}
			continue
		}

		// Parse response
		if result != nil {
			if err := json.NewDecoder(resp.Body).Decode(result); err != nil {
				lastErr = fmt.Errorf("failed to decode response: %w", err)
				continue
			}
		}

		return nil
	}

	return lastErr
}

// GetRateLimitInfo returns current rate limit information
func (c *EnhancedClient) GetRateLimitInfo() *RateLimit {
	return c.rateLimit
}

// WaitForRateLimitReset waits until rate limit resets
func (c *EnhancedClient) WaitForRateLimitReset(ctx context.Context) error {
	if c.rateLimit.Reset.IsZero() {
		return fmt.Errorf("no rate limit information available")
	}

	resetTime := c.rateLimit.Reset.Sub(time.Now())
	if resetTime <= 0 {
		return nil // Already reset
	}

	fmt.Printf("Waiting %v for rate limit reset...\n", resetTime)
	select {
	case <-time.After(resetTime):
		return nil
	case <-ctx.Done():
		return ctx.Err()
	}
}

// updateRateLimit updates rate limit information from response headers
func (c *EnhancedClient) updateRateLimit(resp *http.Response) {
	if remaining := resp.Header.Get("X-RateLimit-Remaining"); remaining != "" {
		fmt.Sscanf(remaining, "%d", &c.rateLimit.Remaining)
	}

	if reset := resp.Header.Get("X-RateLimit-Reset"); reset != "" {
		var timestamp int64
		fmt.Sscanf(reset, "%d", &timestamp)
		c.rateLimit.Reset = time.Unix(timestamp, 0)
	}

	// Log rate limit status periodically
	if c.rateLimit.Remaining%100 == 0 || c.rateLimit.Remaining < 50 {
		fmt.Printf("Rate limit status: %d remaining, reset at %s\n",
			c.rateLimit.Remaining, c.rateLimit.Reset.Format("15:04:05"))
	}
}