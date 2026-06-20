#!/usr/bin/env python3
"""
Docker Base Scanner Framework for Atheon GitHub Scanner

This framework provides:
1. Docker container lifecycle management
2. Multi-language scanner support
3. Isolated runtime environments
4. Unified scanning interface
5. Pattern extraction and analysis
"""

import os
import json
import time
import logging
import subprocess
import docker
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Any, Optional
import threading

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class DockerScannerFramework:
    """Docker-based scanning framework for multi-language packages"""

    def __init__(self, output_dir: str = "../data"):
        self.output_dir = Path(output_dir)
        self.output_dir.mkdir(parents=True, exist_ok=True)

        # Initialize Docker client
        try:
            self.docker_client = docker.from_env()
            self.docker_client.ping()
            logger.info("✅ Docker connection established")
        except Exception as e:
            logger.error(f"❌ Docker connection failed: {e}")
            raise

        # Language-specific configurations
        self.scanner_configs = {
            'rubygems': {
                'image': 'ruby:3.2-alpine',
                'dockerfile': 'docker/scanners/Dockerfile.ruby',
                'command': 'python3 /scan/rubygems_scanner.py --count {count} --output /scan/data --temp /tmp/atheon-scanner',
                'volumes': {
                    './agents/rubygems_scanner.py': '/scan/rubygems_scanner.py',
                    './data': '/scan/data'
                }
            },
            'cargo': {
                'image': 'rust:1.70-alpine',
                'dockerfile': 'docker/scanners/Dockerfile.cargo',
                'command': 'python3 /scan/cargo_scanner.py --count {count} --output /scan/data --temp /tmp/atheon-scanner',
                'volumes': {
                    './agents/cargo_scanner.py': '/scan/cargo_scanner.py',
                    './data': '/scan/data'
                }
            },
            'go': {
                'image': 'golang:1.21-alpine',
                'dockerfile': 'docker/scanners/Dockerfile.go',
                'command': 'python3 /scan/go_scanner.py --count {count} --output /scan/data --temp /tmp/atheon-scanner',
                'volumes': {
                    './agents/go_scanner.py': '/scan/go_scanner.py',
                    './data': '/scan/data'
                }
            },
            'python': {
                'image': 'python:3.11-slim',
                'dockerfile': 'docker/scanners/Dockerfile.python',
                'command': 'python3 /scan/python_ultra_fast_scanner.py --count {count} --output /scan/data --temp /tmp/atheon-scanner',
                'volumes': {
                    './agents/python_ultra_fast_scanner.py': '/scan/python_ultra_fast_scanner.py',
                    './data': '/scan/data'
                }
            },
            'npm': {
                'image': 'node:20-alpine',
                'dockerfile': 'docker/scanners/Dockerfile.npm',
                'command': 'node /scan/npm_speed_scanner.js --count {count} --output /scan/data --temp /tmp/atheon-scanner',
                'volumes': {
                    './agents/npm_speed_scanner.py': '/scan/npm_speed_scanner.py',
                    './data': '/scan/data'
                }
            }
        }

    def build_scanner_image(self, language: str) -> bool:
        """Build Docker image for a specific language scanner"""
        if language not in self.scanner_configs:
            logger.error(f"Unknown language: {language}")
            return False

        config = self.scanner_configs[language]
        dockerfile_path = config['dockerfile']

        if not Path(dockerfile_path).exists():
            logger.warning(f"Dockerfile not found: {dockerfile_path}")
            return False

        try:
            logger.info(f"🐳 Building {language} scanner image...")
            image, build_logs = self.docker_client.images.build(
                path='.',
                dockerfile=dockerfile_path,
                tag=f"atheon-scanner-{language}:latest"
            )

            for log in build_logs:
                if 'stream' in log:
                    logger.debug(log['stream'].strip())

            logger.info(f"✅ {language} scanner image built successfully")
            return True

        except Exception as e:
            logger.error(f"❌ Failed to build {language} image: {e}")
            return False

    def run_scanner(self, language: str, package_count: int = 100, timeout: int = 600) -> Optional[Dict]:
        """Run scanner in Docker container for a specific language"""
        if language not in self.scanner_configs:
            logger.error(f"Unknown language: {language}")
            return None

        config = self.scanner_configs[language]

        try:
            logger.info(f"🐳 Running {language} scanner in Docker container...")

            # Prepare volumes
            volumes = {}
            for host_path, container_path in config['volumes'].items():
                host_abs_path = Path(host_path).resolve()
                if host_abs_path.exists():
                    volumes[str(host_abs_path)] = {'bind': container_path, 'mode': 'rw'}

            # Prepare command
            command = config['command'].format(count=package_count)

            # Run container
            container = self.docker_client.containers.run(
                image=f"atheon-scanner-{language}:latest",
                command=command,
                volumes=volumes,
                detach=True,
                remove=True,
                mem_limit='2g',
                cpu_period=100000,
                cpu_quota=200000,
                network_mode='bridge'
            )

            # Wait for completion with timeout
            start_time = time.time()
            result = None

            while time.time() - start_time < timeout:
                container.reload()
                if container.status == 'exited':
                    logs = container.logs().decode('utf-8')
                    logger.info(f"✅ {language} scanner completed")
                    result = self.parse_scan_results(logs, language)
                    break
                time.sleep(2)

            # Cleanup
            try:
                container.stop()
            except:
                pass

            return result

        except Exception as e:
            logger.error(f"❌ Failed to run {language} scanner: {e}")
            return None

    def parse_scan_results(self, logs: str, language: str) -> Dict:
        """Parse scanner output logs for results"""
        try:
            # Look for result summary in logs
            lines = logs.split('\n')

            result = {
                'language': language,
                'timestamp': datetime.now().isoformat(),
                'packages_scanned': 0,
                'total_files': 0,
                'total_dependencies': 0,
                'scan_method': 'docker_container',
                'status': 'unknown'
            }

            for line in lines:
                if 'packages scanned' in line.lower():
                    try:
                        result['packages_scanned'] = int(line.split(':')[-1].strip())
                    except:
                        pass
                elif 'total files' in line.lower():
                    try:
                        result['total_files'] = int(line.split(':')[-1].strip())
                    except:
                        pass
                elif 'total dependencies' in line.lower():
                    try:
                        result['total_dependencies'] = int(line.split(':')[-1].strip())
                    except:
                        pass
                elif 'complete' in line.lower():
                    result['status'] = 'completed'
                elif 'error' in line.lower():
                    result['status'] = 'error'

            return result

        except Exception as e:
            logger.error(f"Error parsing scan results: {e}")
            return {'status': 'parse_error', 'language': language}

    def run_parallel_scanners(self, languages: List[str], packages_per_language: int = 50) -> Dict:
        """Run multiple language scanners in parallel"""
        logger.info(f"🐳 Running {len(languages)} language scanners in parallel...")

        results = {}
        threads = []

        def run_scanner_thread(language, count):
            results[language] = self.run_scanner(language, count)

        for language in languages:
            thread = threading.Thread(target=run_scanner_thread, args=(language, packages_per_language))
            threads.append(thread)
            thread.start()

        for thread in threads:
            thread.join(timeout=1200)  # 20 min timeout per thread

        return results

    def cleanup_resources(self):
        """Cleanup Docker resources"""
        try:
            logger.info("🧹 Cleaning up Docker resources...")

            # Remove stopped containers
            stopped_containers = self.docker_client.containers.list(all=True, filters={'status': 'exited'})
            for container in stopped_containers:
                if 'atheon-scanner' in container.name:
                    container.remove()

            # Clean up dangling images
            dangling_images = self.docker_client.images.list(filters={'dangling': True})
            if dangling_images:
                self.docker_client.images.remove(image=dangling_images[0].id, force=False)

            logger.info("✅ Docker cleanup completed")

        except Exception as e:
            logger.error(f"Error during cleanup: {e}")

def main():
    import argparse

    parser = argparse.ArgumentParser(description='Docker scanner framework')
    parser.add_argument('--language', type=str, help='Language to scan (rubygems, cargo, go, python, npm)')
    parser.add_argument('--count', type=int, default=100, help='Package count per language')
    parser.add_argument('--parallel', action='store_true', help='Run all language scanners in parallel')
    parser.add_argument('--output', type=str, default='../data', help='Output directory')

    args = parser.parse_args()

    framework = DockerScannerFramework(output_dir=args.output)

    if args.parallel:
        # Run all scanners in parallel
        languages = ['rubygems', 'cargo', 'go', 'python']
        results = framework.run_parallel_scanners(languages, args.count)

        print("\n📊 PARALLEL SCAN RESULTS:")
        for language, result in results.items():
            print(f"{language.upper()}: {result}")

    elif args.language:
        # Run single language scanner
        result = framework.run_scanner(args.language, args.count)
        print(f"\n📊 {args.language.upper()} SCAN RESULTS:")
        print(json.dumps(result, indent=2))

    else:
        print("Please specify --language or --parallel")

    framework.cleanup_resources()

if __name__ == "__main__":
    main()
