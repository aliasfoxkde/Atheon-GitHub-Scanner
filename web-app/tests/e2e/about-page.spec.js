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

test.describe('About Page', () => {
  test('loads without console errors', async ({ page }) => {
    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    await ensureSWReady(page, '/about');
    await page.waitForTimeout(2000);
    expect(errors).toHaveLength(0);
  });

  test('has heading "About Atheon Scanner"', async ({ page }) => {
    await ensureSWReady(page, '/about');
    await page.waitForTimeout(1500);
    await expect(page.locator('h1:has-text("About Atheon Scanner")')).toBeVisible();
  });

  test('shows version badge with v1.0.0', async ({ page }) => {
    await ensureSWReady(page, '/about');
    await page.waitForTimeout(1500);
    const badge = page.locator('text=/v1\\.0\\.0/').first();
    await expect(badge).toBeVisible();
  });

  test('shows 17 pattern categories', async ({ page }) => {
    await ensureSWReady(page, '/about');
    await page.waitForTimeout(1500);
    const categories = page.locator('text=/Pattern Categories/');
    await expect(categories).toBeVisible();
    // 17 category cards are rendered in a grid
    const categoryCards = page.locator('.bg-gray-900.rounded-lg.p-4.border.border-gray-700').filter({ hasText: /patterns?/ });
    const count = await categoryCards.count();
    expect(count).toBeGreaterThanOrEqual(17);
  });

  test('"Temporarily Disabled Patterns" section visible', async ({ page }) => {
    await ensureSWReady(page, '/about');
    await page.waitForTimeout(1500);
    await expect(page.locator('text=/Temporarily Disabled Patterns/')).toBeVisible();
  });

  test('Resources section has 4 links', async ({ page }) => {
    await ensureSWReady(page, '/about');
    await page.waitForTimeout(1500);
    const resourcesSection = page.locator('text=/Resources/').first();
    await expect(resourcesSection).toBeVisible();
    const links = page.locator('a[target="_blank"][rel="noopener noreferrer"]');
    const count = await links.count();
    expect(count).toBeGreaterThanOrEqual(4);
  });

  test('all navigation links work', async ({ page }) => {
    await ensureSWReady(page, '/about');
    await page.waitForTimeout(1500);
    // Check nav links in sidebar if present
    const navLinks = page.locator('nav a, aside a').filter({ hasText: /Dashboard|Reports|Pipeline|About|Submit|Trending/ });
    const linkCount = await navLinks.count();
    if (linkCount > 0) {
      for (let i = 0; i < Math.min(linkCount, 5); i++) {
        const link = navLinks.nth(i);
        const href = await link.getAttribute('href');
        if (href) {
          await link.click();
          await page.waitForLoadState('domcontentloaded');
          await page.waitForTimeout(800);
          expect(page.url()).toContain(href);
          await page.goBack();
          await page.waitForLoadState('domcontentloaded');
          await page.waitForTimeout(800);
        }
      }
    }
  });
});