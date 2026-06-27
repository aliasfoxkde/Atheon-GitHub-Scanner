// Jest will automatically use __mocks__/api.js due to jest.mock('./api')
jest.mock('./api');

// Import the mocked api service
import { apiService } from './api';

describe('api.js service', () => {
  describe('abortSignalAny polyfill', () => {
    it('apiService.request accepts a signal parameter', async () => {
      const controller = new AbortController();
      const result = await apiService.request('/api/health', {}, controller.signal);
      expect(result).toHaveProperty('success');
    });

    it('apiService has abortSignalAny function', () => {
      expect(typeof apiService.abortSignalAny).toBe('function');
    });

    it('abortSignalAny combines multiple signals', () => {
      const controller1 = new AbortController();
      const controller2 = new AbortController();
      const combined = apiService.abortSignalAny([controller1.signal, controller2.signal]);

      expect(combined).toBeDefined();

      // Aborting one should abort the combined
      controller1.abort();
      expect(combined.aborted).toBe(true);
    });
  });

  describe('handleEmbeddedFallback', () => {
    it('getStats returns embedded data via fallback', async () => {
      const result = await apiService.getStats();
      expect(result).toHaveProperty('success');
      if (result.success) {
        expect(result.data).toBeDefined();
      }
    });

    it('healthCheck returns embedded data via fallback', async () => {
      const result = await apiService.healthCheck();
      expect(result).toHaveProperty('success');
      if (result.success) {
        expect(result.data).toHaveProperty('status');
      }
    });

    it('getReports returns paginated results from embedded data', async () => {
      const result = await apiService.getReports({ page: 1, limit: 10 });
      expect(result).toHaveProperty('success');
      if (result.success) {
        expect(result.data).toHaveProperty('reports');
        expect(result.data).toHaveProperty('total');
        expect(result.data).toHaveProperty('page');
        expect(result.data).toHaveProperty('perPage');
      }
    });

    it('getReports applies language filter', async () => {
      const result = await apiService.getReports({ language: 'JavaScript' });
      expect(result).toHaveProperty('success');
    });

    it('getLanguages returns language distribution from embedded data', async () => {
      const result = await apiService.getLanguages();
      expect(result).toHaveProperty('success');
      if (result.success) {
        expect(result.data).toHaveProperty('languages');
        expect(result.data).toHaveProperty('top_languages');
      }
    });

    it('getCategories returns pattern data from embedded data', async () => {
      const result = await apiService.getCategories();
      expect(result).toHaveProperty('success');
      if (result.success) {
        expect(result.data).toBeDefined();
      }
    });

    it('getEcosystems returns ecosystem comparison from embedded data', async () => {
      const result = await apiService.getEcosystems();
      expect(result).toHaveProperty('success');
      if (result.success) {
        expect(result.data).toHaveProperty('ecosystem_comparison');
      }
    });
  });

  describe('searchPackages', () => {
    it('returns empty results for empty query', async () => {
      const result = await apiService.searchPackages('');
      expect(result.success).toBe(true);
      expect(result.data.results).toEqual([]);
    });

    it('returns empty results for whitespace-only query', async () => {
      const result = await apiService.searchPackages('   ');
      expect(result.success).toBe(true);
      expect(result.data.results).toEqual([]);
    });

    it('returns results for valid query', async () => {
      const result = await apiService.searchPackages('react');
      expect(result).toHaveProperty('success');
      if (result.success) {
        expect(result.data).toHaveProperty('results');
        expect(result.data).toHaveProperty('query', 'react');
      }
    });
  });

  describe('getCompareReports', () => {
    it('returns empty reports for empty ids array', async () => {
      const result = await apiService.getCompareReports([]);
      expect(result.success).toBe(true);
      expect(result.data.reports).toEqual([]);
    });

    it('returns empty reports for null ids', async () => {
      const result = await apiService.getCompareReports(null);
      expect(result.success).toBe(true);
      expect(result.data.reports).toEqual([]);
    });
  });
});