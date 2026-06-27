// scripts/merge-scanner-data.cjs
// Merges all JSONL scanner results into a single deduplicated dataset
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '../../data');
const OUTPUT_FILE = path.join(__dirname, '../public/embedded-data.json');

const JSONL_FILES = [
  'mass_scan_results.jsonl',
  'local_packages_scan_20260619_195534.jsonl',
  'incremental_scan_results.jsonl',
  'comprehensive_scan_results.jsonl',
  'hybrid_scan_results.jsonl',
  'package_scan_results.jsonl',
  'universal_scan_results.jsonl',
];

function computeQualityScore(repo) {
  let score = 50;
  const stars = repo.stars || 0;
  score += Math.min(25, Math.log1p(stars) * 2.5);
  const forks = repo.forks || 0;
  if (stars > 0) {
    score += Math.min(10, (forks / stars) * 20);
  }
  const issues = repo.open_issues || 0;
  if (stars > 0 && issues > 0) {
    score += Math.min(5, 5 - (issues / stars) * 50);
  } else if (issues === 0) {
    score += 5;
  }
  if (repo.description && typeof repo.description === 'string' && repo.description.trim().length > 20) score += 5;
  const topics = repo.topics || [];
  score += Math.min(10, topics.length * 1.5);
  if (repo.license && typeof repo.license === 'string' && repo.license.toLowerCase() !== 'no license') score += 5;
  if (repo.homepage && typeof repo.homepage === 'string' && repo.homepage.trim()) score += 3;
  if (repo.default_branch && !['master', 'main'].includes(repo.default_branch)) score += 2;
  return Math.max(1, Math.min(100, Math.round(score)));
}

function assignTier(score) {
  if (score >= 90) return 'A';
  if (score >= 75) return 'B';
  if (score >= 60) return 'C';
  if (score >= 40) return 'D';
  return 'F';
}

// Load and deduplicate all records
const seen = new Map(); // full_name → record

for (const filename of JSONL_FILES) {
  const filepath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filepath)) {
    console.log(`Skipping (not found): ${filename}`);
    continue;
  }
  const content = fs.readFileSync(filepath, 'utf8');
  const lines = content.split('\n').filter(l => l.trim());
  let added = 0;
  let skipped = 0;
  for (const line of lines) {
    try {
      const repo = JSON.parse(line);
      const key = repo.full_name || repo.name;
      if (!key) { skipped++; continue; }
      // Prefer record with more fields (more complete)
      const existing = seen.get(key);
      if (!existing || Object.keys(repo).length > Object.keys(existing).length) {
        seen.set(key, repo);
        added++;
      } else {
        skipped++;
      }
    } catch {
      skipped++;
    }
  }
  console.log(`${filename}: ${added} added, ${skipped} skipped`);
}

console.log(`\nTotal unique repos: ${seen.size}`);

// Normalize records
const scans = Array.from(seen.values()).map((repo, i) => {
  const name = repo.full_name || repo.name || `repo_${i}`;
  const quality_score = computeQualityScore(repo); // Always recompute to get realistic scores
  return {
    id: repo.scan_id || name.toLowerCase().replace(/[^a-z0-9]+/g, '_'),
    name,
    language: repo.language || 'Unknown',
    stars: repo.stars || 0,
    forks: repo.forks || 0,
    open_issues: repo.open_issues || 0,
    quality_score,
    tier: assignTier(quality_score), // Always recompute from actual score
    scan_method: repo.scan_method || repo.source || 'mass_scan',
    scan_date: repo.scan_date || repo.pushed_at || new Date().toISOString(),
    total_dependencies: repo.total_dependencies || 0,
    total_files: repo.total_files || 0,
    description: repo.description || '',
    license: (() => {
      const lic = repo.license;
      if (!lic) return null;
      if (typeof lic === 'string') return lic;
      if (typeof lic === 'object' && lic.name) return lic.name; // SPDX object
      return String(lic);
    })(),
    homepage: typeof repo.homepage === 'string' ? repo.homepage : null,
    topics: Array.isArray(repo.topics) ? repo.topics : (typeof repo.topics === 'object' && repo.topics !== null ? Object.keys(repo.topics) : []),
    size: repo.size || 0,
    default_branch: repo.default_branch || 'main',
    // Aggregate security analysis if present
    security_issues: repo.security_analysis || [],
    security_counts: repo.security_counts || { critical: 0, high: 0, medium: 0, low: 0 },
    quality_metrics: repo.quality_metrics || null,
    activity_analysis: repo.activity_analysis || null,
    category: repo.category || null,
    package_name: repo.package_name || null,
  };
});

// Sort by quality score descending
scans.sort((a, b) => b.quality_score - a.quality_score);

// Compute tier distribution
const tierDist = { A: 0, B: 0, C: 0, D: 0, F: 0 };
scans.forEach(r => tierDist[r.tier]++);

// Compute average quality score
const avgScore = Math.round(scans.reduce((s, r) => s + r.quality_score, 0) / scans.length);

// Compute top languages
const langMap = {};
scans.forEach(r => {
  if (!r.language) return;
  if (!langMap[r.language]) langMap[r.language] = { total: 0, count: 0 };
  langMap[r.language].total += r.quality_score;
  langMap[r.language].count++;
});
const topLanguages = Object.entries(langMap)
  .map(([language, { total, count }]) => ({ language, count, avgScore: Math.round(total / count) }))
  .sort((a, b) => b.count - a.count);

// Compute quality score distribution
const scoreCounts = {};
scans.forEach(s => { scoreCounts[s.quality_score] = (scoreCounts[s.quality_score] || 0) + 1; });

// Compute security stats
const secStats = scans.reduce((acc, r) => {
  const counts = r.security_counts || { critical: 0, high: 0, medium: 0, low: 0 };
  acc.critical += counts.critical || 0;
  acc.high += counts.high || 0;
  acc.medium += counts.medium || 0;
  acc.low += counts.low || 0;
  return acc;
}, { critical: 0, high: 0, medium: 0, low: 0 });
secStats.total = secStats.critical + secStats.high + secStats.medium + secStats.low;

const output = {
  data_source: 'merged_scanner_results',
  data_files_count: JSONL_FILES.length,
  total_repositories: scans.length,
  total_scans: scans.length,
  average_quality_score: avgScore,
  tier_distribution: tierDist,
  quality_score_distribution: scoreCounts,
  security_stats: secStats,
  top_languages: topLanguages,
  recent_scans: scans,
  last_updated: new Date().toISOString(),
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(output));
console.log(`\n✅ Merged data written to embedded-data.json`);
console.log(`   Total repos: ${scans.length}`);
console.log(`   Avg quality: ${avgScore}`);
console.log(`   Tier dist:`, tierDist);
console.log(`   Top langs:`, topLanguages.slice(0, 5).map(l => `${l.language}(${l.count})`).join(', '));
