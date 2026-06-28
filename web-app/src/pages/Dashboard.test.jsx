/**
 * Unit tests for Dashboard page
 */
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

const mockData = {
  total_repositories: 2209,
  average_quality_score: 99.6,
  tier_distribution: { A: 2100, B: 80, C: 20, D: 7, F: 2 },
  recent_scans: [
    { id: '1', name: 'owner/repo1', language: 'JavaScript', quality_score: 85, tier: 'A' },
  ],
  top_languages: [{ language: 'JavaScript', count: 900, avgScore: 95 }],
  security_stats: { total_findings: 9, critical: 2, high: 7 },
  quality_stats: { average: 85 },
};

jest.mock('../services/realScannerData', () => ({
  loadRealScannerData: jest.fn(() => Promise.resolve(mockData)),
}));

jest.mock('../services/api', () => ({
  default: {
    getStats: jest.fn(() => Promise.resolve({ success: true, data: mockData })),
    searchPackages: jest.fn(() => Promise.resolve({ success: true, data: { results: [] } })),
  },
}));

jest.mock('../components/Charts', () => ({
  BarChart: jest.fn(() => null),
  DonutChart: jest.fn(() => null),
  RepositoryRadarChart: jest.fn(() => null),
}));

jest.mock(
  '../components/SecurityRadarChart',
  () =>
    function MockSecurityRadarChart() {
      return <div data-testid="security-radar">SecurityRadar</div>;
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

import Dashboard from './Dashboard';

describe('Dashboard', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.getItem.mockReturnValue('[]');
  });

  it('renders the dashboard heading', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </MemoryRouter>
    );
    await waitFor(
      () => {
        expect(screen.getByRole('heading', { name: /dashboard/i })).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it('renders search input', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </MemoryRouter>
    );
    await waitFor(
      () => {
        expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it('accepts search input', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </MemoryRouter>
    );
    await waitFor(() => screen.getByPlaceholderText(/search/i), { timeout: 3000 });
    const input = screen.getByPlaceholderText(/search/i);
    await user.type(input, 'react');
    expect(input.value).toBe('react');
  });

  it('renders security radar section', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </MemoryRouter>
    );
    await waitFor(
      () => {
        expect(screen.getByTestId('security-radar')).toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });
});
