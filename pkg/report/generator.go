package report

import (
	"fmt"
	"strings"

	"github.com/aliasfoxkde/Atheon-GitHub-Scanner/pkg/patterns"
	"github.com/aliasfoxkde/Atheon-GitHub-Scanner/pkg/scanner"
)

// Generator represents the report generator
type Generator struct {
	outputDir string
}

// NewGenerator creates a new report generator
func NewGenerator(outputDir string) *Generator {
	return &Generator{
		outputDir: outputDir,
	}
}

// GenerateMarkdownReport generates a comprehensive markdown report
func (g *Generator) GenerateMarkdownReport(result *scanner.ScanResult) (string, error) {
	var builder strings.Builder

	// Header
	builder.WriteString(fmt.Sprintf("# Repository Analysis Report: %s\n\n", result.Repository.FullName))
	builder.WriteString(fmt.Sprintf("**Generated:** %s\n\n", result.ScanDate.Format("2006-01-02 15:04:05 MST")))
	builder.WriteString(fmt.Sprintf("**Quality Score:** %d/100 (Tier %s)\n\n", result.QualityScore, result.Tier))

	// Executive Summary
	builder.WriteString("## Executive Summary\n\n")
	g.writeExecutiveSummary(&builder, result)

	// Repository Overview
	builder.WriteString("## Repository Overview\n\n")
	g.writeRepositoryOverview(&builder, result)

	// Security Findings
	builder.WriteString("## Security Analysis\n\n")
	g.writeSecurityAnalysis(&builder, result)

	// Code Quality Analysis
	builder.WriteString("## Code Quality Analysis\n\n")
	g.writeCodeQualityAnalysis(&builder, result)

	// Detailed Findings
	builder.WriteString("## Detailed Findings\n\n")
	g.writeDetailedFindings(&builder, result)

	// Quality Metrics
	builder.WriteString("## Quality Metrics\n\n")
	g.writeQualityMetrics(&builder, result)

	// Recommendations
	builder.WriteString("## Recommendations\n\n")
	g.writeRecommendations(&builder, result)

	return builder.String(), nil
}

// writeExecutiveSummary writes the executive summary section
func (g *Generator) writeExecutiveSummary(builder *strings.Builder, result *scanner.ScanResult) {
	summary := result.Summary

	builder.WriteString(fmt.Sprintf("- **Overall Quality:** %s (%d/100)\n", result.Tier, result.QualityScore))
	builder.WriteString(fmt.Sprintf("- **Total Findings:** %d\n", summary.TotalFindings))
	builder.WriteString(fmt.Sprintf("- **Critical Issues:** %d\n", summary.CriticalFindings))
	builder.WriteString(fmt.Sprintf("- **High Issues:** %d\n", summary.HighFindings))
	builder.WriteString(fmt.Sprintf("- **Medium Issues:** %d\n", summary.MediumFindings))
	builder.WriteString(fmt.Sprintf("- **Low Issues:** %d\n", summary.LowFindings))
	builder.WriteString(fmt.Sprintf("- **Files Scanned:** %d\n\n", summary.FilesScanned))

	// Category breakdown
	builder.WriteString("### Findings by Category\n\n")
	builder.WriteString("| Category | Count | Severity |\n")
	builder.WriteString("|----------|-------|----------|\n")

	for category, count := range summary.Categories {
		severity := g.getCategorySeverity(category, result)
		builder.WriteString(fmt.Sprintf("| %s | %d | %s |\n", category, count, severity))
	}
	builder.WriteString("\n")
}

// writeRepositoryOverview writes the repository overview section
func (g *Generator) writeRepositoryOverview(builder *strings.Builder, result *scanner.ScanResult) {
	repo := result.Repository

	builder.WriteString(fmt.Sprintf("- **Owner:** %s\n", repo.Owner.Login))
	builder.WriteString(fmt.Sprintf("- **Name:** %s\n", repo.Name))
	builder.WriteString(fmt.Sprintf("- **Description:** %s\n", repo.Description))
	builder.WriteString(fmt.Sprintf("- **Primary Language:** %s\n", repo.Language))
	builder.WriteString(fmt.Sprintf("- **Stars:** %d\n", repo.Stars))
	builder.WriteString(fmt.Sprintf("- **Forks:** %d\n", repo.Forks))
	builder.WriteString(fmt.Sprintf("- **Open Issues:** %d\n", repo.OpenIssues))
	builder.WriteString(fmt.Sprintf("- **Size:** %d KB\n", repo.Size))
	builder.WriteString(fmt.Sprintf("- **Created:** %s\n", repo.CreatedAt.Format("2006-01-02")))
	builder.WriteString(fmt.Sprintf("- **Last Updated:** %s\n", repo.UpdatedAt.Format("2006-01-02")))
	builder.WriteString(fmt.Sprintf("- **Default Branch:** %s\n\n", repo.DefaultBranch))

	if len(repo.Topics) > 0 {
		builder.WriteString("**Topics:** ")
		for i, topic := range repo.Topics {
			if i > 0 {
				builder.WriteString(", ")
			}
			builder.WriteString(topic)
		}
		builder.WriteString("\n\n")
	}
}

// writeSecurityAnalysis writes the security analysis section
func (g *Generator) writeSecurityAnalysis(builder *strings.Builder, result *scanner.ScanResult) {
	securityFindings := g.filterByCategory(result.Findings, "security")
	secretFindings := g.filterByCategory(result.Findings, "secrets")

	if len(securityFindings) == 0 && len(secretFindings) == 0 {
		builder.WriteString("✅ **No critical security issues detected.**\n\n")
		return
	}

	builder.WriteString(fmt.Sprintf("⚠️ **Found %d security-related findings.**\n\n", len(securityFindings)+len(secretFindings)))

	// Severity breakdown
	critical := g.filterBySeverity(securityFindings, "critical")
	high := g.filterBySeverity(securityFindings, "high")

	if len(critical) > 0 {
		builder.WriteString(fmt.Sprintf("### 🚨 Critical Security Issues (%d)\n\n", len(critical)))
		g.writeFindingsTable(builder, critical)
	}

	if len(high) > 0 {
		builder.WriteString(fmt.Sprintf("### ⚠️ High Severity Issues (%d)\n\n", len(high)))
		g.writeFindingsTable(builder, high)
	}

	if len(secretFindings) > 0 {
		builder.WriteString(fmt.Sprintf("### 🔑 Secret/Credential Findings (%d)\n\n", len(secretFindings)))
		builder.WriteString("**WARNING:** The following potential secrets or credentials were detected:\n\n")
		g.writeFindingsTable(builder, secretFindings)
	}
}

// writeCodeQualityAnalysis writes the code quality analysis section
func (g *Generator) writeCodeQualityAnalysis(builder *strings.Builder, result *scanner.ScanResult) {
	qualityFindings := g.filterByCategory(result.Findings, "code_quality")
	maintenanceFindings := g.filterByCategory(result.Findings, "maintenance")

	metrics := result.Summary.CodeQualityMetrics

	builder.WriteString("### Code Quality Metrics\n\n")
	builder.WriteString("| Metric | Value | Assessment |\n")
	builder.WriteString("|--------|-------|------------|\n")
	builder.WriteString(fmt.Sprintf("| Test Coverage | %.1f%% | %s |\n", metrics.TestCoverage, g.assessTestCoverage(metrics.TestCoverage)))
	builder.WriteString(fmt.Sprintf("| Documentation | %.1f%% | %s |\n", metrics.DocumentationPct, g.assessDocumentation(metrics.DocumentationPct)))
	builder.WriteString(fmt.Sprintf("| Complexity Score | %.1f | %s |\n", metrics.ComplexityScore, g.assessComplexity(metrics.ComplexityScore)))
	builder.WriteString(fmt.Sprintf("| Maintainability Index | %.1f | %s |\n\n", metrics.MaintainabilityIndex, g.assessMaintainability(metrics.MaintainabilityIndex)))

	if len(qualityFindings) > 0 {
		builder.WriteString(fmt.Sprintf("### Code Quality Issues (%d)\n\n", len(qualityFindings)))
		g.writeFindingsTable(builder, qualityFindings)
	}

	if len(maintenanceFindings) > 0 {
		builder.WriteString(fmt.Sprintf("### Maintenance Items (%d)\n\n", len(maintenanceFindings)))
		g.writeFindingsTable(builder, maintenanceFindings)
	}
}

// writeDetailedFindings writes detailed findings section
func (g *Generator) writeDetailedFindings(builder *strings.Builder, result *scanner.ScanResult) {
	if len(result.Findings) == 0 {
		builder.WriteString("✅ **No findings detected.**\n\n")
		return
	}

	// Group findings by category
	categories := make(map[string][]patterns.Finding)
	for _, finding := range result.Findings {
		categories[finding.Category] = append(categories[finding.Category], finding)
	}

	for category, findings := range categories {
		builder.WriteString(fmt.Sprintf("### %s\n\n", strings.ToUpper(category)))
		builder.WriteString(fmt.Sprintf("**Total:** %d findings\n\n", len(findings)))

		// Show top 10 most severe
		topFindings := g.getTopFindings(findings, 10)
		g.writeFindingsTable(builder, topFindings)

		if len(findings) > 10 {
			builder.WriteString(fmt.Sprintf("*... and %d more*\n\n", len(findings)-10))
		}
	}
}

// writeQualityMetrics writes quality metrics section
func (g *Generator) writeQualityMetrics(builder *strings.Builder, result *scanner.ScanResult) {
	builder.WriteString("### Overall Quality Score Breakdown\n\n")
	builder.WriteString(fmt.Sprintf("**Final Score:** %d/100 (Tier %s)\n\n", result.QualityScore, result.Tier))

	builder.WriteString("| Component | Impact | Score |\n")
	builder.WriteString("|-----------|--------|-------|\n")
	builder.WriteString(fmt.Sprintf("| Security Issues | -%d | %s |\n",
		result.Summary.CriticalFindings*25 + result.Summary.HighFindings*15,
		g.getScoreComponent("security", result)))
	builder.WriteString(fmt.Sprintf("| Code Quality | -%d | %s |\n",
		result.Summary.MediumFindings*5 + result.Summary.LowFindings,
		g.getScoreComponent("quality", result)))
	builder.WriteString(fmt.Sprintf("| Test Coverage | +%d | Good |\n",
		int(result.Summary.CodeQualityMetrics.TestCoverage/10)))
	builder.WriteString(fmt.Sprintf("| Documentation | +%d | %s |\n",
		int(result.Summary.CodeQualityMetrics.DocumentationPct/2),
		g.assessDocumentation(result.Summary.CodeQualityMetrics.DocumentationPct)))

	builder.WriteString("\n")
}

// writeRecommendations writes recommendations section
func (g *Generator) writeRecommendations(builder *strings.Builder, result *scanner.ScanResult) {
	recommendations := g.generateRecommendations(result)

	if len(recommendations) == 0 {
		builder.WriteString("✅ **No critical recommendations at this time.**\n\n")
		return
	}

	for i, rec := range recommendations {
		builder.WriteString(fmt.Sprintf("%d. **%s**\n", i+1, rec.Title))
		builder.WriteString(fmt.Sprintf("   - Priority: %s\n", rec.Priority))
		builder.WriteString(fmt.Sprintf("   - %s\n\n", rec.Description))
	}
}

// Recommendation represents a recommendation
type Recommendation struct {
	Title       string
	Priority    string
	Description string
}

// generateRecommendations generates actionable recommendations
func (g *Generator) generateRecommendations(result *scanner.ScanResult) []Recommendation {
	var recommendations []Recommendation

	if result.Summary.CriticalFindings > 0 {
		recommendations = append(recommendations, Recommendation{
			Title:       "Address Critical Security Issues",
			Priority:    "CRITICAL",
			Description: fmt.Sprintf("Immediately fix %d critical security findings to prevent potential vulnerabilities.", result.Summary.CriticalFindings),
		})
	}

	if result.Summary.HighFindings > 5 {
		recommendations = append(recommendations, Recommendation{
			Title:       "Reduce High Severity Issues",
			Priority:    "HIGH",
			Description: fmt.Sprintf("Address %d high-severity issues to improve overall code quality.", result.Summary.HighFindings),
		})
	}

	if result.Summary.CodeQualityMetrics.TestCoverage < 50 {
		recommendations = append(recommendations, Recommendation{
			Title:       "Improve Test Coverage",
			Priority:    "MEDIUM",
			Description: fmt.Sprintf("Current test coverage is %.1f%%. Aim for at least 70%% coverage.", result.Summary.CodeQualityMetrics.TestCoverage),
		})
	}

	if result.Summary.CodeQualityMetrics.DocumentationPct < 5 {
		recommendations = append(recommendations, Recommendation{
			Title:       "Enhance Documentation",
			Priority:    "MEDIUM",
			Description: "Add comprehensive documentation including README, API docs, and code comments.",
		})
	}

	return recommendations
}

// Helper functions

func (g *Generator) filterByCategory(findings []patterns.Finding, category string) []patterns.Finding {
	var filtered []patterns.Finding
	for _, finding := range findings {
		if finding.Category == category {
			filtered = append(filtered, finding)
		}
	}
	return filtered
}

func (g *Generator) filterBySeverity(findings []patterns.Finding, severity string) []patterns.Finding {
	var filtered []patterns.Finding
	for _, finding := range findings {
		if finding.Severity == severity {
			filtered = append(filtered, finding)
		}
	}
	return filtered
}

func (g *Generator) getTopFindings(findings []patterns.Finding, limit int) []patterns.Finding {
	// Sort by severity priority
	severityPriority := map[string]int{
		"critical": 4,
		"high":     3,
		"medium":   2,
		"low":      1,
		"info":     0,
	}

	// Simple sort by severity
	sorted := make([]patterns.Finding, len(findings))
	copy(sorted, findings)

	// Basic bubble sort by severity priority
	for i := 0; i < len(sorted); i++ {
		for j := i + 1; j < len(sorted); j++ {
			if severityPriority[sorted[i].Severity] < severityPriority[sorted[j].Severity] {
				sorted[i], sorted[j] = sorted[j], sorted[i]
			}
		}
	}

	if len(sorted) > limit {
		sorted = sorted[:limit]
	}

	return sorted
}

func (g *Generator) writeFindingsTable(builder *strings.Builder, findings []patterns.Finding) {
	builder.WriteString("| File | Line | Severity | Description |\n")
	builder.WriteString("|------|------|----------|-------------|\n")

	for _, finding := range findings {
		severity := g.formatSeverity(finding.Severity)
		builder.WriteString(fmt.Sprintf("| %s | %d | %s | %s |\n",
			finding.File, finding.Line, severity, finding.Description))
	}
	builder.WriteString("\n")
}

func (g *Generator) formatSeverity(severity string) string {
	switch severity {
	case "critical":
		return "🔴 CRITICAL"
	case "high":
		return "🟠 HIGH"
	case "medium":
		return "🟡 MEDIUM"
	case "low":
		return "🟢 LOW"
	default:
		return "⚪ INFO"
	}
}

func (g *Generator) assessTestCoverage(coverage float64) string {
	if coverage >= 80 {
		return "Excellent ✅"
	} else if coverage >= 60 {
		return "Good ✅"
	} else if coverage >= 40 {
		return "Fair ⚠️"
	}
	return "Poor ❌"
}

func (g *Generator) assessDocumentation(docPct float64) string {
	if docPct >= 10 {
		return "Well documented ✅"
	} else if docPct >= 5 {
		return "Adequate ⚠️"
	}
	return "Needs improvement ❌"
}

func (g *Generator) assessComplexity(complexity float64) string {
	if complexity <= 30 {
		return "Low complexity ✅"
	} else if complexity <= 60 {
		return "Moderate complexity ⚠️"
	}
	return "High complexity ❌"
}

func (g *Generator) assessMaintainability(maintainability float64) string {
	if maintainability >= 80 {
		return "Highly maintainable ✅"
	} else if maintainability >= 60 {
		return "Maintainable ⚠️"
	}
	return "Difficult to maintain ❌"
}

func (g *Generator) getCategorySeverity(category string, result *scanner.ScanResult) string {
	findings := g.filterByCategory(result.Findings, category)
	for _, finding := range findings {
		if finding.Severity == "critical" || finding.Severity == "high" {
			return "High"
		}
	}
	return "Medium"
}

func (g *Generator) getScoreComponent(component string, result *scanner.ScanResult) string {
	switch component {
	case "security":
		if result.Summary.CriticalFindings > 0 {
			return "Poor ❌"
		} else if result.Summary.HighFindings > 2 {
			return "Fair ⚠️"
		}
		return "Good ✅"
	case "quality":
		if result.Summary.MediumFindings > 10 {
			return "Needs improvement ⚠️"
		}
		return "Good ✅"
	default:
		return "Unknown"
	}
}