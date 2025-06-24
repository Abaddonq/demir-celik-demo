// src/app/(main)/user/page.tsx
import React from 'react';

type ThemeForm = {
  mode: 'light' | 'dark';
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  fontSizeBase: string;
};

async function getTheme(mode: string): Promise<ThemeForm | null> {
  try {
    const res = await fetch(`http://localhost:3000/api/theme?mode=${mode}`, {
      // Server component'te default fetch caching var,
      // eğer her istekte güncel veri istersen cache: 'no-store' kullan
      cache: 'no-store',
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data;
  } catch {
    return null;
  }
}

export default async function UserThemePage() {
  // İstersen mode'u 'light' sabit bırakabilirsin veya
  // request header veya cookie'den alabilirsin
  const mode = 'light';

  const themeData = await getTheme(mode);

  if (!themeData) {
    return (
      <p style={{ textAlign: 'center', marginTop: '2rem' }}>
        Tema bulunamadı.
      </p>
    );
  }

  return (
    <div
      style={{
        maxWidth: 500,
        margin: '2rem auto',
        fontFamily: themeData.fontFamily,
        fontSize: themeData.fontSizeBase,
        border: '1px solid #ccc',
        borderRadius: 8,
        padding: 20,
        backgroundColor: themeData.mode === 'light' ? '#f9f9f9' : '#1f2937',
        color: themeData.mode === 'light' ? '#111' : '#f9f9f9',
      }}
    >
      <h1 style={{ textAlign: 'center' }}>Kullanıcı Tema Ayarları</h1>

      <p><strong>Mod:</strong> {themeData.mode === 'light' ? 'Light' : 'Dark'}</p>

      <p>
        <strong>Primary Color:</strong>{' '}
        <span
          style={{
            display: 'inline-block',
            width: 20,
            height: 20,
            backgroundColor: themeData.primaryColor,
            border: '1px solid #000',
            verticalAlign: 'middle',
            marginLeft: 8,
          }}
        ></span>{' '}
        {themeData.primaryColor}
      </p>

      <p>
        <strong>Secondary Color:</strong>{' '}
        <span
          style={{
            display: 'inline-block',
            width: 20,
            height: 20,
            backgroundColor: themeData.secondaryColor,
            border: '1px solid #000',
            verticalAlign: 'middle',
            marginLeft: 8,
          }}
        ></span>{' '}
        {themeData.secondaryColor}
      </p>

      <p><strong>Font Family:</strong> {themeData.fontFamily}</p>
      <p><strong>Font Size:</strong> {themeData.fontSizeBase}</p>
    </div>
  );
}
