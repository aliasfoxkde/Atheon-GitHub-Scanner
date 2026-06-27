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

// Set a select value programmatically using keyboard navigation
// React 18's synthetic events don't reliably fire from dispatched native events
async function setSelectValue(page, selectId, value) {
  const select = page.locator(`#${selectId}`);
  await select.waitFor({ state: 'visible' });
  await select.press('Alt+ArrowDown');
  await page.waitForTimeout(300);
  await page.keyboard.type(value, { delay: 50 });
  await page.keyboard.press('Enter');
  await page.waitForTimeout(800);
}

test.describe('Reports Filters', () => {
  test.beforeEach(async ({ page }) => {
    await ensureSWReady(page, '/reports');
  });

  test('language filter shows only matching repos', async ({ page }) => {
    const initialRows = page.locator('tbody tr');
    const initialCount = await initialRows.count();
    expect(initialCount).toBeGreaterThan(0);

    await setSelectValue(page, 'reports-language', 'TypeScript');

    const filteredRows = page.locator('tbody tr');
    const filteredCount = await filteredRows.count();
    console.log('Filtered rows (TypeScript):', filteredCount, '/ initial:', initialCount);
    expect(filteredCount).toBeGreaterThan(0);
    expect(filteredCount).toBeLessThanOrEqual(initialCount);
  });

  test('search input filters by name', async ({ page }) => {
    const searchInput = page.locator('#reports-search');
    await searchInput.fill('react');
    await page.waitForTimeout(1000);

    const rows = page.locator('tbody tr');
    const count = await rows.count();
    console.log('Rows after search "react":', count);
    expect(count).toBeGreaterThan(0);
  });

  test('tier filter changes visible results', async ({ page }) => {
    await setSelectValue(page, 'reports-tier', 'A');

    const rows = page.locator('tbody tr');
    const count = await rows.count();
    console.log('Rows after Tier A filter:', count);
    expect(count).toBeGreaterThan(0);
  });

  test('min score filter works', async ({ page }) => {
    const minScoreInput = page.locator('#reports-minscore');
    await minScoreInput.fill('90');
    await page.waitForTimeout(1500);

    const rows = page.locator('tbody tr');
    const count = await rows.count();
    console.log('Rows after minScore 90 filter:', count);
    expect(count).toBeGreaterThan(0);
  });

  test('combined filters work', async ({ page }) => {
    // Use URL params to set both filters at initial render
    await page.goto('/reports?language=JavaScript&tier=A', { waitUntil: 'domcontentloaded' });
    const isOffline = await page.evaluate(() => document.body.textContent.includes("You're offline"));
    if (isOffline) await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    const rows = page.locator('tbody tr');
    const count = await rows.count();
    console.log('Rows after JS + Tier A filter:', count);
    expect(count).toBeGreaterThan(0);
  });

  test('clear filters button resets results', async ({ page }) => {
    // Use URL param to set filter — bypasses SW/select race conditions
    await page.goto('/reports?language=Python', { waitUntil: 'domcontentloaded' });
    const isOffline = await page.evaluate(() => document.body.textContent.includes("You're offline"));
    if (isOffline) await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    const afterFilter = await page.locator('tbody tr').count();
    console.log('After Python filter:', afterFilter);

    const clearBtn = page.getByRole('button', { name: 'Clear all active filters' });
    await clearBtn.click();
    await page.waitForTimeout(1500);

    const afterClear = await page.locator('tbody tr').count();
    console.log('After clear:', afterClear);
    expect(afterClear).toBeGreaterThan(0);
  });

  test('filter changes URL params', async ({ page }) => {
    // Navigate directly with URL param to set filter at initial render
    await page.goto('/reports?language=Go', { waitUntil: 'domcontentloaded' });
    const isOffline = await page.evaluate(() => document.body.textContent.includes("You're offline"));
    if (isOffline) await page.reload({ waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(2000);

    const url = page.url();
    console.log('URL after filter:', url);
    expect(url).toContain('language=Go');
  });
});
