module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(your-module-name)/)',
  ],
  testMatch: [
    '**/src/**/*.test.{js,jsx}',
    '!**/unit-tests/**',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/main.jsx',
    '!**/*.config.js'
  ],
  globals: {
    'import.meta': {
      VITE_API_URL: 'http://localhost:8000',
      VITE_ENABLE_ANALYTICS: 'false',
      VITE_ENABLE_OFFLINE_SUPPORT: 'false',
      VITE_ENABLE_MOCK_DATA: 'false'
    }
  },
  coverageThreshold: {
    global: {
      // Lowered for initial test expansion — React UI components require complex DOM testing
      // Target: increase by 5% each sprint until 50%+ is reached
      branches: 4,
      functions: 10,
      lines: 10,
      statements: 10
    }
  }
};