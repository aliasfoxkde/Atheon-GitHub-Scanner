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

test.describe('Pipeline Page', () => {
  test('loads without console errors', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await ensureSWReady(page, '/pipeline');
    await page.waitForTimeout(2000);
    expect(errors).toHaveLength(0);
  });

  test('has heading "Scanner Methodology"', async ({ page }) => {
    await ensureSWReady(page, '/pipeline');
    await page.waitForTimeout(1500);
    await expect(page.locator('h1:has-text("Scanner Methodology")')).toBeVisible();
  });

  test('tab navigation works (Overview, Categories, Runs, Benchmarks)', async ({ page }) => {
    await ensureSWReady(page, '/pipeline');
    await page.waitForTimeout(1500);

    // Check all tab names visible in nav
    const tabNav = page.locator('nav').filter({ hasText: /overview|patterns|benchmarks|how-it-works/i }).first();
    await expect(tabNav).toBeVisible();

    // Click Patterns tab
    const patternsTab = page.locator('button:has-text("patterns")').first();
    await patternsTab.click();
    await page.waitForTimeout(800);
    // Should show pattern filter buttons
    const filterBtns = page.locator('button:has-text("All")');
    await expect(filterBtns.first()).toBeVisible({ timeout: 3000 });

    // Click Benchmarks tab
    const benchmarksTab = page.locator('button:has-text("benchmarks")').first();
    await benchmarksTab.click();
    await page.waitForTimeout(800);
    const table = page.locator('table').first();
    await expect(table).toBeVisible({ timeout: 3000 });

    // Click How it works tab
    const howItWorksTab = page.locator('button:has-text("how it works")').first();
    await howItWorksTab.click();
    await page.waitForTimeout(800);
    const howContent = page.locator('text=/Pattern Matching Engine/');
    await expect(howContent).toBeVisible({ timeout: 3000 });

    // Back to overview
    const overviewTab = page.locator('button:has-text("overview")').first();
    await overviewTab.click();
    await page.waitForTimeout(800);
    await expect(page.locator('text=/Pattern Categories/')).toBeVisible({ timeout: 3000 });
  });

  test('category cards render in Categories tab', async ({ page }) => {
    await ensureSWReady(page, '/pipeline');
    await page.waitForTimeout(1500);
    // Navigate to patterns tab
    const patternsTab = page.locator('button:has-text("patterns")').first();
    await patternsTab.click();
    await page.waitForTimeout(1000);
    // Category cards should be visible — at least one category button visible
    const catButton = page.locator('button:has-text("Secrets Detection")').first();
    await expect(catButton).toBeVisible({ timeout: 5000 });
  });

  test('Overview tab shows summary stats', async ({ page }) => {
    await ensureSWReady(page, '/pipeline');
    await page.waitForTimeout(1500);
    // Overview tab should show Pattern Categories list
    const overviewContent = page.locator('text=/Pattern Categories/');
    await expect(overviewContent).toBeVisible();
    // Version/build info banner
    const versionBanner = page.locator('text=/Atheon Enhanced/');
    await expect(versionBanner.first()).toBeVisible();
  });
});