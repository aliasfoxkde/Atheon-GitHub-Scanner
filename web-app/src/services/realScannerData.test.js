/**
 * Unit tests for realScannerData.js
 */
import * as rsd from './realScannerData';

describe('realScannerData', () => {
  it('loadRealScannerData is a function', () => {
    expect(typeof rsd.loadRealScannerData).toBe('function');
  });

  it('getAllRepositories is a function', () => {
    expect(typeof rsd.getAllRepositories).toBe('function');
  });

  it('getEcosystemData is a function', () => {
    expect(typeof rsd.getEcosystemData).toBe('function');
  });

  it('getLanguageData is a function', () => {
    expect(typeof rsd.getLanguageData).toBe('function');
  });

  it('getPatternData is a function', () => {
    expect(typeof rsd.getPatternData).toBe('function');
  });

  it('checkApiHealth is a function', () => {
    expect(typeof rsd.checkApiHealth).toBe('function');
  });

  it('refreshDataCache is a function', () => {
    expect(typeof rsd.refreshDataCache).toBe('function');
  });

  it('isApiAvailable is a function', () => {
    expect(typeof rsd.isApiAvailable).toBe('function');
  });

  it('getApiConfig is a function', () => {
    expect(typeof rsd.getApiConfig).toBe('function');
  });

  it('getApiConfig returns expected structure', () => {
    const config = rsd.getApiConfig();
    expect(config).toHaveProperty('baseUrl');
    expect(config).toHaveProperty('embeddedUrl');
    expect(config).toHaveProperty('endpoints');
    expect(config.endpoints).toHaveProperty('stats');
    expect(config.endpoints).toHaveProperty('repositories');
    expect(config.endpoints).toHaveProperty('embedded');
  });
});
