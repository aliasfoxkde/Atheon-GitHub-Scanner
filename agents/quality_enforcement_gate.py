#!/usr/bin/env python3
"""
QUALITY ENFORCEMENT GATE - Should have prevented the fake data scandal

This CRITICAL component was missing and allowed blatent lying to propagate.
"""

import os
import json
import logging
import hashlib
from pathlib import Path
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from dataclasses import dataclass

# Setup logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

@dataclass
class QualityGateResult:
    """Result of quality gate check"""
    passed: bool
    gate_name: str
    failures: List[str]
    warnings: List[str]
    critical_issues: List[str]

class QualityEnforcementGate:
    """
    CRITICAL QUALITY GATE - Should have prevented the fake data scandal

    This gate should have been used BEFORE displaying any statistics.
    """

    def __init__(self):
        scanner_root = os.environ.get('SCANNER_ROOT', '/nas/Temp/repos/Atheon-GitHub-Scanner')
        self.data_dir = Path(scanner_root) / "data"
        self.audit_log = self.data_dir / "quality_gate_audit.json"

    def validate_all_data_claims(self, claimed_stats: Dict[str, Any]) -> QualityGateResult:
        """
        MASTER VALIDATION - Should have caught the fake 2000 repositories claim

        This would have PREVENTED the blatent lying about scanning 2000 repositories.
        """
        failures = []
        warnings = []
        critical_issues = []

        # GATE 1: Verify scan data actually exists
        if not self.verify_scan_data_exists():
            critical_issues.append("❌ CRITICAL: No scan data files exist")
            failures.append("Claimed to scan repositories but no scan data found")

        # GATE 2: Verify claimed numbers match actual data
        claimed_repo_count = claimed_stats.get('total_repositories', 0)
        actual_repo_count = self.count_actual_scanned_repos()

        if claimed_repo_count != actual_repo_count:
            critical_issues.append(f"❌ CRITICAL: Claimed {claimed_repo_count} repos, actual {actual_repo_count}")
            failures.append(f"Lying about repository count: claimed {claimed_repo_count}, actually {actual_repo_count}")

        # GATE 3: Verify tier distribution is statistically possible
        tier_dist = claimed_stats.get('tier_distribution', {})
        if not self.validate_tier_distribution(tier_dist):
            critical_issues.append("❌ CRITICAL: Impossible tier distribution")
            failures.append("Tier distribution is statistically impossible")

        # GATE 4: Verify data sources exist
        if not self.verify_data_sources():
            critical_issues.append("❌ CRITICAL: No data sources found")
            failures.append("Claimed to have data but no source files exist")

        # GATE 5: Verify audit trail exists
        if not self.verify_audit_trail():
            warnings.append("⚠️  WARNING: No audit trail found for claimed operations")

        passed = len(critical_issues) == 0 and len(failures) == 0

        return QualityGateResult(
            passed=passed,
            gate_name="MASTER_DATA_VALIDATION",
            failures=failures,
            warnings=warnings,
            critical_issues=critical_issues
        )

    def verify_scan_data_exists(self) -> bool:
        """CRITICAL CHECK: Verify scan data actually exists"""
        scan_files = [
            self.data_dir / "combined_scan_results.json",
            self.data_dir / "real_scan_results.json",
            self.data_dir / "incremental_scan_results.jsonl"
        ]

        for scan_file in scan_files:
            if scan_file.exists():
                # Verify file is not empty
                if scan_file.stat().st_size > 0:
                    try:
                        with open(scan_file, 'r') as f:
                            data = json.load(f)
                        if len(data) > 0:
                            logger.info(f"✅ Found valid scan data: {scan_file.name}")
                            return True
                    except Exception as e:
                        logger.error(f"Error reading {scan_file}: {e}")

        logger.error("❌ No valid scan data found")
        return False

    def count_actual_scanned_repos(self) -> int:
        """Count ACTUAL scanned repositories from real data"""
        try:
            combined_file = self.data_dir / "combined_scan_results.json"
            if combined_file.exists():
                with open(combined_file, 'r') as f:
                    data = json.load(f)
                return len(data)
        except (json.JSONDecodeError, IOError):
            pass  # Non-critical: file missing or corrupted, return 0

        # Check incremental file
        incremental_file = self.data_dir / "incremental_scan_results.jsonl"
        if incremental_file.exists():
            count = 0
            with open(incremental_file, 'r') as f:
                for line in f:
                    if line.strip():
                        count += 1
            return count

        return 0

    def validate_tier_distribution(self, tier_dist: Dict[str, int]) -> bool:
        """
        CRITICAL CHECK: Validate tier distribution is statistically possible

        The fake distribution (only B, C, D from 2000 repos) is IMPOSSIBLE:
        - Real scans would have natural distribution across all tiers
        - Having only 2-3 tiers out of 5 from 2000 repos is statistically suspicious
        """
        total_repos = sum(tier_dist.values())
        tiers_present = sum(1 for count in tier_dist.values() if count > 0)

        # If claiming to scan many repos, should have natural distribution
        if total_repos > 100:
            # Should have at least 4 different tiers present
            if tiers_present < 4:
                logger.error(f"❌ Impossible tier distribution: only {tiers_present} tiers from {total_repos} repos")
                return False

            # Each tier should have reasonable percentage
            for tier, count in tier_dist.items():
                percentage = (count / total_repos) * 100
                # No tier should be 0% in large sample
                if count == 0 and total_repos > 100:
                    logger.error(f"❌ Tier {tier} has 0 repos in {total_repos} sample")
                    return False

        return True

    def verify_data_sources(self) -> bool:
        """Verify data source files actually exist"""
        required_files = [
            "combined_scan_results.json",
            "scan_statistics.json",
            "incremental_scan_results.jsonl"
        ]

        found_count = 0
        for filename in required_files:
            file_path = self.data_dir / filename
            if file_path.exists() and file_path.stat().st_size > 0:
                found_count += 1
                logger.info(f"✅ Found data source: {filename}")
            else:
                logger.error(f"❌ Missing data source: {filename}")

        # Need at least one data source
        return found_count > 0

    def verify_audit_trail(self) -> bool:
        """Verify audit trail exists for operations"""
        audit_log = self.data_dir / "quality_gate_audit.json"

        if not audit_log.exists():
            logger.warning("⚠️  No audit log found")
            return False

        try:
            with open(audit_log, 'r') as f:
                audit_data = json.load(f)

            # Verify recent audit entries
            recent_audits = [e for e in audit_data.get('audits', [])
                           if datetime.fromisoformat(e['timestamp']) > datetime.now() - timedelta(days=7)]

            if len(recent_audits) == 0:
                logger.warning("⚠️  No recent audit trail entries")
                return False

            logger.info(f"✅ Found {len(recent_audits)} recent audit entries")
            return True

        except Exception as e:
            logger.error(f"❌ Error reading audit log: {e}")
            return False

    def block_deployment_if_failed(self, gate_result: QualityGateResult) -> bool:
        """
        CRITICAL: Block deployment if quality gates fail

        THIS SHOULD HAVE PREVENTED THE FAKE DATA DEPLOYMENT
        """
        if not gate_result.passed:
            logger.error("🚨 QUALITY GATE FAILED - BLOCKING DEPLOYMENT")
            logger.error(f"Critical Issues: {gate_result.critical_issues}")
            logger.error(f"Failures: {gate_result.failures}")

            # Create audit entry
            self.create_audit_entry(gate_result)

            # BLOCK THE DEPLOYMENT
            return False

        logger.info("✅ QUALITY GATE PASSED - Deployment approved")
        self.create_audit_entry(gate_result)
        return True

    def create_audit_entry(self, gate_result: QualityGateResult):
        """Create audit entry for quality gate check"""
        audit_entry = {
            'timestamp': datetime.now().isoformat(),
            'gate_name': gate_result.gate_name,
            'passed': gate_result.passed,
            'failures': gate_result.failures,
            'warnings': gate_result.warnings,
            'critical_issues': gate_result.critical_issues,
            'action': 'BLOCKED' if not gate_result.passed else 'APPROVED'
        }

        # Ensure audit log exists
        if not self.audit_log.exists():
            with open(self.audit_log, 'w') as f:
                json.dump({'audits': []}, f)

        # Append audit entry
        with open(self.audit_log, 'r') as f:
            audit_data = json.load(f)

        audit_data['audits'].append(audit_entry)

        with open(self.audit_log, 'w') as f:
            json.dump(audit_data, f, indent=2)

        logger.info(f"Created audit entry: {audit_entry['action']}")

    def generate_quality_report(self) -> Dict[str, Any]:
        """Generate comprehensive quality report"""
        # Check current system state
        actual_repo_count = self.count_actual_scanned_repos()
        scan_data_exists = self.verify_scan_data_exists()
        data_sources_verified = self.verify_data_sources()

        # Verify any claimed statistics
        claimed_stats_file = self.data_dir / "claimed_statistics.json"
        if claimed_stats_file.exists():
            with open(claimed_stats_file, 'r') as f:
                claimed_stats = json.load(f)
            gate_result = self.validate_all_data_claims(claimed_stats)
        else:
            gate_result = None

        quality_report = {
            'audit_timestamp': datetime.now().isoformat(),
            'system_status': {
                'scan_data_exists': scan_data_exists,
                'actual_repos_scanned': actual_repo_count,
                'data_sources_verified': data_sources_verified,
                'audit_trail_exists': self.audit_log.exists()
            },
            'quality_gate_result': {
                'passed': gate_result.passed if gate_result else False,
                'critical_issues': gate_result.critical_issues if gate_result else [],
                'failures': gate_result.failures if gate_result else []
            } if gate_result else None,
            'honest_assessment': self.generate_honest_assessment(),
            'recommendations': self.generate_recommendations()
        }

        return quality_report

    def generate_honest_assessment(self) -> str:
        """Generate honest assessment of system state"""
        actual_count = self.count_actual_scanned_repos()

        if actual_count == 0:
            return "❌ SYSTEM HONESTY CHECK: NO REPOSITORIES HAVE BEEN SCANNED. Any claims of scanning are FALSE."
        elif actual_count < 10:
            return f"⚠️  SYSTEM HONESTY CHECK: Only {actual_count} repositories have actually been scanned. Any higher claims are FALSE."
        else:
            return f"✅ SYSTEM HONESTY CHECK: {actual_count} repositories have been verified as actually scanned."

    def generate_recommendations(self) -> List[str]:
        """Generate recommendations based on quality assessment"""
        recommendations = []

        if not self.verify_scan_data_exists():
            recommendations.append("CRITICAL: Perform actual repository scanning before claiming any statistics")
            recommendations.append("CRITICAL: Implement real GitHub API integration")
            recommendations.append("CRITICAL: Create real vulnerability detection system")

        if self.count_actual_scanned_repos() == 0:
            recommendations.append("CRITICAL: Reset all claimed statistics to 0 until real scans are performed")
            recommendations.append("CRITICAL: Update webapp to show 'No scans performed' message")

        if not self.verify_audit_trail():
            recommendations.append("HIGH: Implement audit trail for all operations")
            recommendations.append("HIGH: Add quality enforcement to automation pipeline")

        return recommendations

def main():
    """Execute quality gate check"""
    gate = QualityEnforcementGate()

    print("🔍 QUALITY ENFORCEMENT GATE - Checking system honesty...")

    # Generate quality report
    report = gate.generate_quality_report()

    print(f"\n📊 QUALITY REPORT:")
    print(f"   Scan data exists: {report['system_status']['scan_data_exists']}")
    print(f"   Actual repos scanned: {report['system_status']['actual_repos_scanned']}")
    print(f"   Data sources verified: {report['system_status']['data_sources_verified']}")
    print(f"   Audit trail exists: {report['system_status']['audit_trail_exists']}")

    print(f"\n🎯 HONEST ASSESSMENT:")
    print(f"   {report['honest_assessment']}")

    if report['quality_gate_result']:
        gate_result = report['quality_gate_result']
        print(f"\n🚨 QUALITY GATE: {'PASSED' if gate_result['passed'] else 'FAILED'}")
        if gate_result['critical_issues']:
            print(f"   CRITICAL ISSUES:")
            for issue in gate_result['critical_issues']:
                print(f"     {issue}")

    print(f"\n💡 RECOMMENDATIONS:")
    for i, rec in enumerate(report['recommendations'], 1):
        print(f"   {i}. {rec}")

    # Save quality report
    report_file = gate.data_dir / "quality_enforcement_report.json"
    with open(report_file, 'w') as f:
        json.dump(report, f, indent=2)

    print(f"\n💾 Quality report saved to: {report_file}")

if __name__ == "__main__":
    main()