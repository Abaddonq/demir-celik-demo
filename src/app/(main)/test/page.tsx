'use client';

import { useEffect, useState } from 'react';

type Theme = {
  id: string;
  mode: 'light' | 'dark';
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  fontSizeBase: string;
};

export default function ThemeInfoPage() {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  async function fetchTheme() {
    try {
      const res = await fetch('/api/theme?mode=false'); 
      if (!res.ok) throw new Error('Tema verisi alınamadı');
      const data: Theme = await res.json();
      setTheme(data);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError(String(e));
      }
    } finally {
      setLoading(false);
    }
  }
  fetchTheme();
}, []);


  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p style={{ color: 'red' }}>Hata: {error}</p>;
  if (!theme) return <p>Veri bulunamadı.</p>;

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: theme.fontFamily }}>
      <h1>Mevcut Tema Bilgileri</h1>
      <p><strong>ID:</strong> {theme.id}</p>
      <p><strong>Mod:</strong> {theme.mode.toString()}</p>
      <p>
        <strong>Primary Color:</strong>{' '}
        <span style={{ color: theme.primaryColor }}>{theme.primaryColor}</span>
      </p>
      <p>
        <strong>Secondary Color:</strong>{' '}
        <span style={{ color: theme.secondaryColor }}>{theme.secondaryColor}</span>
      </p>
      <p><strong>Font Family:</strong> {theme.fontFamily}</p>
      <p><strong>Font Size Base:</strong> {theme.fontSizeBase}</p>

      <div
        style={{
          marginTop: 20,
          padding: 20,
          backgroundColor: theme.primaryColor,
          color: theme.mode === 'light' ? '#000' : '#fff',
          borderRadius: 8,
          fontSize: theme.fontSizeBase,
          fontFamily: theme.fontFamily,
        }}
      >
        Bu alanda tema renkleri ve fontları canlı olarak görünüyor.
      </div>
    </div>
  );
}
