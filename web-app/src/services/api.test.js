/**
 * Unit tests for api.js - API service interface verification
 */
import { apiService } from './api';

describe('apiService', () => {
  it('is defined', () => {
    expect(apiService).toBeDefined();
  });

  it('has healthCheck method', () => {
    expect(typeof apiService.healthCheck).toBe('function');
  });

  it('has getReports method', () => {
    expect(typeof apiService.getReports).toBe('function');
  });

  it('has getLanguages method', () => {
    expect(typeof apiService.getLanguages).toBe('function');
  });

  it('has getStats method', () => {
    expect(typeof apiService.getStats).toBe('function');
  });

  it('has getCompareReports method', () => {
    expect(typeof apiService.getCompareReports).toBe('function');
  });

  it('has searchPackages method', () => {
    expect(typeof apiService.searchPackages).toBe('function');
  });

  it('has getCategories method', () => {
    expect(typeof apiService.getCategories).toBe('function');
  });

  it('has getRateLimit method', () => {
    expect(typeof apiService.getRateLimit).toBe('function');
  });

  it('has getTrending method', () => {
    expect(typeof apiService.getTrending).toBe('function');
  });

  it('has getReportsByCategory method', () => {
    expect(typeof apiService.getReportsByCategory).toBe('function');
  });

  it('has getReportsByLanguage method', () => {
    expect(typeof apiService.getReportsByLanguage).toBe('function');
  });

  it('has downloadReport method', () => {
    expect(typeof apiService.downloadReport).toBe('function');
  });

  it('has scanRepository method', () => {
    expect(typeof apiService.scanRepository).toBe('function');
  });

  it('has getScanStatus method', () => {
    expect(typeof apiService.getScanStatus).toBe('function');
  });

  it('has getScanResult method', () => {
    expect(typeof apiService.getScanResult).toBe('function');
  });

  it('has searchRepositories method', () => {
    expect(typeof apiService.searchRepositories).toBe('function');
  });

  it('searchPackages returns empty result for whitespace query', async () => {
    const result = await apiService.searchPackages('   ');
    expect(result.success).toBe(true);
    expect(result.data.results).toHaveLength(0);
  });

  it('searchPackages returns empty result for empty query', async () => {
    const result = await apiService.searchPackages('');
    expect(result.success).toBe(true);
    expect(result.data.results).toHaveLength(0);
  });
});
