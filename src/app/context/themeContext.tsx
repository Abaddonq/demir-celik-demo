'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = {
  id: string;
  mode: boolean;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  fontSizeBase: string;
};

type ThemeContextType = {
  theme: Theme;
  toggleMode: () => void;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export const ThemeProvider = ({ children, initialTheme }: { children: ReactNode; initialTheme: Theme }) => {
  const [theme, setThemeState] = useState<Theme>(initialTheme);

  const toggleMode = () => {
    setThemeState((prev) => ({ ...prev, mode: !prev.mode }));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', theme.primaryColor);
    document.documentElement.style.setProperty('--color-secondary', theme.secondaryColor);
    document.documentElement.style.setProperty('--font-family', theme.fontFamily);
    document.documentElement.style.setProperty('--font-size-base', theme.fontSizeBase);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleMode, setTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
