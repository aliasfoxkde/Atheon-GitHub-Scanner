// Mock for analytics.js - avoids import.meta.env issues in tests
// Uses jest.fn() so tests can use .mockResolvedValueOnce() etc.

const mockEvents = [];

class MockAnalyticsService {
  constructor() {
    this.events = mockEvents;
    this.enabled = true;
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
    const event = {
      type: 'pageview',
      page: pageName,
      timestamp: new Date().toISOString(),
      userId: this.userId,
      sessionId: this.sessionId,
      properties,
    };
    this.events.push(event);
  }

  trackAction(actionName, properties = {}) {
    if (!this.enabled) return;
    const event = {
      type: 'action',
      action: actionName,
      timestamp: new Date().toISOString(),
      userId: this.userId,
      sessionId: this.sessionId,
      properties,
    };
    this.events.push(event);
  }

  trackError(error, context = {}) {
    if (!this.enabled) return;
    const event = {
      type: 'error',
      error: error.message || error,
      timestamp: new Date().toISOString(),
      userId: this.userId,
      sessionId: this.sessionId,
      properties: { ...context, stack: error.stack },
    };
    this.events.push(event);
  }

  trackPerformance(metricName, value, properties = {}) {
    if (!this.enabled) return;
    const event = {
      type: 'performance',
      metric: metricName,
      value,
      timestamp: new Date().toISOString(),
      userId: this.userId,
      sessionId: this.sessionId,
      properties,
    };
    this.events.push(event);
  }

  trackApiCall(endpoint, duration, success, properties = {}) {
    if (!this.enabled) return;
    const event = {
      type: 'api_call',
      endpoint,
      duration,
      success,
      timestamp: new Date().toISOString(),
      userId: this.userId,
      sessionId: this.sessionId,
      properties,
    };
    this.events.push(event);
  }

  async sendEvent(event) {
    if (!this.enabled) return;
    // Mock implementation - just stores event
  }

  storeOfflineEvent(event) {
    let offlineEvents = JSON.parse(localStorage.getItem('atheon_offline_events') || '[]');
    offlineEvents.push(event);
    if (offlineEvents.length > 100) {
      offlineEvents = offlineEvents.slice(-100);
    }
    localStorage.setItem('atheon_offline_events', JSON.stringify(offlineEvents));
  }

  async flushOfflineEvents() {
    // Mock implementation
  }

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

// Create singleton mock
const analyticsService = new MockAnalyticsService();

export { analyticsService as analyticsService, MockAnalyticsService };
export default analyticsService;
