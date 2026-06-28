/**
 * Unit tests for Trending page
 */
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const mockData = {
  recent_scans: [
    {
      id: '1',
      name: 'owner/repo1',
      language: 'JavaScript',
      quality_score: 85,
      stars: 1000,
      tier: 'A',
    },
    { id: '2', name: 'owner/repo2', language: 'Python', quality_score: 92, stars: 500, tier: 'A' },
  ],
  trending: [
    {
      id: '1',
      name: 'owner/repo1',
      language: 'JavaScript',
      quality_score: 85,
      stars: 1000,
      tier: 'A',
    },
  ],
};
jest.mock('../services/realScannerData', () => ({
  loadRealScannerData: jest.fn(() => Promise.resolve(mockData)),
}));

jest.mock('../contexts/ToastContext', () => ({
  useToast: () => ({
    show: jest.fn(),
    success: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
  }),
}));

const localStorageMock = {
  getItem: jest.fn().mockReturnValue('[]'),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};
global.localStorage = localStorageMock;

import Trending from './Trending';

describe('Trending', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorageMock.getItem.mockReturnValue('[]');
  });

  it('renders the trending page heading', async () => {
    render(
      <MemoryRouter>
        <Trending />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByRole('heading', { name: /trending repositories/i })).toBeInTheDocument();
    });
  });

  it('renders trending repositories list', async () => {
    render(
      <MemoryRouter>
        <Trending />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText('owner/repo1')).toBeInTheDocument();
    });
  });

  it('renders language badges', async () => {
    render(
      <MemoryRouter>
        <Trending />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getAllByText('JavaScript').length).toBeGreaterThan(0);
    });
  });

  it('renders quality scores', async () => {
    render(
      <MemoryRouter>
        <Trending />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText('85')).toBeInTheDocument();
    });
  });
});
