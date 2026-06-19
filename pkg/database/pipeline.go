package database

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"time"
)

// PipelineRun represents a pipeline execution record
type PipelineRun struct {
	ID                  string    `json:"id"`
	RunID               string    `json:"run_id"`
	RunTime             time.Time `json:"run_time"`
	RepositoriesScanned int       `json:"repositories_scanned"`
	NewFindings         int       `json:"new_findings"`
	UpdatedReports      int       `json:"updated_reports"`
	PatternSuggestions  int       `json:"pattern_suggestions"`
	TrendingDiscovered  int       `json:"trending_discovered"`
	BenchmarksRun       int       `json:"benchmarks_run"`
	Duration            float64   `json:"duration_seconds"`
	Success             bool      `json:"success"`
	Error               string    `json:"error,omitempty"`
	CreatedAt           time.Time `json:"created_at"`
}

// StorePipelineRun stores a pipeline run in the database
func (d *Database) StorePipelineRun(result interface{}) error {
	// Convert result to PipelineRun
	runData, err := json.Marshal(result)
	if err != nil {
		return fmt.Errorf("failed to marshal pipeline result: %w", err)
	}

	var resultMap map[string]interface{}
	err = json.Unmarshal(runData, &resultMap)
	if err != nil {
		return fmt.Errorf("failed to unmarshal pipeline result: %w", err)
	}

	run := &PipelineRun{
		RunID:               getStringValue(resultMap, "run_id"),
		RunTime:             getTimeValue(resultMap, "run_time"),
		RepositoriesScanned: getIntValue(resultMap, "repositories_scanned"),
		NewFindings:         getIntValue(resultMap, "new_findings"),
		UpdatedReports:      getIntValue(resultMap, "updated_reports"),
		PatternSuggestions:   getArrayLength(resultMap, "pattern_suggestions"),
		TrendingDiscovered:   getArrayLength(resultMap, "trending_discovered"),
		BenchmarksRun:        getIntValue(resultMap, "benchmarks_run"),
		Duration:            getFloatValue(resultMap, "duration"),
		Success:             getBoolValue(resultMap, "success"),
		Error:               getStringValue(resultMap, "error"),
		CreatedAt:           time.Now(),
	}

	query := `
		INSERT INTO pipeline_runs (run_id, run_time, repositories_scanned, new_findings,
			updated_reports, pattern_suggestions, trending_discovered, benchmarks_run,
			duration, success, error, created_at)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
		RETURNING id
	`

	err = d.db.QueryRow(
		query,
		run.RunID,
		run.RunTime,
		run.RepositoriesScanned,
		run.NewFindings,
		run.UpdatedReports,
		run.PatternSuggestions,
		run.TrendingDiscovered,
		run.BenchmarksRun,
		run.Duration,
		run.Success,
		run.Error,
		run.CreatedAt,
	).Scan(&run.ID)

	if err != nil {
		return fmt.Errorf("failed to store pipeline run: %w", err)
	}

	return nil
}

// GetPipelineRuns retrieves recent pipeline runs
func (d *Database) GetPipelineRuns(limit int) ([]*PipelineRun, error) {
	query := `
		SELECT id, run_id, run_time, repositories_scanned, new_findings, updated_reports,
			pattern_suggestions, trending_discovered, benchmarks_run, duration, success, error, created_at
		FROM pipeline_runs
		ORDER BY created_at DESC
		LIMIT $1
	`

	rows, err := d.db.Query(query, limit)
	if err != nil {
		return nil, fmt.Errorf("failed to get pipeline runs: %w", err)
	}
	defer rows.Close()

	var runs []*PipelineRun
	for rows.Next() {
		run := &PipelineRun{}
		err := rows.Scan(
			&run.ID,
			&run.RunID,
			&run.RunTime,
			&run.RepositoriesScanned,
			&run.NewFindings,
			&run.UpdatedReports,
			&run.PatternSuggestions,
			&run.TrendingDiscovered,
			&run.BenchmarksRun,
			&run.Duration,
			&run.Success,
			&run.Error,
			&run.CreatedAt,
		)
		if err != nil {
			return nil, fmt.Errorf("failed to scan pipeline run: %w", err)
		}
		runs = append(runs, run)
	}

	return runs, nil
}

// GetLatestPipelineRun gets the most recent pipeline run
func (d *Database) GetLatestPipelineRun() (*PipelineRun, error) {
	runs, err := d.GetPipelineRuns(1)
	if err != nil {
		return nil, err
	}

	if len(runs) == 0 {
		return nil, sql.ErrNoRows
	}

	return runs[0], nil
}

// Helper functions for extracting values from interface maps
func getStringValue(m map[string]interface{}, key string) string {
	if v, ok := m[key]; ok && v != nil {
		if s, ok := v.(string); ok {
			return s
		}
	}
	return ""
}

func getIntValue(m map[string]interface{}, key string) int {
	if v, ok := m[key]; ok && v != nil {
		switch val := v.(type) {
		case int:
			return val
		case float64:
			return int(val)
		}
	}
	return 0
}

func getFloatValue(m map[string]interface{}, key string) float64 {
	if v, ok := m[key]; ok && v != nil {
		switch val := v.(type) {
		case float64:
			return val
		case int:
			return float64(val)
		}
	}
	return 0.0
}

func getBoolValue(m map[string]interface{}, key string) bool {
	if v, ok := m[key]; ok && v != nil {
		if b, ok := v.(bool); ok {
			return b
		}
	}
	return false
}

func getTimeValue(m map[string]interface{}, key string) time.Time {
	if v, ok := m[key]; ok && v != nil {
		if s, ok := v.(string); ok {
			t, err := time.Parse(time.RFC3339, s)
			if err == nil {
				return t
			}
		}
	}
	return time.Time{}
}

func getArrayLength(m map[string]interface{}, key string) int {
	if v, ok := m[key]; ok && v != nil {
		if arr, ok := v.([]interface{}); ok {
			return len(arr)
		}
	}
	return 0
}