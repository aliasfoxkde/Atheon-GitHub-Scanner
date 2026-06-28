import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CompareModal from './CompareModal';
import apiService from '../services/api';

jest.mock('../services/api', () => ({
  getCompareReports: jest.fn(),
}));

jest.mock('./Modal', () => {
  return function MockModal({ id, label, onClose, size, children }) {
    return (
      <div data-testid="mock-modal" data-id={id} data-label={label} data-size={size}>
        <button onClick={onClose} data-testid="modal-close-btn">
          Close
        </button>
        {children}
      </div>
    );
  };
});

jest.mock('./Skeleton', () => ({
  Skeleton: function MockSkeleton({ className }) {
    return <div data-testid="mock-skeleton" className={className} />;
  },
}));

const mockReports = [
  {
    id: 1,
    name: 'repo-a',
    language: 'JavaScript',
    tier: 'A',
    quality_score: 85,
    total_dependencies: 120,
    total_files: 45,
    stars: 1000,
    scan_method: 'full',
  },
  {
    id: 2,
    name: 'repo-b',
    language: 'TypeScript',
    tier: 'B',
    quality_score: 72,
    total_dependencies: 85,
    total_files: 30,
    stars: 500,
    scan_method: 'full',
  },
];

describe('CompareModal', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('returns null when fewer than 2 ids provided', () => {
    const { container } = render(<CompareModal ids={[1]} onClose={jest.fn()} />);
    expect(container.firstChild).toBeNull();
  });

  test('returns null when ids is empty array', () => {
    const { container } = render(<CompareModal ids={[]} onClose={jest.fn()} />);
    expect(container.firstChild).toBeNull();
  });

  test('returns null when ids is null/undefined', () => {
    const { container: c1 } = render(<CompareModal ids={null} onClose={jest.fn()} />);
    const { container: c2 } = render(<CompareModal ids={undefined} onClose={jest.fn()} />);
    expect(c1.firstChild).toBeNull();
    expect(c2.firstChild).toBeNull();
  });

  test('renders loading skeleton while fetching', async () => {
    apiService.getCompareReports.mockImplementation(() => new Promise(() => {}));
    render(<CompareModal ids={[1, 2]} onClose={jest.fn()} />);

    // Should show skeletons immediately
    expect(screen.getAllByTestId('mock-skeleton')).toHaveLength(3);
  });

  test('renders error message when API fails', async () => {
    apiService.getCompareReports.mockResolvedValue({ success: false, error: 'Network error' });
    render(<CompareModal ids={[1, 2]} onClose={jest.fn()} />);

    await waitFor(() => {
      expect(screen.getByText('Network error')).toBeInTheDocument();
    });
  });

  test('renders empty message when no reports returned', async () => {
    apiService.getCompareReports.mockResolvedValue({ success: true, data: { reports: [] } });
    render(<CompareModal ids={[1, 2]} onClose={jest.fn()} />);

    await waitFor(() => {
      expect(screen.getByText('No reports found for the selected ids')).toBeInTheDocument();
    });
  });

  test('renders compare table with 2 reports', async () => {
    apiService.getCompareReports.mockResolvedValue({
      success: true,
      data: { reports: mockReports },
    });
    render(<CompareModal ids={[1, 2]} onClose={jest.fn()} />);

    await waitFor(() => {
      expect(screen.getByText('Compare reports')).toBeInTheDocument();
      expect(screen.getByText('2 packages')).toBeInTheDocument();
    });

    // Check table headers
    expect(screen.getByText('repo-a ★')).toBeInTheDocument();
    // repo-b appears 5 times: 1 in table header + 4 in metric bars (quality, stars, deps, files)
    expect(screen.getAllByText('repo-b')).toHaveLength(5);

    // Check metric rows
    expect(screen.getByText('Language')).toBeInTheDocument();
    expect(screen.getByText('Tier')).toBeInTheDocument();
    expect(screen.getByText('Score')).toBeInTheDocument();
    expect(screen.getByText('Scan method')).toBeInTheDocument();
  });

  test('renders metric bars for quality score, stars, dependencies, and files', async () => {
    apiService.getCompareReports.mockResolvedValue({
      success: true,
      data: { reports: mockReports },
    });
    render(<CompareModal ids={[1, 2]} onClose={jest.fn()} />);

    await waitFor(() => {
      expect(screen.getByText('Quality score')).toBeInTheDocument();
      expect(screen.getByText('GitHub stars')).toBeInTheDocument();
      expect(screen.getByText('Dependencies')).toBeInTheDocument();
      expect(screen.getByText('Files')).toBeInTheDocument();
    });
  });

  test('renders tier badges with correct colors', async () => {
    apiService.getCompareReports.mockResolvedValue({
      success: true,
      data: { reports: mockReports },
    });
    render(<CompareModal ids={[1, 2]} onClose={jest.fn()} />);

    await waitFor(() => {
      const tierA = screen.getByText('A');
      const tierB = screen.getByText('B');
      expect(tierA).toBeInTheDocument();
      expect(tierB).toBeInTheDocument();
      expect(tierA.className).toContain('bg-green-500');
      expect(tierB.className).toContain('bg-blue-500');
    });
  });

  test('shows delta column when comparing reports', async () => {
    apiService.getCompareReports.mockResolvedValue({
      success: true,
      data: { reports: mockReports },
    });
    render(<CompareModal ids={[1, 2]} onClose={jest.fn()} />);

    await waitFor(() => {
      expect(screen.getByText('Δ vs baseline')).toBeInTheDocument();
      expect(screen.getByText('baseline')).toBeInTheDocument();
    });
  });

  test('calls onClose when close button clicked', async () => {
    const user = userEvent.setup();
    apiService.getCompareReports.mockResolvedValue({
      success: true,
      data: { reports: mockReports },
    });
    const onClose = jest.fn();
    render(<CompareModal ids={[1, 2]} onClose={onClose} />);

    await waitFor(() => screen.getByTestId('modal-close-btn'));
    await user.click(screen.getByTestId('modal-close-btn'));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('handles reports with different fields gracefully', async () => {
    const mixedReports = [
      {
        id: 1,
        name: 'repo-x',
        language: 'Python',
        tier: 'C',
        quality_score: 60,
        scan_method: 'quick',
      },
      { id: 2, name: 'repo-y' }, // missing most fields
    ];
    apiService.getCompareReports.mockResolvedValue({
      success: true,
      data: { reports: mixedReports },
    });
    render(<CompareModal ids={[1, 2]} onClose={jest.fn()} />);

    await waitFor(() => {
      expect(screen.getByText('Compare reports')).toBeInTheDocument();
    });
    // Should not throw, just render with defaults
  });
});
