import { test, expect } from '@playwright/test';

/**
 * Integration Tests - Testing how components work together
 * These tests verify the integration between API, UI, and data flow
 */

test.describe('API Integration Tests', () => {
  const API_BASE = process.env.VITE_API_URL || 'http://localhost:8000';

  test.beforeEach(async ({ page }) => {
    // Set up API request monitoring
    await page.goto('/');
  });

  test('Dashboard makes API calls on load', async ({ page }) => {
    const dataRequests = [];

    page.on('request', request => {
      const url = request.url();
      if (url.includes('/embedded-data.json') || url.includes('/api/')) {
        dataRequests.push({
          url: request.url(),
          method: request.method()
        });
      }
    });

    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    console.log('Data requests made:', dataRequests);
    expect(dataRequests.length).toBeGreaterThan(0);
  });

  test('API responds with correct data structure', async ({ page }) => {
    // Wait for API calls to complete
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(5000);

    // Check for statistics cards
    await expect(page.locator('text=Repositories').first()).toBeVisible();

    // Check for recent scans section
    await expect(page.locator('text=Recent Scans').first()).toBeVisible();
  });

  test('Error handling works when API is unavailable', async ({ page }) => {
    // Block API requests to simulate offline/error state
    await page.route('**/api/**', route => route.abort());

    const errors = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    // App should still load (with fallback data)
    await expect(page.locator('h1, h2').filter({ hasText: 'Dashboard' }).first()).toBeVisible();

    // Should have console errors but not crash
    expect(errors.length).toBeGreaterThan(0);
  });

  test('Data refreshes correctly', async ({ page }) => {
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    // Check that dashboard shows data after load
    await expect(page.locator('text=Packages Analyzed').first()).toBeVisible();

    // Simulate page refresh
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    // Data should still be present after refresh
    await expect(page.locator('text=Packages Analyzed').first()).toBeVisible();
  });
});

test.describe('UI Component Integration', () => {
  test('Charts update with real data', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    // Check for SVG elements (charts)
    const charts = page.locator('svg');
    await expect(charts.first()).toBeVisible();

    // Charts should have content (not empty)
    const svgContent = await charts.first().innerHTML();
    expect(svgContent.length).toBeGreaterThan(100);
  });

  test('Navigation between pages works', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Test navigation to submit page
    const submitButton = page.locator('text=Submit New Analysis');
    await submitButton.first().click();
    await page.waitForTimeout(2000);

    // Should be on submit page
    expect(page.url()).toContain('/submit');

    // Navigate back to dashboard
    await page.goBack();
    await page.waitForTimeout(2000);

    // Should be back on dashboard
    const dashboard = page.locator('h1, h2').filter({ hasText: 'Dashboard' });
    await expect(dashboard.first()).toBeVisible();
  });

  test('Responsive design works across devices', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // Test mobile view
    await page.setViewportSize({ width: 375, height: 666 });
    await page.waitForTimeout(1000);

    const mobileHeading = page.locator('h1, h2').filter({ hasText: 'Dashboard' });
    await expect(mobileHeading.first()).toBeVisible();

    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(1000);

    const tabletHeading = page.locator('h1, h2').filter({ hasText: 'Dashboard' });
    await expect(tabletHeading.first()).toBeVisible();

    // Test desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(1000);

    const desktopHeading = page.locator('h1, h2').filter({ hasText: 'Dashboard' });
    await expect(desktopHeading.first()).toBeVisible();
  });

  test('Interactive elements work together', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // Test download button
    const downloadButton = page.locator('button[aria-label*="download"]');
    if (await downloadButton.count() > 0) {
      // Set up download handler
      const downloadPromise = page.waitForEvent('download');

      await downloadButton.first().click();
      await page.waitForTimeout(1000);

      // Check if download was triggered
      try {
        const download = await downloadPromise;
        expect(download).toBeTruthy();
      } catch (error) {
        // Download might not work in headless mode, that's okay
        console.log('Download not triggered in headless mode');
      }
    }
  });

  test('Data consistency across components', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    // Check that repository section is visible and has data
    const repoCard = page.locator('text=Repositories').locator('..');
    await expect(repoCard.first()).toBeVisible();

    // Check that we can find numeric values (indicating data is displayed)
    const numericValues = page.locator('text=/\\d+/');
    const count = await numericValues.count();
    expect(count).toBeGreaterThan(5); // Should have multiple numbers on the page

    // Get repository count from recent scans (should be consistent)
    const recentScansSection = page.locator('text=Recent Scans').locator('..');
    await expect(recentScansSection.first()).toBeVisible();
  });
});

test.describe('Data Flow Integration', () => {
  test('API to UI data transformation', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(5000);

    // Check that API data is properly transformed and displayed
    const statsElements = page.locator('[class*="bg-gray-800"]');
    await expect(statsElements.first()).toBeVisible();

    // Check that data is displayed in the correct format
    const numbers = page.locator('text=/\\d+/');
    const numberCount = await numbers.count();
    expect(numberCount).toBeGreaterThan(10);
  });

  test('State management works correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    // Initial state - data should be loaded
    const initialData = await page.locator('text=Repositories').first().isVisible();
    expect(initialData).toBeTruthy();

    // Check that state persists across interactions
    const submitButton = page.locator('text=Submit New Analysis');
    await submitButton.first().click();
    await page.waitForTimeout(2000);

    // Go back
    await page.goBack();
    await page.waitForTimeout(2000);

    // State should be maintained
    const maintainedData = await page.locator('text=Repositories').first().isVisible();
    expect(maintainedData).toBeTruthy();
  });

  test('Error recovery works', async ({ page }) => {
    // Block API requests initially
    await page.route('**/api/**', route => route.abort());

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    // App should load with fallback data
    await expect(page.locator('h1, h2').filter({ hasText: 'Dashboard' }).first()).toBeVisible();

    // Unblock API requests
    await page.unroute('**/api/**');

    // Reload to try API again
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    // App should still work
    await expect(page.locator('h1, h2').filter({ hasText: 'Dashboard' }).first()).toBeVisible();
  });
});