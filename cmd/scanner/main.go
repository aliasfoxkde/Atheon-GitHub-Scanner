package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"os"
	"os/signal"
	"path/filepath"
	"strings"
	"syscall"
	"time"

	"github.com/aliasfoxkde/Atheon-GitHub-Scanner/pkg/github"
	"github.com/aliasfoxkde/Atheon-GitHub-Scanner/pkg/report"
	"github.com/aliasfoxkde/Atheon-GitHub-Scanner/pkg/scanner"
)

func main() {
	// Set up context for graceful cancellation
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	// Handle interrupt signals
	sigChan := make(chan os.Signal, 1)
	signal.Notify(sigChan, os.Interrupt, syscall.SIGTERM)
	go func() {
		<-sigChan
		fmt.Println("\nReceived interrupt signal, shutting down gracefully...")
		cancel()
	}()

	// GitHub token from environment
	githubToken := os.Getenv("GITHUB_TOKEN")

	scanCmd := flag.NewFlagSet("scan", flag.ExitOnError)
	repoFlag := scanCmd.String("repo", "", "Repository to scan (owner/name)")
	trendingFlag := scanCmd.Bool("trending", false, "Scan trending repositories")
	popularFlag := scanCmd.Bool("popular", false, "Scan popular/curated repositories")
	languagesFlag := scanCmd.String("languages", "", "Comma-separated list of languages")
	starsMinFlag := scanCmd.Int("stars-min", 0, "Minimum star count")
	sinceFlag := scanCmd.String("since", "daily", "Time period for trending (daily, weekly, monthly)")
	limitFlag := scanCmd.Int("limit", 10, "Maximum number of repositories to scan")
	outputFlag := scanCmd.String("output", "./reports", "Output directory for reports")
	continueOnError := scanCmd.Bool("continue", false, "Continue scanning even if individual repos fail")
	categoryFlag := scanCmd.String("category", "", "Repository category to scan (web-framework, cli-tool, library, database, testing, devops, ml-ai, documentation)")

	dbCmd := flag.NewFlagSet("db", flag.ExitOnError)

	reportCmd := flag.NewFlagSet("report", flag.ExitOnError)

	if len(os.Args) < 2 {
		printUsage()
		os.Exit(1)
	}

	switch os.Args[1] {
	case "scan":
		scanCmd.Parse(os.Args[2:])
		handleScanCommand(ctx, repoFlag, trendingFlag, popularFlag, languagesFlag, starsMinFlag, sinceFlag, limitFlag, outputFlag, continueOnError, categoryFlag, githubToken)

	case "db":
		dbCmd.Parse(os.Args[2:])
		fmt.Println("Database command (coming soon)")
		fmt.Println("Available subcommands: init, update, query")

	case "report":
		reportCmd.Parse(os.Args[2:])
		fmt.Println("Report command (coming soon)")
		fmt.Println("Available subcommands: generate, compare, query")

	default:
		printUsage()
		os.Exit(1)
	}
}

func handleScanCommand(ctx context.Context, repoFlag *string, trendingFlag *bool, popularFlag *bool, languagesFlag *string, starsMinFlag *int, sinceFlag *string, limitFlag *int, outputFlag *string, continueOnError *bool, categoryFlag *string, githubToken string) {

	if *repoFlag == "" && !*trendingFlag && !*popularFlag && *starsMinFlag == 0 && *categoryFlag == "" {
		log.Fatal("scan requires either --repo, --trending, --popular, --category, or --stars-min flag")
	}

	// Create output directory
	if err := os.MkdirAll(*outputFlag, 0755); err != nil {
		log.Fatalf("Failed to create output directory: %v", err)
	}

	// Initialize scanner
	scannerInstance, err := scanner.NewScanner(ctx, githubToken)
	if err != nil {
		log.Fatalf("Failed to initialize scanner: %v", err)
	}

	githubClient := scannerInstance.GetGitHubClient()

	var repos []*github.Repository

	// Determine what to scan
	if *repoFlag != "" {
		// Scan single repository
		parts := strings.Split(*repoFlag, "/")
		if len(parts) != 2 {
			log.Fatalf("Invalid repository format. Use owner/name format")
		}

		repo, err := githubClient.GetRepository(ctx, parts[0], parts[1])
		if err != nil {
			log.Fatalf("Failed to get repository: %v", err)
		}
		repos = append(repos, repo)

	} else if *popularFlag || *categoryFlag != "" {
		// Scan popular/curated repositories
		fmt.Println("Fetching popular repositories...")

		var reposToScan []string
		if *categoryFlag != "" {
			// Scan specific category
			categoryMap := map[string][]string{
				"web-framework": scanner.GetPopularRepositories().WebFrameworks,
				"cli-tool":      scanner.GetPopularRepositories().CLITools,
				"library":       scanner.GetPopularRepositories().Libraries,
				"database":      scanner.GetPopularRepositories().Databases,
				"testing":       scanner.GetPopularRepositories().Testing,
				"devops":        scanner.GetPopularRepositories().DevOps,
				"ml-ai":         scanner.GetPopularRepositories().ML_AI,
				"documentation": scanner.GetPopularRepositories().Documentation,
			}

			if repos, exists := categoryMap[*categoryFlag]; exists {
				reposToScan = repos
			} else {
				log.Fatalf("Unknown category: %s", *categoryFlag)
			}
		} else {
			// Scan all popular repositories
			reposToScan = scanner.GetAllRepositories()
		}

		// Apply language filter if specified
		if *languagesFlag != "" {
			langFilter := strings.Split(*languagesFlag, ",")
			var filtered []string
			for _, lang := range langFilter {
				lang = strings.TrimSpace(lang)
				langRepos := scanner.GetRepositoriesByLanguage(lang)
				filtered = append(filtered, langRepos...)
			}
			reposToScan = filtered
		}

		// Apply limit
		if *limitFlag > 0 && *limitFlag < len(reposToScan) {
			reposToScan = reposToScan[:*limitFlag]
		}

		// Get repository metadata for each
		for _, repoName := range reposToScan {
			parts := strings.Split(repoName, "/")
			if len(parts) != 2 {
				fmt.Printf("Warning: Invalid repo format: %s\n", repoName)
				continue
			}

			repo, err := githubClient.GetRepository(ctx, parts[0], parts[1])
			if err != nil {
				fmt.Printf("Warning: Failed to get %s: %v\n", repoName, err)
				if !*continueOnError {
					log.Fatal("Stopping due to errors (use --continue to ignore)")
				}
				continue
			}
			repos = append(repos, repo)
		}

	} else if *repoFlag != "" {
		// Scan single repository
		parts := strings.Split(*repoFlag, "/")
		if len(parts) != 2 {
			log.Fatalf("Invalid repository format. Use owner/name format")
		}

		repo, err := githubClient.GetRepository(ctx, parts[0], parts[1])
		if err != nil {
			log.Fatalf("Failed to get repository: %v", err)
		}
		repos = append(repos, repo)

	} else if *trendingFlag {
		// Scan trending repositories
		fmt.Printf("Fetching trending repositories (since: %s, limit: %d)...\n", *sinceFlag, *limitFlag)

		languages := []string{}
		if *languagesFlag != "" {
			languages = strings.Split(*languagesFlag, ",")
		}

		if len(languages) == 0 {
			// Get general trending
			trendingRepos, err := githubClient.GetTrendingRepositories(ctx, "", *sinceFlag, *limitFlag)
			if err != nil {
				log.Fatalf("Failed to get trending repositories: %v", err)
			}
			repos = append(repos, trendingRepos...)
		} else {
			// Get trending for each language
			for _, lang := range languages {
				lang = strings.TrimSpace(lang)
				if lang == "" {
					continue
				}

				fmt.Printf("Fetching trending repositories for language: %s\n", lang)
				trendingRepos, err := githubClient.GetTrendingRepositories(ctx, lang, *sinceFlag, *limitFlag/len(languages))
				if err != nil {
					log.Printf("Warning: Failed to get trending repos for %s: %v", lang, err)
					if !*continueOnError {
						log.Fatal("Stopping due to errors (use --continue to ignore)")
					}
					continue
				}
				repos = append(repos, trendingRepos...)
			}
		}

	} else if *starsMinFlag > 0 {
		// Scan repositories by star count
		fmt.Printf("Fetching repositories with %d+ stars (limit: %d)...\n", *starsMinFlag, *limitFlag)

		var language string
		if *languagesFlag != "" {
			languages := strings.Split(*languagesFlag, ",")
			if len(languages) > 0 {
				language = strings.TrimSpace(languages[0])
			}
		}

		starRepos, err := githubClient.GetRepositoriesByStarCount(ctx, *starsMinFlag, language, *limitFlag)
		if err != nil {
			log.Fatalf("Failed to get repositories by star count: %v", err)
		}
		repos = append(repos, starRepos...)
	}

	if len(repos) == 0 {
		fmt.Println("No repositories found to scan")
		return
	}

	fmt.Printf("Found %d repositories to scan\n", len(repos))

	// Scan repositories and generate reports
	successCount := 0
	failCount := 0

	for i, repo := range repos {
		fmt.Printf("\n[%d/%d] Scanning %s...\n", i+1, len(repos), repo.FullName)

		// Check for cancellation
		select {
		case <-ctx.Done():
			fmt.Println("\nScan cancelled by user")
			return
		default:
		}

		parts := strings.Split(repo.FullName, "/")
		if len(parts) != 2 {
			fmt.Printf("Warning: Invalid repository format: %s\n", repo.FullName)
			failCount++
			continue
		}

		startTime := time.Now()
		result, err := scannerInstance.ScanRepository(parts[0], parts[1])
		if err != nil {
			fmt.Printf("Error scanning %s: %v\n", repo.FullName, err)
			failCount++
			if !*continueOnError {
				log.Fatal("Stopping due to errors (use --continue to ignore)")
			}
			continue
		}

		duration := time.Since(startTime)
		fmt.Printf("Completed in %.2f seconds\n", duration.Seconds())
		fmt.Printf("Quality Score: %d/100 (Tier %s)\n", result.QualityScore, result.Tier)
		fmt.Printf("Total Findings: %d (%d critical, %d high, %d medium, %d low)\n",
			result.Summary.TotalFindings,
			result.Summary.CriticalFindings,
			result.Summary.HighFindings,
			result.Summary.MediumFindings,
			result.Summary.LowFindings)

		// Generate report
		reportGenerator := report.NewGenerator(*outputFlag)
		markdownReport, err := reportGenerator.GenerateMarkdownReport(result)
		if err != nil {
			fmt.Printf("Warning: Failed to generate report for %s: %v\n", repo.FullName, err)
		} else {
			// Save report
			reportPath := filepath.Join(*outputFlag, fmt.Sprintf("%s.md", strings.ReplaceAll(repo.FullName, "/", "_")))
			if err := os.WriteFile(reportPath, []byte(markdownReport), 0644); err != nil {
				fmt.Printf("Warning: Failed to save report for %s: %v\n", repo.FullName, err)
			} else {
				fmt.Printf("Report saved to: %s\n", reportPath)
			}
		}

		successCount++

		// Rate limiting delay
		if i < len(repos)-1 {
			time.Sleep(1 * time.Second)
		}
	}

	// Print summary
	fmt.Printf("\n=== Scan Summary ===\n")
	fmt.Printf("Total repositories: %d\n", len(repos))
	fmt.Printf("Successfully scanned: %d\n", successCount)
	fmt.Printf("Failed: %d\n", failCount)
	fmt.Printf("Reports saved to: %s\n", *outputFlag)
}

func printUsage() {
	fmt.Println("Atheon-GitHub-Scanner - Repository scanning and quality analysis")
	fmt.Println("Powered by patterns from [Atheon](https://github.com/HoraDomu/Atheon)")
	fmt.Println()
	fmt.Println()
	fmt.Println("Usage:")
	fmt.Println("  scanner scan --repo=owner/name [options]")
	fmt.Println("  scanner scan --trending --languages=js,py [options]")
	fmt.Println("  scanner scan --stars-min=1000 --limit=20 [options]")
	fmt.Println("  scanner db init")
	fmt.Println("  scanner db update --repo=owner/name")
	fmt.Println("  scanner db query --quality-tier=A --language=go")
	fmt.Println()
	fmt.Println("Scan Options:")
	fmt.Println("  --repo string         Repository to scan (owner/name)")
	fmt.Println("  --trending           Scan trending repositories")
	fmt.Println("  --languages string   Comma-separated language list")
	fmt.Println("  --stars-min int       Minimum star count")
	fmt.Println("  --since string       Time period for trending (daily, weekly, monthly)")
	fmt.Println("  --limit int           Maximum number of repositories to scan")
	fmt.Println("  --output string      Output directory for reports (default: ./reports)")
	fmt.Println("  --continue           Continue scanning even if individual repos fail")
	fmt.Println()
	fmt.Println("Environment Variables:")
	fmt.Println("  GITHUB_TOKEN         GitHub API token (optional, for higher rate limits)")
	fmt.Println()
	fmt.Println("Examples:")
	fmt.Println("  # Scan a single repository")
	fmt.Println("  scanner scan --repo=facebook/react")
	fmt.Println()
	fmt.Println("  # Scan trending JavaScript repositories")
	fmt.Println("  scanner scan --trending --languages=javascript --limit=5")
	fmt.Println()
	fmt.Println("  # Scan repositories with 10K+ stars")
	fmt.Println("  scanner scan --stars-min=10000 --limit=10")
	fmt.Println()
	fmt.Println("  # Scan multiple trending languages")
	fmt.Println("  scanner scan --trending --languages=javascript,python,go --limit=15 --continue")
}
