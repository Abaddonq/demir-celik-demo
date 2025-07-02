"use client";
import { useState } from "react";
import ThemeSettings from "@/components/dashboard/ThemeSettings";
import { useTheme, Theme } from "@/app/context/themeContext";
import ThemeButton from "@/components/dashboard/themebutton";
import { useRouter } from "next/navigation";

type ThemeForm = Omit<Theme, "id">;
type LoadingState = { theme: boolean };

export default function ModeratorPanelPage() {
  const { theme, toggleMode, setTheme } = useTheme();
  const router = useRouter();
  const [form, setForm] = useState<ThemeForm>({
    mode: theme.mode,
    primaryColor: theme.primaryColor,
    secondaryColor: theme.secondaryColor,
    fontFamily: theme.fontFamily,
    fontSizeBase: theme.fontSizeBase,
  });
  
  const [isLoading, setIsLoading] = useState({
    departments: false,
    staff: false,
    theme: false,
  });

  const saveTheme = async () => {
    setIsLoading(prev => ({ ...prev, theme: true }));
    try {
      const res = await fetch("/api/theme", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        alert("Tema başarıyla güncellendi!");
        setTheme({ ...form, id: "default" } as Theme);
      } else {
        const error = await res.json();
        alert(error.message || "Bir hata oluştu.");
      }
    } catch (error) {
      alert("Sunucu hatası.");
    } finally {
      setIsLoading(prev => ({ ...prev, theme: false }));
    }
  };
  
  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Moderatör Paneli</h1>
        <div className="flex gap-2">
          
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Çıkış Yap
          </button>
        </div>
      </div>
      <ThemeSettings
        form={form}
        setForm={setForm}
        isLoading={isLoading}
        saveTheme={saveTheme}
        toggleMode={toggleMode}
      /><ThemeButton />
    </div>
  );
}