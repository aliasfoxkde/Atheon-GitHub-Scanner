/**
 * Mock AnalyticsService for testing
 */

class MockAnalyticsServiceClass {
  constructor() {
    this.events = [];
    this.enabled = true; // Enabled for tests
    this.userId = 'test-user-id';
    this.sessionId = 'test-session-id';
  }

  getUserId() {
    return this.userId;
  }
  getSessionId() {
    return this.sessionId;
  }
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  trackPageView(pageName, properties = {}) {
    if (!this.enabled) return;
    this.events.push({
      type: 'pageview',
      page: pageName,
      timestamp: new Date().toISOString(),
      userId: this.userId,
      sessionId: this.sessionId,
      properties,
    });
  }

  trackAction(actionName, properties = {}) {
    if (!this.enabled) return;
    this.events.push({
      type: 'action',
      action: actionName,
      timestamp: new Date().toISOString(),
      userId: this.userId,
      sessionId: this.sessionId,
      properties,
    });
  }

  trackError(error, context = {}) {
    if (!this.enabled) return;
    this.events.push({
      type: 'error',
      error: error.message || error,
      timestamp: new Date().toISOString(),
      userId: this.userId,
      sessionId: this.sessionId,
      properties: context,
    });
  }

  trackPerformance(metricName, value, properties = {}) {
    if (!this.enabled) return;
    this.events.push({
      type: 'performance',
      metric: metricName,
      value,
      timestamp: new Date().toISOString(),
      userId: this.userId,
      sessionId: this.sessionId,
      properties,
    });
  }

  trackApiCall(endpoint, duration, success, properties = {}) {
    if (!this.enabled) return;
    this.events.push({
      type: 'api_call',
      endpoint,
      duration,
      success,
      timestamp: new Date().toISOString(),
      userId: this.userId,
      sessionId: this.sessionId,
      properties,
    });
  }

  sendEvent() {}
  storeOfflineEvent() {}
  async flushOfflineEvents() {}

  getSummary() {
    return {
      totalEvents: this.events.length,
      userId: this.userId,
      sessionId: this.sessionId,
      eventTypes: this.events.reduce((acc, event) => {
        acc[event.type] = (acc[event.type] || 0) + 1;
        return acc;
      }, {}),
    };
  }

  clearEvents() {
    this.events = [];
  }
  exportEvents() {
    return JSON.stringify(this.events, null, 2);
  }
}

const analyticsServiceInstance = new MockAnalyticsServiceClass();

export const analyticsService = analyticsServiceInstance;
export { MockAnalyticsServiceClass as MockAnalyticsService };
export default analyticsServiceInstance;
