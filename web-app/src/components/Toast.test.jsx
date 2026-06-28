import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToastContainer from './Toast';

const mockUseToast = {
  toasts: [],
  dismiss: jest.fn(),
};

jest.mock('../contexts/ToastContext', () => ({
  useToast: () => mockUseToast,
}));

describe('ToastContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders nothing when toasts array is empty', () => {
    const { container } = render(<ToastContainer />);
    expect(container.firstChild).toBeNull();
  });

  test('renders nothing when toasts is null', () => {
    mockUseToast.toasts = null;
    const { container } = render(<ToastContainer />);
    expect(container.firstChild).toBeNull();
    mockUseToast.toasts = [];
  });

  test('renders a toast when provided', () => {
    mockUseToast.toasts = [{ id: 1, message: 'Test message', type: 'success' }];
    render(<ToastContainer />);

    expect(screen.getByText('Test message')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  test('renders multiple toasts', () => {
    mockUseToast.toasts = [
      { id: 1, message: 'First toast', type: 'success' },
      { id: 2, message: 'Second toast', type: 'error' },
      { id: 3, message: 'Third toast', type: 'info' },
    ];
    render(<ToastContainer />);

    expect(screen.getByText('First toast')).toBeInTheDocument();
    expect(screen.getByText('Second toast')).toBeInTheDocument();
    expect(screen.getByText('Third toast')).toBeInTheDocument();
  });

  test('shows correct icon for success toast', () => {
    mockUseToast.toasts = [{ id: 1, message: 'Success!', type: 'success' }];
    render(<ToastContainer />);

    const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent('✓');
  });

  test('shows correct icon for error toast', () => {
    mockUseToast.toasts = [{ id: 1, message: 'Error!', type: 'error' }];
    render(<ToastContainer />);

    const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent('✕');
  });

  test('shows correct icon for warning toast', () => {
    mockUseToast.toasts = [{ id: 1, message: 'Warning!', type: 'warning' }];
    render(<ToastContainer />);

    const alert = screen.getByRole('alert');
    expect(alert).toHaveTextContent('⚠');
  });

  test('calls dismiss with toast id when dismiss button clicked', async () => {
    const user = userEvent.setup();
    mockUseToast.toasts = [{ id: 42, message: 'Dismiss me', type: 'info' }];
    render(<ToastContainer />);

    const dismissBtn = screen.getByRole('button', { name: 'Dismiss notification' });
    await user.click(dismissBtn);

    expect(mockUseToast.dismiss).toHaveBeenCalledWith(42);
  });

  test('toast has correct background color class for type', () => {
    mockUseToast.toasts = [{ id: 1, message: 'Error toast', type: 'error' }];
    render(<ToastContainer />);

    const alert = screen.getByRole('alert');
    expect(alert.className).toContain('bg-red-600');
  });

  test('uses info type as default when type is unknown', () => {
    mockUseToast.toasts = [{ id: 1, message: 'Unknown type', type: 'unknown' }];
    render(<ToastContainer />);

    const alert = screen.getByRole('alert');
    expect(alert.className).toContain('bg-blue-600');
  });
});
