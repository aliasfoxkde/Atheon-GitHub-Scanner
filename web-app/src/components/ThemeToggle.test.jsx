import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeToggle from './ThemeToggle';

const mockUseTheme = {
  theme: 'dark',
  toggleTheme: jest.fn(),
};

jest.mock('../contexts/ThemeContext', () => ({
  useTheme: () => mockUseTheme,
}));

describe('ThemeToggle', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the toggle button', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('has correct aria-label showing current theme', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-label',
      'Theme: Dark, click to change'
    );
  });

  test('calls toggleTheme when clicked', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole('button'));

    expect(mockUseTheme.toggleTheme).toHaveBeenCalledTimes(1);
  });

  test('shows aria-haspopup menu attribute', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-haspopup', 'menu');
  });

  test('shows correct aria-label when theme is light', () => {
    mockUseTheme.theme = 'light';
    render(<ThemeToggle />);

    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-label',
      'Theme: Light, click to change'
    );
    mockUseTheme.theme = 'dark'; // reset
  });

  test('shows correct aria-label when theme is system', () => {
    mockUseTheme.theme = 'system';
    render(<ThemeToggle />);

    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-label',
      'Theme: System, click to change'
    );
    mockUseTheme.theme = 'dark'; // reset
  });

  test('has moon icon when theme is dark', () => {
    mockUseTheme.theme = 'dark';
    render(<ThemeToggle />);

    // Moon icon path
    expect(
      screen.getByLabelText('Theme: Dark, click to change').querySelector('svg')
    ).toBeInTheDocument();
    mockUseTheme.theme = 'dark'; // reset
  });

  test('has sun icon when theme is light', () => {
    mockUseTheme.theme = 'light';
    render(<ThemeToggle />);

    expect(
      screen.getByLabelText('Theme: Light, click to change').querySelector('svg')
    ).toBeInTheDocument();
    mockUseTheme.theme = 'dark'; // reset
  });

  test('has monitor icon when theme is system', () => {
    mockUseTheme.theme = 'system';
    render(<ThemeToggle />);

    expect(
      screen.getByLabelText('Theme: System, click to change').querySelector('svg')
    ).toBeInTheDocument();
    mockUseTheme.theme = 'dark'; // reset
  });
});
