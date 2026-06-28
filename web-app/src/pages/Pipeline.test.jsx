/**
 * Unit tests for Pipeline page
 */

import { render, screen, act, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../services/realScannerData', () => ({
  loadRealScannerData: jest.fn(),
}));

jest.mock('../components/Skeleton', () => ({
  Skeleton: () => <div data-testid="skeleton">Loading...</div>,
  SkeletonDonut: () => <div data-testid="skeleton-donut">Loading...</div>,
}));

jest.mock('../components/Charts', () => ({
  DonutChart: () => <div data-testid="donut-chart">DonutChart</div>,
}));

jest.mock('../contexts/ToastContext', () => ({
  useToast: () => ({ error: jest.fn() }),
}));

import { loadRealScannerData } from '../services/realScannerData';
import Pipeline from './Pipeline';

const fakeData = {
  total_repositories: 156,
  total_files: 12345,
  total_dependencies: 987,
  average_quality_score: 76.5,
  language_distribution: { JavaScript: 45, Python: 38 },
  security_stats: { critical: 5, high: 12, medium: 30, low: 20, total_findings: 67 },
  tier_distribution: { A: 24, B: 58, C: 42, D: 20, F: 12 },
};

describe('Pipeline', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the Pipeline heading', () => {
    render(
      <MemoryRouter>
        <Pipeline />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /scanner methodology/i })).toBeInTheDocument();
  });

  it('shows skeleton placeholders for stats on initial render', () => {
    render(
      <MemoryRouter>
        <Pipeline />
      </MemoryRouter>
    );
    // On initial render (before loadRealScannerData resolves), stats show skeleton loaders
    // The label text is NOT visible — we verify the skeleton structure exists
    const skeletons = document.querySelectorAll('.animate-pulse');
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('shows stat labels after loading live stats', async () => {
    loadRealScannerData.mockResolvedValue(fakeData);
    render(
      <MemoryRouter>
        <Pipeline />
      </MemoryRouter>
    );
    const button = screen.getByRole('button', { name: /load live stats/i });
    await act(async () => {
      button.click();
      await waitFor(() => expect(loadRealScannerData).toHaveBeenCalled());
    });
    await waitFor(() => {
      expect(screen.getByText('Packages')).toBeInTheDocument();
    });
  });

  it('shows all four tab buttons', () => {
    render(
      <MemoryRouter>
        <Pipeline />
      </MemoryRouter>
    );
    expect(screen.getByText('overview')).toBeInTheDocument();
    expect(screen.getByText('benchmarks')).toBeInTheDocument();
    expect(screen.getByText('patterns')).toBeInTheDocument();
    expect(screen.getByText('how it works')).toBeInTheDocument();
  });

  it('has a Load live stats button', () => {
    render(
      <MemoryRouter>
        <Pipeline />
      </MemoryRouter>
    );
    expect(screen.getByRole('button', { name: /load live stats/i })).toBeInTheDocument();
  });
});
