"use client";
import { useEffect, useState } from "react";
import { useTheme, Theme } from "../../context/themeContext";

type ThemeForm = Omit<Theme, "id">;
type Department = { id: number; name: string };
type Staff = {
  id: number;
  name: string;
  surname: string;
  title: string;
  phone?: string;
  email: string;
  departments?: Department[];
};

export default function AdminPanelClient() {
  const { theme, toggleMode, setTheme } = useTheme();

  const [form, setForm] = useState<ThemeForm>({
    mode: theme.mode,
    primaryColor: theme.primaryColor,
    secondaryColor: theme.secondaryColor,
    fontFamily: theme.fontFamily,
    fontSizeBase: theme.fontSizeBase,
  });
  const [departments, setDepartments] = useState<Department[]>([]);
  const [newDeptName, setNewDeptName] = useState("");
  const [editDeptId, setEditDeptId] = useState<number | null>(null);
  const [editDeptName, setEditDeptName] = useState("");
  const [staffList, setStaffList] = useState<Staff[]>([]);
  const [newStaff, setNewStaff] = useState<Omit<Staff, "id" | "departments" | "responsible_labs" | "image_url">>({
    name: "",
    surname: "",
    email: "",
    title: "",
    phone: "",
  });
  const [selectedDeptIds, setSelectedDeptIds] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState("tema");
  const [isLoading, setIsLoading] = useState({
    departments: false,
    staff: false,
    theme: false,
  });
  const [assignDeptStaffId, setAssignDeptStaffId] = useState<number | null>(null);
  const [isAssigningDept, setIsAssigningDept] = useState(false);

  useEffect(() => {
    setForm({
      mode: theme.mode,
      primaryColor: theme.primaryColor,
      secondaryColor: theme.secondaryColor,
      fontFamily: theme.fontFamily,
      fontSizeBase: theme.fontSizeBase,
    });
  }, [theme]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  useEffect(() => {
    if (departments.length > 0 || !isLoading.departments) {
      fetchStaff();
    }
  }, [departments]);

  const fetchDepartments = async () => {
    setIsLoading((prev) => ({ ...prev, departments: true }));
    try {
      const res = await fetch("/api/departments");
      const data = await res.json();
      setDepartments(data);
    } catch (error) {
      alert("Departmanlar yüklenemedi");
    } finally {
      setIsLoading((prev) => ({ ...prev, departments: false }));
    }
  };

  const fetchStaff = async () => {
    setIsLoading((prev) => ({ ...prev, staff: true }));
    try {
      const res = await fetch("/api/staff");
      const data = await res.json();
      const populatedStaffList = data.map((staff: any) => ({
        ...staff,
        departments: staff.departmentIds
          .map((deptId: number) => departments.find((d) => d.id === deptId))
          .filter((d: Department | undefined): d is Department => d !== undefined),
      }));
      setStaffList(populatedStaffList);
    } catch (error) {
      alert("Personel listesi yüklenemedi");
    } finally {
      setIsLoading((prev) => ({ ...prev, staff: false }));
    }
  };

  const saveTheme = async () => {
    setIsLoading((prev) => ({ ...prev, theme: true }));
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
      setIsLoading((prev) => ({ ...prev, theme: false }));
    }
  };

  const addDepartment = async () => {
    if (!newDeptName.trim()) return;
    setIsLoading((prev) => ({ ...prev, departments: true }));
    try {
      const res = await fetch("/api/departments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newDeptName.trim() }),
      });
      if (res.ok) {
        await fetchDepartments();
        setNewDeptName("");
      } else {
        const error = await res.json();
        alert(error.message || "Departman eklenemedi.");
      }
    } catch (error) {
      alert("Sunucu hatası.");
    } finally {
      setIsLoading((prev) => ({ ...prev, departments: false }));
    }
  };

  const deleteDepartment = async (id: number) => {
    if (!confirm("Bu departmanı silmek istediğinize emin misiniz?")) return;
    setIsLoading((prev) => ({ ...prev, departments: true }));
    try {
      const res = await fetch("/api/departments", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        await fetchDepartments();
      } else {
        const error = await res.json();
        alert(error.message || "Departman silinemedi.");
      }
    } catch (error) {
      alert("Sunucu hatası.");
    } finally {
      setIsLoading((prev) => ({ ...prev, departments: false }));
    }
  };

  const updateDepartment = async () => {
    if (!editDeptId || !editDeptName.trim()) return;
    setIsLoading((prev) => ({ ...prev, departments: true }));
    try {
      const res = await fetch("/api/departments", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: editDeptId, name: editDeptName.trim() }),
      });
      if (res.ok) {
        await fetchDepartments();
        setEditDeptId(null);
        setEditDeptName("");
      } else {
        const error = await res.json();
        alert(error.message || "Departman güncellenemedi.");
      }
    } catch (error) {
      alert("Sunucu hatası.");
    } finally {
      setIsLoading((prev) => ({ ...prev, departments: false }));
    }
  };

  const handleAddStaff = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStaff.name.trim() || !newStaff.surname.trim() || !newStaff.title.trim()) {
      alert("Ad, soyad ve ünvan alanları zorunludur");
      return;
    }
    setIsLoading((prev) => ({ ...prev, staff: true }));
    try {
      const res = await fetch("/api/staff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          staffData: {
            ...newStaff,
            phone: newStaff.phone || null,
            email: newStaff.email || null,
          },
        }),
      });
      if (res.ok) {
        // ... başarılı işlemler
      } else {
        const err = await res.json();
        alert(err.error || "Personel oluşturulamadı.");
      }
    } catch (error) {
      alert("Sunucu hatası.");
    } finally {
      setIsLoading((prev) => ({ ...prev, staff: false }));
    }
  };

  const assignDepartmentsToStaff = async (staffId: number, deptIds: number[]) => {
    setIsAssigningDept(true);
    try {
      const res = await fetch(`/api/staff/${staffId}/departments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ departmentIds: deptIds }),
      });
      if (res.ok) {
        await fetchStaff();
        alert("Departmanlar başarıyla atandı!");
        setSelectedDeptIds([]);
        setAssignDeptStaffId(null);
      } else {
        const err = await res.json();
        alert(err.error || "Departman ataması yapılamadı.");
      }
    } catch (error) {
      alert("Sunucu hatası.");
    } finally {
      setIsAssigningDept(false);
    }
  };

  const handleDeleteStaff = async (id: number) => {
    if (!confirm("Bu personeli ve tüm departman ilişkilerini silmek istediğinize emin misiniz?")) return;
    setIsLoading((prev) => ({ ...prev, staff: true }));
    try {
      const res = await fetch(`/api/staff?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        await fetchStaff();
        alert("Personel başarıyla silindi!");
      } else {
        const err = await res.json();
        alert(err.error || "Personel silinemedi.");
      }
    } catch (error) {
      alert("Sunucu hatası.");
    } finally {
      setIsLoading((prev) => ({ ...prev, staff: false }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Admin Paneli</h1>
            <p className="mt-1 opacity-90">
              Tema, departman ve personel yönetimi
            </p>
          </div>
          <button
            onClick={async () => {
              await fetch("/api/auth/logout", { method: "POST" });
              window.location.href = "/admin/login";
            }}
            className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            Çıkış Yap
          </button>
        </div>
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            className={`px-4 py-3 font-medium text-sm ${activeTab === "tema" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-gray-900"}`}
            onClick={() => setActiveTab("tema")}
          >
            Tema Ayarları
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm ${activeTab === "departman" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-gray-900"}`}
            onClick={() => setActiveTab("departman")}
          >
            Departmanlar
          </button>
          <button
            className={`px-4 py-3 font-medium text-sm ${activeTab === "personel" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-gray-900"}`}
            onClick={() => setActiveTab("personel")}
          >
            Personel Yönetimi
          </button>
        </div>
        {/* Tab Content */}
        <div className="p-4 md:p-6">
          {/* ... Tema Ayarları, Departmanlar ve Personel Yönetimi tablarının tüm UI kodu buraya gelecek ... */}
        </div>
      </div>
    </div>
  );
}