#!/bin/bash

# Atheon Cross-Repository Automation Deployment Script
# Sets up automated agents across all Atheon repositories

set -e

echo "🤖 Atheon Cross-Repository Automation Deployment"
echo "================================================"

# Configuration
REPOS=(
    "/nas/Temp/repos/Atheon-GitHub-Scanner"
    "/nas/Temp/repos/Atheon-Enhanced"
    "/nas/Temp/repos/Atheon-Benchmark"
)

AGENT_DIR="/nas/Temp/repos/Atheon-GitHub-Scanner/agents"
SERVICE_NAME="atheon-automation"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if all repositories exist
check_repos() {
    log_info "Checking repository structure..."

    for repo in "${REPOS[@]}"; do
        if [ -d "$repo" ]; then
            log_info "✅ Found: $repo"
        else
            log_error "❌ Missing: $repo"
            log_warn "Please clone the missing repository first"
            exit 1
        fi
    done
}

# Setup agent environment
setup_agents() {
    log_info "Setting up agent environment..."

    cd "$AGENT_DIR"

    # Create virtual environment
    if [ ! -d "venv" ]; then
        log_info "Creating Python virtual environment..."
        python3 -m venv venv
    fi

    # Install dependencies
    log_info "Installing agent dependencies..."
    source venv/bin/activate
    pip install --upgrade pip -q
    pip install -r requirements.txt -q

    log_info "✅ Agent environment ready"
}

# Create automation directories
create_directories() {
    log_info "Creating automation directories..."

    for repo in "${REPOS[@]}"; do
        mkdir -p "$repo/docs/automation"
        mkdir -p "$repo/docs/agents"
        mkdir -p "$repo/.automation"

        # Create .gitkeep files
        touch "$repo/docs/automation/.gitkeep"
        touch "$repo/docs/agents/.gitkeep"
        touch "$repo/.automation/.gitkeep"

        log_info "✅ Created directories in $repo"
    done
}

# Setup GitHub Actions workflows
setup_workflows() {
    log_info "Setting up GitHub Actions workflows..."

    # Create workflow directories
    for repo in "${REPOS[@]}"; do
        workflow_dir="$repo/.github/workflows"
        mkdir -p "$workflow_dir"

        # Create automation workflow
        cat > "$workflow_dir/automated-improvement.yml" << 'EOF'
name: Automated Improvement

on:
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM UTC
  workflow_dispatch:  # Allow manual triggering

jobs:
  automated-improvement:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
        with:
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'

      - name: Install dependencies
        run: |
          pip install -r requirements.txt

      - name: Run automated improvement
        run: |
          python agents/cross_repo_integrator.py

      - name: Commit improvements
        run: |
          git config --local user.email "automation@atheon.ai"
          git config --local user.name "Atheon Automation"
          git add .
          git diff --staged --quiet || git commit -m "feat: Automated improvements [skip ci]"
          git push
EOF

        log_info "✅ Created workflow in $repo"
    done
}

# Deploy daemon as system service
deploy_daemon() {
    log_info "Deploying daemon as system service..."

    # Copy systemd service file
    if [ "$EUID" -eq 0 ]; then
        cp "$AGENT_DIR/atheon-daemon.service" /etc/systemd/system/
        systemctl daemon-reload
        systemctl enable $SERVICE_NAME
        systemctl start $SERVICE_NAME

        log_info "✅ Daemon service deployed and started"
    else
        log_warn "Not running as root - cannot deploy system service"
        log_info "To deploy manually: sudo systemctl start $SERVICE_NAME"
    fi
}

# Create cron jobs for scheduled tasks
create_cron_jobs() {
    log_info "Creating cron jobs for scheduled automation..."

    # Create cron job for daily automation
    cat > /tmp/atheon_automation_cron << 'EOF'
# Atheon Automated Tasks
0 2 * * * cd /nas/Temp/repos/Atheon-GitHub-Scanner/agents && ./run_daily_cycle.sh >> /var/log/atheon_daily.log 2>&1
0 */6 * * * cd /nas/Temp/repos/Atheon-GitHub-Scanner/agents && ./run_improvement_cycle.sh >> /var/log/atheon_improvement.log 2>&1
0 3 * * * cd /nas/Temp/repos/Atheon-GitHub-Scanner/agents && python3 cross_repo_integrator.py >> /var/log/atheon_coordination.log 2>&1
EOF

    if [ "$EUID" -eq 0 ]; then
        crontab /tmp/atheon_automation_cron
        log_info "✅ Cron jobs installed"
    else
        log_warn "Not running as root - cron jobs not installed"
        log_info "To install manually: sudo crontab /tmp/atheon_automation_cron"
    fi
}

# Setup agent communication channels
setup_communication() {
    log_info "Setting up inter-agent communication..."

    # Create shared state directory
    mkdir -p /tmp/atheon_shared_state

    # Create communication files
    cat > /tmp/atheon_shared_state/communication.json << 'EOF'
{
  "agents": ["scanner", "enhancer", "benchmark"],
  "channels": {
    "pattern_updates": "pattern_updates.json",
    "improvement_requests": "improvement_requests.json",
    "coordination_results": "coordination_results.json"
  },
  "last_sync": null
}
EOF

    log_info "✅ Communication channels established"
}

# Create daily cycle script
create_daily_scripts() {
    log_info "Creating daily automation scripts..."

    # Daily cycle script
    cat > "$AGENT_DIR/run_daily_cycle.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")"
source venv/bin/activate
python3 daemon_runner.py --daily-cycle
EOF

    # Improvement cycle script
    cat > "$AGENT_DIR/run_improvement_cycle.sh" << 'EOF'
#!/bin/bash
cd "$(dirname "$0")"
source venv/bin/activate
python3 cross_repo_integrator.py
EOF

    chmod +x "$AGENT_DIR/run_daily_cycle.sh"
    chmod +x "$AGENT_DIR/run_improvement_cycle.sh"

    log_info "✅ Daily scripts created"
}

# Setup monitoring and logging
setup_monitoring() {
    log_info "Setting up monitoring and logging..."

    # Create log directory
    mkdir -p /var/log/atheon_automation

    # Create log rotation config
    cat > /etc/logrotate.d/atheon-automation << 'EOF'
/var/log/atheon_automation/*.log {
    daily
    rotate 7
    compress
    delaycompress
    missingok
    notifempty
    create 0640 root root
}
EOF

    log_info "✅ Monitoring setup complete"
}

# Create startup script
create_startup_script() {
    log_info "Creating startup script..."

    cat > "$AGENT_DIR/start_automation.sh" << 'EOF'
#!/bin/bash

# Atheon Automation Startup Script

echo "🤖 Starting Atheon Automation System..."

# Check if daemon is already running
if pgrep -f "daemon_runner.py" > /dev/null; then
    echo "⚠️  Daemon is already running"
    exit 0
fi

# Start daemon
cd "$(dirname "$0")"
source venv/bin/activate

# Start in background
nohup python3 daemon_runner.py > daemon_output.log 2>&1 &

echo "✅ Atheon Automation System started"
echo "📊 Monitor: tail -f daemon_output.log"
echo "🛑 Stop: pkill -f daemon_runner.py"
EOF

    chmod +x "$AGENT_DIR/start_automation.sh"

    log_info "✅ Startup script created"
}

# Run initial setup validation
validate_setup() {
    log_info "Validating setup..."

    # Check Python installation
    if command -v python3 &> /dev/null; then
        log_info "✅ Python 3 installed"
    else
        log_error "❌ Python 3 not found"
        exit 1
    fi

    # Check virtual environment
    if [ -d "$AGENT_DIR/venv" ]; then
        log_info "✅ Virtual environment created"
    else
        log_error "❌ Virtual environment missing"
        exit 1
    fi

    # Check agent files
    required_files=("daemon_runner.py" "cross_repo_integrator.py" "daemon_config.json")
    for file in "${required_files[@]}"; do
        if [ -f "$AGENT_DIR/$file" ]; then
            log_info "✅ Found: $file"
        else
            log_error "❌ Missing: $file"
            exit 1
        fi
    done

    log_info "✅ Setup validation complete"
}

# Display deployment summary
show_summary() {
    echo ""
    echo "🎉 Atheon Cross-Repository Automation Deployment Complete!"
    echo ""
    echo "📋 Deployment Summary:"
    echo "  • Repositories: ${#REPOS[@]} configured"
    echo "  • Agent System: Deployed to $AGENT_DIR"
    echo "  • Daemon Service: Installed and enabled"
    echo "  • Automation Workflows: Created in all repositories"
    echo "  • Scheduled Tasks: Configured via cron"
    echo ""
    echo "🚀 Quick Start:"
    echo "  • Start manually: $AGENT_DIR/start_automation.sh"
    echo "  • Check status: systemctl status $SERVICE_NAME"
    echo "  • View logs: tail -f /var/log/atheon_automation/*.log"
    echo ""
    echo "📊 Automation Schedule:"
    echo "  • Daily Scan: 2:00 AM UTC"
    echo "  • Improvement Cycle: Every 6 hours"
    echo "  • Coordination: 3:00 AM UTC"
    echo ""
    echo "🔧 Manual Control:"
    echo "  • Run daily cycle: $AGENT_DIR/run_daily_cycle.sh"
    echo "  • Run improvement: $AGENT_DIR/run_improvement_cycle.sh"
    echo "  • Stop automation: systemctl stop $SERVICE_NAME"
    echo ""
}

# Main deployment function
main() {
    log_info "Starting Atheon Cross-Repository Automation deployment..."

    check_repos
    setup_agents
    create_directories
    setup_workflows
    deploy_daemon
    create_cron_jobs
    setup_communication
    create_daily_scripts
    setup_monitoring
    create_startup_script
    validate_setup
    show_summary

    log_info "🎉 Deployment complete!"
}

# Run deployment
main "$@"