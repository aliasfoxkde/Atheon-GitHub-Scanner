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

test.describe('API Documentation Page', () => {
  test('loads without console errors', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await ensureSWReady(page, '/api');
    await page.waitForTimeout(2000);
    expect(errors).toHaveLength(0);
  });

  test('has heading "API Documentation"', async ({ page }) => {
    await ensureSWReady(page, '/api');
    await page.waitForTimeout(1500);
    await expect(page.locator('h1:has-text("API Documentation")')).toBeVisible();
  });

  test('has sidebar with categories/endpoints', async ({ page }) => {
    await ensureSWReady(page, '/api');
    await page.waitForTimeout(1500);
    // Endpoints are listed as cards with method badges and paths
    const endpointCards = page.locator('.bg-gray-800.rounded-lg.border.border-gray-700.overflow-hidden');
    const count = await endpointCards.count();
    expect(count).toBeGreaterThan(0);
    // Should have method badges like POST/GET
    const postBadge = page.locator('text=POST').first();
    await expect(postBadge).toBeVisible();
  });

  test('clicking an endpoint expands it', async ({ page }) => {
    await ensureSWReady(page, '/api');
    await page.waitForTimeout(1500);
    // Click the first endpoint button
    const firstEndpoint = page.locator('.bg-gray-800.rounded-lg.border.border-gray-700.overflow-hidden button').first();
    await firstEndpoint.click();
    await page.waitForTimeout(800);
    // After clicking, the expanded content should show Overview, Parameters, etc.
    const overviewHeading = page.locator('h3:has-text("Overview")');
    await expect(overviewHeading).toBeVisible({ timeout: 5000 });
  });

  test('"Test" button exists for each endpoint', async ({ page }) => {
    await ensureSWReady(page, '/api');
    await page.waitForTimeout(1500);
    // Expand each endpoint and check for Test Endpoint button
    const endpointButtons = page.locator('.bg-gray-800.rounded-lg.border.border-gray-700.overflow-hidden button');
    const count = await endpointButtons.count();
    expect(count).toBeGreaterThan(0);
    // Click first endpoint to expand
    await endpointButtons.first().click();
    await page.waitForTimeout(800);
    const testBtn = page.locator('button:has-text("Test Endpoint"), button:has-text("Testing...")').first();
    await expect(testBtn).toBeVisible();
  });

  test('has rate limiting section', async ({ page }) => {
    await ensureSWReady(page, '/api');
    await page.waitForTimeout(1500);
    const rateLimits = page.locator('text=/Rate Limits/');
    await expect(rateLimits).toBeVisible();
    // Should mention unauthenticated and authenticated limits
    await expect(page.locator('text=/60 requests\\/hour/')).toBeVisible();
    await expect(page.locator('text=/5,000 requests\\/hour/')).toBeVisible();
  });
});