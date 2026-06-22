#!/usr/bin/env python3
"""
MONITORING AGENT - Atheon GitHub Scanner

Continuous monitoring and health checks for the automation system.
Provides real-time health assessment and automated issue detection.

Schedule: Every 6 hours (0 */6 * * *)
"""

import os
import json
import logging
import asyncio
import aiohttp
import psutil
import time
from pathlib import Path
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from dataclasses import dataclass, asdict

SCANNER_ROOT = os.environ.get('SCANNER_ROOT', '/nas/Temp/repos/Atheon-GitHub-Scanner')

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler(f'{SCANNER_ROOT}/data/monitoring.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

@dataclass
class HealthMetric:
    """Individual health metric"""
    name: str
    value: float
    unit: str
    status: str
    threshold: float
    message: str

@dataclass
class HealthReport:
    """Comprehensive health report"""
    timestamp: str
    overall_status: str
    system_health: Dict[str, Any]
    automation_health: Dict[str, Any]
    performance_metrics: Dict[str, Any]
    alerts: List[Dict[str, Any]]
    recommendations: List[str]
    uptime_percentage: float

class MonitoringAgent:
    """Continuous monitoring and health assessment"""

    def __init__(self):
        scanner_root = os.environ.get('SCANNER_ROOT', '/nas/Temp/repos/Atheon-GitHub-Scanner')
        self.base_dir = Path(scanner_root)
        self.data_dir = self.base_dir / "data"
        self.monitoring_dir = self.data_dir / "monitoring"
        self.alerts_dir = self.monitoring_dir / "alerts"

        # Create directories
        self.monitoring_dir.mkdir(parents=True, exist_ok=True)
        self.alerts_dir.mkdir(parents=True, exist_ok=True)

        # Health thresholds
        self.thresholds = {
            'cpu_usage': 80.0,
            'memory_usage': 85.0,
            'disk_usage': 90.0,
            'api_success_rate': 95.0,
            'automation_success_rate': 90.0,
            'response_time': 5.0
        }

        # Start time for uptime calculation
        self.start_time = datetime.now()

    async def run_health_monitoring(self) -> HealthReport:
        """Execute comprehensive health monitoring"""
        logger.info("🏥 Starting Health Monitoring")

        try:
            # System health checks
            system_health = await self.check_system_health()

            # Automation health checks
            automation_health = await self.check_automation_health()

            # Performance metrics
            performance_metrics = await self.collect_performance_metrics()

            # Generate alerts
            alerts = self.generate_alerts(system_health, automation_health, performance_metrics)

            # Calculate overall status
            overall_status = self.calculate_overall_status(system_health, automation_health, performance_metrics)

            # Generate recommendations
            recommendations = self.generate_recommendations(alerts, system_health)

            # Calculate uptime
            uptime_percentage = self.calculate_uptime()

            report = HealthReport(
                timestamp=datetime.now().isoformat(),
                overall_status=overall_status,
                system_health=system_health,
                automation_health=automation_health,
                performance_metrics=performance_metrics,
                alerts=alerts,
                recommendations=recommendations,
                uptime_percentage=uptime_percentage
            )

            # Save health report
            await self.save_health_report(report)

            # Process critical alerts
            await self.process_critical_alerts(alerts)

            logger.info(f"✅ Health Monitoring Complete - Status: {overall_status}")

            return report

        except Exception as e:
            logger.error(f"❌ Health Monitoring Failed: {e}")
            raise

    async def check_system_health(self) -> Dict[str, Any]:
        """Check system health metrics"""
        logger.info("Checking system health...")

        system_health = {
            'cpu_usage': await self.check_cpu_usage(),
            'memory_usage': await self.check_memory_usage(),
            'disk_usage': await self.check_disk_usage(),
            'network_status': await self.check_network_status(),
            'process_health': await self.check_process_health()
        }

        return system_health

    async def check_cpu_usage(self) -> HealthMetric:
        """Check CPU usage"""
        try:
            cpu_percent = psutil.cpu_percent(interval=1)
            threshold = self.thresholds['cpu_usage']

            status = "healthy"
            message = "CPU usage normal"

            if cpu_percent > threshold:
                status = "critical"
                message = f"CPU usage above threshold: {cpu_percent}% > {threshold}%"
            elif cpu_percent > threshold * 0.8:
                status = "warning"
                message = f"CPU usage elevated: {cpu_percent}%"

            return HealthMetric(
                name="cpu_usage",
                value=cpu_percent,
                unit="percent",
                status=status,
                threshold=threshold,
                message=message
            )

        except Exception as e:
            logger.error(f"Failed to check CPU usage: {e}")
            return HealthMetric("cpu_usage", 0, "percent", "error", 100, f"Error: {e}")

    async def check_memory_usage(self) -> HealthMetric:
        """Check memory usage"""
        try:
            memory = psutil.virtual_memory()
            memory_percent = memory.percent
            threshold = self.thresholds['memory_usage']

            status = "healthy"
            message = "Memory usage normal"

            if memory_percent > threshold:
                status = "critical"
                message = f"Memory usage above threshold: {memory_percent}% > {threshold}%"
            elif memory_percent > threshold * 0.8:
                status = "warning"
                message = f"Memory usage elevated: {memory_percent}%"

            return HealthMetric(
                name="memory_usage",
                value=memory_percent,
                unit="percent",
                status=status,
                threshold=threshold,
                message=message
            )

        except Exception as e:
            logger.error(f"Failed to check memory usage: {e}")
            return HealthMetric("memory_usage", 0, "percent", "error", 100, f"Error: {e}")

    async def check_disk_usage(self) -> HealthMetric:
        """Check disk usage"""
        try:
            disk = psutil.disk_usage('/')
            disk_percent = disk.percent
            threshold = self.thresholds['disk_usage']

            status = "healthy"
            message = "Disk usage normal"

            if disk_percent > threshold:
                status = "critical"
                message = f"Disk usage above threshold: {disk_percent}% > {threshold}%"
            elif disk_percent > threshold * 0.8:
                status = "warning"
                message = f"Disk usage elevated: {disk_percent}%"

            return HealthMetric(
                name="disk_usage",
                value=disk_percent,
                unit="percent",
                status=status,
                threshold=threshold,
                message=message
            )

        except Exception as e:
            logger.error(f"Failed to check disk usage: {e}")
            return HealthMetric("disk_usage", 0, "percent", "error", 100, f"Error: {e}")

    async def check_network_status(self) -> HealthMetric:
        """Check network connectivity"""
        try:
            # Test connectivity to GitHub API
            async with aiohttp.ClientSession() as session:
                start = time.time()
                try:
                    async with session.get('https://api.github.com', timeout=aiohttp.ClientTimeout(total=10)) as response:
                        response_time = (time.time() - start) * 1000  # Convert to ms

                        if response.status == 200:
                            status = "healthy"
                            message = f"Network connectivity OK - {response_time:.0f}ms"
                        else:
                            status = "warning"
                            message = f"Network connectivity issue - status {response.status}"

                        return HealthMetric(
                            name="network_status",
                            value=response_time,
                            unit="ms",
                            status=status,
                            threshold=5000,
                            message=message
                        )

                except asyncio.TimeoutError:
                    return HealthMetric(
                        name="network_status",
                        value=0,
                        unit="ms",
                        status="critical",
                        threshold=5000,
                        message="Network timeout"
                    )

        except Exception as e:
            logger.error(f"Failed to check network status: {e}")
            return HealthMetric("network_status", 0, "ms", "error", 5000, f"Error: {e}")

    async def check_process_health(self) -> HealthMetric:
        """Check if required processes are running"""
        try:
            # Check if Python processes are running (our automation agents)
            python_processes = [p for p in psutil.process_iter(['name', 'cmdline'])
                              if 'python' in p.info['name'].lower()]

            # Check for specific automation processes
            automation_processes = [p for p in python_processes
                                   if any('automation' in str(cmd).lower() for cmd in p.info['cmdline'] or [])]

            process_count = len(automation_processes)

            if process_count > 0:
                status = "healthy"
                message = f"{process_count} automation process(es) running"
            else:
                status = "warning"
                message = "No automation processes detected"

            return HealthMetric(
                name="process_health",
                value=process_count,
                unit="count",
                status=status,
                threshold=1,
                message=message
            )

        except Exception as e:
            logger.error(f"Failed to check process health: {e}")
            return HealthMetric("process_health", 0, "count", "error", 1, f"Error: {e}")

    async def check_automation_health(self) -> Dict[str, Any]:
        """Check automation system health"""
        logger.info("Checking automation health...")

        automation_health = {
            'scheduler_status': await self.check_scheduler_status(),
            'task_success_rate': await self.check_task_success_rate(),
            'recent_errors': await self.check_recent_errors(),
            'data_integrity': await self.check_data_integrity(),
            'quality_gates': await self.check_quality_gates()
        }

        return automation_health

    async def check_scheduler_status(self) -> HealthMetric:
        """Check if automation scheduler is running"""
        try:
            execution_log = self.data_dir / "task_executions.json"

            if execution_log.exists():
                with open(execution_log, 'r') as f:
                    executions = json.load(f)

                if executions:
                    last_execution = executions[-1]
                    last_time = datetime.fromisoformat(last_execution['end_time'])
                    time_since_last = (datetime.now() - last_time).total_seconds() / 3600  # hours

                    if time_since_last < 24:
                        status = "healthy"
                        message = f"Scheduler running - last execution {time_since_last:.1f}h ago"
                    else:
                        status = "warning"
                        message = f"Scheduler may be stalled - last execution {time_since_last:.1f}h ago"

                    return HealthMetric(
                        name="scheduler_status",
                        value=time_since_last,
                        unit="hours",
                        status=status,
                        threshold=24,
                        message=message
                    )

            return HealthMetric(
                name="scheduler_status",
                value=0,
                unit="hours",
                status="warning",
                threshold=24,
                message="No execution history found"
            )

        except Exception as e:
            logger.error(f"Failed to check scheduler status: {e}")
            return HealthMetric("scheduler_status", 0, "hours", "error", 24, f"Error: {e}")

    async def check_task_success_rate(self) -> HealthMetric:
        """Check recent task success rate"""
        try:
            execution_log = self.data_dir / "task_executions.json"

            if execution_log.exists():
                with open(execution_log, 'r') as f:
                    executions = json.load(f)

                # Get last 50 executions
                recent_executions = executions[-50:] if len(executions) > 50 else executions

                if recent_executions:
                    successful = sum(1 for exec in recent_executions if exec['success'])
                    success_rate = (successful / len(recent_executions)) * 100
                    threshold = self.thresholds['automation_success_rate']

                    status = "healthy"
                    message = f"Task success rate: {success_rate:.1f}%"

                    if success_rate < threshold:
                        status = "critical"
                        message = f"Task success rate below threshold: {success_rate:.1f}% < {threshold}%"
                    elif success_rate < threshold * 1.05:
                        status = "warning"
                        message = f"Task success rate declining: {success_rate:.1f}%"

                    return HealthMetric(
                        name="task_success_rate",
                        value=success_rate,
                        unit="percent",
                        status=status,
                        threshold=threshold,
                        message=message
                    )

            return HealthMetric(
                name="task_success_rate",
                value=100,
                unit="percent",
                status="healthy",
                threshold=90,
                message="No execution history - assuming healthy"
            )

        except Exception as e:
            logger.error(f"Failed to check task success rate: {e}")
            return HealthMetric("task_success_rate", 0, "percent", "error", 90, f"Error: {e}")

    async def check_recent_errors(self) -> List[Dict[str, Any]]:
        """Check for recent errors"""
        errors = []

        try:
            execution_log = self.data_dir / "task_executions.json"

            if execution_log.exists():
                with open(execution_log, 'r') as f:
                    executions = json.load(f)

                # Get failed executions from last 24 hours
                cutoff_time = datetime.now() - timedelta(hours=24)

                for exec in executions:
                    if not exec['success']:
                        exec_time = datetime.fromisoformat(exec['end_time'])
                        if exec_time > cutoff_time:
                            errors.append({
                                'task': exec['task'],
                                'time': exec['end_time'],
                                'error': exec.get('error', 'Unknown error')
                            })

        except Exception as e:
            logger.error(f"Failed to check recent errors: {e}")

        return errors

    async def check_data_integrity(self) -> HealthMetric:
        """Check data file integrity"""
        try:
            data_files = [
                "combined_scan_results.json",
                "scan_statistics.json",
                "quality_enforcement_report.json"
            ]

            valid_files = 0
            for filename in data_files:
                file_path = self.data_dir / filename
                if file_path.exists() and file_path.stat().st_size > 0:
                    try:
                        with open(file_path, 'r') as f:
                            json.load(f)
                        valid_files += 1
                    except (json.JSONDecodeError, IOError):
                        pass  # Non-critical: file invalid or unreadable, continue

            integrity_rate = (valid_files / len(data_files)) * 100

            if integrity_rate == 100:
                status = "healthy"
                message = "All data files valid"
            elif integrity_rate >= 66:
                status = "warning"
                message = f"Some data files corrupted: {valid_files}/{len(data_files)} valid"
            else:
                status = "critical"
                message = f"Critical data corruption: {valid_files}/{len(data_files)} valid"

            return HealthMetric(
                name="data_integrity",
                value=integrity_rate,
                unit="percent",
                status=status,
                threshold=100,
                message=message
            )

        except Exception as e:
            logger.error(f"Failed to check data integrity: {e}")
            return HealthMetric("data_integrity", 0, "percent", "error", 100, f"Error: {e}")

    async def check_quality_gates(self) -> HealthMetric:
        """Check quality gate status"""
        try:
            quality_report = self.data_dir / "quality_enforcement_report.json"

            if quality_report.exists():
                with open(quality_report, 'r') as f:
                    report = json.load(f)

                gate_result = report.get('quality_gate_result', {})
                passed = gate_result.get('passed', False)

                if passed:
                    status = "healthy"
                    message = "Quality gates passed"
                else:
                    status = "critical"
                    message = f"Quality gates failed: {len(gate_result.get('critical_issues', []))} issues"

                return HealthMetric(
                    name="quality_gates",
                    value=100 if passed else 0,
                    unit="percent",
                    status=status,
                    threshold=100,
                    message=message
                )

            return HealthMetric(
                name="quality_gates",
                value=100,
                unit="percent",
                status="healthy",
                threshold=100,
                message="No quality issues detected"
            )

        except Exception as e:
            logger.error(f"Failed to check quality gates: {e}")
            return HealthMetric("quality_gates", 0, "percent", "error", 100, f"Error: {e}")

    async def collect_performance_metrics(self) -> Dict[str, Any]:
        """Collect performance metrics"""
        logger.info("Collecting performance metrics...")

        performance_metrics = {
            'scan_performance': await self.collect_scan_performance(),
            'api_performance': await self.collect_api_performance(),
            'automation_performance': await self.collect_automation_performance()
        }

        return performance_metrics

    async def collect_scan_performance(self) -> Dict[str, Any]:
        """Collect scanning performance metrics"""
        try:
            stats_file = self.data_dir / "scan_statistics.json"

            if stats_file.exists():
                with open(stats_file, 'r') as f:
                    stats = json.load(f)

                return {
                    'repositories_scanned': stats.get('repositories_scanned', 0),
                    'average_quality_score': stats.get('average_quality_score', 0),
                    'scan_duration_hours': stats.get('scan_duration_hours', 0),
                    'total_findings': stats.get('total_findings', 0)
                }

        except Exception as e:
            logger.error(f"Failed to collect scan performance: {e}")

        return {}

    async def collect_api_performance(self) -> Dict[str, Any]:
        """Collect API performance metrics"""
        return {
            'github_api_calls': 0,  # Would be tracked in production
            'api_success_rate': 100.0,
            'average_response_time': 0
        }

    async def collect_automation_performance(self) -> Dict[str, Any]:
        """Collect automation performance metrics"""
        try:
            execution_log = self.data_dir / "task_executions.json"

            if execution_log.exists():
                with open(execution_log, 'r') as f:
                    executions = json.load(f)

                # Calculate metrics from last 100 executions
                recent_executions = executions[-100:] if len(executions) > 100 else executions

                total_duration = sum(exec['duration'] for exec in recent_executions)
                avg_duration = total_duration / len(recent_executions) if recent_executions else 0

                return {
                    'total_executions': len(executions),
                    'recent_executions': len(recent_executions),
                    'average_duration': avg_duration,
                    'executions_last_24h': len([exec for exec in recent_executions
                                                 if datetime.fromisoformat(exec['end_time']) > datetime.now() - timedelta(hours=24)])
                }

        except Exception as e:
            logger.error(f"Failed to collect automation performance: {e}")

        return {}

    def generate_alerts(self, system_health: Dict, automation_health: Dict, performance_metrics: Dict) -> List[Dict[str, Any]]:
        """Generate alerts from health checks"""
        alerts = []

        # Check system health
        for metric_name, metric in system_health.items():
            if hasattr(metric, 'status') and metric.status in ['critical', 'warning']:
                alerts.append({
                    'type': metric.status,
                    'category': 'system',
                    'metric': metric_name,
                    'message': metric.message,
                    'value': metric.value,
                    'threshold': metric.threshold,
                    'timestamp': datetime.now().isoformat()
                })

        # Check automation health
        for metric_name, metric in automation_health.items():
            if metric_name == 'recent_errors':
                for error in metric:
                    alerts.append({
                        'type': 'critical',
                        'category': 'automation',
                        'metric': 'task_failure',
                        'message': f"Task failed: {error['task']}",
                        'value': error['time'],
                        'details': error['error'],
                        'timestamp': datetime.now().isoformat()
                    })
            elif hasattr(metric, 'status') and metric.status in ['critical', 'warning']:
                alerts.append({
                    'type': metric.status,
                    'category': 'automation',
                    'metric': metric_name,
                    'message': metric.message,
                    'value': metric.value,
                    'threshold': metric.threshold,
                    'timestamp': datetime.now().isoformat()
                })

        return alerts

    def calculate_overall_status(self, system_health: Dict, automation_health: Dict, performance_metrics: Dict) -> str:
        """Calculate overall system status"""
        all_metrics = list(system_health.values()) + list(automation_health.values())

        critical_count = sum(1 for metric in all_metrics if hasattr(metric, 'status') and metric.status == 'critical')
        warning_count = sum(1 for metric in all_metrics if hasattr(metric, 'status') and metric.status == 'warning')

        if critical_count > 0:
            return "critical"
        elif warning_count > 2:
            return "warning"
        elif warning_count > 0:
            return "degraded"
        else:
            return "healthy"

    def generate_recommendations(self, alerts: List[Dict], system_health: Dict) -> List[str]:
        """Generate recommendations based on alerts and health"""
        recommendations = []

        critical_alerts = [alert for alert in alerts if alert['type'] == 'critical']

        if critical_alerts:
            recommendations.append("IMMEDIATE ACTION REQUIRED: Address critical alerts")
            recommendations.append("Review system logs and error reports")

        cpu_metric = system_health.get('cpu_usage')
        if cpu_metric and hasattr(cpu_metric, 'status') and cpu_metric.status == 'warning':
            recommendations.append("Consider scaling automation to reduce CPU load")

        memory_metric = system_health.get('memory_usage')
        if memory_metric and hasattr(memory_metric, 'status') and memory_metric.status == 'warning':
            recommendations.append("Monitor memory usage and consider optimization")

        if not recommendations:
            recommendations.append("System operating normally - continue monitoring")

        return recommendations

    def calculate_uptime(self) -> float:
        """Calculate system uptime percentage"""
        uptime = (datetime.now() - self.start_time).total_seconds() / 3600  # hours

        # For now, return 100% - in production would track actual downtime
        return 100.0

    async def save_health_report(self, report: HealthReport):
        """Save health report"""
        report_file = self.monitoring_dir / f"health_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"

        with open(report_file, 'w') as f:
            json.dump(asdict(report), f, indent=2, default=str)

        logger.info(f"Saved health report to {report_file}")

    async def process_critical_alerts(self, alerts: List[Dict[str, Any]]):
        """Process critical alerts"""
        critical_alerts = [alert for alert in alerts if alert['type'] == 'critical']

        if not critical_alerts:
            return

        logger.warning(f"⚠️  Processing {len(critical_alerts)} critical alerts")

        # Save alerts
        alert_file = self.alerts_dir / f"alerts_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        with open(alert_file, 'w') as f:
            json.dump(critical_alerts, f, indent=2, default=str)

        # In production, would send notifications, create tickets, etc.
        # For now, just log them
        for alert in critical_alerts:
            logger.warning(f"CRITICAL ALERT: {alert['message']}")

async def main():
    """Main execution function"""
    agent = MonitoringAgent()

    print("🏥 Atheon GitHub Scanner - Monitoring Agent")
    print("=" * 60)

    try:
        # Run health monitoring
        report = await agent.run_health_monitoring()

        # Print summary
        print(f"\n📊 Health Monitoring Results:")
        print(f"   Overall Status: {report.overall_status.upper()}")
        print(f"   Uptime: {report.uptime_percentage:.1f}%")
        print(f"   Timestamp: {report.timestamp}")

        print(f"\n⚠️  Alerts: {len(report.alerts)}")
        for alert in report.alerts[:5]:  # Show first 5 alerts
            print(f"   - {alert['type'].upper()}: {alert['message']}")

        print(f"\n💡 Recommendations:")
        for i, rec in enumerate(report.recommendations[:3], 1):
            print(f"   {i}. {rec}")

        return 0 if report.overall_status != 'critical' else 1

    except Exception as e:
        print(f"❌ Health Monitoring Failed: {e}")
        logger.error(f"Health monitoring failed: {e}")
        return 1

if __name__ == "__main__":
    import sys
    sys.exit(asyncio.run(main()))