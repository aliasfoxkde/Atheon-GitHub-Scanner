import { createContext, useCallback, useContext, useState, useEffect, useMemo } from 'react';

const ThemeContext = createContext();

// Compute initial dark state synchronously to prevent first-paint flash
const getInitialDark = () => {
  const saved = localStorage.getItem('atheon-theme');
  if (saved === 'dark') return true;
  if (saved === 'light') return false;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
};

// Sync dark class immediately before React paints
if (getInitialDark()) {
  document.documentElement.classList.add('dark');
  document.documentElement.setAttribute('data-theme', 'dark');
} else {
  document.documentElement.classList.remove('dark');
  document.documentElement.setAttribute('data-theme', 'light');
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('atheon-theme') || 'system');
  const [isDark, setIsDark] = useState(getInitialDark);

  // Update dark mode based on theme preference
  useEffect(() => {
    const updateDarkMode = () => {
      let dark = true;

      if (theme === 'system') {
        // Check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          dark = true;
        } else {
          dark = false;
        }
      } else if (theme === 'dark') {
        dark = true;
      } else {
        dark = false;
      }

      setIsDark(dark);

      // Apply theme to document
      if (dark) {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
      }
    };

    updateDarkMode();

    // Listen for system theme changes when in system mode
    if (theme === 'system' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => updateDarkMode();
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'dark' ? 'light' : theme === 'light' ? 'system' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('atheon-theme', newTheme);
  }, [theme]);

  const setThemeMode = useCallback((mode) => {
    setTheme(mode);
    localStorage.setItem('atheon-theme', mode);
  }, []);

  const value = useMemo(
    () => ({
      theme,
      isDark,
      toggleTheme,
      setThemeMode,
    }),
    [theme, isDark]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
