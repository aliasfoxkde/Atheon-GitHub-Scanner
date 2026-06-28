// Mock import.meta for Jest environment
// This file is mapped via moduleNameMapper in jest.config.cjs
module.exports = {
  env: {
    DEV: 'false',
    VITE_API_URL: 'http://localhost:8000',
    VITE_ENABLE_ANALYTICS: 'false',
    VITE_ENABLE_OFFLINE_SUPPORT: 'false',
    VITE_ENABLE_MOCK_DATA: 'false',
    VITE_APP_NAME: 'Atheon GitHub Scanner',
    VITE_APP_VERSION: '1.0.0',
    VITE_APP_DESCRIPTION: 'Automated GitHub repository scanning and quality analysis',
    VITE_DATA_SOURCE: 'REAL_SCANNER_DATA',
    VITE_WORKER_API_URL: 'https://atheon-scanner-api.workers.dev',
    VITE_EMBEDDED_DATA_URL: '/embedded-data.json',
  },
};
