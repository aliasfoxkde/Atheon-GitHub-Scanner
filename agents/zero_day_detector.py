#!/usr/bin/env python3
"""
Zero-Day Vulnerability Detector for Atheon GitHub Scanner

Detects emerging threats and zero-day vulnerabilities through:
- Static analysis of code patterns
- Behavioral analysis of security-sensitive code
- Integration with threat intelligence feeds
- ML-based anomaly detection
"""

import os
import json
import subprocess
import logging
import re
import hashlib
import requests
from pathlib import Path
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional, Tuple
from dataclasses import dataclass, asdict
import tempfile
import ast
import itertools

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@dataclass
class ZeroDayCandidate:
    """Represents a potential zero-day vulnerability"""
    severity: str
    category: str
    confidence: float
    description: str
    affected_file: str
    line_number: int
    code_pattern: str
    context: str
    remediation: str
    references: List[str]
    cwe_id: Optional[str] = None
    cvss_estimate: Optional[float] = None

@dataclass
class ThreatIntelligence:
    """Threat intelligence data from external sources"""
    source: str
    threat_type: str
    description: str
    indicators: List[str]
    first_seen: str
    confidence: float
    references: List[str]

class ZeroDayDetector:
    """Detects zero-day vulnerabilities and emerging threats"""

    def __init__(self, cache_dir: str = "/tmp/atheon_zero_day_cache"):
        self.cache_dir = Path(cache_dir)
        self.cache_dir.mkdir(parents=True, exist_ok=True)
        self.threat_intel_cache = self.cache_dir / "threat_intel.json"
        self.pattern_database = self.cache_dir / "zero_day_patterns.json"

        # Load threat intelligence
        self.load_threat_intelligence()

        # Security patterns database
        self.security_patterns = self.build_security_patterns()

    def load_threat_intelligence(self):
        """Load cached threat intelligence"""
        if self.threat_intel_cache.exists():
            try:
                with open(self.threat_intel_cache, 'r') as f:
                    self.threat_intel = json.load(f)
                logger.info(f"Loaded {len(self.threat_intel)} threat intelligence entries")
            except Exception as e:
                logger.warning(f"Could not load threat intelligence: {e}")
                self.threat_intel = []
        else:
            self.threat_intel = []

    def save_threat_intelligence(self):
        """Save threat intelligence to cache"""
        try:
            with open(self.threat_intel_cache, 'w') as f:
                json.dump(self.threat_intel, f, indent=2)
            logger.info("Saved threat intelligence cache")
        except Exception as e:
            logger.error(f"Could not save threat intelligence: {e}")

    def build_security_patterns(self) -> Dict[str, List[Dict]]:
        """Build comprehensive security patterns for zero-day detection"""
        return {
            'sql_injection': [
                {
                    'pattern': r'["\'].*?\+.*?\+.*?["\']',
                    'description': 'String concatenation in SQL queries',
                    'severity': 'critical',
                    'cwe_id': 'CWE-89',
                    'confidence': 0.8,
                    'languages': ['javascript', 'python', 'go']
                },
                {
                    'pattern': r'execute\s*\(.*?\$.*?\)',
                    'description': 'Direct variable usage in execute()',
                    'severity': 'critical',
                    'cwe_id': 'CWE-89',
                    'confidence': 0.9,
                    'languages': ['python', 'php']
                },
                {
                    'pattern': r'query\s*\(.*?\+.*?\)',
                    'description': 'String concatenation in database query',
                    'severity': 'critical',
                    'cwe_id': 'CWE-89',
                    'confidence': 0.85,
                    'languages': ['javascript', 'node']
                }
            ],
            'xss': [
                {
                    'pattern': r'innerHTML\s*=\s*.*?\$',
                    'description': 'Direct variable assignment to innerHTML',
                    'severity': 'high',
                    'cwe_id': 'CWE-79',
                    'confidence': 0.9,
                    'languages': ['javascript', 'typescript']
                },
                {
                    'pattern': r'document\.write\s*\(',
                    'description': 'document.write() with user input',
                    'severity': 'high',
                    'cwe_id': 'CWE-79',
                    'confidence': 0.8,
                    'languages': ['javascript', 'typescript']
                },
                {
                    'pattern': r'eval\s*\(',
                    'description': 'eval() with potentially user input',
                    'severity': 'critical',
                    'cwe_id': 'CWE-95',
                    'confidence': 0.95,
                    'languages': ['javascript', 'python', 'php']
                }
            ],
            'command_injection': [
                {
                    'pattern': r'system\s*\(\s*\$',
                    'description': 'system() call with variable',
                    'severity': 'critical',
                    'cwe_id': 'CWE-78',
                    'confidence': 0.95,
                    'languages': ['python', 'php', 'c', 'cpp']
                },
                {
                    'pattern': r'exec\s*\(\s*\$',
                    'description': 'exec() call with variable',
                    'severity': 'critical',
                    'cwe_id': 'CWE-78',
                    'confidence': 0.95,
                    'languages': ['python', 'php']
                },
                {
                    'pattern': r'shell_exec\s*\(',
                    'description': 'shell_exec() call',
                    'severity': 'critical',
                    'cwe_id': 'CWE-78',
                    'confidence': 0.9,
                    'languages': ['php']
                },
                {
                    'pattern': r'subprocess\.call\s*\(\s*shell\s*=\s*True',
                    'description': 'subprocess with shell=True',
                    'severity': 'high',
                    'cwe_id': 'CWE-78',
                    'confidence': 0.8,
                    'languages': ['python']
                }
            ],
            'path_traversal': [
                {
                    'pattern': r'open\s*\(\s*["\'].*?\.\.',
                    'description': 'File operation with path traversal',
                    'severity': 'high',
                    'cwe_id': 'CWE-22',
                    'confidence': 0.85,
                    'languages': ['python', 'php', 'javascript']
                },
                {
                    'pattern': r'fopen\s*\(\s*.*?\.\.',
                    'description': 'fopen with path traversal',
                    'severity': 'high',
                    'cwe_id': 'CWE-22',
                    'confidence': 0.85,
                    'languages': ['php', 'c']
                }
            ],
            'insecure_deserialization': [
                {
                    'pattern': r'pickle\.loads\s*\(',
                    'description': 'Unsafe pickle deserialization',
                    'severity': 'critical',
                    'cwe_id': 'CWE-502',
                    'confidence': 0.9,
                    'languages': ['python']
                },
                {
                    'pattern': r'marshal\.loads\s*\(',
                    'description': 'Unsafe marshal deserialization',
                    'severity': 'critical',
                    'cwe_id': 'CWE-502',
                    'confidence': 0.9,
                    'languages': ['python']
                },
                {
                    'pattern': r'yaml\.load\s*\(',
                    'description': 'Unsafe YAML loading',
                    'severity': 'critical',
                    'cwe_id': 'CWE-502',
                    'confidence': 0.85,
                    'languages': ['python', 'javascript']
                },
                {
                    'pattern': r'JSON\.parse\s*\(\s*eval\s*\(',
                    'description': 'JSON.parse with eval',
                    'severity': 'critical',
                    'cwe_id': 'CWE-502',
                    'confidence': 0.95,
                    'languages': ['javascript']
                }
            ],
            'cryptographic_weakness': [
                {
                    'pattern': r'MD5\s*\(',
                    'description': 'MD5 hash usage (deprecated)',
                    'severity': 'medium',
                    'cwe_id': 'CWE-327',
                    'confidence': 0.7,
                    'languages': ['python', 'javascript', 'go']
                },
                {
                    'pattern': r'SHA1\s*\(',
                    'description': 'SHA1 hash usage (deprecated)',
                    'severity': 'medium',
                    'cwe_id': 'CWE-327',
                    'confidence': 0.7,
                    'languages': ['python', 'javascript', 'go']
                },
                {
                    'pattern': r'rand\s*\(\s*\)',
                    'description': 'rand() without seed (weak randomness)',
                    'severity': 'low',
                    'cwe_id': 'CWE-338',
                    'confidence': 0.6,
                    'languages': ['python', 'php', 'c']
                },
                {
                    'pattern': r'math\.random\s*\(\s*\)',
                    'description': 'Math.random() (weak randomness)',
                    'severity': 'low',
                    'cwe_id': 'CWE-338',
                    'confidence': 0.6,
                    'languages': ['javascript']
                }
            ],
            'authentication_issues': [
                {
                    'pattern': r'password\s*=\s*["\'].*?[^\$]',
                    'description': 'Hardcoded password (no variable)',
                    'severity': 'critical',
                    'cwe_id': 'CWE-798',
                    'confidence': 0.5,
                    'languages': ['javascript', 'python', 'php', 'go']
                },
                {
                    'pattern': r'api_key\s*=\s*["\'].*?[^\$]',
                    'description': 'Hardcoded API key',
                    'severity': 'critical',
                    'cwe_id': 'CWE-798',
                    'confidence': 0.5,
                    'languages': ['javascript', 'python', 'php', 'go']
                },
                {
                    'pattern': r'bcrypt\.hash\(\s*\$',
                    'description': 'Password hashing without salt',
                    'severity': 'medium',
                    'cwe_id': 'CWE-261',
                    'confidence': 0.7,
                    'languages': ['python', 'javascript']
                }
            ],
            'race_conditions': [
                {
                    'pattern': r'to\s*\(file\)',
                    'description': 'TOCTOU race condition (time-of-check-time-of-use)',
                    'severity': 'high',
                    'cwe_id': 'CWE-367',
                    'confidence': 0.6,
                    'languages': ['python', 'php', 'go']
                },
                {
                    'pattern': r'stat\s*\(\s*.*?\)\s*.*?open',
                    'description': 'TOCTOU: stat() followed by open()',
                    'severity': 'high',
                    'cwe_id': 'CWE-367',
                    'confidence': 0.7,
                    'languages': ['c', 'cpp', 'python']
                }
            ],
            'buffer_overflows': [
                {
                    'pattern': r'strcpy\s*\(',
                    'description': 'strcpy() buffer overflow risk',
                    'severity': 'high',
                    'cwe_id': 'CWE-120',
                    'confidence': 0.8,
                    'languages': ['c', 'cpp']
                },
                {
                    'pattern': r'sprintf\s*\(',
                    'description': 'sprintf() buffer overflow risk',
                    'severity': 'high',
                    'cwe_id': 'CWE-120',
                    'confidence': 0.8,
                    'languages': ['c', 'cpp']
                },
                {
                    'pattern': r'strcat\s*\(',
                    'description': 'strcat() buffer overflow risk',
                    'severity': 'high',
                    'cwe_id': 'CWE-120',
                    'confidence': 0.8,
                    'languages': ['c', 'cpp']
                },
                {
                    'pattern': r'gets\s*\(',
                    'description': 'gets() critical buffer overflow risk',
                    'severity': 'critical',
                    'cwe_id': 'CWE-120',
                    'confidence': 0.95,
                    'languages': ['c', 'cpp']
                }
            ],
            'information_disclosure': [
                {
                    'pattern': r'print\s*\(\s*\$.*?password',
                    'description': 'Printing sensitive information',
                    'severity': 'medium',
                    'cwe_id': 'CWE-532',
                    'confidence': 0.7,
                    'languages': ['python', 'php', 'javascript']
                },
                {
                    'pattern': r'console\.log\s*\(\s*.*?password',
                    'description': 'Logging sensitive information',
                    'severity': 'medium',
                    'cwe_id': 'CWE-532',
                    'confidence': 0.7,
                    'languages': ['javascript']
                },
                {
                    'pattern': r'error_log\s*\(\s*.*?password',
                    'description': 'Error logging sensitive information',
                    'severity': 'medium',
                    'cwe_id': 'CWE-532',
                    'confidence': 0.7,
                    'languages': ['php']
                }
            ]
        }

    def scan_repository_for_zero_days(self, repo_path: str, repo_url: str) -> List[ZeroDayCandidate]:
        """Scan repository for zero-day vulnerabilities"""
        logger.info(f"Scanning repository for zero-days: {repo_url}")

        repo_path = Path(repo_path)
        zero_day_candidates = []

        try:
            # Scan source code files
            source_extensions = ['.js', '.py', '.go', '.rs', '.ts', '.jsx', '.tsx', '.php', '.c', '.cpp', '.h', '.java']
            for source_file in repo_path.rglob('*'):
                if source_file.suffix not in source_extensions:
                    continue

                # Skip very large files
                if source_file.stat().st_size > 1024 * 1024:  # 1MB limit
                    continue

                try:
                    candidates = self.scan_file_for_zero_days(source_file, repo_path)
                    zero_day_candidates.extend(candidates)

                except Exception as e:
                    logger.debug(f"Error scanning file {source_file}: {e}")

            # Perform behavioral analysis
            behavioral_candidates = self.perform_behavioral_analysis(repo_path)
            zero_day_candidates.extend(behavioral_candidates)

            # Check against threat intelligence
            threat_candidates = self.check_threat_intelligence(repo_path)
            zero_day_candidates.extend(threat_candidates)

        except Exception as e:
            logger.error(f"Error scanning repository: {e}")

        logger.info(f"Found {len(zero_day_candidates)} zero-day candidates")
        return zero_day_candidates

    def scan_file_for_zero_days(self, file_path: Path, repo_path: Path) -> List[ZeroDayCandidate]:
        """Scan individual file for zero-day patterns"""
        candidates = []

        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()

            lines = content.split('\n')
            file_ext = file_path.suffix

            # Detect file language
            language = self.detect_language(file_ext)

            # Check each security pattern
            for category, patterns in self.security_patterns.items():
                for pattern_info in patterns:
                    # Check if pattern applies to this language
                    if language not in pattern_info.get('languages', []):
                        continue

                    # Search for pattern matches
                    matches = list(re.finditer(pattern_info['pattern'], content, re.MULTILINE))

                    for match in matches:
                        line_number = content[:match.start()].count('\n') + 1
                        line_content = lines[line_number - 1].strip()

                        # Get context (lines before and after)
                        context_start = max(0, line_number - 2)
                        context_end = min(len(lines), line_number + 1)
                        context = '\n'.join(lines[context_start:context_end])

                        candidate = ZeroDayCandidate(
                            severity=pattern_info['severity'],
                            category=category,
                            confidence=pattern_info['confidence'],
                            description=f"{pattern_info['description']} - {category.replace('_', ' ').title()}",
                            affected_file=str(file_path.relative_to(repo_path)),
                            line_number=line_number,
                            code_pattern=match.group(),
                            context=context,
                            remediation=self.generate_remediation(category, pattern_info),
                            references=[f"CWE-{pattern_info.get('cwe_id', 'Unknown')}"] if pattern_info.get('cwe_id') else [],
                            cwe_id=pattern_info.get('cwe_id'),
                            cvss_estimate=self.estimate_cvss(pattern_info['severity'], pattern_info['confidence'])
                        )
                        candidates.append(candidate)

        except Exception as e:
            logger.debug(f"Error scanning file {file_path}: {e}")

        return candidates

    def perform_behavioral_analysis(self, repo_path: Path) -> List[ZeroDayCandidate]:
        """Perform behavioral analysis to detect suspicious patterns"""
        candidates = []

        try:
            # Check for suspicious file operations
            suspicious_patterns = {
                'suspicious_file_ops': [
                    (r'chmod\s*\(\s*0777', 'Setting overly permissive file permissions', 'high'),
                    (r'chmod\s*\(\s*0o777', 'Setting overly permissive file permissions', 'high'),
                    (r'umask\s*\(\s*0', 'Disabling umask (security risk)', 'medium'),
                    (r'exec\s*\(\s*["\']\/bin\/sh', 'Executing shell commands', 'critical')
                ],
                'suspicious_network_ops': [
                    (r'bind\s*\(\s*0\.0\.0\.0', 'Binding to all interfaces (potential security issue)', 'medium'),
                    (r'socket\.create\s*\(\s*["\'].*?["\']\s*,\s*["\']SOCK_STREAM',
                     'Creating TCP socket (check for proper security)', 'low'),
                    (r'send\s*\(\s*.*?\+.*?\)', 'Network communication with string concatenation', 'high')
                ],
                'suspicious_memory_ops': [
                    (r'memcpy\s*\(\s*.*?\.length', 'Potential buffer overflow with user input', 'critical'),
                    (r'strcpy\s*\(\s*.*?\[', 'Buffer overflow with array access', 'critical'),
                    (r'sprintf\s*\(\s*.*?%', 'Format string vulnerability', 'critical')
                ]
            }

            for category, patterns in suspicious_patterns.items():
                for pattern, description, severity in patterns:
                    for source_file in repo_path.rglob('*'):
                        if source_file.suffix not in ['.py', '.js', '.c', '.cpp', '.go', '.php']:
                            continue

                        try:
                            with open(source_file, 'r', encoding='utf-8', errors='ignore') as f:
                                content = f.read()

                            matches = list(re.finditer(pattern, content, re.MULTILINE))
                            for match in matches:
                                line_number = content[:match.start()].count('\n') + 1
                                lines = content.split('\n')
                                context = '\n'.join(lines[max(0, line_number-2):line_number+1])

                                candidate = ZeroDayCandidate(
                                    severity=severity,
                                    category=category,
                                    confidence=0.6,
                                    description=description,
                                    affected_file=str(source_file.relative_to(repo_path)),
                                    line_number=line_number,
                                    code_pattern=match.group(),
                                    context=context,
                                    remediation=f'Review {category} at line {line_number}',
                                    references=[],
                                    cvss_estimate=self.estimate_cvss(severity, 0.6)
                                )
                                candidates.append(candidate)

                        except Exception as e:
                            logger.debug(f"Error in behavioral analysis: {e}")

        except Exception as e:
            logger.error(f"Error performing behavioral analysis: {e}")

        return candidates

    def check_threat_intelligence(self, repo_path: Path) -> List[ZeroDayCandidate]:
        """Check code against threat intelligence feeds"""
        candidates = []

        try:
            # Load recent threat intelligence
            recent_threats = [t for t in self.threat_intel
                            if datetime.fromisoformat(t['first_seen']) > datetime.now() - timedelta(days=30)]

            if not recent_threats:
                logger.info("No recent threat intelligence available")
                return candidates

            # Scan files for threat indicators
            for source_file in repo_path.rglob('*'):
                if source_file.suffix not in ['.py', '.js', '.ts', '.jsx', '.tsx', '.go', '.rs', '.php', '.c', '.cpp']:
                    continue

                try:
                    with open(source_file, 'r', encoding='utf-8', errors='ignore') as f:
                        content = f.read()

                    for threat in recent_threats:
                        for indicator in threat.get('indicators', []):
                            if indicator.lower() in content.lower():
                                # Find the line containing the indicator
                                lines = content.split('\n')
                                for i, line in enumerate(lines):
                                    if indicator.lower() in line.lower():
                                        context = '\n'.join(lines[max(0, i-2):i+1])

                                        candidate = ZeroDayCandidate(
                                            severity='high',
                                            category='threat_intelligence',
                                            confidence=threat['confidence'],
                                            description=f"Match for {threat['threat_type']}: {threat['description']}",
                                            affected_file=str(source_file.relative_to(repo_path)),
                                            line_number=i+1,
                                            code_pattern=indicator,
                                            context=context,
                                            remediation=f'Review based on threat intelligence: {threat["description"]}',
                                            references=threat.get('references', []),
                                            cvss_estimate=7.5
                                        )
                                        candidates.append(candidate)
                                        break

                except Exception as e:
                    logger.debug(f"Error checking threat intelligence for {source_file}: {e}")

        except Exception as e:
            logger.error(f"Error checking threat intelligence: {e}")

        return candidates

    def detect_language(self, file_extension: str) -> str:
        """Detect programming language from file extension"""
        language_map = {
            '.js': 'javascript',
            '.jsx': 'javascript',
            '.ts': 'typescript',
            '.tsx': 'typescript',
            '.py': 'python',
            '.go': 'go',
            '.rs': 'rust',
            '.php': 'php',
            '.c': 'c',
            '.cpp': 'cpp',
            '.h': 'c',
            '.java': 'java'
        }
        return language_map.get(file_extension, 'javascript')

    def generate_remediation(self, category: str, pattern_info: Dict) -> str:
        """Generate remediation advice for zero-day candidate"""
        remediation_templates = {
            'sql_injection': 'Use prepared statements or parameterized queries instead of string concatenation',
            'xss': 'Sanitize user input before rendering to HTML, use textContent instead of innerHTML',
            'command_injection': 'Avoid executing user input as commands, use proper escaping and validation',
            'path_traversal': 'Validate and sanitize file paths, use basename() to prevent directory traversal',
            'insecure_deserialization': 'Use safe deserialization methods or validate data structure before deserializing',
            'cryptographic_weakness': 'Use modern cryptographic algorithms: SHA-256+, bcrypt, Argon2',
            'authentication_issues': 'Never hardcode credentials, use environment variables or secure vaults',
            'race_conditions': 'Use atomic operations or file locking to prevent race conditions',
            'buffer_overflows': 'Use safe string functions: strncpy, snprintf, or modern alternatives',
            'information_disclosure': 'Remove debug statements that expose sensitive information'
        }

        base_remediation = remediation_templates.get(category, 'Review and secure the code')
        specific_advice = f" - {pattern_info['description']}"

        return base_remediation + specific_advice

    def estimate_cvss(self, severity: str, confidence: float) -> float:
        """Estimate CVSS score based on severity and confidence"""
        base_scores = {
            'critical': 9.5,
            'high': 7.5,
            'medium': 5.0,
            'low': 2.5
        }

        base_score = base_scores.get(severity, 5.0)
        adjusted_score = base_score * confidence

        return round(adjusted_score, 1)

    def update_threat_intelligence(self):
        """Update threat intelligence from external sources"""
        logger.info("Updating threat intelligence...")

        new_threats = []

        try:
            # Simulate fetching from various sources
            # In production, this would connect to real threat intelligence APIs

            # Example sources (simplified for demonstration)
            sources = [
                {
                    'name': 'CVE Database',
                    'url': 'https://cve.circl.lu/api/last',
                    'parser': self.parse_cve_feed
                },
                {
                    'name': 'Exploit Database',
                    'url': 'https://exploit-db.com/api/search',
                    'parser': self.parse_exploit_db_feed
                }
            ]

            for source in sources:
                try:
                    # In production, make actual API calls
                    # response = requests.get(source['url'], timeout=10)
                    # threats = source['parser'](response.json())

                    # For demonstration, we'll skip actual API calls
                    logger.info(f"Would fetch from {source['name']}")

                except Exception as e:
                    logger.warning(f"Error fetching from {source['name']}: {e}")

            # Save updated threat intelligence
            if new_threats:
                self.threat_intel.extend(new_threats)
                self.save_threat_intelligence()
                logger.info(f"Added {len(new_threats)} new threat intelligence entries")

        except Exception as e:
            logger.error(f"Error updating threat intelligence: {e}")

    def parse_cve_feed(self, feed_data: Dict) -> List[Dict]:
        """Parse CVE feed data"""
        threats = []
        # Implementation for parsing CVE feed
        return threats

    def parse_exploit_db_feed(self, feed_data: Dict) -> List[Dict]:
        """Parse Exploit-DB feed data"""
        threats = []
        # Implementation for parsing Exploit-DB feed
        return threats

    def generate_zero_day_patterns(self, candidates: List[ZeroDayCandidate], repo_url: str) -> List[Dict[str, Any]]:
        """Generate Atheon patterns from zero-day candidates"""
        patterns = []

        for candidate in candidates:
            # Only generate patterns for high-confidence findings
            if candidate.confidence < 0.6:
                continue

            pattern = {
                'name': f"Zero-Day: {candidate.description}",
                'category': candidate.category,
                'severity': candidate.severity,
                'description': candidate.description,
                'pattern_type': 'zero_day_vulnerability',
                'regex_pattern': candidate.code_pattern,
                'context_pattern': candidate.context,
                'confidence': candidate.confidence,
                'cwe_id': candidate.cwe_id,
                'cvss_estimate': candidate.cvss_estimate,
                'affected_files': [candidate.affected_file],
                'line_numbers': [candidate.line_number],
                'remediation': candidate.remediation,
                'references': candidate.references,
                'languages': [self.detect_language_from_file(candidate.affected_file)],
                'detection_method': 'zero_day_analysis',
                'source': 'zero_day_detector',
                'first_seen': datetime.now().isoformat(),
                'affected_repositories': [repo_url],
                'threat_type': 'zero_day_candidate'
            }
            patterns.append(pattern)

        logger.info(f"Generated {len(patterns)} zero-day patterns")
        return patterns

    def detect_language_from_file(self, file_path: str) -> str:
        """Detect language from file path"""
        ext = Path(file_path).suffix
        return self.detect_language(ext)

    def save_zero_day_report(self, candidates: List[ZeroDayCandidate], repo_url: str, output_dir: str = "/tmp/zero_day_reports"):
        """Save zero-day detection report"""
        output_path = Path(output_dir)
        output_path.mkdir(parents=True, exist_ok=True)

        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        filename = f"zero_day_report_{timestamp}.json"
        report_path = output_path / filename

        report_data = {
            'repository': repo_url,
            'scan_date': datetime.now().isoformat(),
            'total_candidates': len(candidates),
            'critical_count': sum(1 for c in candidates if c.severity == 'critical'),
            'high_count': sum(1 for c in candidates if c.severity == 'high'),
            'medium_count': sum(1 for c in candidates if c.severity == 'medium'),
            'low_count': sum(1 for c in candidates if c.severity == 'low'),
            'candidates': [asdict(c) for c in candidates]
        }

        with open(report_path, 'w') as f:
            json.dump(report_data, f, indent=2, default=str)

        logger.info(f"Saved zero-day report to {report_path}")
        return report_path

def main():
    """Main execution function for testing"""
    import sys

    detector = ZeroDayDetector()

    # Update threat intelligence
    detector.update_threat_intelligence()

    if len(sys.argv) > 1:
        repo_path = sys.argv[1]
        repo_url = f"file://{repo_path}"
    else:
        # Test with current directory
        repo_path = os.environ.get('SCANNER_ROOT', '/nas/Temp/repos/Atheon-GitHub-Scanner')
        repo_url = "https://github.com/aliasfoxkde/Atheon-GitHub-Scanner"

    print(f"🔍 Scanning {repo_url} for zero-day vulnerabilities...")

    candidates = detector.scan_repository_for_zero_days(repo_path, repo_url)

    print(f"\n🎯 Zero-Day Candidates Found: {len(candidates)}")
    print(f"   Critical: {sum(1 for c in candidates if c.severity == 'critical')}")
    print(f"   High: {sum(1 for c in candidates if c.severity == 'high')}")
    print(f"   Medium: {sum(1 for c in candidates if c.severity == 'medium')}")
    print(f"   Low: {sum(1 for c in candidates if c.severity == 'low')}")

    # Generate patterns
    patterns = detector.generate_zero_day_patterns(candidates, repo_url)
    print(f"\n📊 Generated {len(patterns)} zero-day patterns")

    # Save report
    report_path = detector.save_zero_day_report(candidates, repo_url)
    print(f"💾 Report saved to: {report_path}")

    # Save patterns
    if patterns:
        patterns_path = Path("/tmp/zero_day_patterns.json")
        with open(patterns_path, 'w') as f:
            json.dump(patterns, f, indent=2)
        print(f"💾 Patterns saved to: {patterns_path}")

    # Show top candidates
    if candidates:
        print(f"\n🚨 Top Zero-Day Candidates:")
        for i, candidate in enumerate(candidates[:5], 1):
            print(f"   {i}. {candidate.description}")
            print(f"      File: {candidate.affected_file}:{candidate.line_number}")
            print(f"      Severity: {candidate.severity} (confidence: {candidate.confidence})")
            print(f"      Code: {candidate.code_pattern[:60]}...")

if __name__ == "__main__":
    main()