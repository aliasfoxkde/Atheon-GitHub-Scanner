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
  testMatch: ['**/unit-tests/**/*.spec.{js,jsx}'],
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
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  }
};