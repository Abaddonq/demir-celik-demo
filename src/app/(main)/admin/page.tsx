"use client";
import { useEffect, useState } from 'react';
import { useTheme } from '../../context/themeContext';

type ThemeForm = {
  mode: 'light' | 'dark';
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  fontSizeBase: string;
};

export default function AdminThemePage() {
  const { mode: currentMode, toggleMode } = useTheme();

  const [form, setForm] = useState<ThemeForm>({
    mode: currentMode || 'light',
    primaryColor: '#3b82f6',     // Tailwind blue-500 default
    secondaryColor: '#fbbf24',   // Tailwind amber-400 default
    fontFamily: 'Inter, sans-serif',
    fontSizeBase: '16px',
  });

  // Load existing theme from backend on mount or mode change
  useEffect(() => {
    fetch(`/api/theme?mode=${form.mode}`)
      .then(res => res.json())
      .then(data => {
        setForm({
          mode: data.mode,
          primaryColor: data.primaryColor,
          secondaryColor: data.secondaryColor,
          fontFamily: data.fontFamily,
          fontSizeBase: data.fontSizeBase,
        });
      })
      .catch(() => {
        // Eğer yoksa form default kalır
      });
  }, [form.mode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const saveTheme = async () => {
    try {
      const res = await fetch('/api/theme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) alert('Tema başarıyla güncellendi!');
      else alert('Bir hata oluştu.');
    } catch {
      alert('Sunucu hatası.');
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', fontFamily: form.fontFamily }}>
      <h1>Admin Tema Düzenleme</h1>

      <label>
        Mod:
        <select name="mode" value={form.mode} onChange={handleChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>

      <label>
        Primary Color:
        <input
          type="color"
          name="primaryColor"
          value={form.primaryColor}
          onChange={handleChange}
          style={{ marginLeft: 10 }}
        />
      </label>

      <label>
        Secondary Color:
        <input
          type="color"
          name="secondaryColor"
          value={form.secondaryColor}
          onChange={handleChange}
          style={{ marginLeft: 10 }}
        />
      </label>

      <label>
        Font Family:
        <input
          type="text"
          name="fontFamily"
          value={form.fontFamily}
          onChange={handleChange}
          style={{ marginLeft: 10, width: '100%' }}
          placeholder="Örn: Inter, sans-serif"
        />
      </label>

      <label>
        Font Size (px):
        <input
          type="text"
          name="fontSizeBase"
          value={form.fontSizeBase}
          onChange={handleChange}
          style={{ marginLeft: 10 }}
          placeholder="Örn: 16px"
        />
      </label>

      <button onClick={saveTheme} style={{ marginTop: 20, padding: '10px 20px' }}>
        Kaydet
      </button>

      <button
        onClick={toggleMode}
        style={{ marginTop: 20, marginLeft: 20, padding: '10px 20px' }}
      >
        {currentMode === 'light' ? 'Dark Mode\'a Geç' : 'Light Mode\'a Geç'}
      </button>
    </div>
  );
}
