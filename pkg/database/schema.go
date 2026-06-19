package database

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"time"

	_ "github.com/lib/pq"
)

// Database represents the database connection
type Database struct {
	db *sql.DB
}

// NewDatabase creates a new database connection
func NewDatabase(connection string) (*Database, error) {
	db, err := sql.Open("postgres", connection)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	if err := db.Ping(); err != nil {
		return nil, fmt.Errorf("failed to ping database: %w", err)
	}

	database := &Database{db: db}

	// Initialize schema
	if err := database.InitSchema(); err != nil {
		return nil, fmt.Errorf("failed to initialize schema: %w", err)
	}

	return database, nil
}

// InitSchema creates the database schema if it doesn't exist
func (d *Database) InitSchema() error {
	schema := `
	-- Users table
	CREATE TABLE IF NOT EXISTS users (
		id TEXT PRIMARY KEY,
		github_id TEXT UNIQUE,
		username TEXT,
		email TEXT,
		avatar_url TEXT,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		last_login TIMESTAMP
	);

	-- Repositories table
	CREATE TABLE IF NOT EXISTS repositories (
		id TEXT PRIMARY KEY,
		owner TEXT NOT NULL,
		name TEXT NOT NULL,
		full_name TEXT UNIQUE NOT NULL,
		description TEXT,
		language TEXT,
		stars INTEGER,
		forks INTEGER,
		open_issues INTEGER,
		created_at TIMESTAMP,
		updated_at TIMESTAMP,
		last_scanned TIMESTAMP,
		DEFAULT_BRANCH TEXT,
		topics JSONB,
		license JSONB
	);

	-- Analyses table
	CREATE TABLE IF NOT EXISTS analyses (
		id TEXT PRIMARY KEY,
		repo_id TEXT REFERENCES repositories(id),
		user_id TEXT REFERENCES users(id),
		quality_score INTEGER,
		tier TEXT,
		total_findings INTEGER,
		critical_findings INTEGER,
		high_findings INTEGER,
		medium_findings INTEGER,
		low_findings INTEGER,
		scan_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		scan_duration_seconds REAL,
		status TEXT
	);

	-- Findings table
	CREATE TABLE IF NOT EXISTS findings (
		id TEXT PRIMARY KEY,
		analysis_id TEXT REFERENCES analyses(id),
		type TEXT,
		severity TEXT,
		category TEXT,
		file_path TEXT,
		line_number INTEGER,
		column_number INTEGER,
		description TEXT,
		match_text TEXT,
		cwe TEXT,
		owasp TEXT,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);

	-- Code quality metrics table
	CREATE TABLE IF NOT EXISTS code_quality_metrics (
		id TEXT PRIMARY KEY,
		analysis_id TEXT REFERENCES analyses(id),
		test_coverage REAL,
		documentation_percentage REAL,
		complexity_score REAL,
		technical_debt INTEGER,
		maintainability_index REAL,
		files_scanned INTEGER,
		languages_detected JSONB
	);

	-- Categories and tags
	CREATE TABLE IF NOT EXISTS repository_categories (
		repo_id TEXT REFERENCES repositories(id),
		category TEXT,
		tag TEXT,
		PRIMARY KEY (repo_id, category, tag)
	);

	-- Historical tracking
	CREATE TABLE IF NOT EXISTS quality_history (
		id TEXT PRIMARY KEY,
		repo_id TEXT REFERENCES repositories(id),
		analysis_id TEXT REFERENCES analyses(id),
		quality_score INTEGER,
		tier TEXT,
		total_findings INTEGER,
		recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);

	-- Indexes for performance
	CREATE INDEX IF NOT EXISTS idx_repos_full_name ON repositories(full_name);
	CREATE INDEX IF NOT EXISTS idx_repos_language ON repositories(language);
	CREATE INDEX IF NOT EXISTS idx_repos_stars ON repositories(stars);
	CREATE INDEX IF NOT EXISTS idx_analyses_repo_id ON analyses(repo_id);
	CREATE INDEX IF NOT EXISTS idx_analyses_scan_date ON analyses(scan_date);
	CREATE INDEX IF NOT EXISTS idx_findings_analysis_id ON findings(analysis_id);
	CREATE INDEX IF NOT EXISTS idx_findings_severity ON findings(severity);
	CREATE INDEX IF NOT EXISTS idx_findings_category ON findings(category);
	CREATE INDEX IF NOT EXISTS idx_quality_history_repo_id ON quality_history(repo_id);
	CREATE INDEX IF NOT EXISTS idx_quality_history_recorded_at ON quality_history(recorded_at);
	`

	_, err := d.db.Exec(schema)
	if err != nil {
		return fmt.Errorf("failed to execute schema: %w", err)
	}

	return nil
}

// StoreRepository stores or updates a repository in the database
func (d *Database) StoreRepository(repo Repository) error {
	query := `
	INSERT INTO repositories (
		id, owner, name, full_name, description, language, stars, forks,
		open_issues, created_at, updated_at, default_branch, topics, license
	) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
	ON CONFLICT (full_name) DO UPDATE SET
		description = EXCLUDED.description,
		language = EXCLUDED.language,
		stars = EXCLUDED.stars,
		forks = EXCLUDED.forks,
		open_issues = EXCLUDED.open_issues,
		updated_at = EXCLUDED.updated_at,
		last_scanned = CURRENT_TIMESTAMP
	`

	topicsJSON, _ := json.Marshal(repo.Topics)
	licenseJSON, _ := json.Marshal(repo.License)

	_, err := d.db.Exec(query,
		repo.ID, repo.Owner, repo.Name, repo.FullName, repo.Description,
		repo.Language, repo.Stars, repo.Forks, repo.OpenIssues,
		repo.CreatedAt, repo.UpdatedAt, repo.DefaultBranch,
		topicsJSON, licenseJSON,
	)

	return err
}

// StoreAnalysis stores analysis results in the database
func (d *Database) StoreAnalysis(analysis Analysis) error {
	tx, err := d.db.Begin()
	if err != nil {
		return err
	}

	defer tx.Rollback()

	// Store main analysis record
	analysisQuery := `
	INSERT INTO analyses (
		id, repo_id, quality_score, tier, total_findings,
		critical_findings, high_findings, medium_findings, low_findings,
		scan_duration_seconds, status
	) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
	`

	_, err = tx.Exec(analysisQuery,
		analysis.ID, analysis.RepoID, analysis.QualityScore, analysis.Tier,
		analysis.TotalFindings, analysis.CriticalFindings, analysis.HighFindings,
		analysis.MediumFindings, analysis.LowFindings, analysis.ScanDurationSeconds,
		analysis.Status,
	)

	if err != nil {
		return fmt.Errorf("failed to store analysis: %w", err)
	}

	// Store findings
	for _, finding := range analysis.Findings {
		findingQuery := `
		INSERT INTO findings (
			id, analysis_id, type, severity, category, file_path,
			line_number, column_number, description, match_text, cwe, owasp
		) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
		`

		_, err = tx.Exec(findingQuery,
			finding.ID, analysis.ID, finding.Type, finding.Severity, finding.Category,
			finding.FilePath, finding.LineNumber, finding.ColumnNumber, finding.Description,
			finding.MatchText, finding.CWE, finding.OWASP,
		)

		if err != nil {
			return fmt.Errorf("failed to store finding: %w", err)
		}
	}

	// Store quality metrics
	metricsQuery := `
	INSERT INTO code_quality_metrics (
		id, analysis_id, test_coverage, documentation_percentage,
		complexity_score, technical_debt, maintainability_index, files_scanned, languages_detected
	) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
	`

	languagesJSON, _ := json.Marshal(analysis.QualityMetrics.LanguagesDetected)
	_, err = tx.Exec(metricsQuery,
		analysis.QualityMetrics.ID, analysis.ID, analysis.QualityMetrics.TestCoverage,
		analysis.QualityMetrics.DocumentationPercentage, analysis.QualityMetrics.ComplexityScore,
		analysis.QualityMetrics.TechnicalDebt, analysis.QualityMetrics.MaintainabilityIndex,
		analysis.QualityMetrics.FilesScanned, languagesJSON,
	)

	if err != nil {
		return fmt.Errorf("failed to store quality metrics: %w", err)
	}

	// Record quality history
	historyQuery := `
	INSERT INTO quality_history (
		id, repo_id, analysis_id, quality_score, tier, total_findings
	) VALUES ($1, $2, $3, $4, $5, $6)
	`

	_, err = tx.Exec(historyQuery,
		analysis.ID, analysis.RepoID, analysis.ID, analysis.QualityScore,
		analysis.Tier, analysis.TotalFindings,
	)

	if err != nil {
		return fmt.Errorf("failed to store quality history: %w", err)
	}

	return tx.Commit()
}

// GetRepositoryByName retrieves a repository by full name
func (d *Database) GetRepositoryByName(fullName string) (*Repository, error) {
	var repo Repository

	query := `
	SELECT id, owner, name, full_name, description, language, stars, forks,
	       open_issues, created_at, updated_at, default_branch, topics, license
	FROM repositories
	WHERE full_name = $1
	`

	err := d.db.QueryRow(query, fullName).Scan(
		&repo.ID, &repo.Owner, &repo.Name, &repo.FullName, &repo.Description,
		&repo.Language, &repo.Stars, &repo.Forks, &repo.OpenIssues,
		&repo.CreatedAt, &repo.UpdatedAt, &repo.DefaultBranch,
		&repo.TopicsJSON, &repo.LicenseJSON,
	)

	if err == sql.ErrNoRows {
		return nil, nil
	}

	if err != nil {
		return nil, err
	}

	// Parse JSON fields
	json.Unmarshal(repo.TopicsJSON, &repo.Topics)
	json.Unmarshal(repo.LicenseJSON, &repo.License)

	return &repo, nil
}

// GetAnalysesByRepository retrieves all analyses for a repository
func (d *Database) GetAnalysesByRepository(repoID string, limit int) ([]Analysis, error) {
	query := `
	SELECT id, repo_id, quality_score, tier, total_findings,
	       critical_findings, high_findings, medium_findings, low_findings,
	       scan_date, scan_duration_seconds, status
	FROM analyses
	WHERE repo_id = $1
	ORDER BY scan_date DESC
	LIMIT $2
	`

	rows, err := d.db.Query(query, repoID, limit)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var analyses []Analysis
	for rows.Next() {
		var analysis Analysis
		err := rows.Scan(
			&analysis.ID, &analysis.RepoID, &analysis.QualityScore, &analysis.Tier,
			&analysis.TotalFindings, &analysis.CriticalFindings, &analysis.HighFindings,
			&analysis.MediumFindings, &analysis.LowFindings, &analysis.ScanDate,
			&analysis.ScanDurationSeconds, &analysis.Status,
		)

		if err != nil {
			return nil, err
		}

		analyses = append(analyses, analysis)
	}

	return analyses, nil
}

// SearchRepositories searches repositories with filters
func (d *Database) SearchRepositories(filters SearchFilters) ([]Repository, error) {
	query := `SELECT id, owner, name, full_name, description, language, stars FROM repositories WHERE 1=1`
	args := []interface{}{}
	argCount := 1

	if filters.Language != "" {
		query += fmt.Sprintf(" AND language = $%d", argCount)
		args = append(args, filters.Language)
		argCount++
	}

	if filters.MinStars > 0 {
		query += fmt.Sprintf(" AND stars >= $%d", argCount)
		args = append(args, filters.MinStars)
		argCount++
	}

	if filters.Category != "" {
		query += fmt.Sprintf(" AND id IN (SELECT repo_id FROM repository_categories WHERE category = $%d)", argCount)
		args = append(args, filters.Category)
		argCount++
	}

	query += " ORDER BY stars DESC"

	if filters.Limit > 0 {
		query += fmt.Sprintf(" LIMIT $%d", argCount)
		args = append(args, filters.Limit)
		argCount++
	}

	rows, err := d.db.Query(query, args...)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var repos []Repository
	for rows.Next() {
		var repo Repository
		err := rows.Scan(&repo.ID, &repo.Owner, &repo.Name, &repo.FullName,
			&repo.Description, &repo.Language, &repo.Stars)

		if err != nil {
			return nil, err
		}

		repos = append(repos, repo)
	}

	return repos, nil
}

// GetQualityTrends retrieves quality trends for a repository
func (d *Database) GetQualityTrends(repoID string, days int) ([]QualityHistory, error) {
	query := `
	SELECT quality_score, tier, total_findings, recorded_at
	FROM quality_history
	WHERE repo_id = $1 AND recorded_at > CURRENT_TIMESTAMP - INTERVAL '1 day' * $2
	ORDER BY recorded_at ASC
	`

	rows, err := d.db.Query(query, repoID, days)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var history []QualityHistory
	for rows.Next() {
		var h QualityHistory
		err := rows.Scan(&h.QualityScore, &h.Tier, &h.TotalFindings, &h.RecordedAt)
		if err != nil {
			return nil, err
		}
		history = append(history, h)
	}

	return history, nil
}

// Close closes the database connection
func (d *Database) Close() error {
	return d.db.Close()
}

// Data types
type Repository struct {
	ID            string
	Owner         string
	Name          string
	FullName      string
	Description   string
	Language      string
	Stars         int
	Forks         int
	OpenIssues    int
	CreatedAt     time.Time
	UpdatedAt     time.Time
	DefaultBranch string
	Topics        []string
	License       *License
	TopicsJSON    []byte
	LicenseJSON   []byte
}

type License struct {
	Key    string
	Name   string
	SPDXID string
	URL    string
}

type Analysis struct {
	ID                  string
	RepoID              string
	QualityScore        int
	Tier                string
	TotalFindings       int
	CriticalFindings    int
	HighFindings        int
	MediumFindings      int
	LowFindings         int
	ScanDate            time.Time
	ScanDurationSeconds float64
	Status              string
	Findings            []Finding
	QualityMetrics      QualityMetrics
}

type Finding struct {
	ID           string
	Type         string
	Severity     string
	Category     string
	FilePath     string
	LineNumber   int
	ColumnNumber int
	Description  string
	MatchText    string
	CWE          string
	OWASP        string
}

type QualityMetrics struct {
	ID                      string
	TestCoverage            float64
	DocumentationPercentage float64
	ComplexityScore         float64
	TechnicalDebt           int
	MaintainabilityIndex    float64
	FilesScanned            int
	LanguagesDetected       []string
}

type QualityHistory struct {
	QualityScore  int
	Tier          string
	TotalFindings int
	RecordedAt    time.Time
}

type SearchFilters struct {
	Language string
	MinStars int
	Category string
	Limit    int
}
