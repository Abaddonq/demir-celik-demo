'use client';
import { useEffect, useState } from 'react';
import { useTheme, Theme } from '../../context/themeContext';

type ThemeForm = Omit<Theme, 'id'>;

type Department = {
  id: number;
  name: string;
};

export default function AdminThemePage() {
  const { theme, toggleMode, setTheme } = useTheme();

  const [form, setForm] = useState<ThemeForm>({
    mode: theme.mode,
    primaryColor: theme.primaryColor,
    secondaryColor: theme.secondaryColor,
    fontFamily: theme.fontFamily,
    fontSizeBase: theme.fontSizeBase,
  });

  const [departments, setDepartments] = useState<Department[]>([]);
  const [newDeptName, setNewDeptName] = useState('');
  const [editDeptId, setEditDeptId] = useState<number | null>(null);
  const [editDeptName, setEditDeptName] = useState('');

  // Temayı senkronize et
  useEffect(() => {
    setForm({
      mode: theme.mode,
      primaryColor: theme.primaryColor,
      secondaryColor: theme.secondaryColor,
      fontFamily: theme.fontFamily,
      fontSizeBase: theme.fontSizeBase,
    });
  }, [theme]);

  // Departmanları getir
  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    const res = await fetch('/api/departments');
    const data = await res.json();
    setDepartments(data);
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

  const addDepartment = async () => {
    if (!newDeptName) return;
    const res = await fetch('/api/departments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newDeptName }),
    });
    if (res.ok) {
      await fetchDepartments();
      setNewDeptName('');
    } else {
      const error = await res.json();
      alert(error.error || 'Departman eklenemedi.');
    }
  };

  const deleteDepartment = async (id: number) => {
    const confirmed = confirm('Bu departmanı silmek istediğinize emin misiniz?');
    if (!confirmed) return;

    const res = await fetch('/api/departments', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      await fetchDepartments();
    } else {
      alert('Departman silinemedi.');
    }
  };

  const updateDepartment = async () => {
    if (!editDeptId || !editDeptName) return;
    const res = await fetch('/api/departments', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: editDeptId, name: editDeptName }),
    });
    if (res.ok) {
      await fetchDepartments();
      setEditDeptId(null);
      setEditDeptName('');
    } else {
      alert('Departman güncellenemedi.');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '2rem auto', fontFamily: form.fontFamily }}>
      <h1>Admin Tema Düzenleme</h1>

      {/* Tema ayarları */}
      <label>
        Mod:
        <select name="mode" value={form.mode.toString()} onChange={(e) =>
          setForm((prev) => ({ ...prev, mode: e.target.value === 'true' }))
        }>
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
          onChange={(e) => setForm((prev) => ({ ...prev, primaryColor: e.target.value }))}
        />
      </label>

      <label>
        Secondary Color:
        <input
          type="color"
          name="secondaryColor"
          value={form.secondaryColor}
          onChange={(e) => setForm((prev) => ({ ...prev, secondaryColor: e.target.value }))}
        />
      </label>

      <label>
        Font Family:
        <select
          name="fontFamily"
          value={form.fontFamily}
          onChange={(e) => setForm((prev) => ({ ...prev, fontFamily: e.target.value }))}
        >
          {['Inter', 'Arial', 'Roboto', 'Georgia', 'Times New Roman', 'Courier New', 'Verdana'].map(font => (
            <option key={font} value={font}>{font}</option>
          ))}
        </select>
      </label>

      <label>
        Font Size (px):
        <input
          type="text"
          name="fontSizeBase"
          value={form.fontSizeBase}
          onChange={(e) => setForm((prev) => ({ ...prev, fontSizeBase: e.target.value }))}
        />
      </label>

      <button onClick={saveTheme}>Kaydet</button>
      <button onClick={toggleMode} style={{ marginLeft: 20 }}>
        {theme.mode ? "Light Mode'a Geç" : "Dark Mode'a Geç"}
      </button>

      <hr style={{ margin: '2rem 0' }} />

      {/* Departman işlemleri */}
      <h2>Departmanlar</h2>

      <ul>
        {departments.map((dept) => (
          <li key={dept.id} style={{ marginBottom: 8 }}>
            {editDeptId === dept.id ? (
              <>
                <input
                  value={editDeptName}
                  onChange={(e) => setEditDeptName(e.target.value)}
                />
                <button onClick={updateDepartment}>Kaydet</button>
                <button onClick={() => setEditDeptId(null)}>İptal</button>
              </>
            ) : (
              <>
                {dept.name}
                <button onClick={() => { setEditDeptId(dept.id); setEditDeptName(dept.name); }}>
                  Düzenle
                </button>
                <button onClick={() => deleteDepartment(dept.id)}>Sil</button>
              </>
            )}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: 16 }}>
        <input
          type="text"
          placeholder="Yeni departman adı"
          value={newDeptName}
          onChange={(e) => setNewDeptName(e.target.value)}
        />
        <button onClick={addDepartment}>Ekle</button>
      </div>
    </div>
  );
}
