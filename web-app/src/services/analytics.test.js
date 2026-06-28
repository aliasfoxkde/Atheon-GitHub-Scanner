/**
 * Unit tests for analytics.js - Analytics service
 */
import { analyticsService } from './analytics';

describe('analyticsService', () => {
  beforeEach(() => {
    analyticsService.clearEvents();
  });

  it('is defined', () => {
    expect(analyticsService).toBeDefined();
  });

  it('has userId', () => {
    expect(analyticsService.userId).toBeDefined();
  });

  it('has sessionId', () => {
    expect(analyticsService.sessionId).toBeDefined();
  });

  it('has trackPageView method', () => {
    expect(typeof analyticsService.trackPageView).toBe('function');
  });

  it('has trackAction method', () => {
    expect(typeof analyticsService.trackAction).toBe('function');
  });

  it('has trackError method', () => {
    expect(typeof analyticsService.trackError).toBe('function');
  });

  it('has trackPerformance method', () => {
    expect(typeof analyticsService.trackPerformance).toBe('function');
  });

  it('has trackApiCall method', () => {
    expect(typeof analyticsService.trackApiCall).toBe('function');
  });

  it('has getSummary method', () => {
    expect(typeof analyticsService.getSummary).toBe('function');
  });

  it('has clearEvents method', () => {
    expect(typeof analyticsService.clearEvents).toBe('function');
  });

  it('has exportEvents method', () => {
    expect(typeof analyticsService.exportEvents).toBe('function');
  });

  it('clearEvents empties the events array', () => {
    analyticsService.clearEvents();
    expect(analyticsService.events.length).toBe(0);
  });

  it('getSummary returns expected structure', () => {
    const summary = analyticsService.getSummary();
    expect(summary).toHaveProperty('totalEvents');
    expect(summary).toHaveProperty('userId');
    expect(summary).toHaveProperty('sessionId');
    expect(summary).toHaveProperty('eventTypes');
  });

  it('exportEvents returns valid JSON string', () => {
    const exported = analyticsService.exportEvents();
    expect(typeof exported).toBe('string');
    const parsed = JSON.parse(exported);
    expect(Array.isArray(parsed)).toBe(true);
  });
});
