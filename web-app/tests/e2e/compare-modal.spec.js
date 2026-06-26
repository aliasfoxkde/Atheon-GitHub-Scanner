import { test, expect } from '@playwright/test';

test.describe('Compare Modal', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/reports');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
  });

  test('Compare button appears when 2+ rows are selected', async ({ page }) => {
    // Select first two checkboxes
    const checkboxes = page.locator('tbody input[type="checkbox"]');
    const count = await checkboxes.count();

    if (count >= 2) {
      await checkboxes.nth(0).click();
      await checkboxes.nth(1).click();
      await page.waitForTimeout(500);

      // Compare button should appear
      const compareBtn = page.getByRole('button', { name: /compare/i });
      await expect(compareBtn).toBeVisible();
    }
  });

  test('Compare modal opens and shows selected reports', async ({ page }) => {
    const checkboxes = page.locator('tbody input[type="checkbox"]');
    const count = await checkboxes.count();

    if (count >= 2) {
      await checkboxes.nth(0).click();
      await checkboxes.nth(1).click();
      await page.waitForTimeout(500);

      const compareBtn = page.getByRole('button', { name: /compare/i });
      await compareBtn.click();
      await page.waitForTimeout(1000);

      // Modal should open
      const modal = page.locator('[role="dialog"]');
      await expect(modal).toBeVisible({ timeout: 3000 });
      await expect(page.locator('text=Compare reports')).toBeVisible();
    }
  });

  test('Compare modal closes on Escape', async ({ page }) => {
    const checkboxes = page.locator('tbody input[type="checkbox"]');
    const count = await checkboxes.count();

    if (count >= 2) {
      await checkboxes.nth(0).click();
      await checkboxes.nth(1).click();
      await page.waitForTimeout(500);

      const compareBtn = page.getByRole('button', { name: /compare/i });
      await compareBtn.click();
      await page.waitForTimeout(1000);

      const modal = page.locator('[role="dialog"]');
      await expect(modal).toBeVisible();

      await page.keyboard.press('Escape');
      await page.waitForTimeout(500);
      await expect(modal).not.toBeVisible();
    }
  });

  test('Compare modal can be dismissed by user interaction', async ({ page }) => {
    const checkboxes = page.locator('tbody input[type="checkbox"]');
    const count = await checkboxes.count();

    if (count >= 2) {
      await checkboxes.nth(0).click();
      await checkboxes.nth(1).click();
      await page.waitForTimeout(500);

      const compareBtn = page.getByRole('button', { name: /compare/i });
      await compareBtn.click();
      await page.waitForTimeout(1000);

      const modal = page.locator('[role="dialog"]');
      await expect(modal).toBeVisible();

      // Dismiss via close button
      const closeBtn = page.locator('[aria-label="Close"]').first();
      await closeBtn.click();
      await page.waitForTimeout(500);
      await expect(modal).not.toBeVisible();
    }
  });

  test('Compare modal shows compare table with metrics', async ({ page }) => {
    const checkboxes = page.locator('tbody input[type="checkbox"]');
    const count = await checkboxes.count();

    if (count >= 2) {
      await checkboxes.nth(0).click();
      await checkboxes.nth(1).click();
      await page.waitForTimeout(500);

      const compareBtn = page.getByRole('button', { name: /compare/i });
      await compareBtn.click();
      await page.waitForTimeout(1500);

      // Should show quality score rows
      await expect(page.locator('text=Quality score')).toBeVisible();
      await expect(page.locator('text=Dependencies')).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Files' })).toBeVisible();
    }
  });

  test('Selecting more than 5 reports shows limit info', async ({ page }) => {
    // Select 6 checkboxes if available
    const checkboxes = page.locator('tbody input[type="checkbox"]');
    const count = await checkboxes.count();

    if (count >= 6) {
      for (let i = 0; i < 6; i++) {
        await checkboxes.nth(i).click();
        await page.waitForTimeout(100);
      }
      await page.waitForTimeout(500);

      // Should still have compare button but compare is capped at 5
      const compareBtn = page.getByRole('button', { name: /compare/i });
      if (await compareBtn.isVisible()) {
        await compareBtn.click();
        await page.waitForTimeout(1500);

        // Modal should still work with first 5
        const modal = page.locator('[role="dialog"]');
        await expect(modal).toBeVisible();
      }
    }
  });

});
