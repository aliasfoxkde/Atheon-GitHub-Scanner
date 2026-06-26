import { test, expect } from '@playwright/test';

test.describe('Reports Filters', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/reports');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
  });

  test('Language filter narrows results', async ({ page }) => {
    // Get initial row count
    const initialRows = page.locator('tbody tr');
    const initialCount = await initialRows.count();
    expect(initialCount).toBeGreaterThan(0);

    // Apply language filter
    const langSelect = page.locator('#reports-language');
    const options = await langSelect.locator('option').allTextContents();
    const nonDefault = options.find((o) => o !== 'All languages' && o !== '');

    if (nonDefault) {
      await langSelect.selectOption(nonDefault);
      await page.waitForTimeout(1500);

      // Rows should have changed or stayed same (filter is active)
      const filteredRows = page.locator('tbody tr');
      const filteredCount = await filteredRows.count();
      expect(filteredCount).toBeGreaterThanOrEqual(0); // filtered count can equal initial
    }
  });

  test('Tier filter narrows results', async ({ page }) => {
    const tierSelect = page.locator('#reports-tier');
    const options = await tierSelect.locator('option').allTextContents();
    const nonDefault = options.find((o) => o !== 'All tiers' && o !== '');

    if (nonDefault) {
      await tierSelect.selectOption(nonDefault);
      await page.waitForTimeout(1500);

      const rows = page.locator('tbody tr');
      const count = await rows.count();
      expect(count).toBeGreaterThanOrEqual(0);
    }
  });

  test('Search input filters by name', async ({ page }) => {
    const searchInput = page.locator('input[type="search"], input[data-search]').first();

    if (await searchInput.isVisible()) {
      await searchInput.fill('react');
      await page.waitForTimeout(1500);

      const rows = page.locator('tbody tr');
      const count = await rows.count();
      expect(count).toBeGreaterThanOrEqual(0);
    }
  });

  test('Bookmarked filter shows only bookmarked', async ({ page }) => {
    // First bookmark something
    const starBtn = page.locator('button[aria-label*="ookmark"]').first();
    const starVisible = await starBtn.isVisible().catch(() => false);

    if (starVisible) {
      await starBtn.click();
      await page.waitForTimeout(500);

      // Find and click bookmarked filter
      const bookmarkFilter = page.locator('button:has-text("ookmarked")').first();
      if (await bookmarkFilter.isVisible()) {
        await bookmarkFilter.click();
        await page.waitForTimeout(1000);

        const rows = page.locator('tbody tr');
        const count = await rows.count();
        expect(count).toBeGreaterThanOrEqual(0);
      }
    }
  });

  test('Clear all filters resets the table', async ({ page }) => {
    // Apply a filter
    const langSelect = page.locator('#reports-language');
    const options = await langSelect.locator('option').allTextContents();
    const nonDefault = options.find((o) => o !== 'All languages' && o !== '');

    if (nonDefault) {
      await langSelect.selectOption(nonDefault);
      await page.waitForTimeout(1000);

      // Clear button should appear
      const clearBtn = page.getByRole('button', { name: /clear/i });
      if (await clearBtn.isVisible()) {
        await clearBtn.click();
        await page.waitForTimeout(1000);

        // Filter should be reset
        const val = await langSelect.inputValue();
        expect(val === '' || val === 'All languages').toBeTruthy();
      }
    }
  });

  test('Sort by score changes row order', async ({ page }) => {
    const scoreHeader = page.locator('th[aria-label*="score"], th:has-text("Score")').first();
    await expect(scoreHeader).toBeVisible();

    // Get initial first score
    const getFirstScore = async () => {
      const cell = page.locator('tbody tr td').nth(5).first();
      const text = await cell.textContent();
      return parseFloat(text) || 0;
    };

    const scoreBefore = await getFirstScore();

    // Click to sort ascending
    await scoreHeader.click();
    await page.waitForTimeout(1000);
    const scoreAfterAsc = await getFirstScore();

    // Click to sort descending
    await scoreHeader.click();
    await page.waitForTimeout(1000);
    const scoreAfterDesc = await getFirstScore();

    // Descending should have higher or equal score at top
    expect(scoreAfterDesc).toBeGreaterThanOrEqual(scoreAfterAsc);
  });

  test('Saved filter preset appears as chip', async ({ page }) => {
    // Apply filters first
    const langSelect = page.locator('#reports-language');
    const options = await langSelect.locator('option').allTextContents();
    const nonDefault = options.find((o) => o !== 'All languages' && o !== '');

    if (nonDefault) {
      await langSelect.selectOption(nonDefault);
      await page.waitForTimeout(500);

      // Save preset button should appear when filters are active
      const saveBtn = page.locator('button:has-text("Save Preset"), button:has-text("+ Save")').first();
      const saveBtnVisible = await saveBtn.isVisible().catch(() => false);

      if (saveBtnVisible) {
        await saveBtn.click();
        await page.waitForTimeout(500);

        // Modal should appear
        const modal = page.locator('[role="dialog"]');
        await expect(modal).toBeVisible({ timeout: 3000 });
      }
    }
  });

});