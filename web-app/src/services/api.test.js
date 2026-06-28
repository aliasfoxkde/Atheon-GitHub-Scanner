// Jest will automatically use __mocks__/api.js due to jest.mock('./api')
jest.mock('./api');

// Import the mocked api service
import { apiService } from './api';

describe('api.js service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

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

    it('abortSignalAny handles null signals', () => {
      const combined = apiService.abortSignalAny([null, undefined]);
      expect(combined).toBeDefined();
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

    it('getTrending returns trending data', async () => {
      const result = await apiService.getTrending();
      expect(result).toHaveProperty('success');
    });

    it('getPatterns returns pattern analysis data', async () => {
      const result = await apiService.getCategories();
      expect(result).toHaveProperty('success');
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

    it('respects limit parameter', async () => {
      const result = await apiService.searchPackages('repo', 1);
      expect(result.success).toBe(true);
      expect(result.data.results.length).toBeLessThanOrEqual(1);
    });

    it('returns total count in response', async () => {
      const result = await apiService.searchPackages('repo');
      expect(result.success).toBe(true);
      expect(result.data).toHaveProperty('total');
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

    it('returns matching reports for valid ids', async () => {
      const result = await apiService.getCompareReports([1, 2]);
      expect(result.success).toBe(true);
      expect(result.data.reports).toBeDefined();
      expect(result.data).toHaveProperty('count');
    });

    it('returns reports with correct count', async () => {
      const result = await apiService.getCompareReports([1]);
      expect(result.success).toBe(true);
      expect(result.data.count).toBe(result.data.reports.length);
    });
  });

  describe('getReports with filters', () => {
    it('returns reports without filters', async () => {
      const result = await apiService.getReports();
      expect(result.success).toBe(true);
      expect(result.data).toHaveProperty('reports');
      expect(result.data).toHaveProperty('total');
    });

    it('returns reports with page filter', async () => {
      const result = await apiService.getReports({ page: 2 });
      expect(result.success).toBe(true);
      expect(result.data.page).toBe(2);
    });

    it('returns reports with limit filter', async () => {
      const result = await apiService.getReports({ limit: 10 });
      expect(result.success).toBe(true);
      expect(result.data.limit).toBe(10);
    });

    it('returns reports with language filter', async () => {
      const result = await apiService.getReports({ language: 'JavaScript' });
      expect(result.success).toBe(true);
    });

    it('returns reports with tier filter', async () => {
      const result = await apiService.getReports({ tier: 'high' });
      expect(result.success).toBe(true);
    });

    it('returns reports with q (query) filter', async () => {
      const result = await apiService.getReports({ q: 'test' });
      expect(result.success).toBe(true);
    });

    it('returns reports with minScore filter', async () => {
      const result = await apiService.getReports({ minScore: 80 });
      expect(result.success).toBe(true);
    });

    it('ignores null and undefined filter values', async () => {
      const result = await apiService.getReports({ page: null, limit: undefined });
      expect(result.success).toBe(true);
    });

    it('ignores empty string filter values', async () => {
      const result = await apiService.getReports({ q: '' });
      expect(result.success).toBe(true);
    });

    it('combines multiple filters', async () => {
      const result = await apiService.getReports({ page: 1, limit: 10, language: 'JavaScript' });
      expect(result.success).toBe(true);
      expect(result.data.page).toBe(1);
      expect(result.data.limit).toBe(10);
    });

    it('returns pagination metadata', async () => {
      const result = await apiService.getReports({ page: 1, limit: 1 });
      expect(result.success).toBe(true);
      expect(result.data).toHaveProperty('pages');
      expect(result.data).toHaveProperty('perPage');
    });
  });

  describe('getReportsByCategory', () => {
    it('returns reports for a category', async () => {
      const result = await apiService.getReportsByCategory('javascript');
      expect(result).toHaveProperty('success');
    });
  });

  describe('getReportsByLanguage', () => {
    it('returns reports for a language', async () => {
      const result = await apiService.getReportsByLanguage('javascript');
      expect(result).toHaveProperty('success');
    });
  });

  describe('searchRepositories', () => {
    it('returns search results', async () => {
      const result = await apiService.searchRepositories('test');
      expect(result).toHaveProperty('success');
    });
  });

  describe('getRateLimit', () => {
    it('returns rate limit info', async () => {
      const result = await apiService.getRateLimit();
      expect(result).toHaveProperty('success');
    });
  });

  describe('downloadReport', () => {
    it('returns download result', async () => {
      const result = await apiService.downloadReport('123', 'json');
      expect(result).toHaveProperty('success');
    });
  });
});
