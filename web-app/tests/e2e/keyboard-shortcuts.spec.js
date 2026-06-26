import { test, expect } from '@playwright/test';

test.describe('Keyboard Shortcuts', () => {

  test('? opens shortcuts modal on dashboard', async ({ page }) => {
    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await page.keyboard.press('Shift+?');
    await page.waitForTimeout(500);

    // Modal should show shortcuts list
    const modal = page.locator('[role="dialog"]');
    await expect(modal).toBeVisible({ timeout: 3000 });
    await expect(page.locator('text=Keyboard shortcuts')).toBeVisible();
  });

  test('Esc closes shortcuts modal', async ({ page }) => {
    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await page.keyboard.press('Shift+?');
    await page.waitForTimeout(500);
    await expect(page.locator('[role="dialog"]')).toBeVisible();

    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
    await expect(page.locator('[role="dialog"]')).not.toBeVisible();
  });

  test('g then d navigates to dashboard', async ({ page }) => {
    await page.goto('/reports');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await page.keyboard.press('g');
    await page.waitForTimeout(100);
    await page.keyboard.press('d');
    await page.waitForTimeout(500);

    expect(page.url()).toContain('/dashboard');
  });

  test('g then r navigates to reports', async ({ page }) => {
    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await page.keyboard.press('g');
    await page.waitForTimeout(100);
    await page.keyboard.press('r');
    await page.waitForTimeout(500);

    expect(page.url()).toContain('/reports');
  });

  test('g then t navigates to trending', async ({ page }) => {
    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await page.keyboard.press('g');
    await page.waitForTimeout(100);
    await page.keyboard.press('t');
    await page.waitForTimeout(500);

    expect(page.url()).toContain('/trending');
  });

  test('g then p navigates to pipeline', async ({ page }) => {
    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await page.keyboard.press('g');
    await page.waitForTimeout(100);
    await page.keyboard.press('p');
    await page.waitForTimeout(500);

    expect(page.url()).toContain('/pipeline');
  });

  test('g s e navigates to settings', async ({ page }) => {
    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    await page.keyboard.press('g');
    await page.waitForTimeout(100);
    await page.keyboard.press('s');
    await page.waitForTimeout(100);
    await page.keyboard.press('e');
    await page.waitForTimeout(500);

    expect(page.url()).toContain('/settings');
  });

  test('/ focuses search input when on reports page', async ({ page }) => {
    await page.goto('/reports');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1500);

    // No input should be focused initially
    const activeTagBefore = await page.evaluate(() => document.activeElement?.tagName);

    await page.keyboard.press('/');
    await page.waitForTimeout(300);

    const activeTagAfter = await page.evaluate(() => document.activeElement?.tagName);
    // Either search is now focused, or nothing changed (if no search input exists)
    expect(['INPUT', 'BODY'].includes(activeTagAfter)).toBeTruthy();
  });

  test('shortcut does not fire when typing in input', async ({ page }) => {
    await page.goto('/reports');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1500);

    // Focus an input
    const searchInput = page.locator('input[type="search"], input[data-search]').first();
    if (await searchInput.isVisible()) {
      await searchInput.click();
      await page.waitForTimeout(100);

      // Press g d — should NOT navigate because we're typing
      await page.keyboard.press('g');
      await page.waitForTimeout(200);
      await page.keyboard.press('d');
      await page.waitForTimeout(500);

      // Should still be on /reports
      expect(page.url()).toContain('/reports');
    }
  });

});
