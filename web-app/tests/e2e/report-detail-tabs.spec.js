import { test, expect } from '@playwright/test';

// Helper: ensure service worker is ready and app is loaded
async function ensureSWReady(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  const isOffline = await page.evaluate(() => document.body.textContent.includes("You're offline"));
  if (isOffline) {
    await page.reload({ waitUntil: 'domcontentloaded' });
  }
  await page.waitForTimeout(1500);
}

test.describe('Report Detail Page', () => {
  test('Navigate to /reports/react/react and verify it loads', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await ensureSWReady(page, '/reports/react%2Freact');
    await page.waitForTimeout(3000);
    // Should not crash - either shows report content or "Report not found"
    const content = page.locator('main, [class*="space-y"]').first();
    await expect(content).toBeVisible({ timeout: 8000 });
    expect(errors.filter(e => !e.includes('favicon'))).toHaveLength(0);
  });

  test('Summary tab renders stats (quality score, tier, findings count)', async ({ page }) => {
    await ensureSWReady(page, '/reports/react%2Freact');
    await page.waitForTimeout(3000);

    // Should be on Summary tab by default - look for stat pills
    const scorePill = page.locator('text=/Quality Score/').first();
    await expect(scorePill).toBeVisible({ timeout: 8000 });

    // Tier badge should be visible
    const tierBadge = page.locator('text=/Tier [A-F]/').first();
    await expect(tierBadge).toBeVisible({ timeout: 3000 });

    // Findings count should be visible
    const findingsPill = page.locator('text=/Findings/').first();
    await expect(findingsPill).toBeVisible({ timeout: 3000 });
  });

  test('Findings tab renders or shows "No security findings" message', async ({ page }) => {
    await ensureSWReady(page, '/reports/react%2Freact');
    await page.waitForTimeout(3000);

    // Click Findings tab
    const findingsTab = page.locator('button:has-text("Findings")').first();
    await findingsTab.click();
    await page.waitForTimeout(1000);

    // Either shows findings list or the "No security findings" empty state
    const noFindings = page.locator('text=/No security findings were recorded/').first();
    const findingsList = page.locator('.bg-gray-900.rounded-lg.p-4.border.border-gray-700').first();
    const isEmpty = await noFindings.isVisible().catch(() => false);
    const hasFindings = await findingsList.isVisible().catch(() => false);
    expect(isEmpty || hasFindings).toBeTruthy();
  });

  test('Details tab renders repository info', async ({ page }) => {
    await ensureSWReady(page, '/reports/react%2Freact');
    await page.waitForTimeout(3000);

    // Click Details tab
    const detailsTab = page.locator('button:has-text("Details")').first();
    await detailsTab.click();
    await page.waitForTimeout(1000);

    // Should show Full Repository Details heading
    await expect(page.locator('text=/Full Repository Details/')).toBeVisible({ timeout: 3000 });
    // Should show some dl/dt/dd rows with repository info
    const dl = page.locator('dl').first();
    await expect(dl).toBeVisible({ timeout: 3000 });
  });

  test('Download JSON button exists', async ({ page }) => {
    await ensureSWReady(page, '/reports/react%2Freact');
    await page.waitForTimeout(3000);

    const downloadBtn = page.locator('button:has-text("Download JSON")').first();
    await expect(downloadBtn).toBeVisible({ timeout: 5000 });
  });

  test('Share button exists', async ({ page }) => {
    await ensureSWReady(page, '/reports/react%2Freact');
    await page.waitForTimeout(3000);

    const shareBtn = page.locator('button:has-text("Share")').first();
    await expect(shareBtn).toBeVisible({ timeout: 5000 });
  });
});