#!/bin/bash

# Atheon GitHub Scanner - Report Database Builder
# This script builds a comprehensive index of all scanned repositories

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
REPORTS_DIR="$PROJECT_ROOT/reports"
INDEX_FILE="$PROJECT_ROOT/docs/REPORT_INDEX.md"

echo "Building comprehensive report index..."

# Create header for index
cat > "$INDEX_FILE" << 'EOF'
# Atheon GitHub Scanner - Report Database

**Last Updated:** $(date -u +"%Y-%m-%d %H:%M:%S UTC")
**Total Reports:** $(find "$REPORTS_DIR" -name "*.md" -type f | wc -l)

## About This Database

This database contains comprehensive security and quality analysis reports for popular GitHub repositories across multiple categories. Each report includes:

- **Quality Score**: 0-100 score with tier assignment (A-F)
- **Security Analysis**: Critical, high, medium, and low severity findings
- **Code Quality Metrics**: Test coverage, documentation, complexity analysis
- **Detailed Findings**: Specific issues with file locations and recommendations

## Categories

EOF

# Array of categories
categories=("web-frameworks" "cli-tools" "ml-ai" "databases" "testing" "libraries" "devops" "documentation" "other")

# Process each category
for category in "${categories[@]}"; do
    category_dir="$REPORTS_DIR/$category"

    if [ ! -d "$category_dir" ]; then
        continue
    fi

    echo "Processing category: $category"

    # Add category section to index
    echo "### $category" >> "$INDEX_FILE"
    echo "" >> "$INDEX_FILE"

    # Create table header
    echo "| Repository | Stars | Quality | Tier | Findings | Critical | High | Report |" >> "$INDEX_FILE"
    echo "|-----------|-------|---------|------|----------|----------|------|--------|" >> "$INDEX_FILE"

    # Process each report in category
    for report_file in "$category_dir"/*.md; do
        if [ ! -f "$report_file" ]; then
            continue
        fi

        # Extract metadata from report
        repo_name=$(basename "$report_file" .md | sed 's/_/\//g')

        # Try to extract quality score
        quality_score=$(grep -oP '\*\*Quality Score:\*\* \K[0-9]+' "$report_file" || echo "N/A")
        tier=$(grep -oP '\*\*Quality Score:\*\* [0-9]+/100 (Tier \K[ABCDF]' "$report_file" || echo "N/A")
        total_findings=$(grep -oP '\*\*Total Findings:\*\* \K[0-9]+' "$report_file" || echo "0")
        critical_findings=$(grep -oP '\*\*Critical Issues:\*\* \K[0-9]+' "$report_file" || echo "0")
        high_findings=$(grep -oP '\*\*High Issues:\*\* \K[0-9]+' "$report_file" || echo "0")
        stars=$(grep -oP '\*\*Stars:\*\* \K[0-9]+' "$report_file" || echo "N/A")

        # Create relative link to report
        relative_link="${report_file#$PROJECT_ROOT/}"

        # Add table row
        echo "| [$repo_name](../$relative_link) | $stars | $quality_score | $tier | $total_findings | $critical_findings | $high_findings | [View](../$relative_link) |" >> "$INDEX_FILE"
    done

    echo "" >> "$INDEX_FILE"
    echo "" >> "$INDEX_FILE"
done

# Add statistics section
cat >> "$INDEX_FILE" << 'EOF'

## Overall Statistics

### Quality Distribution
- **Tier A (90-100)**: Excellent quality repositories
- **Tier B (75-89)**: Good quality with minor issues
- **Tier C (60-74)**: Acceptable quality with moderate issues
- **Tier D (40-59)**: Below average quality
- **Tier F (0-39)**: Poor quality requiring significant improvement

### Finding Categories
- **Security**: Vulnerabilities, secrets, credentials, API keys
- **Code Quality**: Technical debt, code smells, anti-patterns
- **Maintenance**: TODOs, FIXMEs, known issues
- **Best Practices**: Language-specific pattern adherence

### Methodology

Each repository is scanned using the Atheon pattern matching engine with comprehensive security and quality analysis:

1. **Repository Discovery**: Popular repositories by category and star count
2. **Code Analysis**: Pattern matching for security vulnerabilities and code quality issues
3. **Quality Metrics**: Test coverage, documentation, complexity assessment
4. **Scoring**: Intelligent scoring algorithm with severity weighting
5. **Report Generation**: Comprehensive markdown reports with actionable recommendations

### About Atheon

This scanner uses patterns and concepts from the [Atheon](https://github.com/HoraDomu/Atheon) project by HoraDomu.

---

**Database Version**: 1.0.0
**Scanner Version**: 0.1.0-alpha
**Last Scan**: $(date -u +"%Y-%m-%d")

For the latest updates and to contribute, visit [Atheon-GitHub-Scanner](https://github.com/aliasfoxkde/Atheon-GitHub-Scanner).
EOF

echo "Report index built successfully: $INDEX_FILE"

# Generate statistics
echo ""
echo "Database Statistics:"
echo "===================="

total_reports=$(find "$REPORTS_DIR" -name "*.md" -type f | wc -l)
echo "Total Reports: $total_reports"

# Count by tier
tier_a=$(grep -r "Tier A" "$REPORTS_DIR" --include="*.md" | wc -l)
tier_b=$(grep -r "Tier B" "$REPORTS_DIR" --include="*.md" | wc -l)
tier_c=$(grep -r "Tier C" "$REPORTS_DIR" --include="*.md" | wc -l)
tier_d=$(grep -r "Tier D" "$REPORTS_DIR" --include="*.md" | wc -l)
tier_f=$(grep -r "Tier F" "$REPORTS_DIR" --include="*.md" | wc -l)

echo "Quality Distribution:"
echo "  Tier A: $tier_a"
echo "  Tier B: $tier_b"
echo "  Tier C: $tier_c"
echo "  Tier D: $tier_d"
echo "  Tier F: $tier_f"

# Count critical findings
total_critical=$(grep -r "Critical Issues.*[1-9]" "$REPORTS_DIR" --include="*.md" | wc -l)
total_high=$(grep -r "High Issues.*[1-9]" "$REPORTS_DIR" --include="*.md" | wc -l)

echo "Security Findings:"
echo "  Critical: $total_critical"
echo "  High: $total_high"