# Atheon Scanner Docker Infrastructure

## Overview

This directory contains Docker-based scanning infrastructure for multi-language package analysis, providing isolated runtime environments for safe, reproducible package scanning across different ecosystems.

## Architecture

```
docker/
├── scanners/
│   ├── Dockerfile.ruby          # RubyGems scanner
│   ├── Dockerfile.cargo         # Rust/Cargo scanner  
│   ├── Dockerfile.go            # Go modules scanner
│   ├── Dockerfile.python        # Python/PyPI scanner
│   ├── Dockerfile.npm           # npm scanner
│   └── docker_base_scanner.py   # Framework base class
├── docker-compose.yml            # Multi-scanner orchestration
└── README.md                     # This file
```

## Language Support

### ✅ Implemented Scanners

| Language | Dockerfile | Status | Notes |
|----------|-----------|--------|-------|
| **Ruby** | Dockerfile.ruby | ✅ Ready | RubyGems support |
| **Rust** | Dockerfile.cargo | ✅ Ready | Cargo ecosystem |
| **Go** | Dockerfile.go | ✅ Ready | Go modules |
| **Python** | Dockerfile.python | ✅ Ready | PyPI packages |
| **JavaScript** | Dockerfile.npm | 📝 Planned | npm ecosystem |

### 🚧 In Development

| Language | Status | Priority |
|----------|--------|----------|
| **npm** | Planned | High |
| **Zig** | Planned | Medium |
| **NuGet** | Planned | Medium |
| **Maven** | Planned | Medium |

## Usage

### Build Individual Scanner

```bash
# Build RubyGems scanner
docker build -f docker/scanners/Dockerfile.ruby -t atheon-scanner-ruby:latest ..

# Build Cargo scanner  
docker build -f docker/scanners/Dockerfile.cargo -t atheon-scanner-cargo:latest ..

# Build Go scanner
docker build -f docker/scanners/Dockerfile.go -t atheon-scanner-go:latest ..
```

### Run Scanner Container

```bash
# Run RubyGems scanner
docker run --rm \
  -v $(pwd)/agents:/scan:ro \
  -v $(pwd)/data:/scan/data \
  atheon-scanner-ruby:latest \
  python3 /scan/rubygems_scanner.py --count 50 --output /scan/data

# Run Cargo scanner
docker run --rm \
  -v $(pwd)/agents:/scan:ro \
  -v $(pwd)/data:/scan/data \
  atheon-scanner-cargo:latest \
  python3 /scan/cargo_scanner.py --count 50 --output /scan/data
```

### Docker Compose Multi-Scanner

```bash
# Build all scanner images
docker-compose build

# Run all scanners in parallel
docker-compose up

# Run specific scanner
docker-compose run rubygems-scanner

# Run with custom parameters
docker-compose run -e SCAN_COUNT=100 rubygems-scanner
```

### Python Framework Usage

```bash
# Install Docker Python SDK
pip3 install docker

# Run using Python framework
python3 docker/scanners/docker_base_scanner.py --language rubygems --count 50

# Run all scanners in parallel
python3 docker/scanners/docker_base_scanner.py --parallel --count 50
```

## Container Specifications

### Resource Limits

Each scanner container has the following resource limits:

- **Memory**: 2GB per container
- **CPU**: 2 cores per container  
- **Network**: Isolated bridge network
- **Storage**: Temporary volumes for scanning

### Volume Mounts

Standard volume mounts for all scanners:

```yaml
volumes:
  ./agents:/scan:ro           # Scanner scripts (read-only)
  ./data:/scan/data           # Results output (read-write)
  /tmp/atheon-scanner         # Temporary build artifacts
```

### Environment Variables

Common environment variables:

```bash
SCAN_COUNT=50                 # Number of packages to scan
OUTPUT_DIR=/scan/data         # Output directory for results  
TEMP_DIR=/tmp/atheon-scanner  # Temporary directory
TIMEOUT=300                   # Scan timeout in seconds
```

## Scanner Framework

The `docker_base_scanner.py` provides:

- **Container lifecycle management**: Create, run, stop, remove containers
- **Parallel execution**: Multiple language scanners simultaneously
- **Resource management**: CPU and memory limits per container
- **Error handling**: Graceful failure recovery
- **Result parsing**: Extract scan results from container logs
- **Cleanup**: Automatic resource cleanup after scanning

## Advantages of Docker Scanning

### 🐳 Isolation Benefits

- **Runtime isolation**: Each language in separate container
- **No host pollution**: Packages don't affect host system
- **Reproducible environments**: Same results across different systems
- **Security**: Contained execution limits potential damage

### ⚡ Performance Benefits

- **Parallel execution**: Multiple containers running simultaneously
- **Resource optimization**: Efficient CPU and memory usage
- **Scalability**: Easy to add more containers for increased throughput
- **Caching**: Docker layer caching for faster builds

### 🔧 Maintenance Benefits

- **Easy setup**: Single command builds complete environment
- **Version control**: Dockerfiles track exact environment configuration
- **Updates**: Simple to update base images and dependencies
- **Debugging**: Easy to enter containers for troubleshooting

## Scanner Configuration

### RubyGems Scanner

**Base Image**: `ruby:3.2-alpine`
**Package Manager**: `gem install`
**Scan Target**: RubyGems.org API
**Temp Directory**: `/tmp/atheon-scanner`
**Output**: `/scan/data/rubygems_scan_*.jsonl`

### Cargo Scanner  

**Base Image**: `rust:1.70-alpine`
**Package Manager**: `cargo fetch`
**Scan Target**: crates.io API
**Temp Directory**: `/tmp/atheon-scanner`
**Output**: `/scan/data/cargo_scan_*.jsonl`

### Go Modules Scanner

**Base Image**: `golang:1.21-alpine`  
**Package Manager**: `go mod download`
**Scan Target**: pkg.go.dev API
**Temp Directory**: `/tmp/atheon-scanner`
**Output**: `/scan/data/go_modules_scan_*.jsonl`

### Python/PyPI Scanner

**Base Image**: `python:3.11-slim`
**Package Manager**: `pip install` / `uv pip install`
**Scan Target**: PyPI.org API
**Temp Directory**: `/tmp/atheon-scanner`
**Output**: `/scan/data/python_ultra_fast_scan_*.jsonl`

## Troubleshooting

### Common Issues

**Issue**: Docker daemon not running
```bash
# Solution: Start Docker daemon
sudo systemctl start docker  # Linux
open -a Docker  # macOS
```

**Issue**: Permission denied on volume mounts
```bash
# Solution: Add user to docker group
sudo usermod -aG docker $USER
newgrp docker
```

**Issue**: Container build fails
```bash
# Solution: Check Dockerfile syntax and dependencies
docker build -f docker/scanners/Dockerfile.ruby -t test:latest ..
```

**Issue**: No space left on device
```bash
# Solution: Clean up Docker resources
docker system prune -a
```

### Debug Mode

Run containers with debug output:

```bash
docker run --rm -it \
  -v $(pwd)/agents:/scan:ro \
  -v $(pwd)/data:/scan/data \
  atheon-scanner-ruby:latest \
  /bin/bash
```

## Future Enhancements

### Phase 2: Security Analysis

- OWASP dependency checking integration
- CVE database lookup
- License compliance verification
- Code quality metrics

### Phase 3: Production Pipeline

- REST API for scanning requests
- WebSocket real-time updates
- Result caching and retrieval
- Scan history and trends
- Automated vulnerability scanning

### Additional Languages

Planned scanner implementations:

- **npm**: JavaScript/TypeScript packages
- **Zig**: Zig Package Manager
- **NuGet**: .NET/C# packages  
- **Maven**: Java packages
- **Gradle**: Java/Kotlin packages

## Performance Metrics

### Current Benchmarks

| Scanner | Speed | Memory | CPU | Notes |
|---------|-------|--------|-----|-------|
| RubyGems | ~50 pkgs/min | 2GB | 2 cores | Requires gem runtime |
| Cargo | ~30 pkgs/min | 2GB | 2 cores | Rust compilation |
| Go Modules | ~40 pkgs/min | 2GB | 2 cores | Go module cache |
| Python/PyPI | ~60 pkgs/min | 2GB | 2 cores | pip/UV installation |

### Scaling Considerations

- **Parallel containers**: Run 4-8 containers simultaneously
- **Resource allocation**: Adjust based on available memory/CPU
- **Network optimization**: Local package caching reduces bandwidth
- **Storage planning**: 500MB-1GB per 1000 packages scanned

## Contributing

When adding new language scanners:

1. Create `Dockerfile.<language>` in `docker/scanners/`
2. Add configuration to `docker_base_scanner.py`
3. Update this README with scanner details
4. Add to docker-compose.yml for orchestration
5. Test with small package counts first

---

*Infrastructure Version: 1.0.0*  
*Last Updated: 2026-06-19*  
*Supported Languages: Ruby, Rust, Go, Python*  
*Planned Languages: npm, Zig, NuGet, Maven*
