/**
 * Unit tests for api.js - API service interface
 * Tests the MockApiService which mirrors the real ApiService interface
 */

// Import the mock — jest.mock() auto-mocks the module when in __mocks__/
jest.mock('./api');

import { apiService } from './api';

describe('apiService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('healthCheck', () => {
    it('returns healthy status with data stats', async () => {
      const result = await apiService.healthCheck();

      expect(result.success).toBe(true);
      expect(result.data.status).toBe('healthy');
      expect(result.data.data_files_found).toBe(5);
      expect(result.data.total_records).toBe(2209);
    });

    it('includes timestamp in response', async () => {
      const result = await apiService.healthCheck();

      expect(result.data.timestamp).toBeDefined();
    });
  });

  describe('getReports', () => {
    it('returns paginated reports', async () => {
      const result = await apiService.getReports({ page: 1, limit: 2 });

      expect(result.success).toBe(true);
      expect(result.data.repositories).toHaveLength(2);
      expect(result.data.total).toBe(3);
      expect(result.data.pages).toBe(2);
    });

    it('filters by language', async () => {
      const result = await apiService.getReports({ language: 'JavaScript' });

      expect(result.data.repositories).toHaveLength(1);
      expect(result.data.repositories[0].language).toBe('JavaScript');
    });

    it('filters by tier', async () => {
      const result = await apiService.getReports({ tier: 'A' });

      expect(result.data.repositories).toHaveLength(0);
    });

    it('filters by search query', async () => {
      const result = await apiService.getReports({ q: 'awesome' });

      expect(result.data.repositories).toHaveLength(0);
    });

    it('filters by minimum score', async () => {
      const result = await apiService.getReports({ minScore: 90 });

      expect(result.data.repositories).toHaveLength(2);
      expect(result.data.repositories.every((r) => r.quality_score >= 90)).toBe(true);
    });

    it('uses default pagination values', async () => {
      const result = await apiService.getReports({});

      expect(result.data.perPage).toBe(50);
      expect(result.data.page).toBe(1);
    });
  });

  describe('getLanguages', () => {
    it('returns language distribution', async () => {
      const result = await apiService.getLanguages();

      expect(result.success).toBe(true);
      expect(result.data.languages).toEqual({ JavaScript: 100, Python: 50 });
    });

    it('returns top languages', async () => {
      const result = await apiService.getLanguages();

      expect(result.data.top_languages).toHaveLength(1);
      expect(result.data.top_languages[0].language).toBe('JavaScript');
    });
  });

  describe('getStats', () => {
    it('returns mock data as stats', async () => {
      const result = await apiService.getStats();

      expect(result.success).toBe(true);
      expect(result.data.total_repositories).toBe(2209);
    });
  });

  describe('getCompareReports', () => {
    it('returns reports matching given ids', async () => {
      const result = await apiService.getCompareReports(['1', '3']);

      expect(result.success).toBe(true);
      expect(result.data.reports).toHaveLength(2);
      expect(result.data.count).toBe(2);
    });

    it('returns empty when no ids provided', async () => {
      const result = await apiService.getCompareReports([]);

      expect(result.success).toBe(true);
      expect(result.data.reports).toHaveLength(0);
      expect(result.data.count).toBe(0);
    });

    it('returns empty when ids not found', async () => {
      const result = await apiService.getCompareReports(['999']);

      expect(result.data.reports).toHaveLength(0);
      expect(result.data.count).toBe(0);
    });
  });

  describe('searchPackages', () => {
    it('returns matching packages by name', async () => {
      const result = await apiService.searchPackages('test');

      expect(result.success).toBe(true);
      expect(result.data.results).toHaveLength(1);
      expect(result.data.results[0].name).toBe('test-repo');
    });

    it('returns matching packages by language', async () => {
      const result = await apiService.searchPackages('python');

      expect(result.data.results).toHaveLength(1);
      expect(result.data.results[0].language).toBe('Python');
    });

    it('returns empty for empty query', async () => {
      const result = await apiService.searchPackages('');

      expect(result.success).toBe(true);
      expect(result.data.results).toHaveLength(0);
      expect(result.data.total).toBe(0);
    });

    it('respects limit parameter', async () => {
      const result = await apiService.searchPackages('repo', 1);

      expect(result.data.results).toHaveLength(1);
    });

    it('returns query in response', async () => {
      const result = await apiService.searchPackages('test');

      expect(result.data.query).toBe('test');
    });
  });

  describe('other methods', () => {
    it('getCategories returns success', async () => {
      const result = await apiService.getCategories();
      expect(result.success).toBe(true);
    });

    it('getRateLimit returns success', async () => {
      const result = await apiService.getRateLimit();
      expect(result.success).toBe(true);
    });

    it('getTrending returns success', async () => {
      const result = await apiService.getTrending({});
      expect(result.success).toBe(true);
    });

    it('getReportsByCategory returns success', async () => {
      const result = await apiService.getReportsByCategory('javascript', {});
      expect(result.success).toBe(true);
    });

    it('getReportsByLanguage returns success', async () => {
      const result = await apiService.getReportsByLanguage('python', {});
      expect(result.success).toBe(true);
    });

    it('downloadReport returns success', async () => {
      const result = await apiService.downloadReport('abc123', 'json');
      expect(result.success).toBe(true);
    });

    it('scanRepository returns scan id', async () => {
      const result = await apiService.scanRepository({ repo: 'test/repo' });
      expect(result.success).toBe(true);
      expect(result.data.scan_id).toBe('new-scan');
    });

    it('getScanStatus returns status', async () => {
      const result = await apiService.getScanStatus('scan-123');
      expect(result.success).toBe(true);
      expect(result.data.status).toBe('completed');
    });

    it('getScanResult returns success', async () => {
      const result = await apiService.getScanResult('scan-123');
      expect(result.success).toBe(true);
    });

    it('searchRepositories returns success', async () => {
      const result = await apiService.searchRepositories('react');
      expect(result.success).toBe(true);
    });
  });
});
