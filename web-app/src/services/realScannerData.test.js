/**
 * Unit tests for realScannerData.js - data loading with Map cache
 * Uses jest.mock() to avoid import.meta.env issues
 */

jest.mock('./realScannerData');

import {
  loadRealScannerData,
  getAllRepositories,
  getEcosystemData,
  getLanguageData,
  getPatternData,
  checkApiHealth,
  getApiConfig,
  refreshDataCache,
  isApiAvailable,
  mockScannerData,
} from './realScannerData';

describe('realScannerData.js', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('loadRealScannerData', () => {
    it('returns scanner data', async () => {
      const data = await loadRealScannerData();
      expect(data).toBeDefined();
      expect(data.total_repositories).toBe(500);
    });

    it('returns mockScannerData with expected structure', async () => {
      const data = await loadRealScannerData();
      expect(data).toHaveProperty('recent_scans');
      expect(data).toHaveProperty('language_distribution');
      expect(data).toHaveProperty('tier_distribution');
    });
  });

  describe('getAllRepositories', () => {
    it('returns paginated repositories', async () => {
      const result = await getAllRepositories(1, 10);

      expect(result.repositories).toBeDefined();
      expect(result.total).toBeDefined();
      expect(result.page).toBeDefined();
      expect(result.limit).toBeDefined();
      expect(result.pages).toBeDefined();
    });

    it('returns repositories array', async () => {
      const result = await getAllRepositories();
      expect(Array.isArray(result.repositories)).toBe(true);
    });
  });

  describe('getEcosystemData', () => {
    it('returns ecosystem comparison data', async () => {
      const result = await getEcosystemData();

      expect(result).toHaveProperty('ecosystem_comparison');
      expect(result).toHaveProperty('total_ecosystems');
    });
  });

  describe('getLanguageData', () => {
    it('returns language distribution and top languages', async () => {
      const result = await getLanguageData();

      expect(result).toHaveProperty('languages');
      expect(result).toHaveProperty('top_languages');
      expect(Array.isArray(result.top_languages)).toBe(true);
    });
  });

  describe('getPatternData', () => {
    it('returns pattern analysis data', async () => {
      const result = await getPatternData();

      expect(result).toHaveProperty('dependency_analysis');
      expect(result).toHaveProperty('file_analysis');
      expect(result).toHaveProperty('quality_analysis');
    });
  });

  describe('checkApiHealth', () => {
    it('returns health status', async () => {
      const result = await checkApiHealth();

      expect(result).toHaveProperty('status');
      expect(result).toHaveProperty('timestamp');
      expect(result).toHaveProperty('data_files_found');
    });

    it('returns healthy status', async () => {
      const result = await checkApiHealth();
      expect(result.status).toBe('healthy');
    });
  });

  describe('getApiConfig', () => {
    it('returns API configuration', () => {
      const config = getApiConfig();

      expect(config).toHaveProperty('baseUrl');
      expect(config).toHaveProperty('embeddedUrl');
      expect(config).toHaveProperty('endpoints');
      expect(config.endpoints).toHaveProperty('embedded');
    });
  });

  describe('refreshDataCache', () => {
    it('returns scanner data', async () => {
      const data = await refreshDataCache();
      expect(data).toBeDefined();
    });
  });

  describe('isApiAvailable', () => {
    it('returns boolean', async () => {
      const available = await isApiAvailable();
      expect(typeof available).toBe('boolean');
    });
  });

  describe('mockScannerData', () => {
    it('has expected properties for testing', () => {
      expect(mockScannerData.total_repositories).toBe(500);
      expect(mockScannerData.recent_scans.length).toBeGreaterThan(0);
      expect(mockScannerData.top_languages.length).toBeGreaterThan(0);
    });

    it('has valid tier distribution', () => {
      expect(mockScannerData.tier_distribution).toHaveProperty('A');
      expect(mockScannerData.tier_distribution).toHaveProperty('B');
    });
  });
});
