/**
 * Unit tests for ReportDetailModal component
 */
import { render, screen, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

// Mock recharts
jest.mock('recharts', () => ({
  LineChart: jest.fn(() => null),
  Line: jest.fn(() => null),
  XAxis: jest.fn(() => null),
  YAxis: jest.fn(() => null),
  CartesianGrid: jest.fn(() => null),
  Tooltip: jest.fn(() => null),
  ResponsiveContainer: jest.fn(({ children }) => (
    <div data-testid="responsive-container">{children}</div>
  )),
  ReferenceLine: jest.fn(() => null),
}));

// Mock Toast context
jest.mock('../contexts/ToastContext', () => ({
  useToast: () => ({
    show: jest.fn(),
    success: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
  }),
}));

// Mock realScannerData
jest.mock('../services/realScannerData', () => ({
  loadRealScannerData: jest.fn(() =>
    Promise.resolve({
      top_languages: [{ language: 'JavaScript', avgScore: 85 }],
      quality_stats: { average: 80 },
    })
  ),
}));

// Mock clipboard
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(() => Promise.resolve()),
  },
});

import ReportDetailModal from './ReportDetailModal';

const mockReport = {
  id: '1',
  name: 'owner/repo-name',
  description: 'A test repository',
  language: 'JavaScript',
  quality_score: 85,
  tier: 'A',
  stars: 1000,
  total_dependencies: 25,
  total_files: 150,
  scan_date: '2026-06-20',
  scan_method: 'comprehensive',
  findings: [],
  metrics: null,
  security_counts: {
    critical: 0,
    high: 2,
    medium: 5,
    low: 10,
  },
  total_findings: 17,
};

describe('ReportDetailModal', () => {
  const mockOnClose = jest.fn();
  const mockOnCompare = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with a report', () => {
    render(
      <ReportDetailModal report={mockReport} onClose={mockOnClose} onCompare={mockOnCompare} />
    );
    expect(screen.getByText('owner/repo-name')).toBeInTheDocument();
    expect(screen.getByText('A test repository')).toBeInTheDocument();
  });

  it('renders with minimal report data', () => {
    const minimalReport = {
      name: 'test-repo',
      language: 'Python',
      quality_score: 75,
    };
    render(
      <ReportDetailModal report={minimalReport} onClose={mockOnClose} onCompare={mockOnCompare} />
    );
    expect(screen.getByText('test-repo')).toBeInTheDocument();
  });

  it('renders quality score and tier', () => {
    render(
      <ReportDetailModal report={mockReport} onClose={mockOnClose} onCompare={mockOnCompare} />
    );
    expect(screen.getByText('85')).toBeInTheDocument();
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('renders language badge', () => {
    render(
      <ReportDetailModal report={mockReport} onClose={mockOnClose} onCompare={mockOnCompare} />
    );
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('renders the chart section', async () => {
    render(
      <ReportDetailModal report={mockReport} onClose={mockOnClose} onCompare={mockOnCompare} />
    );
    await waitFor(() => {
      expect(screen.getByTestId('responsive-container')).toBeInTheDocument();
    });
  });

  it('calls onClose when close button is clicked', async () => {
    render(
      <ReportDetailModal report={mockReport} onClose={mockOnClose} onCompare={mockOnCompare} />
    );
    const closeButton = screen.getByRole('button', { name: /close/i });
    await act(async () => {
      closeButton.click();
    });
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('renders GitHub link when name looks like owner/repo', () => {
    render(
      <ReportDetailModal report={mockReport} onClose={mockOnClose} onCompare={mockOnCompare} />
    );
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
  });

  it('does not render GitHub link for short names', () => {
    const shortNameReport = { ...mockReport, name: 'repo' };
    render(
      <ReportDetailModal report={shortNameReport} onClose={mockOnClose} onCompare={mockOnCompare} />
    );
    expect(screen.queryByRole('link', { name: /github/i })).not.toBeInTheDocument();
  });
});
