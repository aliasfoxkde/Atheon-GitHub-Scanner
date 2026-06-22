#!/usr/bin/env python3
"""
Cargo Scanner for Atheon GitHub Scanner

This scanner:
1. Fetches popular crates from crates.io
2. Uses cargo add/install for local installation
3. Scans cargo registry directories locally
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
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Any, Optional
import multiprocessing
from concurrent.futures import ThreadPoolExecutor, as_completed
import requests
import threading

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class CargoScanner:
    """Cargo/crates.io scanner with parallel processing"""

    def __init__(self, output_dir: str = "../data", temp_dir: str = None):
        self.output_dir = Path(output_dir)
        self.temp_dir = Path(temp_dir) if temp_dir else Path(os.environ.get('ATHEON_SCANNER_PATH', os.path.join(os.environ.get('TEMP_DIR', tempfile.gettempdir()), 'atheon-scanner')))
        self.output_dir.mkdir(parents=True, exist_ok=True)
        self.temp_dir.mkdir(parents=True, exist_ok=True)

        self.scanned_count = 0
        self.results = []
        self.lock = threading.Lock()

        # Popular Rust crates
        self.popular_crates = [
            'serde', 'tokio', 'rayon', 'libc', 'log', 'rand', 'regex',
            'clap', 'thiserror', 'anyhow', 'itertools', 'chrono', 'uuid',
            'base64', 'hex', 'percent-encoding', 'http', 'hyper', 'reqwest',
            'actix-web', 'rocket', 'warp', 'tide', 'async-std', 'futures',
            'tracing', 'env_logger', 'config', 'dotenv', 'shellexpand',
            'assert_cmd', 'criterion', 'proptest', 'quickcheck', 'fake',
            'mockito', 'wiremock', 'tempfile', 'which', 'dirs', 'glob',
            'walkdir', 'ignore', 'structopt', 'bitflags', 'bytes', 'slug',
            'url', 'idna', 'unicode-xid', 'unicode-normalization', 'encoding_rs'
        ]

    def fetch_popular_crates(self, count: int = 100) -> List[str]:
        """Fetch popular crates from crates.io"""
        try:
            logger.info(f"📊 Fetching top {count} crates from crates.io...")

            crates = set()

            # Try crates.io API
            for crate_name in self.popular_crates[:count]:
                try:
                    url = f"https://crates.io/api/v1/crates/{crate_name}"
                    response = requests.get(url, timeout=5)
                    if response.status_code == 200:
                        crates.add(crate_name)
                        if len(crates) >= count:
                            break
                except:
                    continue

            logger.info(f"Found {len(crates)} crates from crates.io")
            return list(crates)[:count]

        except Exception as e:
            logger.error(f"Error fetching crates: {e}")
            return self.popular_crates[:count]

    def download_and_scan_crate(self, crate_name: str, worker_id: int = 0) -> Optional[Dict]:
        """Download and scan a single Cargo crate"""
        try:
            with self.lock:
                current_count = self.scanned_count
                if current_count % 10 == 0 and current_count > 0:
                    logger.info(f"📊 Progress: {current_count} crates scanned")

            # Create temporary project directory
            project_dir = self.temp_dir / f"cargo_worker_{worker_id}" / crate_name
            project_dir.mkdir(parents=True, exist_ok=True)

            # Create a minimal Cargo.toml
            cargo_toml = f"""
[package]
name = "{crate_name}-scanner"
version = "0.1.0"
edition = "2021"

[dependencies]
{crate_name} = "*"
"""

            with open(project_dir / 'Cargo.toml', 'w') as f:
                f.write(cargo_toml)

            # Create minimal src/lib.rs
            src_dir = project_dir / 'src'
            src_dir.mkdir(exist_ok=True)
            with open(src_dir / 'lib.rs', 'w') as f:
                f.write(f"// Placeholder for {crate_name}\n")

            # Download dependencies using cargo fetch
            download_cmd = ['cargo', 'fetch', '--manifest-path', str(project_dir / 'Cargo.toml')]

            result = subprocess.run(
                download_cmd,
                capture_output=True,
                text=True,
                timeout=180,  # 3 minute timeout
                cwd=project_dir
            )

            if result.returncode != 0:
                return None

            # Check cargo registry cache
            cargo_home = os.environ.get('CARGO_HOME', Path.home() / '.cargo')
            registry_dir = Path(cargo_home) / 'registry' / 'src' / 'index.crates.io'

            if not registry_dir.exists():
                return None

            # Scan the crate directory
            scan_result = {
                'name': crate_name,
                'type': 'cargo_crate',
                'scan_date': datetime.now().isoformat(),
                'total_dependencies': 0,
                'total_files': 0,
                'total_size_bytes': 0,
                'quality_score': 100,
                'tier': 'A',
                'scan_method': 'local_cargo_fetch',
                'language': 'Rust',
                'stars': 0,
                'scan_id': f"cargo_{crate_name}_{int(time.time())}"
            }

            # Try to find the specific crate directory
            crate_pattern = f"{crate_name.replace('-', '_')}-*"
            for crate_dir in registry_dir.rglob(crate_name.replace('-', '*')):
                if crate_dir.is_dir():
                    try:
                        files = list(crate_dir.rglob('*.rs'))
                        scan_result['total_files'] += len(files)
                        scan_result['total_size_bytes'] += sum(f.stat().st_size for f in files if f.is_file())
                    except:
                        pass
                    break

            # Try to get GitHub info
            github_info = self.get_github_info(crate_name)
            if github_info:
                scan_result.update(github_info)

            with self.lock:
                self.scanned_count += 1
                self.results.append(scan_result)

            # Clean up
            try:
                shutil.rmtree(project_dir)
            except:
                pass

            return scan_result

        except subprocess.TimeoutExpired:
            return None
        except Exception as e:
            logger.error(f"Error scanning {crate_name}: {e}")
            return None

    def get_github_info(self, crate_name: str) -> Optional[Dict]:
        """Get GitHub information for a Cargo crate"""
        try:
            possible_repos = [
                f"{crate_name.replace('-', '-')}",
                f"rust-lang/{crate_name.replace('-', '-')}",
                f"{crate_name.replace('_', '-')}",
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
                            'language': data.get('language', 'Rust'),
                            'full_name': data.get('full_name'),
                            'forks': data.get('forks_count', 0)
                        }
                except:
                    continue

        except:
            return None

    def run_scan(self, target_count: int = 100) -> Dict:
        """Run Cargo scan"""
        logger.info(f"🦀 CARGO SCAN: Target {target_count}+ crates")

        # Fetch popular crates
        crates = self.fetch_popular_crates(target_count)

        if not crates:
            logger.error("No Cargo crates found")
            return {}

        logger.info(f"🎯 Found {len(crates)} crates to scan")

        # Use thread pool for parallel processing
        num_workers = min(8, multiprocessing.cpu_count())
        logger.info(f"⚡ Using {num_workers} parallel workers")

        all_results = []

        # Scan in parallel
        with ThreadPoolExecutor(max_workers=num_workers) as executor:
            futures = {
                executor.submit(self.download_and_scan_crate, crate, i % num_workers): (crate, i)
                for i, crate in enumerate(crates)
            }

            for future in as_completed(futures):
                try:
                    result = future.result(timeout=300)  # 5 min timeout
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
        output_file = self.output_dir / f"cargo_scan_{timestamp}.jsonl"

        with open(output_file, 'w') as f:
            for result in all_results:
                f.write(json.dumps(result) + '\n')

        # Generate summary
        summary = {
            'scan_type': 'cargo',
            'timestamp': timestamp,
            'crates_scanned': len(all_results),
            'scan_method': 'parallel_cargo_fetch',
            'workers_used': num_workers,
            'total_dependencies': sum(r.get('total_dependencies', 0) for r in all_results),
            'total_files': sum(r.get('total_files', 0) for r in all_results),
            'crates_with_github': len([r for r in all_results if 'github_url' in r])
        }

        logger.info(f"✅ CARGO SCAN COMPLETE: {len(all_results)} crates scanned")
        logger.info(f"💾 Results saved to: {output_file}")

        return summary

def main():
    import argparse

    parser = argparse.ArgumentParser(description='Cargo scanner')
    parser.add_argument('--count', type=int, default=100, help='Target crate count')
    parser.add_argument('--output', type=str, default='../data', help='Output directory')
    parser.add_argument('--temp', type=str, default=None, help='Temp directory (default: from ATHEON_SCANNER_PATH or TEMP_DIR env)')

    args = parser.parse_args()

    scanner = CargoScanner(output_dir=args.output, temp_dir=args.temp)
    summary = scanner.run_scan(target_count=args.count)

    print(f"\n📊 CARGO SCAN RESULTS:")
    print(f"Crates Scanned: {summary.get('crates_scanned', 0)}")
    print(f"Workers Used: {summary.get('workers_used', 'N/A')}")
    print(f"Total Dependencies: {summary.get('total_dependencies', 0)}")
    print(f"Total Files: {summary.get('total_files', 0)}")
    print(f"Crates with GitHub Info: {summary.get('crates_with_github', 0)}")

if __name__ == "__main__":
    main()
