#!/usr/bin/env node
/**
 * Lighthouse CI audit script
 * Runs Lighthouse against the deployed site and reports scores.
 *
 * Usage: node scripts/lighthouse-audit.js <url>
 * Example: node scripts/lighthouse-audit.js https://471850b8.atheon-scanner.pages.dev
 *
 * Requires: lighthouse (installed globally or via npx)
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const url = process.argv[2] || 'https://471850b8.atheon-scanner.pages.dev';
const reportDir = path.join(process.cwd(), 'lighthouse-reports');

console.log(`🔍 Running Lighthouse audit against: ${url}\n`);

try {
  // Run lighthouse with JSON output
  const output = execSync(
    `npx lighthouse ${url} --output=json --output-path=${reportDir}/report.json --chrome-flags="--headless --no-sandbox --disable-dev-shm-usage" --quiet --only-categories=performance,accessibility,best-practices,seo --preset=desktop`,
    { maxBuffer: 50 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] }
  ).toString();

  // Parse the JSON report
  const report = JSON.parse(fs.readFileSync(path.join(reportDir, 'report.json'), 'utf8'));

  const categories = report.categories;
  const results = {
    performance: Math.round((categories.performance?.score || 0) * 100),
    accessibility: Math.round((categories.accessibility?.score || 0) * 100),
    'best-practices': Math.round((categories['best-practices']?.score || 0) * 100),
    seo: Math.round((categories.seo?.score || 0) * 100),
    pwa: Math.round((categories.pwa?.score || 0) * 100),
  };

  console.log('📊 Lighthouse Scores:\n');
  console.log(`  Performance:    ${results.performance}/100 ${results.performance >= 90 ? '✅' : '❌'}`);
  console.log(`  Accessibility:  ${results.accessibility}/100 ${results.accessibility >= 95 ? '✅' : '❌'}`);
  console.log(`  Best Practices: ${results['best-practices']}/100 ${results['best-practices'] >= 90 ? '✅' : '❌'}`);
  console.log(`  SEO:           ${results.seo}/100 ${results.seo >= 90 ? '✅' : '❌'}`);
  console.log(`  PWA:           ${results.pwa}/100 ${results.pwa >= 90 ? '✅' : '❌'}`);
  console.log('');

  // Print top critical issues
  const audits = report.audits;
  const criticalAudits = Object.entries(audits)
    .filter(([key, audit]) => audit.score !== null && audit.score < 0.5 && audit.scoreDisplayMode !== 'informative')
    .sort((a, b) => (audits[a[0]].score || 1) - (audits[b[0]].score || 1))
    .slice(0, 10);

  if (criticalAudits.length > 0) {
    console.log('⚠️  Top Issues:\n');
    for (const [key, audit] of criticalAudits) {
      const score = Math.round((audit.score || 0) * 100);
      console.log(`  [${score}/100] ${audit.title}`);
      if (audit.description) {
        const desc = audit.description.replace(/\[.*?\]\(.*?\)/g, '').trim();
        console.log(`              ${desc.substring(0, 100)}...`);
      }
    }
  }

  // Write HTML report
  const htmlReport = execSync(`npx lighthouse ${url} --output=html --output-path=${reportDir}/report.html --chrome-flags="--headless --no-sandbox --disable-dev-shm-usage" --quiet --preset=desktop`, { maxBuffer: 50 * 1024 * 1024, stdio: 'ignore' }).toString();

  console.log(`\n📄 Full HTML report: ${reportDir}/report.html`);
  console.log(`📄 JSON report: ${reportDir}/report.json`);

  // Exit with error if any category is below threshold
  const failed = Object.entries(results).filter(([cat, score]) => {
    const thresholds = { performance: 90, accessibility: 95, 'best-practices': 90, seo: 90, pwa: 50 };
    return score < (thresholds[cat] || 90);
  });

  if (failed.length > 0) {
    console.log(`\n❌ ${failed.length} category(ies) below threshold`);
    process.exit(1);
  } else {
    console.log('\n✅ All categories pass thresholds!');
  }

} catch (err) {
  if (err.message?.includes('ENOENT')) {
    console.error('❌ lighthouse not found. Install with: npm install -g lighthouse');
  } else {
    console.error('❌ Audit failed:', err.message);
  }
  process.exit(1);
}
