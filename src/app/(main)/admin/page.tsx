'use client';
import { useEffect, useState } from 'react';
import { useTheme, Theme } from '../../context/themeContext';

type ThemeForm = Omit<Theme, 'id'>;

const fontOptions = [
  'Inter, sans-serif',
  'Arial, sans-serif',
  'Roboto, sans-serif',
  'Georgia, serif',
  'Times New Roman, serif',
  'Courier New, monospace',
  'Verdana, sans-serif',
];

export default function AdminThemePage() {
  const { theme, toggleMode, setTheme } = useTheme();

  const [form, setForm] = useState<ThemeForm>({
    mode: theme.mode,
    primaryColor: theme.primaryColor,
    secondaryColor: theme.secondaryColor,
    fontFamily: theme.fontFamily,
    fontSizeBase: theme.fontSizeBase,
  });

  useEffect(() => {
    setForm({
      mode: theme.mode,
      primaryColor: theme.primaryColor,
      secondaryColor: theme.secondaryColor,
      fontFamily: theme.fontFamily,
      fontSizeBase: theme.fontSizeBase,
    });
  }, [theme]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'mode') {
      setForm((prev) => ({ ...prev, mode: value === 'true' }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const saveTheme = async () => {
    try {
      const res = await fetch('/api/theme', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert('Tema başarıyla güncellendi!');
        setTheme({ ...form, id: 'default' } as Theme);
      } else {
        alert('Bir hata oluştu.');
      }
    } catch {
      alert('Sunucu hatası.');
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', fontFamily: form.fontFamily }}>
      <h1>Admin Tema Düzenleme</h1>

      <label>
        Mod:
        <select name="mode" value={form.mode.toString()} onChange={handleChange}>
          <option value="false">Light</option>
          <option value="true">Dark</option>
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
        <select
          name="fontFamily"
          value={form.fontFamily}
          onChange={handleChange}
          style={{ marginLeft: 10, width: '100%' }}
        >
          {fontOptions.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
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
        {theme.mode ? "Light Mode'a Geç" : "Dark Mode'a Geç"}
      </button>
    </div>
  );
}
