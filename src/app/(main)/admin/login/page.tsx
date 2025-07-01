"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/app/context/themeContext";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      
      if (res.ok) {
        router.push("/admin"); // Giriş başarılıysa admin paneline yönlendir
      } else {
        const errorText = await res.text();
        try {
          const data = JSON.parse(errorText);
          setError(data.error || "Giriş başarısız");
        } catch (jsonError) {
          // JSON parse edilemezse text olarak kullan
          setError(errorText || "Giriş başarısız");
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Bağlantı hatası oluştu");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: theme.mode ? '#22223b' : '#e9ecef',
        transition: 'background 0.3s',
      }}
    >
      <div
        className="w-full max-w-md rounded-xl shadow-md overflow-hidden"
        style={{
          background: theme.mode ? '#22223b' : '#e9ecef',
          color: theme.mode ? '#fff' : '#23272f',
          boxShadow: theme.mode ? '0 4px 32px #0004' : '0 4px 32px #0001',
          border: theme.mode ? '1px solid #333' : '1px solid #eee',
        }}
      >
        <div
          className="bg-gradient-to-r"
          style={{
            background: theme.primaryColor,
            color: '#fff',
            padding: '1.5rem',
            textAlign: 'center',
          }}
        >
          <h1 className="text-2xl md:text-3xl font-bold">Admin Giriş</h1>
          <p className="mt-1 opacity-90">Yönetici paneline erişim</p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              style={{ color: theme.mode ? '#fff' : '#23272f' }}
            >
              E-posta
            </label>
            <input
              type="email"
              placeholder="E-posta"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2"
              style={{
                background: theme.mode ? '#23272f' : '#fff',
                color: theme.mode ? '#fff' : '#23272f',
                borderColor: theme.mode ? '#444' : '#ccc',
              }}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              style={{ color: theme.mode ? '#fff' : '#23272f' }}
            >
              Şifre
            </label>
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2"
              style={{
                background: theme.mode ? '#23272f' : '#fff',
                color: theme.mode ? '#fff' : '#23272f',
                borderColor: theme.mode ? '#444' : '#ccc',
              }}
            />
          </div>
          {error && <div className="text-red-400 text-sm font-medium text-center">{error}</div>}
          <button
            type="submit"
            style={{
              background: theme.primaryColor,
              color: '#fff',
              opacity: 0.95,
            }}
            className="w-full px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}