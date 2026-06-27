import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider, useTheme } from './ThemeContext';

// Component that exposes theme context for testing
function TestConsumer() {
  const { theme, isDark, toggleTheme, setThemeMode } = useTheme();
  return (
    <div>
      <button onClick={toggleTheme}>toggle</button>
      <button onClick={() => setThemeMode('light')}>set light</button>
      <button onClick={() => setThemeMode('system')}>set system</button>
      <button onClick={() => setThemeMode('dark')}>set dark</button>
      <span data-testid="theme">{theme}</span>
      <span data-testid="isDark">{String(isDark)}</span>
    </div>
  );
}

describe('ThemeContext', () => {
  beforeEach(() => {
    localStorage.clear();
    // Reset matchMedia mock to default (prefers light)
    window.matchMedia.mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  });

  it('renders with default dark theme when system prefers dark', () => {
    window.matchMedia.mockImplementation((query) => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));

    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme').textContent).toBe('system');
    expect(screen.getByTestId('isDark').textContent).toBe('true');
  });

  it('renders with default light theme when system prefers light', () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme').textContent).toBe('system');
    expect(screen.getByTestId('isDark').textContent).toBe('false');
  });

  it('setThemeMode changes theme to light', async () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('set light'));

    await waitFor(() => {
      expect(screen.getByTestId('theme').textContent).toBe('light');
    });
    expect(screen.getByTestId('isDark').textContent).toBe('false');
  });

  it('setThemeMode changes theme to dark', async () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('set dark'));

    await waitFor(() => {
      expect(screen.getByTestId('theme').textContent).toBe('dark');
    });
    expect(screen.getByTestId('isDark').textContent).toBe('true');
  });

  it('setThemeMode changes theme to system', async () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('set light'));
    fireEvent.click(screen.getByText('set system'));

    await waitFor(() => {
      expect(screen.getByTestId('theme').textContent).toBe('system');
    });
  });

  it('theme persists to localStorage', async () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('set dark'));

    await waitFor(() => {
      expect(localStorage.getItem('atheon-theme')).toBe('dark');
    });
  });

  it('loads theme from localStorage on mount', () => {
    localStorage.setItem('atheon-theme', 'light');

    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme').textContent).toBe('light');
    expect(screen.getByTestId('isDark').textContent).toBe('false');
  });

  it('dark mode applies dark class to document when theme is dark', async () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('set dark'));

    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });
  });

  it('dark mode removes dark class from document when theme is light', async () => {
    render(
      <ThemeProvider>
        <TestConsumer />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText('set dark'));
    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(true);
    });

    fireEvent.click(screen.getByText('set light'));

    await waitFor(() => {
      expect(document.documentElement.classList.contains('dark')).toBe(false);
    });
  });
});