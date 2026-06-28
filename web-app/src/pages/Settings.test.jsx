/**
 * Unit tests for Settings page
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Settings from './Settings';
import { SettingsProvider } from '../contexts/SettingsContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { ToastProvider } from '../contexts/ToastContext';

const renderWithProviders = (ui) => {
  return render(
    <MemoryRouter>
      <ToastProvider>
        <ThemeProvider>
          <SettingsProvider>{ui}</SettingsProvider>
        </ThemeProvider>
      </ToastProvider>
    </MemoryRouter>
  );
};

describe('Settings', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders the settings page title', () => {
    renderWithProviders(<Settings />);
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('renders appearance section with theme buttons', () => {
    renderWithProviders(<Settings />);
    expect(screen.getByText('Appearance')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /light/i })).toHaveLength(1);
    expect(screen.getAllByRole('button', { name: /dark/i })).toHaveLength(1);
    expect(screen.getAllByRole('button', { name: /system/i })).toHaveLength(1);
  });

  it('renders data section with auto-refresh selector', () => {
    renderWithProviders(<Settings />);
    expect(screen.getByText('Data')).toBeInTheDocument();
    expect(screen.getByText(/auto-refresh/i)).toBeInTheDocument();
  });

  it('renders display section with page size and density options', () => {
    renderWithProviders(<Settings />);
    expect(screen.getByText('Display')).toBeInTheDocument();
    expect(screen.getByText(/default page size/i)).toBeInTheDocument();
    expect(screen.getByText(/density/i)).toBeInTheDocument();
  });

  it('renders about section with version info', () => {
    renderWithProviders(<Settings />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText(/version/i)).toBeInTheDocument();
  });

  it('renders reset button', () => {
    renderWithProviders(<Settings />);
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument();
  });

  it('shows confirmation when reset is clicked', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Settings />);

    const resetButton = screen.getByRole('button', { name: /reset/i });
    await user.click(resetButton);

    expect(screen.getByText(/click again to confirm/i)).toBeInTheDocument();
  });
});
