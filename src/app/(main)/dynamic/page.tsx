'use client';

import { useTheme } from '../../context/themeContext';

export default function ThemeDemoPage() {
  const { theme, toggleMode } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.mode ? '#222' : '#fff', // mode === true ise dark
        color: theme.mode ? '#eee' : '#111',
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        minHeight: '100vh',
        padding: 20,
        transition: 'all 0.3s ease',
      }}
    >
      <h1>Canlı Tema Demo</h1>
      <p>
        <strong>Mod:</strong> {theme.mode ? 'Dark' : 'Light'}
      </p>
      <p>
        <strong>Primary Color:</strong>{' '}
        <span style={{ color: theme.primaryColor }}>{theme.primaryColor}</span>
      </p>
      <p>
        <strong>Secondary Color:</strong>{' '}
        <span style={{ color: theme.secondaryColor }}>{theme.secondaryColor}</span>
      </p>

      <button
        onClick={toggleMode}
        style={{
          marginTop: 30,
          padding: '10px 20px',
          backgroundColor: theme.primaryColor,
          color: theme.mode ? '#222' : '#fff',
          border: 'none',
          borderRadius: 5,
          cursor: 'pointer',
          fontSize: '1rem',
        }}
      >
        {theme.mode ? 'Light Mode\'a Geç' : 'Dark Mode\'a Geç'}
      </button>

      <div
        style={{
          marginTop: 40,
          padding: 20,
          backgroundColor: theme.secondaryColor,
          color: theme.mode ? '#222' : '#fff',
          borderRadius: 8,
        }}
      >
        Tema renkleri ve fontları burada canlı olarak uygulanıyor.
      </div>
    </div>
  );
}
