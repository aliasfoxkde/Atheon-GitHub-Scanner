#!/usr/bin/env python3
"""
AUTOMATION SCHEDULER - Atheon GitHub Scanner

Manages and coordinates all automated tasks for the Atheon GitHub Scanner.
This scheduler runs automated agents on their defined schedules.

Schedule: Coordinated automation across all tasks
"""

import os
import json
import logging
import asyncio
import subprocess
import time
from pathlib import Path
from datetime import datetime, timedelta
from typing import Dict, List, Any, Optional
from dataclasses import dataclass, asdict
from enum import Enum
import schedule

SCANNER_ROOT = os.environ.get('SCANNER_ROOT', '/nas/Temp/repos/Atheon-GitHub-Scanner')

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler(f'{SCANNER_ROOT}/data/automation_scheduler.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

class AutomationTask(Enum):
    """Automated tasks that can be scheduled"""
    DAILY_RESEARCH = "daily_research"
    PATTERN_VALIDATION = "pattern_validation"
    SYSTEM_TESTING = "system_testing"
    INTEGRITY_MONITORING = "integrity_monitoring"
    INTELLIGENCE_SHARING = "intelligence_sharing"
    PERFORMANCE_MONITORING = "performance_monitoring"
    QUALITY_VALIDATION = "quality_validation"
    AUTOMATED_DEPLOYMENT = "automated_deployment"
    EMERGENCY_SCANNING = "emergency_scanning"

@dataclass
class TaskExecution:
    """Record of task execution"""
    task: AutomationTask
    start_time: str
    end_time: str
    duration: float
    status: str
    output: str
    error: Optional[str]
    success: bool

@dataclass
class ScheduleConfig:
    """Configuration for task scheduling"""
    task: AutomationTask
    cron_expression: str
    enabled: bool
    priority: int
    timeout: int
    retry_on_failure: bool
    max_retries: int

class AutomationScheduler:
    """Manages and executes automated tasks on schedule"""

    def __init__(self):
        scanner_root = os.environ.get('SCANNER_ROOT', '/nas/Temp/repos/Atheon-GitHub-Scanner')
        self.base_dir = Path(scanner_root)
        self.data_dir = self.base_dir / "data"
        self.agents_dir = self.base_dir / "agents"
        self.automation_dir = self.agents_dir / "automation"
        self.execution_log = self.data_dir / "task_executions.json"

        # Create directories
        self.data_dir.mkdir(parents=True, exist_ok=True)
        self.automation_dir.mkdir(parents=True, exist_ok=True)

        # Load schedule configuration
        self.schedules = self.load_schedules()

        # Execution history
        self.execution_history: List[TaskExecution] = []
        self.load_execution_history()

        # Running tasks
        self.running_tasks: Dict[str, subprocess.Popen] = {}

    def load_schedules(self) -> List[ScheduleConfig]:
        """Load task schedules from configuration"""
        schedules = [
            # Daily automation tasks
            ScheduleConfig(
                task=AutomationTask.DAILY_RESEARCH,
                cron_expression="0 0 * * *",  # Daily at midnight UTC
                enabled=True,
                priority=1,
                timeout=3600,  # 1 hour
                retry_on_failure=True,
                max_retries=3
            ),
            ScheduleConfig(
                task=AutomationTask.PATTERN_VALIDATION,
                cron_expression="0 6 * * *",  # Daily at 6am UTC
                enabled=True,
                priority=2,
                timeout=1800,  # 30 minutes
                retry_on_failure=True,
                max_retries=2
            ),
            ScheduleConfig(
                task=AutomationTask.SYSTEM_TESTING,
                cron_expression="0 12 * * *",  # Daily at noon UTC
                enabled=True,
                priority=3,
                timeout=2400,  # 40 minutes
                retry_on_failure=False,
                max_retries=1
            ),
            ScheduleConfig(
                task=AutomationTask.INTEGRITY_MONITORING,
                cron_expression="0 */12 * * *",  # Every 12 hours
                enabled=True,
                priority=4,
                timeout=600,  # 10 minutes
                retry_on_failure=True,
                max_retries=3
            ),
            ScheduleConfig(
                task=AutomationTask.INTELLIGENCE_SHARING,
                cron_expression="0 4 * * *",  # Daily at 4am UTC
                enabled=True,
                priority=2,
                timeout=1200,  # 20 minutes
                retry_on_failure=True,
                max_retries=2
            ),
            ScheduleConfig(
                task=AutomationTask.PERFORMANCE_MONITORING,
                cron_expression="0 */6 * * *",  # Every 6 hours
                enabled=True,
                priority=5,
                timeout=900,  # 15 minutes
                retry_on_failure=True,
                max_retries=3
            ),
            ScheduleConfig(
                task=AutomationTask.QUALITY_VALIDATION,
                cron_expression="0 8 * * *",  # Daily at 8am UTC
                enabled=True,
                priority=2,
                timeout=1800,  # 30 minutes
                retry_on_failure=True,
                max_retries=2
            ),
            ScheduleConfig(
                task=AutomationTask.AUTOMATED_DEPLOYMENT,
                cron_expression="0 21 * * *",  # Daily at 9pm UTC
                enabled=True,
                priority=6,
                timeout=2400,  # 40 minutes
                retry_on_failure=False,
                max_retries=1
            ),
            ScheduleConfig(
                task=AutomationTask.EMERGENCY_SCANNING,
                cron_expression="0 3 * * *",  # Daily at 3am UTC
                enabled=False,  # Disabled unless needed
                priority=1,
                timeout=1800,  # 30 minutes
                retry_on_failure=True,
                max_retries=3
            )
        ]

        return schedules

    def load_execution_history(self):
        """Load task execution history"""
        if self.execution_log.exists():
            try:
                with open(self.execution_log, 'r') as f:
                    history_data = json.load(f)
                    self.execution_history = [
                        TaskExecution(**exec_data) for exec_data in history_data
                    ]
                logger.info(f"Loaded {len(self.execution_history)} execution records")
            except Exception as e:
                logger.error(f"Failed to load execution history: {e}")

    def save_execution_history(self):
        """Save task execution history"""
        try:
            history_data = [asdict(execution) for execution in self.execution_history]
            with open(self.execution_log, 'w') as f:
                json.dump(history_data, f, indent=2, default=str)
            logger.info("Saved execution history")
        except Exception as e:
            logger.error(f"Failed to save execution history: {e}")

    async def execute_task(self, task: AutomationTask) -> TaskExecution:
        """Execute a single automated task"""
        logger.info(f"🚀 Executing task: {task.value}")
        start_time = time.time()
        start_datetime = datetime.now().isoformat()

        try:
            # Find task configuration
            schedule_config = next((s for s in self.schedules if s.task == task), None)
            if not schedule_config:
                raise ValueError(f"No schedule configuration found for task: {task}")

            # Execute task
            output = await self.run_task_script(task, schedule_config.timeout)

            end_time = time.time()
            end_datetime = datetime.now().isoformat()
            duration = end_time - start_time

            execution = TaskExecution(
                task=task,
                start_time=start_datetime,
                end_time=end_datetime,
                duration=duration,
                status="completed",
                output=output,
                error=None,
                success=True
            )

            logger.info(f"✅ Task {task.value} completed successfully in {duration:.2f}s")

        except Exception as e:
            end_time = time.time()
            end_datetime = datetime.now().isoformat()
            duration = end_time - start_time

            execution = TaskExecution(
                task=task,
                start_time=start_datetime,
                end_time=end_datetime,
                duration=duration,
                status="failed",
                output="",
                error=str(e),
                success=False
            )

            logger.error(f"❌ Task {task.value} failed: {e}")

        # Record execution
        self.execution_history.append(execution)
        self.save_execution_history()

        return execution

    async def run_task_script(self, task: AutomationTask, timeout: int) -> str:
        """Run the script for a specific task"""
        task_scripts = {
            AutomationTask.DAILY_RESEARCH: "daily_research_agent.py",
            AutomationTask.PATTERN_VALIDATION: "pattern_validation_agent.py",
            AutomationTask.SYSTEM_TESTING: "system_testing_agent.py",
            AutomationTask.INTEGRITY_MONITORING: "integrity_monitoring_agent.py",
            AutomationTask.INTELLIGENCE_SHARING: "intelligence_sharing_agent.py",
            AutomationTask.PERFORMANCE_MONITORING: "performance_monitoring_agent.py",
            AutomationTask.QUALITY_VALIDATION: "quality_enforcement_gate.py",
            AutomationTask.AUTOMATED_DEPLOYMENT: "automated_deployment_agent.py",
            AutomationTask.EMERGENCY_SCANNING: "emergency_scanning_agent.py"
        }

        script_name = task_scripts.get(task)
        if not script_name:
            raise ValueError(f"No script defined for task: {task}")

        script_path = self.automation_dir / script_name
        if not script_path.exists():
            # Try agents directory
            script_path = self.agents_dir / script_name

        if not script_path.exists():
            raise FileNotFoundError(f"Script not found: {script_path}")

        # Run script
        process = await asyncio.create_subprocess_exec(
            'python3', str(script_path),
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )

        try:
            stdout, stderr = await asyncio.wait_for(
                process.communicate(),
                timeout=timeout
            )

            output = stdout.decode() if stdout else ""
            error = stderr.decode() if stderr else ""

            if process.returncode != 0:
                raise RuntimeError(f"Script failed with return code {process.returncode}: {error}")

            return output

        except asyncio.TimeoutError:
            process.kill()
            await process.wait()
            raise TimeoutError(f"Task {task.value} timed out after {timeout}s")

    async def execute_scheduled_tasks(self):
        """Execute all tasks that are due for execution"""
        logger.info("🔍 Checking for scheduled tasks...")

        now = datetime.now()
        due_tasks = []

        for schedule in self.schedules:
            if not schedule.enabled:
                continue

            # Check if task is due (simplified - in production use proper cron parsing)
            if self.is_task_due(schedule, now):
                due_tasks.append(schedule.task)

        if not due_tasks:
            logger.info("No tasks due for execution")
            return

        logger.info(f"Found {len(due_tasks)} due tasks")

        # Execute tasks by priority
        due_tasks.sort(key=lambda task: next(s.priority for s in self.schedules if s.task == task))

        for task in due_tasks:
            try:
                execution = await self.execute_task(task)
                logger.info(f"Task {task.value} execution status: {execution.status}")
            except Exception as e:
                logger.error(f"Failed to execute task {task.value}: {e}")

    def is_task_due(self, schedule: ScheduleConfig, now: datetime) -> bool:
        """Check if a task is due for execution"""
        # Simplified implementation - in production use proper cron parsing
        # For now, check if we're within the minute of the scheduled time

        # Parse cron expression (simplified)
        parts = schedule.cron_expression.split()
        if len(parts) != 5:
            return False

        minute, hour, day_month, month, day_week = parts

        # Check if current time matches schedule
        if minute != '0' and minute != str(now.minute):
            return False

        if hour != '*' and hour != str(now.hour):
            return False

        # For simplicity, return True if minute matches
        return now.minute == 0

    async def run_continuous_scheduler(self):
        """Run the continuous scheduler loop"""
        logger.info("🔄 Starting continuous automation scheduler")

        while True:
            try:
                # Execute scheduled tasks
                await self.execute_scheduled_tasks()

                # Wait before next check (1 minute)
                await asyncio.sleep(60)

            except Exception as e:
                logger.error(f"Scheduler loop error: {e}")
                await asyncio.sleep(60)

    def get_task_status(self, task: AutomationTask) -> Dict[str, Any]:
        """Get status information for a specific task"""
        recent_executions = [
            exec for exec in self.execution_history
            if exec.task == task
        ][-5:]  # Last 5 executions

        if not recent_executions:
            return {
                'task': task.value,
                'status': 'never_executed',
                'last_execution': None,
                'success_rate': 0.0
            }

        last_execution = recent_executions[-1]
        success_count = sum(1 for exec in recent_executions if exec.success)
        success_rate = success_count / len(recent_executions)

        return {
            'task': task.value,
            'status': last_execution.status,
            'last_execution': last_execution.end_time,
            'duration': last_execution.duration,
            'success_rate': success_rate,
            'recent_executions': len(recent_executions)
        }

    def get_scheduler_status(self) -> Dict[str, Any]:
        """Get overall scheduler status"""
        total_executions = len(self.execution_history)
        successful_executions = sum(1 for exec in self.execution_history if exec.success)

        task_statuses = {}
        for task in AutomationTask:
            task_statuses[task.value] = self.get_task_status(task)

        return {
            'scheduler_running': True,
            'total_executions': total_executions,
            'successful_executions': successful_executions,
            'overall_success_rate': successful_executions / total_executions if total_executions > 0 else 0.0,
            'enabled_tasks': sum(1 for s in self.schedules if s.enabled),
            'task_statuses': task_statuses,
            'last_update': datetime.now().isoformat()
        }

    async def run_manual_task(self, task: AutomationTask) -> TaskExecution:
        """Manually trigger a task execution"""
        logger.info(f"🔄 Manually triggering task: {task.value}")
        return await self.execute_task(task)

    def enable_task(self, task: AutomationTask):
        """Enable a scheduled task"""
        for schedule in self.schedules:
            if schedule.task == task:
                schedule.enabled = True
                logger.info(f"✅ Enabled task: {task.value}")
                return

        logger.warning(f"Task not found: {task.value}")

    def disable_task(self, task: AutomationTask):
        """Disable a scheduled task"""
        for schedule in self.schedules:
            if schedule.task == task:
                schedule.enabled = False
                logger.info(f"❌ Disabled task: {task.value}")
                return

        logger.warning(f"Task not found: {task.value}")

async def main():
    """Main execution function"""
    import argparse

    parser = argparse.ArgumentParser(description='Atheon GitHub Scanner Automation Scheduler')
    parser.add_argument('--mode', choices=['scheduler', 'once', 'manual'], default='scheduler',
                       help='Execution mode')
    parser.add_argument('--task', help='Task to execute (for manual mode)')
    parser.add_argument('--status', action='store_true', help='Show scheduler status')

    args = parser.parse_args()

    scheduler = AutomationScheduler()

    if args.status:
        # Show scheduler status
        status = scheduler.get_scheduler_status()
        print(json.dumps(status, indent=2, default=str))
        return 0

    if args.mode == 'manual' and args.task:
        # Execute specific task
        try:
            task = AutomationTask(args.task)
            execution = await scheduler.run_manual_task(task)
            print(f"✅ Task {task.value} executed successfully")
            print(f"   Status: {execution.status}")
            print(f"   Duration: {execution.duration:.2f}s")
            return 0 if execution.success else 1
        except ValueError:
            print(f"❌ Invalid task: {args.task}")
            return 1

    if args.mode == 'once':
        # Execute all due tasks once
        await scheduler.execute_scheduled_tasks()
        return 0

    if args.mode == 'scheduler':
        # Run continuous scheduler
        print("🚀 Starting Atheon GitHub Scanner Automation Scheduler")
        print("Press Ctrl+C to stop")

        try:
            await scheduler.run_continuous_scheduler()
        except KeyboardInterrupt:
            print("\n🛑 Scheduler stopped by user")
            return 0

    return 0

if __name__ == "__main__":
    import sys
    sys.exit(asyncio.run(main()))