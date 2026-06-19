#!/bin/bash

# Atheon GitHub Scanner - Background Automation Script
# This script runs automated scanning of repositories with proper rate limiting and scheduling

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
SCANNER="$PROJECT_ROOT/scanner"
LOG_FILE="$PROJECT_ROOT/logs/scanner.log"
REPORTS_DIR="$PROJECT_ROOT/reports"

# Create logs directory
mkdir -p "$PROJECT_ROOT/logs"

# Logging function
log() {
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"
}

# Configuration
GITHUB_TOKEN="${GITHUB_TOKEN:-}"
MAX_REPOS_PER_RUN=50
DELAY_BETWEEN_SCANS=60  # seconds between repository scans

# Check if scanner exists
if [ ! -f "$SCANNER" ]; then
    log "Scanner not found, building..."
    cd "$PROJECT_ROOT"
    go build -o "$SCANNER" cmd/scanner/main.go
fi

log "Starting automated background scan..."

# Get GitHub token from environment or config
if [ -z "$GITHUB_TOKEN" ] && [ -f "$PROJECT_ROOT/.env" ]; then
    source "$PROJECT_ROOT/.env"
fi

# Function to scan a category
scan_category() {
    local category=$1
    local limit=$2
    local output_dir="$REPORTS_DIR/$category"

    log "Scanning category: $category (limit: $limit)"

    # Create output directory
    mkdir -p "$output_dir"

    # Run scan
    if [ -n "$GITHUB_TOKEN" ]; then
        export GITHUB_TOKEN="$GITHUB_TOKEN"
    fi

    "$SCANNER" scan --popular --category="$category" --limit="$limit" --output="$output_dir" --continue 2>&1 | tee -a "$LOG_FILE"

    # Wait between categories
    log "Waiting ${DELAY_BETWEEN_SCANS}s before next category..."
    sleep $DELAY_BETWEEN_SCANS
}

# Function to scan trending repositories
scan_trending() {
    local languages=$1
    local limit=$2

    log "Scanning trending repositories: $languages"

    IFS=',' read -ra LANG_ARRAY <<< "$languages"
    for lang in "${LANG_ARRAY[@]}"; do
        lang=$(echo "$lang" | xargs)  # trim whitespace
        local output_dir="$REPORTS_DIR/trending/$lang"

        log "Scanning trending $lang repositories..."

        mkdir -p "$output_dir"

        if [ -n "$GITHUB_TOKEN" ]; then
            export GITHUB_TOKEN="$GITHUB_TOKEN"
        fi

        "$SCANNER" scan --trending --languages="$lang" --limit="$limit" --output="$output_dir" --continue 2>&1 | tee -a "$LOG_FILE"

        sleep $DELAY_BETWEEN_SCANS
    done
}

# Main automation logic
main() {
    local mode=${1:-"full"}

    case "$mode" in
        "quick")
            log "Running quick scan (top repositories)"
            scan_category "web-frameworks" 10
            scan_category "cli-tools" 10
            scan_category "ml-ai" 10
            ;;

        "trending")
            log "Running trending scan"
            scan_trending "javascript,python,go,rust,typescript" 20
            ;;

        "full")
            log "Running full scan (all categories)"

            # Scan all categories
            scan_category "web-frameworks" 20
            scan_category "cli-tools" 20
            scan_category "libraries" 20
            scan_category "databases" 15
            scan_category "testing" 15
            scan_category "devops" 10
            scan_category "ml-ai" 20
            scan_category "documentation" 10
            ;;

        "update")
            log "Running incremental update scan"
            scan_trending "javascript,python,go" 10
            ;;

        *)
            echo "Usage: $0 {quick|trending|full|update}"
            echo "  quick   - Scan top repositories from main categories"
            echo "  trending- Scan trending repositories"
            echo "  full   - Complete scan of all categories"
            echo "  update  - Incremental update scan"
            exit 1
            ;;
    esac

    log "Scan completed successfully"

    # Build report index
    log "Building report index..."
    "$SCRIPT_DIR/build-report-index.sh" 2>&1 | tee -a "$LOG_FILE"

    log "Background automation complete"
}

# Run main function
main "$@"