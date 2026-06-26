import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SettingsProvider, useSettings } from './SettingsContext';

// Component that exposes settings context for testing
function TestConsumer() {
  const { settings, updateSettings, reset } = useSettings();
  return (
    <div>
      <button onClick={() => updateSettings({ autoRefreshInterval: 60 })}>update interval</button>
      <button onClick={() => updateSettings({ showStars: false })}>update stars</button>
      <button onClick={reset}>reset</button>
      <div data-testid="settings">{JSON.stringify(settings)}</div>
    </div>
  );
}

describe('SettingsContext', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('has correct default settings structure', () => {
    render(
      <SettingsProvider>
        <TestConsumer />
      </SettingsProvider>
    );

    const settings = JSON.parse(screen.getByTestId('settings').textContent);
    expect(settings).toHaveProperty('autoRefreshInterval', 30);
    expect(settings).toHaveProperty('defaultPageSize', 10);
    expect(settings).toHaveProperty('density', 'comfortable');
    expect(settings).toHaveProperty('showStars', true);
    expect(settings).toHaveProperty('showDeps', true);
    expect(settings).toHaveProperty('showFiles', true);
  });

  it('updateSettings merges with existing settings', async () => {
    render(
      <SettingsProvider>
        <TestConsumer />
      </SettingsProvider>
    );

    fireEvent.click(screen.getByText('update interval'));

    await waitFor(() => {
      const settings = JSON.parse(screen.getByTestId('settings').textContent);
      expect(settings.autoRefreshInterval).toBe(60);
    });

    // other settings should remain
    const settings = JSON.parse(screen.getByTestId('settings').textContent);
    expect(settings.defaultPageSize).toBe(10);
    expect(settings.density).toBe('comfortable');
    expect(settings.showStars).toBe(true);
  });

  it('updateSettings does not lose existing settings', async () => {
    render(
      <SettingsProvider>
        <TestConsumer />
      </SettingsProvider>
    );

    fireEvent.click(screen.getByText('update stars'));

    await waitFor(() => {
      const settings = JSON.parse(screen.getByTestId('settings').textContent);
      expect(settings.showStars).toBe(false);
    });

    const settings = JSON.parse(screen.getByTestId('settings').textContent);
    expect(settings.autoRefreshInterval).toBe(30);
    expect(settings.defaultPageSize).toBe(10);
  });

  it('reset restores DEFAULTS', async () => {
    render(
      <SettingsProvider>
        <TestConsumer />
      </SettingsProvider>
    );

    fireEvent.click(screen.getByText('update interval'));
    fireEvent.click(screen.getByText('update stars'));
    fireEvent.click(screen.getByText('reset'));

    await waitFor(() => {
      const settings = JSON.parse(screen.getByTestId('settings').textContent);
      expect(settings.autoRefreshInterval).toBe(30);
      expect(settings.showStars).toBe(true);
    });
  });

  it('persists settings to localStorage', async () => {
    render(
      <SettingsProvider>
        <TestConsumer />
      </SettingsProvider>
    );

    fireEvent.click(screen.getByText('update interval'));

    await waitFor(() => {
      const stored = localStorage.getItem('atheon_settings');
      expect(stored).toBeTruthy();
    });

    const stored = localStorage.getItem('atheon_settings');
    const parsed = JSON.parse(stored);
    expect(parsed.autoRefreshInterval).toBe(60);
  });

  it('loads settings from localStorage on mount', () => {
    localStorage.setItem('atheon_settings', JSON.stringify({ autoRefreshInterval: 120 }));

    render(
      <SettingsProvider>
        <TestConsumer />
      </SettingsProvider>
    );

    const settings = JSON.parse(screen.getByTestId('settings').textContent);
    expect(settings.autoRefreshInterval).toBe(120);
  });

  it('merges stored settings with defaults (stored takes precedence)', () => {
    localStorage.setItem('atheon_settings', JSON.stringify({ autoRefreshInterval: 120 }));

    render(
      <SettingsProvider>
        <TestConsumer />
      </SettingsProvider>
    );

    const settings = JSON.parse(screen.getByTestId('settings').textContent);
    expect(settings.autoRefreshInterval).toBe(120);
    expect(settings.defaultPageSize).toBe(10); // default preserved
    expect(settings.density).toBe('comfortable'); // default preserved
  });
});
