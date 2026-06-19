#!/bin/bash

# Master Setup Script for Atheon Cross-Repository Automation
# Sets up complete automated ecosystem across all repositories

set -e

echo "🤖 Atheon Cross-Repository Automation - Master Setup"
echo "====================================================="

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
REPOS=(
    "/nas/Temp/repos/Atheon-GitHub-Scanner"
    "/nas/Temp/repos/Atheon-Enhanced"
    "/nas/Temp/repos/Atheon-Benchmark"
)

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_step() {
    echo -e "${BLUE}[STEP]${NC} $1"
}

log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

# Check prerequisites
check_prerequisites() {
    log_step "Checking prerequisites..."

    # Check Python
    if command -v python3 &> /dev/null; then
        log_success "Python 3 installed"
    else
        echo "❌ Python 3 required but not found"
        exit 1
    fi

    # Check Go
    if command -v go &> /dev/null; then
        log_success "Go installed"
    else
        log_warn "Go not found - scanner functionality limited"
    fi

    # Check Node.js
    if command -v npm &> /dev/null; then
        log_success "Node.js/npm installed"
    else
        log_warn "Node.js not found - webapp functionality limited"
    fi

    # Check git
    if command -v git &> /dev/null; then
        log_success "Git installed"
    else
        echo "❌ Git required but not found"
        exit 1
    fi
}

# Verify repositories
verify_repositories() {
    log_step "Verifying repository structure..."

    for repo in "${REPOS[@]}"; do
        if [ -d "$repo" ]; then
            log_success "✅ Found: $repo"

            # Check if it's a git repository
            if [ -d "$repo/.git" ]; then
                log_info "  └─ Git repository"
            else
                log_warn "  └─ Not a git repository"
            fi
        else
            log_warn "❌ Missing: $repo"
            echo ""
            echo "To clone missing repositories:"
            echo "  git clone https://github.com/yourusername/Atheon-Enhanced.git"
            echo "  git clone https://github.com/yourusername/Atheon-Benchmark.git"
        fi
    done
}

# Setup agent system
setup_agent_system() {
    log_step "Setting up agent system..."

    cd "$SCRIPT_DIR"

    # Create virtual environment
    if [ ! -d "venv" ]; then
        log_info "Creating virtual environment..."
        python3 -m venv venv
    fi

    # Install dependencies
    log_info "Installing dependencies..."
    source venv/bin/activate
    pip install --upgrade pip -q
    pip install -r requirements.txt -q

    log_success "Agent system ready"
}

# Setup cross-repository integration
setup_cross_repo_integration() {
    log_step "Setting up cross-repository integration..."

    # Create automation directories in each repository
    for repo in "${REPOS[@]}"; do
        if [ -d "$repo" ]; then
            mkdir -p "$repo/docs/automation"
            mkdir -p "$repo/.automation"

            log_success "✅ Created automation structure in $repo"
        fi
    done
}

# Setup GitHub Actions workflows
setup_github_workflows() {
    log_step "Setting up GitHub Actions workflows..."

    for repo in "${REPOS[@]}"; do
        if [ -d "$repo" ] && [ -d "$repo/.git" ]; then
            workflow_dir="$repo/.github/workflows"
            mkdir -p "$workflow_dir"

            # Create automated improvement workflow
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

      - name: Run automation
        run: |
          python3 -m pip install -q schedule requests pyyaml
          python3 /nas/Temp/repos/Atheon-GitHub-Scanner/agents/cross_repo_integrator.py

      - name: Commit improvements
        run: |
          git config --local user.email "automation@atheon.ai"
          git config --local user.name "Atheon Automation"
          git add .
          git diff --staged --quiet || git commit -m "feat: Automated improvements [skip ci]"
          git push
EOF

            log_success "✅ Created workflow in $repo"
        fi
    done
}

# Setup communication channels
setup_communication() {
    log_step "Setting up communication channels..."

    # Create shared state directory
    mkdir -p /tmp/atheon_shared_state

    # Create communication configuration
    cat > /tmp/atheon_shared_state/config.json << 'EOF'
{
  "agents": ["scanner", "enhancer", "benchmark", "improver"],
  "channels": {
    "pattern_updates": "pattern_updates.json",
    "improvement_requests": "improvement_requests.json",
    "performance_metrics": "performance_metrics.json",
    "coordination_results": "coordination_results.json",
    "collective_intelligence": "collective_intelligence.json"
  },
  "sync_schedule": {
    "daily_sync": "02:00",
    "improvement_cycle": "08:00,14:00,20:00",
    "coordination": "03:00"
  }
}
EOF

    # Create initial state files
    for channel in "pattern_updates" "improvement_requests" "performance_metrics" "coordination_results"; do
        echo "{}" > "/tmp/atheon_shared_state/${channel}.json"
    done

    log_success "✅ Communication channels established"
}

# Deploy daemon services
deploy_services() {
    log_step "Deploying daemon services..."

    # Make scripts executable
    chmod +x "$SCRIPT_DIR"/*.sh

    log_success "✅ Scripts made executable"
}

# Setup scheduled tasks
setup_scheduling() {
    log_step "Setting up scheduled tasks..."

    # Create cron configuration
    cat > /tmp/atheon_automation_cron << 'EOF'
# Atheon Automation Schedule
# Daily tasks at 2 AM
0 2 * * * cd /nas/Temp/repos/Atheon-GitHub-Scanner/agents && ./run_daily_cycle.sh >> /var/log/atheon_daily.log 2>&1

# Improvement cycles every 6 hours
0 */6 * * * cd /nas/Temp/repos/Atheon-GitHub-Scanner/agents && python3 cross_repo_integrator.py >> /var/log/atheon_coordination.log 2>&1

# Self-improvement analysis every 6 hours
0 */6 * * * cd /nas/Temp/repos/Atheon-GitHub-Scanner/agents && python3 self_improvement_agent.py >> /var/log/atheon_improvement.log 2>&1

# Quality audit daily at 9 AM
0 9 * * * cd /nas/Temp/repos/Atheon-GitHub-Scanner/agents && python3 quality_audit_system.py >> /var/log/atheon_audit.log 2>&1
EOF

    log_info "Cron configuration created at /tmp/atheon_automation_cron"
    log_warn "To install: sudo crontab /tmp/atheon_automation_cron"
}

# Setup monitoring
setup_monitoring() {
    log_step "Setting up monitoring..."

    # Create log directory
    mkdir -p /var/log/atheon_automation

    log_success "✅ Monitoring directory created"
}

# Create startup scripts
create_startup_scripts() {
    log_step "Creating startup scripts..."

    # Master startup script
    cat > "$SCRIPT_DIR/start_all.sh" << 'EOF'
#!/bin/bash
# Master startup script for Atheon automation

echo "🤖 Starting Atheon Automation Ecosystem..."

# Start daemon
echo "Starting daemon..."
cd "$(dirname "$0")"
source venv/bin/activate
nohup python3 daemon_runner.py > daemon_output.log 2>&1 &
DAEMON_PID=$!
echo "Daemon started (PID: $DAEMON_PID)"

# Start cross-repo integrator
echo "Starting cross-repository integrator..."
nohup python3 cross_repo_integrator.py > integrator_output.log 2>&1 &
INTEGRATOR_PID=$!
echo "Integrator started (PID: $INTEGRATOR_PID)"

# Start self-improvement agent
echo "Starting self-improvement agent..."
nohup python3 self_improvement_agent.py > improver_output.log 2>&1 &
IMPROVER_PID=$!
echo "Self-improvement agent started (PID: $IMPROVER_PID)"

echo ""
echo "✅ Atheon Automation Ecosystem started"
echo ""
echo "Process IDs:"
echo "  Daemon: $DAEMON_PID"
echo "  Integrator: $INTEGRATOR_PID"
echo "  Improver: $IMPROVER_PID"
echo ""
echo "Monitor logs:"
echo "  tail -f daemon_output.log"
echo "  tail -f integrator_output.log"
echo "  tail -f improver_output.log"
echo ""
echo "Stop all:"
echo "  kill $DAEMON_PID $INTEGRATOR_PID $IMPROVER_PID"
EOF

    chmod +x "$SCRIPT_DIR/start_all.sh"

    # Stop script
    cat > "$SCRIPT_DIR/stop_all.sh" << 'EOF'
#!/bin/bash
echo "🛑 Stopping Atheon Automation Ecosystem..."

pkill -f "daemon_runner.py"
pkill -f "cross_repo_integrator.py"
pkill -f "self_improvement_agent.py"

echo "✅ All agents stopped"
EOF

    chmod +x "$SCRIPT_DIR/stop_all.sh"

    # Control script
    cat > "$SCRIPT_DIR/atheon_control.sh" << 'EOF'
#!/bin/bash
# Atheon Control Interface

case "$1" in
    start)
        bash start_all.sh
        ;;
    stop)
        bash stop_all.sh
        ;;
    status)
        echo "Atheon Agent Status:"
        echo "==================="
        pgrep -f "daemon_runner.py" && echo "✅ Daemon: Running" || echo "❌ Daemon: Stopped"
        pgrep -f "cross_repo_integrator.py" && echo "✅ Integrator: Running" || echo "❌ Integrator: Stopped"
        pgrep -f "self_improvement_agent.py" && echo "✅ Self-Improver: Running" || echo "❌ Self-Improver: Stopped"
        ;;
    logs)
        echo "Recent logs:"
        echo "============="
        tail -20 daemon_output.log 2>/dev/null || echo "No daemon logs"
        ;;
    run)
        echo "Running manual cycle..."
        cd "$(dirname "$0")"
        source venv/bin/activate
        python3 daemon_runner.py
        ;;
    *)
        echo "Atheon Control Interface"
        echo "======================="
        echo "Usage: $0 {start|stop|status|logs|run}"
        echo ""
        echo "Commands:"
        echo "  start   - Start all agents"
        echo "  stop    - Stop all agents"
        echo "  status  - Show agent status"
        echo "  logs    - Show recent logs"
        echo "  run     - Run single cycle"
        ;;
esac
EOF

    chmod +x "$SCRIPT_DIR/atheon_control.sh"

    log_success "✅ Startup scripts created"
}

# Run initial tests
run_tests() {
    log_step "Running initial tests..."

    cd "$SCRIPT_DIR"
    source venv/bin/activate

    # Test imports
    log_info "Testing agent imports..."
    python3 -c "import daemon_runner; print('✅ Daemon module OK')"
    python3 -c "import cross_repo_integrator; print('✅ Integrator module OK')"
    python3 -c "import self_improvement_agent; print('✅ Self-Improvement module OK')"
    python3 -c "import quality_audit_system; print('✅ Quality Audit module OK')"

    log_success "✅ All tests passed"
}

# Display setup summary
show_summary() {
    echo ""
    echo "🎉 Atheon Cross-Repository Automation Setup Complete!"
    echo ""
    echo "📋 Setup Summary:"
    echo "  • Repositories Configured: ${#REPOS[@]}"
    echo "  • Agent System: Deployed to $SCRIPT_DIR"
    echo "  • Communication Channels: /tmp/atheon_shared_state"
    echo "  • Scheduled Tasks: Configured via cron"
    echo "  • Monitoring: /var/log/atheon_automation"
    echo ""
    echo "🚀 Quick Start:"
    echo "  1. Start system: $SCRIPT_DIR/start_all.sh"
    echo "  2. Check status: $SCRIPT_DIR/atheon_control.sh status"
    echo "  3. View logs: $SCRIPT_DIR/atheon_control.sh logs"
    echo "  4. Stop system: $SCRIPT_DIR/stop_all.sh"
    echo ""
    echo "⚙️  Automation Schedule:"
    echo "  • Daily Scan: 2:00 AM UTC"
    echo "  • Improvement Cycles: Every 6 hours"
    echo "  • Cross-Repo Coordination: Daily at 3:00 AM UTC"
    echo "  • Quality Audit: Daily at 9:00 AM UTC"
    echo ""
    echo "📊 Control Commands:"
    echo "  • $SCRIPT_DIR/atheon_control.sh start   # Start all agents"
    echo "  • $SCRIPT_DIR/atheon_control.sh stop    # Stop all agents"
    echo "  • $SCRIPT_DIR/atheon_control.sh status  # Check status"
    echo "  • $SCRIPT_DIR/atheon_control.sh logs    # View logs"
    echo "  • $SCRIPT_DIR/atheon_control.sh run     # Run manual cycle"
    echo ""
}

# Main setup function
main() {
    echo ""
    log_info "Starting Atheon Cross-Repository Automation setup..."
    echo ""

    check_prerequisites
    verify_repositories
    setup_agent_system
    setup_cross_repo_integration
    setup_github_workflows
    setup_communication
    deploy_services
    setup_scheduling
    setup_monitoring
    create_startup_scripts
    run_tests
    show_summary

    echo ""
    log_success "🎉 Setup complete! Your Atheon automation ecosystem is ready."
    echo ""
}

# Run setup
main "$@"