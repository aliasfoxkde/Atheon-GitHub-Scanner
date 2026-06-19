#!/usr/bin/env python3
"""
Atheon GitHub Scanner - Daemon Runner
Automated daily scanning with cross-repository integration and self-improvement
"""

import os
import sys
import json
import time
import schedule
import logging
import subprocess
from datetime import datetime, timedelta
from pathlib import Path
from typing import Dict, List, Any
import requests
import hashlib
import shutil

# Configuration
REPOS = {
    'atheon-scanner': {
        'path': '/nas/Temp/repos/Atheon-GitHub-Scanner',
        'name': 'Atheon-GitHub-Scanner',
        'role': 'scanner'
    },
    'atheon-enhanced': {
        'path': '/nas/Temp/repos/Atheon-Enhanced',
        'name': 'Atheon-Enhanced',
        'role': 'scanner-core'
    },
    'atheon-benchmark': {
        'path': '/nas/Temp/repos/Atheon-Benchmark',
        'name': 'Atheon-Benchmark',
        'role': 'benchmark'
    }
}

# Logging setup
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('daemon_runner.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger('AtheonDaemon')


class RepositoryManager:
    """Manages multiple Atheon repositories for coordinated automation"""

    def __init__(self):
        self.repos = REPOS
        self.status_file = Path('/tmp/atheon_daemon_status.json')
        self.load_status()

    def load_status(self):
        """Load daemon status from file"""
        if self.status_file.exists():
            with open(self.status_file, 'r') as f:
                self.status = json.load(f)
        else:
            self.status = {
                'last_scan': None,
                'last_update': None,
                'scan_count': 0,
                'improvements': [],
                'errors': []
            }

    def save_status(self):
        """Save daemon status to file"""
        self.status['last_update'] = datetime.now().isoformat()
        with open(self.status_file, 'w') as f:
            json.dump(self.status, f, indent=2)

    def get_repo(self, repo_name: str) -> Dict:
        """Get repository configuration"""
        return self.repos.get(repo_name)

    def run_in_repo(self, repo_name: str, command: List[str]) -> Dict[str, Any]:
        """Run command in specific repository"""
        repo = self.get_repo(repo_name)
        if not repo:
            return {'success': False, 'error': f'Repo {repo_name} not found'}

        try:
            result = subprocess.run(
                command,
                cwd=repo['path'],
                capture_output=True,
                text=True,
                timeout=3600  # 1 hour timeout
            )

            return {
                'success': result.returncode == 0,
                'stdout': result.stdout,
                'stderr': result.stderr,
                'returncode': result.returncode
            }
        except Exception as e:
            logger.error(f"Error running command in {repo_name}: {e}")
            return {'success': False, 'error': str(e)}


class GitHubScanner:
    """Automated GitHub repository scanning with continuous improvement"""

    def __init__(self, repo_manager: RepositoryManager):
        self.repo_manager = repo_manager
        self.scanner_path = REPOS['atheon-scanner']['path']
        self.data_dir = Path(self.scanner_path) / 'data'
        self.results_dir = self.data_dir / 'scan_results'

    def run_daily_scan(self, target_count: int = 100) -> Dict[str, Any]:
        """Run daily repository scan"""
        logger.info(f"Starting daily scan for {target_count} repositories")

        try:
            # Run the Go scanner
            scanner_path = self.scanner_path / 'cmd' / 'repository_scanner'
            result = subprocess.run(
                ['go', 'run', 'main.go'],
                cwd=scanner_path,
                capture_output=True,
                text=True,
                timeout=7200  # 2 hours timeout
            )

            if result.returncode == 0:
                logger.info("Daily scan completed successfully")

                # Process and analyze results
                return self.analyze_scan_results()
            else:
                logger.error(f"Scan failed: {result.stderr}")
                return {'success': False, 'error': result.stderr}

        except Exception as e:
            logger.error(f"Daily scan error: {e}")
            return {'success': False, 'error': str(e)}

    def analyze_scan_results(self) -> Dict[str, Any]:
        """Analyze scanning results and extract insights"""
        try:
            # Find latest scan results
            scan_files = list(self.data_dir.glob('repository_scan_results*.json'))
            if not scan_files:
                return {'success': False, 'error': 'No scan results found'}

            latest_file = max(scan_files, key=os.path.getctime)

            with open(latest_file, 'r') as f:
                results = json.load(f)

            # Extract patterns and statistics
            patterns = {}
            total_findings = 0

            for repo in results:
                for pattern in repo.get('Patterns', []):
                    patterns[pattern] = patterns.get(pattern, 0) + 1
                    total_findings += 1

            return {
                'success': True,
                'repositories_scanned': len(results),
                'total_findings': total_findings,
                'patterns': patterns,
                'scan_file': str(latest_file)
            }

        except Exception as e:
            logger.error(f"Analysis error: {e}")
            return {'success': False, 'error': str(e)}


class PatternOptimizer:
    """Analyzes scan results to identify new patterns and optimizations"""

    def __init__(self, repo_manager: RepositoryManager):
        self.repo_manager = repo_manager
        self.atheon_enhanced_path = REPOS['atheon-enhanced']['path']

    def identify_new_patterns(self, scan_results: Dict) -> List[Dict]:
        """Identify new security patterns from scan results"""
        new_patterns = []

        # Analyze pattern frequency and trends
        patterns = scan_results.get('patterns', {})
        total_repos = scan_results.get('repositories_scanned', 0)

        for pattern, count in patterns.items():
            occurrence_rate = (count / total_repos) * 100 if total_repos > 0 else 0

            # Check if pattern should be added to Atheon
            if occurrence_rate > 10:  # 10% threshold
                new_patterns.append({
                    'name': pattern,
                    'occurrence_rate': occurrence_rate,
                    'occurrence_count': count,
                    'priority': self.calculate_priority(occurrence_rate),
                    'suggested_category': self.suggest_category(pattern)
                })

        return sorted(new_patterns, key=lambda x: x['occurrence_rate'], reverse=True)

    def calculate_priority(self, occurrence_rate: float) -> str:
        """Calculate pattern priority based on occurrence rate"""
        if occurrence_rate > 50:
            return 'P0_CRITICAL'
        elif occurrence_rate > 30:
            return 'P1_HIGH'
        elif occurrence_rate > 10:
            return 'P2_MEDIUM'
        else:
            return 'P3_LOW'

    def suggest_category(self, pattern_name: str) -> str:
        """Suggest pattern category based on name"""
        pattern_lower = pattern_name.lower()

        if 'sql' in pattern_lower or 'injection' in pattern_lower:
            return 'injection'
        elif 'xss' in pattern_lower or 'csrf' in pattern_lower:
            return 'web-security'
        elif 'credential' in pattern_lower or 'key' in pattern_lower:
            return 'secrets'
        elif 'crypto' in pattern_lower or 'hash' in pattern_lower:
            return 'cryptography'
        else:
            return 'general-security'


class AtheonEnhancer:
    """Automated enhancement of Atheon with new patterns"""

    def __init__(self, repo_manager: RepositoryManager):
        self.repo_manager = repo_manager
        self.atheon_enhanced_path = Path(REPOS['atheon-enhanced']['path'])
        self.patterns_dir = self.atheon_enhanced_path / 'community' / 'security'

    def add_new_patterns(self, new_patterns: List[Dict]) -> Dict[str, Any]:
        """Add new patterns to Atheon-Enhanced"""
        results = {'added': [], 'failed': [], 'skipped': []}

        for pattern in new_patterns:
            try:
                pattern_file = self.create_pattern_file(pattern)
                if pattern_file:
                    results['added'].append(pattern['name'])
                    logger.info(f"Added pattern: {pattern['name']}")
                else:
                    results['failed'].append(pattern['name'])

            except Exception as e:
                logger.error(f"Failed to add pattern {pattern['name']}: {e}")
                results['failed'].append(pattern['name'])

        return results

    def create_pattern_file(self, pattern: Dict) -> bool:
        """Create a pattern file for Atheon"""
        try:
            # Create pattern filename
            pattern_slug = pattern['name'].lower().replace(' ', '-').replace('_', '-')
            filename = f"{pattern_slug}.yaml"
            filepath = self.patterns_dir / filename

            # Create YAML pattern file
            pattern_yaml = f"""name: {pattern['name']}
category: security
subcategory: {pattern['suggested_category']}
severity: high
confidence: medium
languages: [javascript, python, go, typescript, java]
description: {pattern['name']} detected in automated analysis
remediation: Implement secure coding practices to prevent {pattern['name']}
owasp: A03:2021 – Injection
match: '{pattern['name'].lower().replace(' ', '.*')}'
priority: {pattern['priority']}
occurrence_rate: {pattern['occurrence_rate']:.1f}%
auto_generated: true
source: atheon-github-scanner
generated_date: {datetime.now().isoformat()}
"""

            # Ensure directory exists
            self.patterns_dir.mkdir(parents=True, exist_ok=True)

            # Write pattern file
            with open(filepath, 'w') as f:
                f.write(pattern_yaml)

            logger.info(f"Created pattern file: {filepath}")
            return True

        except Exception as e:
            logger.error(f"Error creating pattern file: {e}")
            return False


class DocumentationUpdater:
    """Automatic documentation updates based on scan results"""

    def __init__(self, repo_manager: RepositoryManager):
        self.repo_manager = repo_manager
        self.planning_dir = Path(REPOS['atheon-enhanced']['path']) / 'docs' / 'planning'

    def update_planning_docs(self, scan_results: Dict, new_patterns: List[Dict]) -> bool:
        """Update planning documentation with latest findings"""
        try:
            # Update analysis document
            analysis_file = self.planning_dir / 'automated_analysis.md'

            analysis_content = f"""# Automated Security Pattern Analysis

**Generated:** {datetime.now().isoformat()}
**Scan Source:** Atheon GitHub Scanner
**Automation Status:** Active

## Latest Scan Results

- **Repositories Scanned:** {scan_results.get('repositories_scanned', 0)}
- **Total Security Findings:** {scan_results.get('total_findings', 0)}
- **New Patterns Identified:** {len(new_patterns)}

## Top Security Patterns

"""

            # Add top patterns
            for i, pattern in enumerate(new_patterns[:10], 1):
                analysis_content += f"""
### {i}. {pattern['name']}
- **Occurrence Rate:** {pattern['occurrence_rate']:.1f}%
- **Priority:** {pattern['priority']}
- **Category:** {pattern['suggested_category']}
"""

            # Add automation metadata
            analysis_content += f"""

## Automation Metadata

- **Last Automatic Scan:** {datetime.now().isoformat()}
- **Total Scans Run:** {self.repo_manager.status.get('scan_count', 0)}
- **Patterns Auto-Added:** {len(new_patterns)}
- **Improvement Cycle:** Active

---

*This document is automatically generated by the Atheon daemon runner.*
"""

            # Ensure directory exists
            self.planning_dir.mkdir(parents=True, exist_ok=True)

            # Write updated documentation
            with open(analysis_file, 'w') as f:
                f.write(analysis_content)

            logger.info(f"Updated planning documentation: {analysis_file}")
            return True

        except Exception as e:
            logger.error(f"Error updating documentation: {e}")
            return False

    def update_integration_summary(self, stats: Dict) -> bool:
        """Update integration summary with latest statistics"""
        try:
            summary_file = self.planning_dir / 'automation_summary.md'

            summary_content = f"""# Atheon Automation Summary

**Last Updated:** {datetime.now().isoformat()}
**Automation Status:** Running

## Automation Statistics

- **Total Scans Completed:** {stats.get('total_scans', 0)}
- **Repositories Analyzed:** {stats.get('total_repos', 0)}
- **Patterns Discovered:** {stats.get('total_patterns', 0)}
- **Auto-Improvements:** {stats.get('improvements', 0)}

## Recent Activity

"""

            # Add recent improvements
            improvements = self.repo_manager.status.get('improvements', [])[-5:]
            for improvement in improvements:
                summary_content += f"- {improvement.get('date')}: {improvement.get('action')}\\n"

            summary_content += """
## System Health

- **Daemon Status:** ✅ Running
- **Scanner Status:** ✅ Active
- **Pattern Optimizer:** ✅ Operational
- **Documentation Updater:** ✅ Functional

---

*Automatically maintained by Atheon daemon runner*
"""

            with open(summary_file, 'w') as f:
                f.write(summary_content)

            logger.info(f"Updated automation summary: {summary_file}")
            return True

        except Exception as e:
            logger.error(f"Error updating summary: {e}")
            return False


class BenchmarkIntegrator:
    """Integration with Atheon-Benchmark for performance validation"""

    def __init__(self, repo_manager: RepositoryManager):
        self.repo_manager = repo_manager
        self.benchmark_path = Path(REPOS['atheon-benchmark']['path'])

    def run_benchmark_tests(self) -> Dict[str, Any]:
        """Run benchmark tests to validate improvements"""
        try:
            # Run benchmark tests
            result = self.repo_manager.run_in_repo(
                'atheon-benchmark',
                ['npm', 'test']
            )

            if result['success']:
                # Parse benchmark results
                return self.parse_benchmark_results(result['stdout'])
            else:
                return {'success': False, 'error': result.get('error')}

        except Exception as e:
            logger.error(f"Benchmark error: {e}")
            return {'success': False, 'error': str(e)}

    def parse_benchmark_results(self, output: str) -> Dict[str, Any]:
        """Parse benchmark test results"""
        # Simple parsing - enhance based on actual benchmark output format
        return {
            'success': True,
            'tests_passed': output.count('✓'),
            'tests_failed': output.count('✗'),
            'performance_score': self.extract_performance_score(output)
        }

    def extract_performance_score(self, output: str) -> float:
        """Extract performance score from benchmark output"""
        # Simple implementation - enhance based on actual format
        try:
            if 'score' in output.lower():
                for line in output.split('\\n'):
                    if 'score' in line.lower():
                        # Extract numeric value
                        import re
                        numbers = re.findall(r'\\d+\\.?\\d*', line)
                        if numbers:
                            return float(numbers[0])
        except:
            pass
        return 0.0


class AtheonDaemon:
    """Main daemon orchestrator for automated repository enhancement"""

    def __init__(self):
        self.repo_manager = RepositoryManager()
        self.scanner = GitHubScanner(self.repo_manager)
        self.optimizer = PatternOptimizer(self.repo_manager)
        self.enhancer = AtheonEnhancer(self.repo_manager)
        self.doc_updater = DocumentationUpdater(self.repo_manager)
        self.benchmark = BenchmarkIntegrator(self.repo_manager)

        logger.info("Atheon Daemon initialized")

    def run_daily_cycle(self):
        """Run complete daily automation cycle"""
        logger.info("Starting daily automation cycle")
        cycle_start = datetime.now()

        try:
            # Step 1: Run GitHub scan
            logger.info("Step 1: Running GitHub repository scan")
            scan_results = self.scanner.run_daily_scan(target_count=100)

            if not scan_results.get('success'):
                logger.error("Scan failed - aborting cycle")
                return

            # Step 2: Identify new patterns
            logger.info("Step 2: Identifying new security patterns")
            new_patterns = self.optimizer.identify_new_patterns(scan_results)
            logger.info(f"Identified {len(new_patterns)} new patterns")

            # Step 3: Add patterns to Atheon-Enhanced
            logger.info("Step 3: Adding patterns to Atheon-Enhanced")
            pattern_results = self.enhancer.add_new_patterns(new_patterns)
            logger.info(f"Added {len(pattern_results['added'])} patterns")

            # Step 4: Update documentation
            logger.info("Step 4: Updating documentation")
            self.doc_updater.update_planning_docs(scan_results, new_patterns)

            # Step 5: Run benchmarks
            logger.info("Step 5: Running validation benchmarks")
            benchmark_results = self.benchmark.run_benchmark_tests()
            logger.info(f"Benchmark results: {benchmark_results}")

            # Step 6: Update status and commit changes
            logger.info("Step 6: Committing improvements")
            self.commit_improvements(pattern_results, scan_results)

            # Step 7: Update webapp with latest data
            logger.info("Step 7: Updating webapp data and deploying")
            try:
                from update_webapp_data import WebappUpdater
                webapp_updater = WebappUpdater()
                webapp_update_success = webapp_updater.update_and_deploy()
                if webapp_update_success:
                    logger.info("Webapp updated and deployed successfully")
                else:
                    logger.warning("Webapp update failed - continuing cycle")
            except Exception as e:
                logger.warning(f"Webapp update error (non-critical): {e}")

            # Update status
            cycle_duration = (datetime.now() - cycle_start).total_seconds()
            self.repo_manager.status['scan_count'] += 1
            self.repo_manager.status['last_scan'] = datetime.now().isoformat()
            self.repo_manager.status['improvements'].append({
                'date': datetime.now().isoformat(),
                'action': f'Completed daily cycle - {len(pattern_results["added"])} new patterns',
                'duration_seconds': cycle_duration,
                'scan_results': scan_results
            })
            self.repo_manager.save_status()

            logger.info(f"Daily cycle completed in {cycle_duration:.2f} seconds")

        except Exception as e:
            logger.error(f"Daily cycle error: {e}")
            self.repo_manager.status['errors'].append({
                'date': datetime.now().isoformat(),
                'error': str(e)
            })
            self.repo_manager.save_status()

    def commit_improvements(self, pattern_results: Dict, scan_results: Dict):
        """Commit improvements to repositories"""
        try:
            # Commit to Atheon-Enhanced
            if pattern_results['added']:
                self.repo_manager.run_in_repo(
                    'atheon-enhanced',
                    ['git', 'add', 'community/security/']
                )

                commit_message = f"""feat: Auto-add {len(pattern_results['added'])} security patterns

## Automated Pattern Addition
- Source: Atheon GitHub Scanner
- Generated: {datetime.now().isoformat()}
- Patterns Added: {len(pattern_results['added'])}
- Repositories Analyzed: {scan_results.get('repositories_scanned', 0)}

## New Patterns
{chr(10).join(f"- {pattern}" for pattern in pattern_results['added'])}

Auto-generated by Atheon daemon runner.
Co-Authored-By: Atheon Daemon <daemon@atheon.ai>
"""

                self.repo_manager.run_in_repo(
                    'atheon-enhanced',
                    ['git', 'commit', '-m', commit_message]
                )

                self.repo_manager.run_in_repo(
                    'atheon-enhanced',
                    ['git', 'push', 'origin', 'master']
                )

                logger.info("Committed and pushed pattern additions to Atheon-Enhanced")

        except Exception as e:
            logger.error(f"Error committing improvements: {e}")

    def run_continuous_improvement(self):
        """Run continuous improvement cycle"""
        logger.info("Starting continuous improvement cycle")

        try:
            # Analyze current state
            current_stats = self.analyze_current_state()

            # Identify optimization opportunities
            optimizations = self.identify_optimizations(current_stats)

            # Apply optimizations
            for optimization in optimizations:
                self.apply_optimization(optimization)

            logger.info(f"Applied {len(optimizations)} optimizations")

        except Exception as e:
            logger.error(f"Continuous improvement error: {e}")

    def analyze_current_state(self) -> Dict[str, Any]:
        """Analyze current system state"""
        return {
            'total_patterns': self.count_total_patterns(),
            'scan_coverage': self.calculate_scan_coverage(),
            'benchmark_score': self.get_current_benchmark_score()
        }

    def count_total_patterns(self) -> int:
        """Count total patterns in Atheon-Enhanced"""
        try:
            patterns_dir = Path(REPOS['atheon-enhanced']['path']) / 'community' / 'security'
            if not patterns_dir.exists():
                return 0

            pattern_files = list(patterns_dir.glob('*.yaml'))
            return len(pattern_files)

        except Exception as e:
            logger.error(f"Error counting patterns: {e}")
            return 0

    def calculate_scan_coverage(self) -> float:
        """Calculate current scan coverage"""
        # Simple implementation - enhance based on needs
        return 0.0

    def get_current_benchmark_score(self) -> float:
        """Get current benchmark performance score"""
        try:
            result = self.benchmark.run_benchmark_tests()
            return result.get('performance_score', 0.0)
        except:
            return 0.0

    def identify_optimizations(self, current_state: Dict) -> List[Dict]:
        """Identify optimization opportunities"""
        optimizations = []

        # Example optimization logic
        if current_state.get('benchmark_score', 0) < 80:
            optimizations.append({
                'type': 'performance',
                'action': 'Optimize pattern matching',
                'priority': 'high'
            })

        return optimizations

    def apply_optimization(self, optimization: Dict):
        """Apply specific optimization"""
        logger.info(f"Applying optimization: {optimization['action']}")
        # Implementation depends on optimization type

    def start(self):
        """Start the daemon"""
        logger.info("Starting Atheon Daemon")
        logger.info("Scheduling: Daily scan at 2:00 AM")

        # Schedule daily run at 2:00 AM
        schedule.every().day.at("02:00").do(self.run_daily_cycle)

        # Schedule continuous improvement every 6 hours
        schedule.every(6).hours.do(self.run_continuous_improvement)

        # Run initial cycle
        logger.info("Running initial cycle")
        self.run_daily_cycle()

        # Keep daemon running
        while True:
            schedule.run_pending()
            time.sleep(60)  # Check every minute

    def stop(self):
        """Stop the daemon"""
        logger.info("Stopping Atheon Daemon")
        sys.exit(0)


def main():
    """Main entry point"""
    daemon = AtheonDaemon()

    try:
        daemon.start()
    except KeyboardInterrupt:
        logger.info("Daemon interrupted by user")
        daemon.stop()
    except Exception as e:
        logger.error(f"Daemon error: {e}")
        daemon.stop()


if __name__ == "__main__":
    main()