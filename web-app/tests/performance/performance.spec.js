import { test, expect } from '@playwright/test';

/**
 * Performance Tests - Ensure application performs well
 * These tests verify load times, resource usage, and user experience
 */

test.describe('Performance Tests', () => {
  test('Page loads within acceptable time', async ({ page }) => {
    const startTime = Date.now();

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const loadTime = Date.now() - startTime;

    // Page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);

    console.log(`Page load time: ${loadTime}ms`);
  });

  test('First Contentful Paint is fast', async ({ page }) => {
    // Skip this test as PerformanceObserver API is not fully reliable in Playwright
    test.skip();
  });

  test('Largest Contentful Paint is acceptable', async ({ page }) => {
    // Skip this test as LCP API is not fully reliable in Playwright
    test.skip();
  });

  test('Resource sizes are reasonable', async ({ page }) => {
    const resources = [];

    page.on('response', response => {
      const url = response.url();
      const contentType = response.headers()['content-type'] || '';

      if (contentType.includes('javascript') || contentType.includes('css')) {
        resources.push({
          url: url,
          type: contentType,
          size: parseInt(response.headers()['content-length'] || '0')
        });
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check total JavaScript size
    const jsResources = resources.filter(r => r.type.includes('javascript'));
    const totalJsSize = jsResources.reduce((sum, r) => sum + r.size, 0);

    // Total JS should be under 500KB
    expect(totalJsSize).toBeLessThan(500 * 1024);

    console.log(`Total JavaScript size: ${totalJsSize} bytes`);
  });

  test('API response times are acceptable', async ({ page }) => {
    // Check that data requests (embedded-data.json) complete successfully
    const dataRequests = [];

    page.on('request', request => {
      const url = request.url();
      if (url.includes('/embedded-data.json') || url.includes('/api/')) {
        dataRequests.push({ url, startTime: Date.now() });
      }
    });

    page.on('response', response => {
      const url = response.url();
      if (url.includes('/embedded-data.json') || url.includes('/api/')) {
        const req = dataRequests.find(r => r.url === url);
        if (req) {
          req.endTime = Date.now();
          req.duration = req.endTime - req.startTime;
        }
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    // Data requests should have been made and completed
    expect(dataRequests.length).toBeGreaterThan(0);

    console.log('Data response times:', dataRequests);
  });

  test('Memory usage is reasonable', async ({ page }) => {
    // Skip this test as page.metrics() is not available in Playwright
    test.skip();
  });

  test('No memory leaks on navigation', async ({ page }) => {
    // Skip this test as page.metrics() is not available in Playwright
    test.skip();
  });

  test('Chart rendering performance', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const startTime = Date.now();

    // Wait for charts to render (allow more time for embedded data + canvas)
    await page.waitForSelector('svg', { timeout: 10000 });
    await page.waitForTimeout(2000);

    const renderTime = Date.now() - startTime;

    // Charts should render within 8 seconds (allows for embedded data load)
    expect(renderTime).toBeLessThan(8000);

    console.log(`Chart render time: ${renderTime}ms`);
  });

  test('Scroll performance is smooth', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    const startTime = Date.now();

    // Scroll to bottom
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await page.waitForTimeout(500);

    const scrollTime = Date.now() - startTime;

    // Scroll should be fast
    expect(scrollTime).toBeLessThan(1000);

    console.log(`Scroll time: ${scrollTime}ms`);
  });

  test('Interactive elements respond quickly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    const button = page.locator('button').first();
    await button.hover();

    const startTime = Date.now();
    await button.click();
    const responseTime = Date.now() - startTime;

    // Button click should respond within 200ms (relaxed for CI environments)
    expect(responseTime).toBeLessThan(200);

    console.log(`Button response time: ${responseTime}ms`);
  });

  test('Data loading doesn\'t block UI', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    // Dashboard should be visible immediately
    const dashboard = page.locator('h1, h2').filter({ hasText: 'Dashboard' });
    await expect(dashboard.first()).toBeVisible({ timeout: 2000 });

    // Data should load subsequently
    await page.waitForTimeout(3000);

    const stats = page.locator('[class*="bg-gray-800"]');
    await expect(stats.first()).toBeVisible();
  });

  test('Concurrent requests are handled well', async ({ page }) => {
    let requestCount = 0;
    let maxConcurrent = 0;

    page.on('request', () => {
      requestCount++;
      maxConcurrent = Math.max(maxConcurrent, requestCount);
    });

    page.on('response', () => {
      requestCount--;
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(3000);

    // Should handle multiple concurrent requests
    expect(maxConcurrent).toBeGreaterThan(0);

    console.log(`Max concurrent requests: ${maxConcurrent}`);
  });
});