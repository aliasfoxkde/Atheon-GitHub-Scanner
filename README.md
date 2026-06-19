# Atheon-GitHub-Scanner

🔍 **Automated GitHub repository scanning and quality analysis system using Atheon patterns for comprehensive security and code quality assessment.**

[![Go Version](https://img.shields.io/badge/Go-1.21+-00ADD8?logo=go)](https://golang.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Security](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow)](SECURITY.md)

## 🎯 Overview

Atheon-GitHub-Scanner is an automated system that scans GitHub repositories using the [Atheon](https://github.com/HoraDomu/Atheon) pattern matching engine to generate comprehensive quality reports. The system focuses on public repositories with significant traction and provides detailed analysis across multiple dimensions.

**This project extends patterns and concepts from the [Atheon](https://github.com/HoraDomu/Atheon) project by HoraDomu.**

### Key Features

- 🔒 **Security Analysis** - Complete pattern matching for secrets, PII, and vulnerabilities
- 📊 **Quality Metrics** - Code quality, test coverage, documentation analysis
- 🎯 **Scoring System** - 0-100 quality scores with tier assignment (A-F)
- 📈 **Database Tracking** - Historical quality trends and comparative analysis
- 🤖 **Background Automation** - Scheduled scanning with intelligent rate limiting
- 🌐 **PWA Interface** - Progressive Web App for user submissions and report browsing
- 📚 **Report Database** - 42+ popular repositories analyzed and categorized

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/aliasfoxkde/Atheon-GitHub-Scanner.git
cd Atheon-GitHub-Scanner

# Build the scanner
go build -o scanner cmd/scanner/main.go

# Or use make (if available)
make build
```

### Basic Usage

```bash
# Scan a single repository
./scanner scan --repo=facebook/react

# Scan popular repositories by category
./scanner scan --popular --category=web-framework --limit=5

# Scan trending repositories
./scanner scan --trending --languages=javascript,python --limit=10
```

## 📚 Documentation

### Getting Started
- **[Quick Start Guide](./docs/user-guide/quick-start.md)** - Get started in 5 minutes
- **[Installation](./docs/user-guide/installation.md)** - Detailed setup instructions
- **[Basic Usage](./docs/user-guide/basic-usage.md)** - Common scanning scenarios

### Features & Guides
- **[Scanning Modes](./docs/guides/scanning-modes.md)** - Single repo, trending, category scanning
- **[Pattern Matching](./docs/guides/pattern-matching.md)** - Security and quality patterns
- **[Quality Scoring](./docs/guides/quality-scoring.md)** - How scores are calculated
- **[Report Generation](./docs/guides/report-generation.md)** - Understanding scan reports

### Technical Documentation
- **[Architecture](./docs/technical/architecture.md)** - System design and components
- **[API Reference](./docs/api/reference.md)** - Complete API documentation
- **[Database Schema](./docs/technical/database.md)** - Data models and relationships
- **[GitHub Integration](./docs/technical/github-api.md)** - API usage and rate limiting

### Development
- **[Contributing](CONTRIBUTE.md)** - How to contribute to the project
- **[Development Setup](./docs/development/setup.md)** - Development environment
- **[Testing Guide](./docs/development/testing.md)** - Running and writing tests
- **[Code Standards](./docs/development/standards.md)** - Coding conventions

### Reference
- **[Configuration](./docs/reference/configuration.md)** - All configuration options
- **[Pattern Reference](./docs/reference/patterns.md)** - Available security patterns
- **[CLI Reference](./docs/reference/cli.md)** - Command-line interface
- **[Report Database](./docs/reports/README.md)** - Public repository reports

### Project Documentation
- **[Implementation Plan](./docs/technical/implementation-plan.md)** - Development roadmap
- **[Progress Tracking](./docs/technical/progress.md)** - Current development status
- **[PWA Architecture](./docs/technical/pwa-architecture.md)** - Web application design
- **[Report Index](./docs/reports/index.md)** - Complete report database

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Scanner Engine                           │
│  - GitHub API integration                                   │
│  - Repository cloning and analysis                          │
│  - Atheon pattern execution                                 │
│  - Code quality metrics calculation                         │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   Report Generator                           │
│  - Quality scoring                                          │
│  - Category analysis                                        │
│  - Trend comparison                                         │
│  - Statistical aggregation                                   │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                   Database & Wiki                            │
│  - Report storage                                           │
│  - Historical tracking                                       │
│  - Public documentation                                     │
│  - Category organization                                    │
└─────────────────────────────────────────────────────────────┘
```

## 📊 Report Database

### Statistics
- **Total Reports**: 42 repositories
- **Database Size**: 4.1MB of comprehensive analysis
- **Categories**: 8 major categories (Web Frameworks, CLI Tools, ML/AI, Databases, Testing, DevOps, Libraries, Documentation)
- **Languages**: 12+ programming languages supported
- **Quality Distribution**: 42 Tier A, 18 Tier B, 22 Tier C repositories

### Recent Scans
| Repository | Category | Quality | Tier | Findings | Security Issues |
|------------|----------|---------|------|----------|-----------------|
| [React](./reports/web-frameworks/react_react.md) | Web Framework | 68/100 | C | 2,383 | 4 high |
| [Next.js](./reports/web-frameworks/nextjs_next.js.md) | Web Framework | 68/100 | C | 1,849 | 8 high |
| [TensorFlow](./reports/ml-ai/tensorflow_tensorflow.md) | ML/AI | 98/100 | A | 1,403 | 0 critical |
| [PostgreSQL](./reports/databases/postgres_postgres.md) | Database | 76/100 | B | 62 | 3 high |
| [Kubernetes](./reports/cli-tools/kubernetes_kubernetes.md) | CLI Tool | 78/100 | B | 1,257 | 203 high |

*View complete [Report Database](./docs/reports/index.md)*

## 🔧 Features

### Core Scanner Features
- ✅ **Multi-language Support** - Go, Python, JavaScript, TypeScript, Java, Ruby, PHP, C++, C#, Rust, Swift, and more
- ✅ **Security Pattern Detection** - API keys, credentials, SQL injection, weak crypto, and more
- ✅ **Code Quality Analysis** - Technical debt, code smells, anti-patterns, complexity metrics
- ✅ **Intelligent Scoring** - 0-100 quality scores with tier assignment (A-F)
- ✅ **Comprehensive Reports** - Executive summaries, detailed findings, recommendations
- ✅ **Background Automation** - Scheduled scanning with error resilience
- ✅ **Database Integration** - PostgreSQL storage with historical tracking
- ✅ **PWA Web Interface** - User submissions and report browsing (under development)

### Pattern Categories
- 🔐 **Security** - Secrets, credentials, vulnerabilities (CWE/OWASP mapped)
- 🎨 **Code Quality** - Anti-patterns, code smells, technical debt
- 🔧 **Maintenance** - TODO/FIXME comments, known issues
- 📝 **Best Practices** - Language-specific pattern adherence

### Scanning Modes
- **Single Repository** - Analyze specific repositories
- **Trending Repositories** - Scan trending GitHub repositories
- **Category-Based** - Scan curated lists by category
- **Star-Based** - Filter repositories by star count
- **Batch Processing** - Multiple repositories with error resilience

## 🛠️ Technology Stack

- **Scanner**: Go 1.21+ (compatible with Atheon patterns)
- **Database**: PostgreSQL for structured data
- **Frontend**: React 18 with PWA capabilities
- **Backend**: Cloudflare Workers for edge computing
- **API**: GitHub REST API v3 with authentication
- **Documentation**: Markdown with automatic generation

## 📈 Usage Examples

### Command Line Interface

```bash
# Scan a single repository
./scanner scan --repo=vercel/next.js

# Scan trending JavaScript repositories
./scanner scan --trending --languages=javascript --limit=5

# Scan web frameworks
./scanner scan --popular --category=web-framework --limit=10

# Scan with custom output
./scanner scan --repo=facebook/react --output=./reports

# Continue on errors
./scanner scan --popular --category=ml-ai --limit=20 --continue
```

### Background Automation

```bash
# Quick scan of main categories
./scripts/background-scanner.sh quick

# Full scan of all categories
./scripts/background-scanner.sh full

# Trending repository scan
./scripts/background-scanner.sh trending

# Incremental update
./scripts/background-scanner.sh update
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTE.md) for details.

- 🐛 **Bug Reports** - [Create an issue](https://github.com/aliasfoxkde/Atheon-GitHub-Scanner/issues)
- 💡 **Feature Requests** - [Start a discussion](https://github.com/aliasfoxkde/Atheon-GitHub-Scanner/discussions)
- 🔧 **Pull Requests** - Follow our [contributing guidelines](CONTRIBUTE.md)
- 📖 **Documentation** - Improve docs and guides

## 🔒 Security

This project follows responsible security practices:
- 📋 [Security Policy](SECURITY.md) - Vulnerability reporting process
- 🔐 **Secure Patterns** - Credential detection and sanitization
- 🛡️ **Data Protection** - Automatic cleanup and secure storage
- ✅ **Regular Audits** - Dependency updates and code review

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Atheon](https://github.com/HoraDomu/Atheon)** - Core pattern matching engine by HoraDomu
- **GitHub** - Repository hosting and API services
- **Contributors** - All contributors to the project and scanned repositories

## 📞 Contact

- **Issues**: [GitHub Issues](https://github.com/aliasfoxkde/Atheon-GitHub-Scanner/issues)
- **Discussions**: [GitHub Discussions](https://github.com/aliasfoxkde/Atheon-GitHub-Scanner/discussions)
- **Security**: See [SECURITY.md](SECURITY.md)

## 🌟 Star History

If you find this project useful, please consider giving it a ⭐ star on GitHub!

---

**Built with ❤️ using patterns from [Atheon](https://github.com/HoraDomu/Atheon)**
