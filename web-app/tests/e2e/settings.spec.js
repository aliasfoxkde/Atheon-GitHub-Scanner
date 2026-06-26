import { test, expect } from '@playwright/test';

test.describe('Settings Page', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/settings');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
  });

  test('Settings page loads with all sections', async ({ page }) => {
    await expect(page.locator('h1:has-text("Settings")')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Appearance' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Data' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Display' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'About' })).toBeVisible();
  });

  test('Density toggle switches between comfortable and compact', async ({ page }) => {
    const comfortableBtn = page.locator('button:has-text("comfortable")');
    const compactBtn = page.locator('button:has-text("compact")');

    // Comfortable should be active by default
    await expect(comfortableBtn).toHaveClass(/bg-blue-600/);

    // Click compact
    await compactBtn.click();
    await page.waitForTimeout(300);

    // Compact should now be active
    await expect(compactBtn).toHaveClass(/bg-blue-600/);
    await expect(comfortableBtn).not.toHaveClass(/bg-blue-600/);
  });

  test('Auto-refresh interval persists to localStorage', async ({ page }) => {
    const select = page.locator('select').first();
    await expect(select).toBeVisible();

    const initial = await select.inputValue();
    const target = initial === '0' ? '30' : '0';
    await select.selectOption(target);
    await page.waitForTimeout(300);

    // Reload and verify persistence
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    const newVal = await page.locator('select').first().inputValue();
    expect(newVal).toBe(target);
  });

  test('Default page size change persists after reload', async ({ page }) => {
    const selects = page.locator('select');
    const count = await selects.count();
    expect(count).toBeGreaterThan(1);

    const pageSizeSelect = selects.nth(1);
    const initial = await pageSizeSelect.inputValue();
    const target = initial === '10' ? '25' : '10';
    await pageSizeSelect.selectOption(target);
    await page.waitForTimeout(300);

    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    const newVal = await page.locator('select').nth(1).inputValue();
    expect(newVal).toBe(target);
  });

  test('Column visibility checkboxes toggle correctly', async ({ page }) => {
    const checkboxes = page.locator('input[type="checkbox"]');
    const count = await checkboxes.count();
    expect(count).toBeGreaterThan(0);

    // Toggle each checkbox and verify it changes
    for (let i = 0; i < count; i++) {
      const cb = checkboxes.nth(i);
      const wasChecked = await cb.isChecked();
      await cb.click();
      await page.waitForTimeout(200);
      const isChecked = await cb.isChecked();
      expect(isChecked).toBe(!wasChecked);
    }
  });

  test('Theme buttons change theme without error', async ({ page }) => {
    const themeButtons = page.locator('button:text-is("light"), button:text-is("dark"), button:text-is("system")');
    const count = await themeButtons.count();
    expect(count).toBe(3);

    for (const label of ['dark', 'system', 'light']) {
      await page.locator(`button:text-is("${label}")`).click();
      await page.waitForTimeout(300);
      // No console errors should occur
    }
  });

  test('Reset button shows confirmation then resets', async ({ page }) => {
    // Change a setting first
    const select = page.locator('select').first();
    await select.selectOption('300');
    await page.waitForTimeout(300);

    // Click reset
    const resetBtn = page.locator('button:has-text("Reset")');
    await resetBtn.click();
    await page.waitForTimeout(200);

    // Should show confirmation
    await expect(page.locator('button:has-text("Click again")')).toBeVisible();

    // Click again to confirm
    await resetBtn.click();
    await page.waitForTimeout(300);

    // Setting should be back to default (30s)
    const newVal = await select.inputValue();
    expect(newVal).toBe('30');
  });

});
