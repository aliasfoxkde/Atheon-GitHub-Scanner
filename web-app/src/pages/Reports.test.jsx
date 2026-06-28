/**
 * Unit tests for Reports page
 */
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

const mockRepos = [
  { id: '1', name: 'repo1', language: 'JavaScript', quality_score: 85, tier: 'A', stars: 1000 },
  { id: '2', name: 'repo2', language: 'Python', quality_score: 92, tier: 'A', stars: 500 },
];

jest.mock('../services/realScannerData', () => ({
  getAllRepositories: jest.fn(() =>
    Promise.resolve({ repositories: mockRepos, total: 2, page: 1, limit: 50, pages: 1 })
  ),
  loadRealScannerData: jest.fn(() => Promise.resolve({ recent_scans: mockRepos })),
}));

jest.mock('../services/api', () => ({
  default: {
    getCompareReports: jest.fn(() => Promise.resolve({ success: true, data: { reports: [] } })),
    searchPackages: jest.fn(() => Promise.resolve({ success: true, data: { results: [] } })),
  },
}));

jest.mock(
  '../components/CompareModal',
  () =>
    function MockCompareModal() {
      return <div data-testid="compare-modal">Compare</div>;
    }
);
jest.mock(
  '../components/Modal',
  () =>
    function MockModal() {
      return <div data-testid="modal">Modal</div>;
    }
);

jest.mock('../contexts/ToastContext', () => ({
  useToast: () => ({
    show: jest.fn(),
    success: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
  }),
}));

jest.mock('../contexts/SettingsContext', () => ({
  useSettings: () => ({
    settings: { defaultPageSize: 10 },
    updateSettings: jest.fn(),
  }),
}));

const localStorageMock = {
  getItem: jest.fn().mockReturnValue('[]'),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};
global.localStorage = localStorageMock;

import Reports from './Reports';

describe('Reports', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.getItem.mockReturnValue('[]');
  });

  it('renders the reports page', async () => {
    render(
      <MemoryRouter initialEntries={['/reports']}>
        <Routes>
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </MemoryRouter>
    );
    await waitFor(
      () => {
        expect(screen.getByRole('heading')).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it('renders repository names', async () => {
    render(
      <MemoryRouter initialEntries={['/reports']}>
        <Routes>
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </MemoryRouter>
    );
    await waitFor(
      () => {
        expect(screen.getByText('repo1')).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});
