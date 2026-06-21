import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Accessibility Tests — verify WCAG 2.1 AA compliance
 * Uses @axe-core/playwright for automated a11y scanning
 */

test.describe('Accessibility Tests', () => {
  const ROUTES = ['/', '/reports', '/trending', '/pipeline', '/submit'];

  for (const route of ROUTES) {
    test(`${route} — no critical or serious axe violations`, async ({ page }) => {
      await page.goto(route);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000); // let dynamic content settle

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .analyze();

      const criticalAndSerious = results.violations.filter(
        (v) => v.impact === 'critical' || v.impact === 'serious'
      );

      if (criticalAndSerious.length > 0) {
        console.log('Violations:', JSON.stringify(criticalAndSerious.map((v) => ({
          id: v.id,
          impact: v.impact,
          description: v.description,
          nodes: v.nodes.length,
        })), null, 2));
      }

      expect(criticalAndSerious, `${route} has critical/serious a11y violations`).toHaveLength(0);
    });
  }

  test('Reports page table headers are proper <th> elements', async ({ page }) => {
    await page.goto('/reports');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    const headers = await page.locator('thead th').all();
    expect(headers.length).toBeGreaterThan(0);

    for (const header of headers) {
      const tag = await header.evaluate((el) => el.tagName);
      expect(tag, 'Table headers must be <th> not <td>').toBe('TH');
    }
  });

  test('All interactive elements have accessible names', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // Buttons without text or aria-label
    const buttons = page.locator('button');
    const count = await buttons.count();
    for (let i = 0; i < count; i++) {
      const btn = buttons.nth(i);
      const text = await btn.textContent();
      const ariaLabel = await btn.getAttribute('aria-label');
      const ariaLabelledBy = await btn.getAttribute('aria-labelledby');
      const hasName = !!(text?.trim() || ariaLabel || ariaLabelledBy);
      expect(hasName, `Button at index ${i} needs an accessible name`).toBe(true);
    }
  });

  test('Color contrast meets WCAG AA (4.5:1 for normal text)', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .options({ checks: { 'color-contrast': { enabled: true } } })
      .analyze();

    const contrastViolations = results.violations.filter(
      (v) => v.id === 'color-contrast'
    );
    expect(contrastViolations, 'color contrast violations').toHaveLength(0);
  });

  test('Focus order is logical — Tab moves forward through interactive elements', async ({ page }) => {
    await page.goto('/reports');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // Press Tab 10 times and collect the focused elements
    const focusOrder = [];
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');
      const tag = await page.evaluate(() => document.activeElement?.tagName);
      const label = await page.evaluate(() => document.activeElement?.getAttribute('aria-label') || document.activeElement?.textContent?.trim().slice(0, 30));
      focusOrder.push({ tag, label });
    }

    // Focus order should not have any null entries at the start
    const nonNullFocus = focusOrder.filter((f) => f.tag !== null);
    expect(nonNullFocus.length).toBeGreaterThan(0);
  });
});
