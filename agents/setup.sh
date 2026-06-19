#!/bin/bash

# Atheon Daemon System Setup Script
# Automated installation and configuration

set -e

echo "🚀 Setting up Atheon Daemon System..."

# Check Python version
PYTHON_VERSION=$(python3 --version 2>&1 | awk '{print $2}')
echo "✅ Python version: $PYTHON_VERSION"

# Create virtual environment
echo "📦 Creating virtual environment..."
python3 -m venv venv
source venv/bin/activate

# Install dependencies
echo "📥 Installing dependencies..."
pip install --upgrade pip
pip install -r requirements.txt

# Create necessary directories
echo "📁 Creating directory structure..."
mkdir -p logs
mkdir -p data/scan_results
mkdir -p /tmp/atheon_daemon

# Setup systemd service (if running as root)
if [ "$EUID" -eq 0 ]; then
    echo "🔧 Installing systemd service..."
    cp atheon-daemon.service /etc/systemd/system/
    systemctl daemon-reload
    systemctl enable atheon-daemon.service
    echo "✅ Systemd service installed and enabled"
else
    echo "⚠️  Not running as root - systemd service not installed"
    echo "Run with sudo to install systemd service"
fi

# Create configuration symlink
echo "🔗 Creating configuration symlink..."
ln -sf "$(pwd)/daemon_config.json" /tmp/atheon_daemon_config.json

# Test installation
echo "🧪 Testing installation..."
python3 -c "import schedule, requests, yaml; print('✅ All dependencies installed')"

# Create wrapper script
echo "📜 Creating wrapper scripts..."
cat > run_daemon.sh << 'EOF'
#!/bin/bash
cd "$(dirname "$0")"
source venv/bin/activate
python3 daemon_runner.py "$@"
EOF

chmod +x run_daemon.sh

echo ""
echo "✅ Atheon Daemon System setup complete!"
echo ""
echo "To start the daemon:"
echo "  ./run_daemon.sh            # Run manually"
echo "  sudo systemctl start atheon-daemon  # Run as service"
echo ""
echo "To check status:"
echo "  sudo systemctl status atheon-daemon"
echo "  tail -f daemon_runner.log"
echo ""
echo "Configuration: daemon_config.json"
echo "Logs: daemon_runner.log"