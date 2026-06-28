/**
 * Unit tests for analytics.js - analytics tracking service
 * Uses jest.mock() to avoid import.meta.env issues
 */

jest.mock('./analytics');

import { analyticsService, MockAnalyticsService } from './analytics';

describe('analytics.js', () => {
  beforeEach(() => {
    // Clear events before each test
    analyticsService.clearEvents();
    jest.clearAllMocks();
  });

  describe('analyticsService', () => {
    it('is defined', () => {
      expect(analyticsService).toBeDefined();
    });

    it('has userId and sessionId', () => {
      expect(analyticsService.userId).toBeDefined();
      expect(analyticsService.sessionId).toBeDefined();
    });
  });

  describe('trackPageView', () => {
    it('records pageview event', () => {
      analyticsService.trackPageView('/dashboard', { source: 'navigation' });

      expect(analyticsService.events).toHaveLength(1);
      expect(analyticsService.events[0].type).toBe('pageview');
      expect(analyticsService.events[0].page).toBe('/dashboard');
    });

    it('includes user and session ids in event', () => {
      analyticsService.trackPageView('/test');

      const event = analyticsService.events[0];
      expect(event.userId).toBeDefined();
      expect(event.sessionId).toBeDefined();
    });

    it('includes properties in event', () => {
      analyticsService.trackPageView('/test', { key: 'value' });

      expect(analyticsService.events[0].properties.key).toBe('value');
    });
  });

  describe('trackAction', () => {
    it('records action event', () => {
      analyticsService.trackAction('button_click', { buttonId: 'submit' });

      expect(analyticsService.events).toHaveLength(1);
      expect(analyticsService.events[0].type).toBe('action');
      expect(analyticsService.events[0].action).toBe('button_click');
    });
  });

  describe('trackError', () => {
    it('records error event with message', () => {
      const testError = new Error('Something went wrong');
      testError.stack = 'Error: Something went wrong\n    at test.js:1';
      analyticsService.trackError(testError, { context: 'test' });

      expect(analyticsService.events).toHaveLength(1);
      expect(analyticsService.events[0].type).toBe('error');
      expect(analyticsService.events[0].error).toBe('Something went wrong');
    });

    it('handles string errors', () => {
      analyticsService.trackError('Generic error string');

      expect(analyticsService.events).toHaveLength(1);
      expect(analyticsService.events[0].error).toBe('Generic error string');
    });

    it('includes context properties', () => {
      const testError = new Error('Test');
      analyticsService.trackError(testError, { userId: '123' });

      expect(analyticsService.events[0].properties.userId).toBe('123');
    });
  });

  describe('trackPerformance', () => {
    it('records performance event', () => {
      analyticsService.trackPerformance('load_time', 1500, { page: '/dashboard' });

      expect(analyticsService.events).toHaveLength(1);
      expect(analyticsService.events[0].type).toBe('performance');
      expect(analyticsService.events[0].metric).toBe('load_time');
      expect(analyticsService.events[0].value).toBe(1500);
    });
  });

  describe('trackApiCall', () => {
    it('records api_call event', () => {
      analyticsService.trackApiCall('/api/repos', 250, true, { method: 'GET' });

      expect(analyticsService.events).toHaveLength(1);
      expect(analyticsService.events[0].type).toBe('api_call');
      expect(analyticsService.events[0].endpoint).toBe('/api/repos');
      expect(analyticsService.events[0].duration).toBe(250);
      expect(analyticsService.events[0].success).toBe(true);
    });
  });

  describe('getSummary', () => {
    it('returns event summary with counts by type', () => {
      analyticsService.trackPageView('/page1');
      analyticsService.trackAction('test');
      analyticsService.trackPageView('/page2');

      const summary = analyticsService.getSummary();
      expect(summary.totalEvents).toBe(3);
      expect(summary.eventTypes.pageview).toBe(2);
      expect(summary.eventTypes.action).toBe(1);
    });

    it('returns user and session ids', () => {
      const summary = analyticsService.getSummary();
      expect(summary.userId).toBeDefined();
      expect(summary.sessionId).toBeDefined();
    });
  });

  describe('clearEvents', () => {
    it('clears all tracked events', () => {
      analyticsService.trackPageView('/page1');
      analyticsService.trackAction('test');
      expect(analyticsService.events).toHaveLength(2);

      analyticsService.clearEvents();
      expect(analyticsService.events).toHaveLength(0);
    });
  });

  describe('exportEvents', () => {
    it('exports events as JSON string', () => {
      analyticsService.trackPageView('/dashboard');
      const exported = analyticsService.exportEvents();

      expect(typeof exported).toBe('string');
      expect(exported).toContain('"type"');
      expect(exported).toContain('pageview');
    });

    it('returns valid JSON', () => {
      analyticsService.trackPageView('/test');
      const exported = analyticsService.exportEvents();
      const parsed = JSON.parse(exported);

      expect(Array.isArray(parsed)).toBe(true);
      expect(parsed.length).toBe(1);
    });
  });
});
