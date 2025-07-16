"use client";
import { useState, useEffect } from "react";
import ThemeSettings from "@/components/dashboard/ThemeSettings";
import { useTheme, Theme } from "@/app/context/themeContext";
import ThemeButton from "@/components/dashboard/themebutton";
import { useRouter } from "next/navigation";
import NewsManagement from "@/components/dashboard/NewsManagement";

type ThemeForm = Omit<Theme, "id">;
type LoadingState = { theme: boolean };

function ModeratorTabs({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
  const tabs = [
    { id: "tema", label: "Tema Ayarları" },
    { id: "haberler", label: "Haber Yönetim Paneli" },
  ];
  return (
    <div className="flex border-b border-gray-200">
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`px-4 py-3 font-medium text-sm ${
            activeTab === tab.id
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

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
  const [activeTab, setActiveTab] = useState("tema");

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
    <div className="min-h-screen" style={{ background: theme.mode ? "#181825" : "#f8fafc", color: theme.mode ? "#fff" : "#23272f" }}>
      <div className="p-6 flex items-center justify-between rounded-t-2xl" style={{ background: theme.mode ? "#2d2e4a" : "#6ca4fe", color: "#fff" }}>
        <h1 className="text-2xl font-bold">Moderatör Paneli</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
          Çıkış Yap
        </button>
      </div>
      <ModeratorTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="p-4 md:p-6">
        {activeTab === "tema" && (
          <>
            <ThemeSettings
              form={form}
              setForm={setForm}
              isLoading={isLoading}
              saveTheme={saveTheme}
              toggleMode={toggleMode}
            />
            <ThemeButton />
          </>
        )}
        {activeTab === "haberler" && (
          <div className="p-4">
            <NewsManagement initialNewsList={[]} initialTotalCount={0} limit={10} />
          </div>
        )}
      </div>
    </div>
  );
}