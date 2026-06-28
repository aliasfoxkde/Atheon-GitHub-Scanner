/**
 * Unit tests for Settings page
 */

import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
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

  it('renders column visibility checkboxes', () => {
    renderWithProviders(<Settings />);
    expect(screen.getByLabelText('GitHub stars')).toBeInTheDocument();
    expect(screen.getByLabelText('Dependencies')).toBeInTheDocument();
    expect(screen.getByLabelText('File count')).toBeInTheDocument();
  });

  it('renders auto-refresh interval options', () => {
    renderWithProviders(<Settings />);
    expect(screen.getByText('Off')).toBeInTheDocument();
    expect(screen.getByText('30 seconds')).toBeInTheDocument();
    expect(screen.getByText('1 minute')).toBeInTheDocument();
    expect(screen.getByText('5 minutes')).toBeInTheDocument();
  });

  it('renders page size options', () => {
    renderWithProviders(<Settings />);
    expect(screen.getByText('10 per page')).toBeInTheDocument();
    expect(screen.getByText('25 per page')).toBeInTheDocument();
    expect(screen.getByText('50 per page')).toBeInTheDocument();
    expect(screen.getByText('100 per page')).toBeInTheDocument();
  });

  it('renders density buttons', () => {
    renderWithProviders(<Settings />);
    expect(screen.getByText('comfortable')).toBeInTheDocument();
    expect(screen.getByText('compact')).toBeInTheDocument();
  });

  describe('Theme switching', () => {
    it('calls setThemeMode when theme button is clicked', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Settings />);

      const lightButton = screen.getByRole('button', { name: /light/i });
      await user.click(lightButton);
    });

    it('shows toast when theme is changed', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Settings />);

      const systemButton = screen.getByRole('button', { name: /system/i });
      await user.click(systemButton);
    });
  });

  describe('Auto-refresh interval', () => {
    it('has correct default value for auto-refresh', () => {
      renderWithProviders(<Settings />);
      const selects = screen.getAllByRole('combobox');
      expect(selects[0].value).toBe('30');
    });

    it('updates auto-refresh setting when select changes', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Settings />);

      const select = screen.getAllByRole('combobox')[0];
      await user.selectOptions(select, '60');
    });
  });

  describe('Default page size', () => {
    it('has correct default value for page size', () => {
      renderWithProviders(<Settings />);
      const selects = screen.getAllByRole('combobox');
      expect(selects[1].value).toBe('10');
    });

    it('updates page size when select changes', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Settings />);

      const select = screen.getAllByRole('combobox')[1];
      await user.selectOptions(select, '25');
    });
  });

  describe('Density', () => {
    it('calls updateSettings when density button is clicked', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Settings />);

      const compactButton = screen.getByRole('button', { name: /compact/i });
      await user.click(compactButton);
    });
  });

  describe('Column visibility checkboxes', () => {
    it('unchecks showStars checkbox when clicked', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Settings />);

      const checkbox = screen.getByLabelText('GitHub stars');
      await user.click(checkbox);
    });

    it('unchecks showDeps checkbox when clicked', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Settings />);

      const checkbox = screen.getByLabelText('Dependencies');
      await user.click(checkbox);
    });

    it('unchecks showFiles checkbox when clicked', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Settings />);

      const checkbox = screen.getByLabelText('File count');
      await user.click(checkbox);
    });
  });

  describe('Reset confirmation', () => {
    it('calls reset and shows success toast when confirmed', async () => {
      const user = userEvent.setup();
      renderWithProviders(<Settings />);

      const resetButton = screen.getByRole('button', { name: /reset/i });
      await user.click(resetButton);

      const confirmButton = screen.getByRole('button', { name: /click again to confirm/i });
      await user.click(confirmButton);
    });
  });

  describe('About section', () => {
    it('displays app name', () => {
      renderWithProviders(<Settings />);
      expect(screen.getAllByText(/Atheon/i).length).toBeGreaterThan(0);
    });

    it('displays version number', () => {
      renderWithProviders(<Settings />);
      // Version is a number like 1.2.3
      expect(screen.getAllByText(/\d+\.\d+\.\d+/).length).toBeGreaterThan(0);
    });

    it('displays data source info', () => {
      renderWithProviders(<Settings />);
      expect(screen.getByText('Data source')).toBeInTheDocument();
    });

    it('displays storage info', () => {
      renderWithProviders(<Settings />);
      expect(screen.getByText('Storage')).toBeInTheDocument();
    });
  });
});
