package patterns

import (
	"bufio"
	"context"
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"sync"
)

// Finding represents a pattern match found in the code
type Finding struct {
	Type        string   `json:"type"`
	Severity    string   `json:"severity"`
	File        string   `json:"file"`
	Line        int      `json:"line"`
	Column      int      `json:"column"`
	Description string   `json:"description"`
	Match       string   `json:"match"`
	Category    string   `json:"category"`
	CWE         string   `json:"cwe,omitempty"`
	OWASP       string   `json:"owasp,omitempty"`
}

// Scanner represents the pattern scanning engine
type Scanner struct {
	patterns  map[string][]Pattern
	ctx       context.Context
	maxFiles  int
	mu        sync.Mutex
	findings  []Finding
}

// Pattern represents a security or quality pattern to match
type Pattern struct {
	Name        string   `json:"name"`
	Type        string   `json:"type"`
	Severity    string   `json:"severity"`
	Description string   `json:"description"`
	Regex       string   `json:"regex"`
	Category    string   `json:"category"`
	CWE         string   `json:"cwe,omitempty"`
	OWASP       string   `json:"owasp,omitempty"`
	Extensions  []string `json:"extensions"`
	compiled    *regexp.Regexp
}

// NewScanner creates a new pattern scanner
func NewScanner(ctx context.Context) *Scanner {
	scanner := &Scanner{
		patterns: make(map[string][]Pattern),
		ctx:      ctx,
		maxFiles: 10000, // Limit files scanned for performance
	}
	scanner.loadDefaultPatterns()
	return scanner
}

// loadDefaultPatterns loads the default set of security and quality patterns
func (s *Scanner) loadDefaultPatterns() {
	// Secret/credential patterns
	s.patterns["secrets"] = []Pattern{
		{
			Name:        "AWS Access Key",
			Type:        "secret",
			Severity:    "critical",
			Description: "AWS access key ID detected",
			Regex:       `(?i)(aws_access_key_id|aws_secret_access_key)\s*[:=]\s*['\"]?[A-Z0-9]{20}['\"]?`,
			Category:    "security",
			CWE:         "CWE-798",
			OWASP:       "A07:2021",
			Extensions:  []string{".go", ".py", ".js", ".ts", ".java", ".rb", ".php", ".cs", ".cpp", ".c", ".h"},
		},
		{
			Name:        "GitHub Token",
			Type:        "secret",
			Severity:    "critical",
			Description: "GitHub personal access token detected",
			Regex:       `(?i)ghp_[a-zA-Z0-9]{36}`,
			Category:    "security",
			CWE:         "CWE-798",
			OWASP:       "A07:2021",
			Extensions:  []string{".go", ".py", ".js", ".ts", ".java", ".rb", ".php", ".cs", ".cpp", ".c", ".h"},
		},
		{
			Name:        "API Key",
			Type:        "secret",
			Severity:    "high",
			Description: "Potential API key detected",
			Regex:       `(?i)(api[_-]?key|apikey)\s*[:=]\s*['\"]?[a-zA-Z0-9_-]{20,}['\"]?`,
			Category:    "security",
			CWE:         "CWE-798",
			OWASP:       "A07:2021",
			Extensions:  []string{".go", ".py", ".js", ".ts", ".java", ".rb", ".php", ".cs", ".cpp", ".c", ".h"},
		},
		{
			Name:        "Database Connection String",
			Type:        "secret",
			Severity:    "high",
			Description: "Database connection string detected",
			Regex:       `(?i)(mongodb|mysql|postgres|postgresql)://[^\s@]+:[^\s@]+@[^\s]+`,
			Category:    "security",
			CWE:         "CWE-798",
			OWASP:       "A07:2021",
			Extensions:  []string{".go", ".py", ".js", ".ts", ".java", ".rb", ".php", ".cs", ".cpp", ".c", ".h"},
		},
	}

	// Code quality patterns
	s.patterns["quality"] = []Pattern{
		{
			Name:        "Console Log",
			Type:        "quality",
			Severity:    "low",
			Description: "Debug console.log statement found",
			Regex:       `console\.log\(`,
			Category:    "code_quality",
			Extensions:  []string{".js", ".ts"},
		},
		{
			Name:        "Print Statement",
			Type:        "quality",
			Severity:    "low",
			Description: "Debug print statement found",
			Regex:       `\bprint\(`,
			Category:    "code_quality",
			Extensions:  []string{".py", ".rb", ".php"},
		},
		{
			Name:        "TODO Comment",
			Type:        "quality",
			Severity:    "info",
			Description: "TODO comment found",
			Regex:       `(?i)//\s*todo:|#\s*todo:|/\*\s*todo:`,
			Category:    "maintenance",
			Extensions:  []string{".go", ".py", ".js", ".ts", ".java", ".rb", ".php", ".cs", ".cpp", ".c", ".h"},
		},
		{
			Name:        "FIXME Comment",
			Type:        "quality",
			Severity:    "medium",
			Description: "FIXME comment indicating known issue",
			Regex:       `(?i)//\s*fixme:|#\s*fixme:|/\*\s*fixme:`,
			Category:    "maintenance",
			Extensions:  []string{".go", ".py", ".js", ".ts", ".java", ".rb", ".php", ".cs", ".cpp", ".c", ".h"},
		},
	}

	// Security patterns
	s.patterns["security"] = []Pattern{
		{
			Name:        "SQL Injection Risk",
			Type:        "security",
			Severity:    "high",
			Description: "Potential SQL injection vulnerability",
			Regex:       `(?i)(query|exec)\s*\(\s*['\"]\s*(select|insert|update|delete)\s.*\+\s*`,
			Category:    "security",
			CWE:         "CWE-89",
			OWASP:       "A03:2021",
			Extensions:  []string{".py", ".js", ".ts", ".java", ".rb", ".php", ".go", ".cs"},
		},
		{
			Name:        "Hardcoded Credentials",
			Type:        "security",
			Severity:    "high",
			Description: "Hardcoded username/password detected",
			Regex:       `(?i)(username|password|passwd|pwd)\s*[:=]\s*['\"]\w+['\"]`,
			Category:    "security",
			CWE:         "CWE-798",
			OWASP:       "A07:2021",
			Extensions:  []string{".go", ".py", ".js", ".ts", ".java", ".rb", ".php", ".cs", ".cpp", ".c", ".h"},
		},
		{
			Name:        "Weak Crypto",
			Type:        "security",
			Severity:    "medium",
			Description: "Weak cryptographic algorithm detected",
			Regex:       `(?i)(md5|sha1)\s*\(`,
			Category:    "security",
			CWE:         "CWE-327",
			OWASP:       "A02:2021",
			Extensions:  []string{".go", ".py", ".js", ".ts", ".java", ".rb", ".php", ".cs", ".cpp", ".c", ".h"},
		},
	}

	// Compile all patterns
	for category, patterns := range s.patterns {
		for i := range patterns {
			if patterns[i].Regex != "" {
				patterns[i].compiled = regexp.MustCompile(patterns[i].Regex)
			}
		}
		s.patterns[category] = patterns
	}
}

// ScanDirectory scans a directory for pattern matches
func (s *Scanner) ScanDirectory(rootPath string) ([]Finding, error) {
	s.mu.Lock()
	s.findings = []Finding{}
	s.mu.Unlock()

	var filesScanned int
	err := filepath.Walk(rootPath, func(path string, info os.FileInfo, err error) error {
		// Check for context cancellation
		select {
		case <-s.ctx.Done():
			return s.ctx.Err()
		default:
		}

		if err != nil {
			return nil
		}

		// Skip directories
		if info.IsDir() {
			// Skip common non-source directories
			basename := filepath.Base(path)
			if basename == ".git" || basename == "node_modules" || basename == "vendor" ||
				basename == "dist" || basename == "build" || basename == "target" {
				return filepath.SkipDir
			}
			return nil
		}

		// Check file limit
		if filesScanned >= s.maxFiles {
			return nil
		}

		// Check file extension
		ext := strings.ToLower(filepath.Ext(path))
		if !s.shouldScanFile(ext) {
			return nil
		}

		// Skip certain files
		if strings.Contains(path, "test") && strings.HasSuffix(path, "_test.go") {
			// Scan test files but could optionally skip
		}

		filesScanned++
		return s.scanFile(path, rootPath)
	})

	return s.findings, err
}

// shouldScanFile checks if a file should be scanned based on its extension
func (s *Scanner) shouldScanFile(ext string) bool {
	scanableExtensions := map[string]bool{
		".go":   true,
		".py":   true,
		".js":   true,
		".ts":   true,
		".jsx":  true,
		".tsx":  true,
		".java": true,
		".rb":   true,
		".php":  true,
		".cs":   true,
		".cpp":  true,
		".c":    true,
		".h":    true,
		".rs":   true,
		".kt":   true,
		".swift": true,
		".sh":   true,
		".yml":  true,
		".yaml": true,
		".json": true,
		".xml":  true,
		".html": true,
		".css":  true,
		".scss": true,
		".less": true,
		".md":   true,
		".txt":  true,
	}
	return scanableExtensions[ext]
}

// scanFile scans a single file for pattern matches
func (s *Scanner) scanFile(filePath, rootPath string) error {
	file, err := os.Open(filePath)
	if err != nil {
		return nil // Skip files that can't be opened
	}
	defer file.Close()

	// Check context
	select {
	case <-s.ctx.Done():
		return s.ctx.Err()
	default:
	}

	scanner := bufio.NewScanner(file)
	lineNum := 0

	// Set max token size to handle very long lines (up to 10MB)
	buf := make([]byte, 0, 256*1024)
	scanner.Buffer(buf, 10*1024*1024)

	for scanner.Scan() {
		lineNum++
		line := scanner.Text()

		// Check against all patterns
		for _, patterns := range s.patterns {
			for _, pattern := range patterns {
				if pattern.compiled == nil {
					continue
				}

				// Check if file extension matches pattern
				ext := strings.ToLower(filepath.Ext(filePath))
				if !s.patternMatchesExtensions(pattern.Extensions, ext) {
					continue
				}

				// Check for matches
				if pattern.compiled.MatchString(line) {
					match := pattern.compiled.FindString(line)
					positions := pattern.compiled.FindStringIndex(line)

					finding := Finding{
						Type:        pattern.Type,
						Severity:    pattern.Severity,
						File:        strings.TrimPrefix(filePath, rootPath+"/"),
						Line:        lineNum,
						Column:      positions[0] + 1,
						Description: pattern.Description,
						Match:       match,
						Category:    pattern.Category,
						CWE:         pattern.CWE,
						OWASP:       pattern.OWASP,
					}

					s.mu.Lock()
					s.findings = append(s.findings, finding)
					s.mu.Unlock()
				}
			}
		}
	}

	return scanner.Err()
}

// patternMatchesExtensions checks if a pattern should apply to a file extension
func (s *Scanner) patternMatchesExtensions(extensions []string, fileExt string) bool {
	for _, ext := range extensions {
		if strings.ToLower(ext) == fileExt {
			return true
		}
	}
	return false
}

// GetFindings returns all findings from the scan
func (s *Scanner) GetFindings() []Finding {
	return s.findings
}

// GetFindingsByCategory returns findings grouped by category
func (s *Scanner) GetFindingsByCategory() map[string][]Finding {
	result := make(map[string][]Finding)

	for _, finding := range s.findings {
		result[finding.Category] = append(result[finding.Category], finding)
	}

	return result
}

// GetFindingsBySeverity returns findings grouped by severity
func (s *Scanner) GetFindingsBySeverity() map[string][]Finding {
	result := make(map[string][]Finding)

	for _, finding := range s.findings {
		result[finding.Severity] = append(result[finding.Severity], finding)
	}

	return result
}

// GetStatistics returns statistics about the scan
func (s *Scanner) GetStatistics() map[string]int {
	stats := make(map[string]int)

	for _, finding := range s.findings {
		stats[finding.Category]++
		stats[finding.Severity]++
		stats["total"]++
	}

	return stats
}