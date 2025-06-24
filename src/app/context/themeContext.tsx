"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = {
  id: string;
  mode: string;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  fontSizeBase: string;
};

type ThemeContextType = {
  theme: Theme | null;
  mode: 'light' | 'dark';
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Örnek: Sistem tercihi veya localStorage'dan oku
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setMode(systemDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    fetch(`/api/theme?mode=${mode}`)
      .then(res => res.json())
      .then(data => setTheme(data));
  }, [mode]);

  useEffect(() => {
    if (theme) {
      document.documentElement.style.setProperty('--color-primary', theme.primaryColor);
      document.documentElement.style.setProperty('--color-secondary', theme.secondaryColor);
      document.documentElement.style.setProperty('--font-family', theme.fontFamily);
      document.documentElement.style.setProperty('--font-size-base', theme.fontSizeBase);
    }
  }, [theme]);

  const toggleMode = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
