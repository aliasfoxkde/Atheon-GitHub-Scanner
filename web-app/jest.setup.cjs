require('@testing-library/jest-dom');

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() { return []; }
  unobserve() {}
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  unobserve() {}
};

// Mock import.meta.env
global.importMetaEnvMock = {
  VITE_API_URL: 'http://localhost:8000',
  VITE_ENABLE_ANALYTICS: 'false',
  VITE_ENABLE_OFFLINE_SUPPORT: 'false',
  VITE_ENABLE_MOCK_DATA: 'false',
  VITE_APP_NAME: 'Atheon GitHub Scanner',
  VITE_APP_VERSION: '1.0.0',
  VITE_APP_DESCRIPTION: 'Automated GitHub repository scanning and quality analysis',
  VITE_DATA_SOURCE: 'REAL_SCANNER_DATA'
};