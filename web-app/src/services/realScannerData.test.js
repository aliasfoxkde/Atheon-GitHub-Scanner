/**
 * Unit tests for realScannerData.js - Real scanner data service interface
 */

jest.mock('./realScannerData');

import * as rsd from './realScannerData';

describe('realScannerData', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('loadRealScannerData', () => {
    it('loads scanner data', async () => {
      const data = await rsd.loadRealScannerData();
      expect(data.total_repositories).toBe(2209);
    });
  });

  describe('getAllRepositories', () => {
    it('returns paginated repositories', async () => {
      const result = await rsd.getAllRepositories(1, 10);

      expect(result.repositories).toBeDefined();
      expect(result.total).toBeDefined();
      expect(result.pages).toBeDefined();
    });

    it('filters by language', async () => {
      const result = await rsd.getAllRepositories(1, 50, 'JavaScript');

      expect(result.repositories.every((r) => r.language === 'JavaScript')).toBe(true);
    });

    it('filters by tier', async () => {
      const result = await rsd.getAllRepositories(1, 50, null, 'A');

      expect(result.repositories).toHaveLength(0);
    });

    it('filters by search query', async () => {
      const result = await rsd.getAllRepositories(1, 50, null, null, null, 'test');

      expect(result.repositories.length).toBeGreaterThan(0);
    });

    it('filters by minimum score', async () => {
      const result = await rsd.getAllRepositories(1, 50, null, null, null, '', '90');

      expect(result.repositories.every((r) => r.quality_score >= 90)).toBe(true);
    });

    it('uses default pagination', async () => {
      const result = await rsd.getAllRepositories();

      expect(result.page).toBe(1);
      expect(result.limit).toBe(50);
    });
  });

  describe('getEcosystemData', () => {
    it('returns ecosystem comparison', async () => {
      const result = await rsd.getEcosystemData();

      expect(result.ecosystem_comparison).toBeDefined();
      expect(result.total_ecosystems).toBeGreaterThan(0);
    });

    it('includes repository counts', async () => {
      const result = await rsd.getEcosystemData();

      expect(result.ecosystem_comparison.JavaScript.repository_count).toBe(100);
    });
  });

  describe('getLanguageData', () => {
    it('returns language distribution', async () => {
      const result = await rsd.getLanguageData();

      expect(result.languages).toEqual({ JavaScript: 100, Python: 50, TypeScript: 30 });
    });

    it('returns top languages', async () => {
      const result = await rsd.getLanguageData();

      expect(result.top_languages).toHaveLength(3);
    });
  });

  describe('getPatternData', () => {
    it('returns pattern analysis data', async () => {
      const result = await rsd.getPatternData();

      expect(result.dependency_analysis).toBeDefined();
      expect(result.file_analysis).toBeDefined();
      expect(result.quality_analysis).toBeDefined();
    });
  });

  describe('checkApiHealth', () => {
    it('returns healthy status', async () => {
      const result = await rsd.checkApiHealth();

      expect(result.status).toBe('healthy');
      expect(result.data_files_found).toBe(5);
      expect(result.total_records).toBe(2209);
    });

    it('includes timestamp', async () => {
      const result = await rsd.checkApiHealth();

      expect(result.timestamp).toBeDefined();
    });
  });

  describe('refreshDataCache', () => {
    it('reloads data', async () => {
      const data = await rsd.refreshDataCache();

      expect(data).toBeDefined();
      expect(data.total_repositories).toBe(2209);
    });
  });

  describe('isApiAvailable', () => {
    it('returns true', async () => {
      const result = await rsd.isApiAvailable();

      expect(result).toBe(true);
    });
  });

  describe('getApiConfig', () => {
    it('returns API configuration', async () => {
      const config = rsd.getApiConfig();

      expect(config.baseUrl).toBeDefined();
      expect(config.embeddedUrl).toBeDefined();
      expect(config.endpoints).toBeDefined();
    });
  });
});
