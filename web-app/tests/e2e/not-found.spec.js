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

test.describe('404 Not Found Page', () => {
  test('"/nonexistent" route shows 404 page', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await ensureSWReady(page, '/nonexistent');
    await page.waitForTimeout(1500);
    // Should not have excessive console errors (some 404s may log, but no crash)
    expect(errors.filter(e => !e.includes('404'))).toHaveLength(0);
  });

  test('has "404" text visible', async ({ page }) => {
    await ensureSWReady(page, '/nonexistent');
    await page.waitForTimeout(1500);
    const errorCode = page.locator('.text-9xl, [class*="text-9xl"]').first();
    await expect(errorCode).toBeVisible();
    await expect(page.locator('text=/404/').first()).toBeVisible();
  });

  test('has "Page not found" heading', async ({ page }) => {
    await ensureSWReady(page, '/nonexistent');
    await page.waitForTimeout(1500);
    await expect(page.locator('h1:has-text("Page not found")')).toBeVisible();
  });

  test('"Go to Dashboard" link works', async ({ page }) => {
    await ensureSWReady(page, '/nonexistent');
    await page.waitForTimeout(1500);
    const dashboardLink = page.locator('a:has-text("Go to Dashboard")');
    await expect(dashboardLink).toBeVisible();
    await dashboardLink.click();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(1000);
    expect(page.url()).toContain('/dashboard');
  });

  test('"Browse Reports" link works', async ({ page }) => {
    await ensureSWReady(page, '/nonexistent');
    await page.waitForTimeout(1500);
    const reportsLink = page.locator('a:has-text("Browse Reports")');
    await expect(reportsLink).toBeVisible();
    await reportsLink.click();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(1000);
    expect(page.url()).toContain('/reports');
  });
});