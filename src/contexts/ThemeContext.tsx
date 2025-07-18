import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Try to get from localStorage, else default to 'system'
    return (localStorage.getItem('theme') as Theme) || 'system';
  });
  const [isDark, setIsDark] = useState(false);

  // Function to get system preference using raw JavaScript
  const getSystemPreference = (): boolean => {
    if (window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    // If not available, default to dark
    return true;
  };

  // Function to apply theme to document
  const applyTheme = (isDarkMode: boolean) => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    setIsDark(isDarkMode);
  };

  // Set theme before first paint to avoid FOUC
  useLayoutEffect(() => {
    let savedTheme = (localStorage.getItem('theme') as Theme) || 'system';
    let shouldBeDark = false;
    if (savedTheme === 'dark') {
      shouldBeDark = true;
    } else if (savedTheme === 'light') {
      shouldBeDark = false;
    } else {
      shouldBeDark = getSystemPreference();
    }
    applyTheme(shouldBeDark);
    setTheme(savedTheme);
  }, []);

  // Handle theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    let shouldBeDark = false;
    if (theme === 'dark') {
      shouldBeDark = true;
    } else if (theme === 'light') {
      shouldBeDark = false;
    } else {
      shouldBeDark = getSystemPreference();
    }
    applyTheme(shouldBeDark);

    // Listen for system theme changes only when theme is 'system'
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        applyTheme(e.matches);
      };
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const handleSetTheme = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}