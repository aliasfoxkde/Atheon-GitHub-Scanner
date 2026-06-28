/**
 * Unit tests for ApiDocs page
 */

import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../services/realScannerData', () => ({
  getAllRepositories: jest.fn(),
}));

import { getAllRepositories } from '../services/realScannerData';
import ApiDocs from './ApiDocs';

describe('ApiDocs', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    getAllRepositories.mockResolvedValue([]);
  });

  it('renders the API Documentation heading', () => {
    render(
      <MemoryRouter>
        <ApiDocs />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: 'API Documentation' })).toBeInTheDocument();
  });

  it('renders at least one endpoint path', () => {
    render(
      <MemoryRouter>
        <ApiDocs />
      </MemoryRouter>
    );
    expect(screen.getByText('/api/scan')).toBeInTheDocument();
  });

  it('renders multiple endpoint paths', () => {
    render(
      <MemoryRouter>
        <ApiDocs />
      </MemoryRouter>
    );
    expect(screen.getByText('/api/reports')).toBeInTheDocument();
    expect(screen.getByText('/api/stats')).toBeInTheDocument();
    expect(screen.getByText('/api/trending')).toBeInTheDocument();
  });

  it('shows Test Endpoint button after expanding an endpoint', async () => {
    render(
      <MemoryRouter>
        <ApiDocs />
      </MemoryRouter>
    );
    const firstEndpoint = screen.getByText('/api/scan').closest('button');
    await act(async () => {
      firstEndpoint.click();
    });
    expect(screen.getByText('Test Endpoint')).toBeInTheDocument();
  });
});
