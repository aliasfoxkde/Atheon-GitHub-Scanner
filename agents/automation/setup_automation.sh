#!/bin/bash
# AUTOMATION SETUP SCRIPT - Atheon GitHub Scanner
# Sets up cron jobs and installs automation dependencies

set -e

echo "🚀 Atheon GitHub Scanner - Automation Setup"
echo "================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Base directory
BASE_DIR="/nas/Temp/repos/Atheon-GitHub-Scanner"
cd "$BASE_DIR"

echo "📁 Base Directory: $BASE_DIR"

# Check if running as root (needed for cron)
if [ "$EUID" -ne 0 ]; then
    echo -e "${RED}❌ Please run as root (sudo) for cron setup${NC}"
    exit 1
fi

# Check required dependencies
echo "🔍 Checking dependencies..."

PYTHON3_EXISTS=$(command -v python3)
if [ -z "$PYTHON3_EXISTS" ]; then
    echo -e "${RED}❌ python3 not found${NC}"
    exit 1
fi
echo -e "${GREEN}✅ python3 found${NC}"

NPM_EXISTS=$(command -v npm)
if [ -z "$NPM_EXISTS" ]; then
    echo -e "${YELLOW}⚠️  npm not found - deployment features will be limited${NC}"
else
    echo -e "${GREEN}✅ npm found${NC}"
fi

# Create required directories
echo "📂 Creating directories..."
mkdir -p "$BASE_DIR/data/daily_reports"
mkdir -p "$BASE_DIR/data/intelligence"
mkdir -p "$BASE_DIR/data/monitoring"
mkdir -p "$BASE_DIR/data/deployments"
mkdir -p "$BASE_DIR/data/monitoring/alerts"
mkdir -p "$BASE_DIR/data/intelligence/shared"
echo -e "${GREEN}✅ Directories created${NC}"

# Install Python dependencies
echo "📦 Installing Python dependencies..."
if [ -f "$BASE_DIR/agents/requirements.txt" ]; then
    pip3 install -r "$BASE_DIR/agents/requirements.txt" || echo -e "${YELLOW}⚠️  Some dependencies may not have installed${NC}"
    echo -e "${GREEN}✅ Python dependencies installed${NC}"
else
    echo -e "${YELLOW}⚠️  requirements.txt not found${NC}"
fi

# Install additional automation dependencies
echo "📦 Installing automation dependencies..."
pip3 install aiohttp psutil schedule || echo -e "${YELLOW}⚠️  Some automation dependencies may not have installed${NC}"
echo -e "${GREEN}✅ Automation dependencies installed${NC}"

# Make automation scripts executable
echo "🔧 Making automation scripts executable..."
chmod +x "$BASE_DIR/agents/automation/"*.py
echo -e "${GREEN}✅ Scripts executable${NC}"

# Setup cron jobs
echo "⏰ Setting up cron jobs..."

# Backup existing crontab
crontab -l > /tmp/crontab_backup_$(date +%Y%m%d_%H%M%S) 2>/dev/null || true

# Create new crontab with automation jobs
cat > /tmp/atheon_automation_crontab << 'EOF'
# Atheon GitHub Scanner - Automated Tasks
# For details, see: /nas/Temp/repos/Atheon-GitHub-Scanner/docs/planning/AUTOMATION_ENHANCEMENT_PLAN.md

# Daily Research Agent - Runs at midnight UTC
0 0 * * * cd /nas/Temp/repos/Atheon-GitHub-Scanner && python3 agents/automation/daily_research_agent.py >> data/daily_research.log 2>&1

# Intelligence Sharing - Runs at 4am UTC
0 4 * * * cd /nas/Temp/repos/Atheon-GitHub-Scanner && python3 agents/automation/intelligence_sharing_agent.py >> data/intelligence_sharing.log 2>&1

# Pattern Validation - Runs at 6am UTC
0 6 * * * cd /nas/Temp/repos/Atheon-GitHub-Scanner && python3 agents/quality_enforcement_gate.py >> data/pattern_validation.log 2>&1

# System Testing - Runs at noon UTC
0 12 * * * cd /nas/Temp/repos/Atheon-GitHub-Scanner && python3 agents/automation/testing_agent.py >> data/system_testing.log 2>&1

# Performance Monitoring - Runs every 6 hours
0 */6 * * * cd /nas/Temp/repos/Atheon-GitHub-Scanner && python3 agents/automation/monitoring_agent.py >> data/monitoring.log 2>&1

# Automated Deployment - Runs at 9pm UTC
0 21 * * * cd /nas/Temp/repos/Atheon-GitHub-Scanner && python3 agents/automation/automated_deployment_agent.py >> data/deployment.log 2>&1

# Emergency Scanning - Runs at 3am UTC (disabled unless needed)
# 0 3 * * * cd /nas/Temp/repos/Atheon-GitHub-Scanner && python3 agents/real_github_scanner.py 50 >> data/emergency_scan.log 2>&1
EOF

# Install new crontab
crontab /tmp/atheon_automation_crontab
echo -e "${GREEN}✅ Cron jobs installed${NC}"

# Test automation system
echo "🧪 Testing automation system..."

# Test daily research agent
echo "Testing daily research agent..."
python3 "$BASE_DIR/agents/automation/daily_research_agent.py" --test || echo -e "${YELLOW}⚠️  Research agent test failed${NC}"

# Test monitoring agent
echo "Testing monitoring agent..."
python3 "$BASE_DIR/agents/automation/monitoring_agent.py" || echo -e "${YELLOW}⚠️  Monitoring agent test failed${NC}"

echo -e "${GREEN}✅ Automation tests complete${NC}"

# Create status dashboard
echo "📊 Creating status dashboard..."
cat > "$BASE_DIR/data/automation_status.json" << EOF
{
  "setup_date": "$(date -Iseconds)",
  "status": "installed",
  "cron_jobs": "active",
  "automation_agents": [
    "daily_research_agent",
    "intelligence_sharing_agent",
    "monitoring_agent",
    "automated_deployment_agent"
  ],
  "next_scheduled_runs": {
    "daily_research": "$(date -d 'today 00:00' -Iseconds --utc 2>/dev/null || date -d '00:00' -Iseconds)",
    "intelligence_sharing": "$(date -d 'today 04:00' -Iseconds --utc 2>/dev/null || date -d '04:00' -Iseconds)",
    "pattern_validation": "$(date -d 'today 06:00' -Iseconds --utc 2>/dev/null || date -d '06:00' -Iseconds)",
    "system_testing": "$(date -d 'today 12:00' -Iseconds --utc 2>/dev/null || date -d '12:00' -Iseconds)",
    "automated_deployment": "$(date -d 'today 21:00' -Iseconds --utc 2>/dev/null || date -d '21:00' -Iseconds)"
  },
  "logs_directory": "$BASE_DIR/data",
  "documentation": "$BASE_DIR/docs/planning/AUTOMATION_ENHANCEMENT_PLAN.md"
}
EOF

echo -e "${GREEN}✅ Status dashboard created${NC}"

# Display setup summary
echo ""
echo "================================================"
echo -e "${GREEN}✅ AUTOMATION SETUP COMPLETE${NC}"
echo "================================================"
echo ""
echo "📋 Installed Components:"
echo "   • Daily Research Agent (midnight UTC)"
echo "   • Intelligence Sharing Agent (4am UTC)"
echo "   • Pattern Validation Agent (6am UTC)"
echo "   • System Testing Agent (noon UTC)"
echo "   • Performance Monitoring (every 6 hours)"
echo "   • Automated Deployment Agent (9pm UTC)"
echo ""
echo "📊 Monitoring & Logs:"
echo "   • Logs: $BASE_DIR/data/"
echo "   • Status: $BASE_DIR/data/automation_status.json"
echo "   • Reports: $BASE_DIR/data/daily_reports/"
echo "   • Intelligence: $BASE_DIR/data/intelligence/"
echo ""
echo "🔧 Management Commands:"
echo "   • View cron jobs: crontab -l"
echo "   • View logs: tail -f $BASE_DIR/data/daily_research.log"
echo "   • Check status: cat $BASE_DIR/data/automation_status.json"
echo "   • Run manually: python3 $BASE_DIR/agents/automation/daily_research_agent.py"
echo ""
echo "📚 Documentation:"
echo "   • Automation Plan: $BASE_DIR/docs/planning/AUTOMATION_ENHANCEMENT_PLAN.md"
echo "   • Enhanced Roadmap: $BASE_DIR/docs/planning/ENHANCED_ROADMAP.md"
echo "   • Coordination Plan: $BASE_DIR/docs/planning/TRI_PROJECT_COORDINATION_PLAN.md"
echo ""
echo "⚠️  IMPORTANT NOTES:"
echo "   • All times are in UTC"
echo "   • Automation will run automatically according to schedule"
echo "   • Monitor logs to ensure proper operation"
echo "   • Use crontab -e to modify schedules if needed"
echo ""

# Ask if user wants to test automation immediately
read -p "Would you like to test the daily research agent now? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🧪 Testing daily research agent..."
    python3 "$BASE_DIR/agents/automation/daily_research_agent.py"
    echo "✅ Test complete - check logs for results"
fi

echo "🎉 Automation system is ready!"
echo "   Next automated run: Daily Research Agent at midnight UTC"