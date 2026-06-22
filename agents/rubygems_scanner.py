#!/usr/bin/env python3
"""
RubyGems Scanner for Atheon GitHub Scanner

This scanner:
1. Fetches popular packages from RubyGems
2. Uses gem install for local installation
3. Scans gem directories locally
4. Uses parallel processing for maximum speed
"""

import os
import sys
import json
import time
import logging
import subprocess
import tempfile
import shutil
import re
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Any, Optional
import multiprocessing
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests
import threading

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


def sanitize_package_name(name: str) -> str:
    """Remove anything except alphanumeric, dash, underscore, dot"""
    return re.sub(r'[^a-zA-Z0-9._-]', '', name)

class RubyGemsScanner:
    """RubyGems scanner with parallel processing"""

    def __init__(self, output_dir: str = "../data", temp_dir: str = None):
        self.output_dir = Path(output_dir)
        self.temp_dir = Path(temp_dir) if temp_dir else Path(os.environ.get('ATHEON_SCANNER_PATH', os.path.join(os.environ.get('TEMP_DIR', tempfile.gettempdir()), 'atheon-scanner')))
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.temp_dir.mkdir(parents=True, exist_ok=True)

        self.scanned_count = 0
        self.results = []
        self.lock = threading.Lock()

        # Popular Ruby packages
        self.popular_gems = [
            'rails', 'rails-html-sanitizer', 'actioncable', 'actionmailbox',
            'actionmailer', 'actionpack', 'actionview', 'activejob',
            'activemodel', 'activerecord', 'activestorage', 'activesupport',
            'railties', 'rake', 'rack', 'rspec', 'rspec-core', 'rspec-expectations',
            'rspec-mocks', 'rspec-support', 'capybara', 'selenium-webdriver',
            'factory_bot', 'faker', 'devise', 'pundit', 'canard', 'rolify',
            'sidekiq', 'resque', 'delayed_job', 'sucker_punch', 'redis',
            'pg', 'mysql2', 'sqlite3', 'mongoid', 'elasticsearch-model',
            'kaminari', 'will_paginate', 'simple_form', 'formtastic',
            'bootstrap', 'foundation-rails', 'material-ui-sass',
            'jquery-rails', 'react-rails', 'vuejs-rails', 'angular-rails',
            'webpacker', 'sprockets', 'sass-rails', 'coffee-rails',
            'jbuilder', 'activemodel-serializers', 'fast_jsonapi',
            'paperclip', 'carrierwave', 'shrine', 'refile', 'dragonfly',
            'devise-token_auth', 'jwt', 'omniauth', 'omniauth-facebook',
            'omniauth-google-oauth2', 'omniauth-github', 'cancancan',
            'puma', 'unicorn', 'passenger', 'thin', 'mongrel', 'webrick'
        ]

    def fetch_popular_gems(self, count: int = 100) -> List[str]:
        """Fetch popular gems from RubyGems"""
        try:
            logger.info(f"📊 Fetching top {count} gems from RubyGems...")

            gems = set()

            # Try RubyGems API
            for gem_name in self.popular_gems[:count]:
                try:
                    url = f"https://rubygems.org/api/v1/gems/{gem_name}.json"
                    response = requests.get(url, timeout=5)
                    if response.status_code == 200:
                        gems.add(gem_name)
                        if len(gems) >= count:
                            break
                except requests.exceptions.RequestException:
                    continue  # Non-critical: API request failed, try next

            logger.info(f"Found {len(gems)} gems from RubyGems")
            return list(gems)[:count]

        except Exception as e:
            logger.error(f"Error fetching gems: {e}")
            return self.popular_gems[:count]

    def download_and_scan_gem(self, gem_name: str, worker_id: int = 0) -> Optional[Dict]:
        """Download and scan a single Ruby gem"""
        try:
            with self.lock:
                current_count = self.scanned_count
                if current_count % 10 == 0 and current_count > 0:
                    logger.info(f"📊 Progress: {current_count} gems scanned")

            # Sanitize gem name for use in paths and commands
            safe_gem_name = sanitize_package_name(gem_name)
            gem_dir = self.temp_dir / f"ruby_worker_{worker_id}" / safe_gem_name
            gem_dir.mkdir(parents=True, exist_ok=True)

            # Download gem using gem install
            download_cmd = [
                'gem', 'install', '--install-dir', str(gem_dir),
                '--no-document', safe_gem_name
            ]

            result = subprocess.run(
                download_cmd,
                capture_output=True,
                text=True,
                timeout=120  # 2 minute timeout
            )

            if result.returncode != 0:
                return None

            # Analyze the installed gem
            gems_dir = gem_dir / 'gems'

            if not gems_dir.exists():
                return None

            # Scan the gems directory
            scan_result = {
                'name': gem_name,
                'type': 'rubygem',
                'scan_date': datetime.now().isoformat(),
                'total_dependencies': 0,
                'total_files': 0,
                'total_size_bytes': 0,
                'quality_score': 100,
                'tier': 'A',
                'scan_method': 'local_gem_install',
                'language': 'Ruby',
                'stars': 0,
                'scan_id': f"rubygem_{gem_name}_{int(time.time())}"
            }

            # Count dependencies and files
            for item in gems_dir.iterdir():
                if item.is_dir() and not item.name.startswith('.'):
                    scan_result['total_dependencies'] += 1
                    try:
                        files = list(item.rglob('*'))
                        scan_result['total_files'] += len([f for f in files if f.is_file()])
                        scan_result['total_size_bytes'] += sum(f.stat().st_size for f in files if f.is_file())
                    except OSError:
                        pass  # Non-critical: file access error, continue

            # Try to get GitHub info
            github_info = self.get_github_info(gem_name)
            if github_info:
                scan_result.update(github_info)

            with self.lock:
                self.scanned_count += 1
                self.results.append(scan_result)

            # Clean up
            try:
                shutil.rmtree(gem_dir)
            except OSError:
                pass  # Non-critical: cleanup failed, continue

            return scan_result

        except subprocess.TimeoutExpired:
            return None
        except Exception as e:
            logger.error(f"Error scanning {gem_name}: {e}")
            return None

    def get_github_info(self, gem_name: str) -> Optional[Dict]:
        """Get GitHub information for a Ruby gem"""
        try:
            possible_repos = [
                f"{gem_name}",
                f"rails/{gem_name}",
            ]

            for repo_name in possible_repos:
                try:
                    url = f"https://api.github.com/repos/{repo_name}"
                    response = requests.get(url, timeout=3)
                    if response.status_code == 200:
                        data = response.json()
                        return {
                            'github_url': data.get('html_url'),
                            'stars': data.get('stargazers_count', 0),
                            'description': data.get('description'),
                            'language': data.get('language', 'Ruby'),
                            'full_name': data.get('full_name'),
                            'forks': data.get('forks_count', 0)
                        }
                except requests.exceptions.RequestException:
                    continue  # Non-critical: API request failed, try next

        except requests.exceptions.RequestException:
            return None

    def run_scan(self, target_count: int = 100) -> Dict:
        """Run RubyGems scan"""
        logger.info(f"💎 RUBYGEMS SCAN: Target {target_count}+ gems")

        # Fetch popular gems
        gems = self.fetch_popular_gems(target_count)

        if not gems:
            logger.error("No Ruby gems found")
            return {}

        logger.info(f"🎯 Found {len(gems)} gems to scan")

        # Use thread pool for parallel processing
        num_workers = min(10, multiprocessing.cpu_count())
        logger.info(f"⚡ Using {num_workers} parallel workers")

        all_results = []

        # Scan in parallel
        with ThreadPoolExecutor(max_workers=num_workers) as executor:
            futures = {
                executor.submit(self.download_and_scan_gem, gem, i % num_workers): (gem, i)
                for i, gem in enumerate(gems)
            }

            for future in as_completed(futures):
                try:
                    result = future.result(timeout=180)  # 3 min timeout
                    if result:
                        all_results.append(result)
                        with self.lock:
                            if len(all_results) % 10 == 0:
                                logger.info(f"📊 Progress: {len(all_results)}/{target_count}")
                except Exception as e:
                    logger.error(f"Error in future: {e}")
                    continue

        # Save final results
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        output_file = self.output_dir / f"rubygems_scan_{timestamp}.jsonl"

        with open(output_file, 'w') as f:
            for result in all_results:
                f.write(json.dumps(result) + '\n')

        # Generate summary
        summary = {
            'scan_type': 'rubygems',
            'timestamp': timestamp,
            'gems_scanned': len(all_results),
            'scan_method': 'parallel_gem_install',
            'workers_used': num_workers,
            'total_dependencies': sum(r.get('total_dependencies', 0) for r in all_results),
            'total_files': sum(r.get('total_files', 0) for r in all_results),
            'gems_with_github': len([r for r in all_results if 'github_url' in r])
        }

        logger.info(f"✅ RUBYGEMS SCAN COMPLETE: {len(all_results)} gems scanned")
        logger.info(f"💾 Results saved to: {output_file}")

        return summary

def main():
    import argparse

    parser = argparse.ArgumentParser(description='RubyGems scanner')
    parser.add_argument('--count', type=int, default=100, help='Target gem count')
    parser.add_argument('--output', type=str, default='../data', help='Output directory')
    parser.add_argument('--temp', type=str, default=None, help='Temp directory (default: from ATHEON_SCANNER_PATH or TEMP_DIR env)')

    args = parser.parse_args()

    scanner = RubyGemsScanner(output_dir=args.output, temp_dir=args.temp)
    summary = scanner.run_scan(target_count=args.count)

    print(f"\n📊 RUBYGEMS SCAN RESULTS:")
    print(f"Gems Scanned: {summary.get('gems_scanned', 0)}")
    print(f"Workers Used: {summary.get('workers_used', 'N/A')}")
    print(f"Total Dependencies: {summary.get('total_dependencies', 0)}")
    print(f"Total Files: {summary.get('total_files', 0)}")
    print(f"Gems with GitHub Info: {summary.get('gems_with_github', 0)}")

if __name__ == "__main__":
    main()
