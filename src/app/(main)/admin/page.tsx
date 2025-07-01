"use client";
import { useEffect, useState } from "react";
import { useTheme, Theme } from "@/app/context/themeContext";
import Image from "next/image";
import { upload } from "@vercel/blob/client";
import { useRouter } from "next/navigation";

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
  responsible_labs?: string | null;
  image_url?: string | null;
};

const laboratoryList = [
  "Dinamik Test Laboratuvarı",
  "Kalıntı Gerilme Ölçme Laboratuvarı",
  "Spektral Analiz Laboratuvarı",
  "SEM Laboratuvarı",
  "Statik Test Laboratuvarı",
  "XRD-XRF Laboratuvarı",
  "Mikro Makro Sertlik Ölçüm Laboratuvarı",
  "Metalografi Laboratuvarı",
  "Talaşlı İmalat Atölyesi",
  "Termal Analiz Laboratuvarı",
  "Triboloji Laboratuvarı",
  "Isıl İşlem Laboratuvarı",
  "İnşaat Laboratuvarı",
  "Korozyon Laboratuvarı",
  "Kimyasal Analiz Laboratuvarı",
  "Metroloji Laboratuvarı",
  "Toz Metalurjisi Laboratuvarı",
  "Kurumsal Karbon Ayak İzi̇ Raporlama",
  "SKDM Raporlama",
  "Sürdürülebilirlik Raporlanması",
  "Bi̇na Enerji̇ Performansının Beli̇rlenmesi̇",
  "Bi̇na Enerji̇ İyi̇leşti̇rme Projeleri̇ni̇n Oluşturulması",
  "İç Mekan Hava Kali̇tesi̇ni̇n Beli̇rlenmesi̇",
  "Yapılarda Isıl Köprüleri̇n Beli̇rlenmesi̇",
  "ISO 50001 Enerji Yönetim Sistemi",
  "Riskli Yapı Tespiti",
];

export default function AdminPanelPage() {
  const { theme, toggleMode, setTheme } = useTheme();
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

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
  const [assignLabStaffId, setAssignLabStaffId] = useState<number | null>(null);
  const [selectedLabs, setSelectedLabs] = useState<string[]>([]);
  const [isAssigningLabs, setIsAssigningLabs] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [editStaffId, setEditStaffId] = useState<number | null>(null);

  const [staffList, setStaffList] = useState<Staff[]>([]);
  const [newStaff, setNewStaff] = useState<
    Omit<Staff, "id" | "departments" | "responsible_labs" | "image_url">
  >({
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

  // Departman atama için yeni state'ler
  const [assignDeptStaffId, setAssignDeptStaffId] = useState<number | null>(
    null
  );
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

  useEffect(() => {
    fetch("/api/auth/verify", { credentials: "include" }).then(res => {
      if (!res.ok) {
        router.push("/admin/login");
      } else {
        setAuthChecked(true);
      }
    });
  }, [router]);

  const fetchDepartments = async () => {
    setIsLoading((prev) => ({ ...prev, departments: true }));
    try {
      const res = await fetch("/api/departments");
      const data = await res.json();
      setDepartments(data);
    } catch (error) {
      console.error("Departmanlar yüklenirken hata:", error);
      alert("Departmanlar yüklenemedi");
    } finally {
      setIsLoading((prev) => ({ ...prev, departments: false }));
    }
  };

  const fetchStaff = async () => {
    setIsLoading((prev) => ({ ...prev, staff: true }));
    try {
      const res = await fetch("/api/staff");
      const data: (Omit<Staff, "departments"> & {
        departmentIds: number[];
        responsible_labs?: string | null;
        image_url?: string;
      })[] = await res.json();

      const populatedStaffList = data.map((staff) => ({
        ...staff,
        departments: staff.departmentIds
          .map((deptId) => departments.find((d) => d.id === deptId))
          .filter((d): d is Department => d !== undefined),
      }));

      setStaffList(populatedStaffList);
    } catch (error) {
      console.error("Personel listesi yüklenirken hata:", error);
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
      console.error("Tema kaydedilirken hata:", error);
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
      console.error("Departman eklenirken hata:", error);
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
      console.error("Departman silinirken hata:", error);
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
      console.error("Departman güncellenirken hata:", error);
      alert("Sunucu hatası.");
    } finally {
      setIsLoading((prev) => ({ ...prev, departments: false }));
    }
  };

  const isAcademicStaff = (staff: Staff) => {
    return staff.departments?.some(
      (dept) => dept.name.toLowerCase() === "akademi"
    );
  };

  // Laboratuvar atama fonksiyonu
  const assignLabsToStaff = async (staffId: number, labs: string[]) => {
    setIsAssigningLabs(true);
    try {
      const res = await fetch(`/api/staff/${staffId}/labs`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ labs }),
      });

      if (res.ok) {
        await fetchStaff();
        alert("Laboratuvarlar başarıyla atandı!");
        setSelectedLabs([]);
        setAssignLabStaffId(null);
      } else {
        const err = await res.json();
        alert(err.error || "Laboratuvar ataması yapılamadı.");
      }
    } catch (error) {
      console.error("Laboratuvar atanırken hata:", error);
      alert("Sunucu hatası.");
    } finally {
      setIsAssigningLabs(false);
    }
  };

  const handleAddStaff = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !newStaff.name.trim() ||
      !newStaff.surname.trim() ||
      !newStaff.title.trim()
    ) {
      alert("Ad, soyad ve ünvan alanları zorunludur");
      return;
    }

    setIsLoading((prev) => ({ ...prev, staff: true }));

    try {
      let imageUrl: string | null = previewImage;

      if (imageFile) {
        imageUrl = await uploadImageToBlob(imageFile);
        if (!imageUrl) {
          alert("Fotoğraf yüklenemedi.");
          return;
        }
      }

      const payload = {
        staffData: {
          ...newStaff,
          phone: newStaff.phone || null,
          email: newStaff.email || null,
          image_url: imageUrl,
        },
        departmentIds: selectedDeptIds,
      };

      const res = await fetch("/api/staff", {
        method: editStaffId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          editStaffId ? { id: editStaffId, ...payload } : payload
        ),
      });

      if (res.ok) {
        await fetchStaff();
        setNewStaff({ name: "", surname: "", title: "", email: "", phone: "" });
        setEditStaffId(null);
        setSelectedDeptIds([]);
        setImageFile(null);
        setPreviewImage(null);
        alert(editStaffId ? "Personel güncellendi." : "Personel eklendi.");
      } else {
        const err = await res.json();
        alert(err.error || "İşlem başarısız.");
      }
    } catch (error) {
      console.error("İşlem hatası:", error);
      alert("Sunucu hatası.");
    } finally {
      setIsLoading((prev) => ({ ...prev, staff: false }));
    }
  };

  const handleCancelEdit = () => {
    setEditStaffId(null);
    setNewStaff({ name: "", surname: "", title: "", email: "", phone: "" });
    setSelectedDeptIds([]);
    setImageFile(null);
    setPreviewImage(null);
  };

  const handleEditStaff = (staff: Staff) => {
    setEditStaffId(staff.id);
    setNewStaff({
      name: staff.name,
      surname: staff.surname,
      title: staff.title,
      email: staff.email,
      phone: staff.phone || "",
    });
    setSelectedDeptIds(staff.departments?.map((d) => d.id) || []);
    setPreviewImage(staff.image_url || null);
  };

  // YENİ: Departman atama fonksiyonu
  const assignDepartmentsToStaff = async (
    staffId: number,
    deptIds: number[]
  ) => {
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
      console.error("Departman atanırken hata:", error);
      alert("Sunucu hatası.");
    } finally {
      setIsAssigningDept(false);
    }
  };

  // GÜNCELLENDİ: Staff silme fonksiyonu
  const handleDeleteStaff = async (id: number) => {
    if (
      !confirm(
        "Bu personeli ve tüm departman ilişkilerini silmek istediğinize emin misiniz?"
      )
    )
      return;

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
      console.error("Personel silinirken hata:", error);
      alert("Sunucu hatası.");
    } finally {
      setIsLoading((prev) => ({ ...prev, staff: false }));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  async function uploadImageToBlob(imageFile: File): Promise<string | null> {
    try {
      const { url } = await upload(imageFile.name, imageFile, {
        access: "public",
        handleUploadUrl: "/api/avatar/upload",
      });

      return url;
    } catch (error) {
      console.error("Fotoğraf yüklenemedi:", error);
      return null;
    }
  }

  if (!authChecked) {
    return null; // veya bir loading göstergesi
  }

  return (
    <div
      style={{
        background: theme.mode ? '#22223b' : '#e9ecef',
        color: theme.mode ? '#fff' : '#23272f',
        minHeight: '100vh',
        transition: 'background 0.3s, color 0.3s',
      }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="w-full h-full bg-white rounded-2xl">
          <div className="p-6 flex items-center justify-between rounded-t-2xl" style={{ background: theme.primaryColor, color: '#fff' }}>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Admin Paneli</h1>
              <p className="mt-1 opacity-90">Tema, departman ve personel yönetimi</p>
            </div>
            <button
              onClick={async () => {
                await fetch("/api/auth/logout", { method: "POST" });
                window.location.href = "/admin/login";
              }}
              style={{ background: theme.secondaryColor }}
              className="px-4 py-2 text-white rounded hover:opacity-90"
            >
              Çıkış Yap
            </button>
          </div>
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
          <div className="p-4 md:p-6" style={{
            background: theme.mode ? '#22223b' : '#e9ecef',
            color: theme.mode ? '#fff' : '#23272f',
            borderRadius: '1rem',
            boxShadow: theme.mode ? '0 4px 32px #0004' : '0 4px 32px #0001',
            border: theme.mode ? '1px solid #333' : '1px solid #eee',
          }}>
            {activeTab === "tema" && (
              <div>
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-4" style={{ color: theme.mode ? '#fff' : '#23272f' }}>
                    Tema Ayarları
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="modeSelect" className="block text-sm font-medium mb-1" style={{ color: theme.mode ? '#fff' : '#23272f' }}>Tema Modu</label>
                        <select
                          id="modeSelect"
                          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          name="mode"
                          title="Tema Modu"
                          value={form.mode.toString()}
                          onChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              mode: e.target.value === "true",
                            }))
                          }
                          style={{
                            background: theme.mode ? '#23272f' : '#fff',
                            color: theme.mode ? '#fff' : '#23272f',
                            borderColor: theme.mode ? '#444' : '#ccc',
                          }}
                        >
                          <option value="false">Light Mode</option>
                          <option value="true">Dark Mode</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="fontFamilySelect" className="block text-sm font-medium mb-1" style={{ color: theme.mode ? '#fff' : '#23272f' }}>Font Ailesi</label>
                        <select
                          id="fontFamilySelect"
                          title="Font Ailesi"
                          className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={form.fontFamily}
                          onChange={e => setForm(prev => ({ ...prev, fontFamily: e.target.value }))}
                          style={{
                            background: theme.mode ? '#23272f' : '#f3f4f6',
                            color: theme.mode ? '#fff' : '#23272f',
                            borderColor: theme.mode ? '#444' : '#ccc',
                          }}
                        >
                          {[
                            "Inter",
                            "Arial",
                            "Roboto",
                            "Georgia",
                            "Times New Roman",
                            "Courier New",
                            "Verdana",
                          ].map((font) => (
                            <option key={font} value={font}>
                              {font}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="fontSizeInput" className="block text-sm font-medium mb-1" style={{ color: theme.mode ? '#fff' : '#23272f' }}>Font Boyutu (px)</label>
                        <input
                          id="fontSizeInput"
                          title="Font Boyutu"
                          placeholder="Font boyutu (px)"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={form.fontSizeBase}
                          onChange={e => setForm(prev => ({ ...prev, fontSizeBase: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="primaryColorInput" className="block text-sm font-medium mb-1" style={{ color: theme.mode ? '#fff' : '#23272f' }}>Ana Renk</label>
                        <input
                          id="primaryColorInput"
                          type="color"
                          title="Ana Renk"
                          className="w-12 h-12 border rounded cursor-pointer"
                          value={form.primaryColor}
                          onChange={e => setForm(prev => ({ ...prev, primaryColor: e.target.value }))}
                          style={{
                            background: theme.mode ? '#23272f' : '#fff',
                            borderColor: theme.mode ? '#444' : '#ccc',
                          }}
                        />
                      </div>

                      <div>
                        <label htmlFor="secondaryColorInput" className="block text-sm font-medium mb-1" style={{ color: theme.mode ? '#fff' : '#23272f' }}>İkincil Renk</label>
                        <input
                          id="secondaryColorInput"
                          type="color"
                          title="İkincil Renk"
                          className="w-12 h-12 border rounded cursor-pointer"
                          value={form.secondaryColor}
                          onChange={e => setForm(prev => ({ ...prev, secondaryColor: e.target.value }))}
                          style={{
                            background: theme.mode ? '#222' : '#fff',
                            borderColor: theme.mode ? '#888' : '#ccc',
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      onClick={saveTheme}
                      disabled={isLoading.theme}
                      className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        isLoading.theme
                          ? "bg-blue-400 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    >
                      {isLoading.theme
                        ? "Kaydediliyor..."
                        : "Tema Ayarlarını Kaydet"}
                    </button>
                    <button
                      onClick={toggleMode}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      {theme.mode ? "Light Mode'a Geç" : "Dark Mode'a Geç"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "departman" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Departman Yönetimi
                </h2>

                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-700 mb-3">
                    Yeni Departman Ekle
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Departman adı"
                      value={newDeptName}
                      onChange={(e) => setNewDeptName(e.target.value)}
                    />
                    <button
                      onClick={addDepartment}
                      disabled={isLoading.departments || !newDeptName.trim()}
                      className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        isLoading.departments || !newDeptName.trim()
                          ? "bg-blue-400 cursor-not-allowed text-white"
                          : "bg-blue-600 hover:bg-blue-700 text-white"
                      }`}
                    >
                      {isLoading.departments ? "Ekleniyor..." : "Ekle"}
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-3">
                    Departman Listesi
                  </h3>
                  {isLoading.departments ? (
                    <div className="flex justify-center py-8">
                      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
                    </div>
                  ) : departments.length === 0 ? (
                    <div className="bg-gray-50 rounded-lg p-8 text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 mx-auto text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                        />
                      </svg>
                      <p className="mt-4 text-gray-500">
                        Henüz departman eklenmemiş
                      </p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              ID
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Departman Adı
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              İşlemler
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {departments.map((dept) => (
                            <tr key={dept.id}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {dept.id}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {editDeptId === dept.id ? (
                                  <>
                                    <label htmlFor="editDeptNameInput" className="sr-only">Departman Adı</label>
                                    <input
                                      id="editDeptNameInput"
                                      aria-label="Departman Adı"
                                      title="Departman Adı"
                                      placeholder="Departman adı giriniz"
                                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                      value={editDeptName}
                                      onChange={e => setEditDeptName(e.target.value)}
                                    />
                                  </>
                                ) : (
                                  dept.name
                                )}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                {editDeptId === dept.id ? (
                                  <div className="flex space-x-2">
                                    <button
                                      onClick={updateDepartment}
                                      disabled={!editDeptName.trim()}
                                      className={`px-3 py-1 rounded ${
                                        !editDeptName.trim()
                                          ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                          : "bg-green-600 text-white hover:bg-green-700"
                                      }`}
                                    >
                                      Kaydet
                                    </button>
                                    <button
                                      onClick={() => setEditDeptId(null)}
                                      className="px-3 py-1 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                                    >
                                      İptal
                                    </button>
                                  </div>
                                ) : (
                                  <div className="flex space-x-3">
                                    <button
                                      onClick={() => {
                                        setEditDeptId(dept.id);
                                        setEditDeptName(dept.name);
                                      }}
                                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    >
                                      Düzenle
                                    </button>
                                    <button
                                      onClick={() => deleteDepartment(dept.id)}
                                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                                    >
                                      Sil
                                    </button>
                                  </div>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === "personel" && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Personel Yönetimi
                </h2>

                {assignDeptStaffId && (
                  <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg w-full max-w-md p-6">
                      <h3 className="text-lg font-medium text-gray-800 mb-4">
                        Departman Atama
                      </h3>

                      <div className="mb-4 max-h-80 overflow-y-auto">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Departmanlar
                        </label>
                        <div className="space-y-2">
                          {departments.map((dept) => (
                            <div key={dept.id} className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id={`dept-${dept.id}`}
                                  type="checkbox"
                                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                  checked={selectedDeptIds.includes(dept.id)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setSelectedDeptIds([
                                        ...selectedDeptIds,
                                        dept.id,
                                      ]);
                                    } else {
                                      setSelectedDeptIds(
                                        selectedDeptIds.filter(
                                          (id) => id !== dept.id
                                        )
                                      );
                                    }
                                  }}
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor={`dept-${dept.id}`}
                                  className="font-medium text-gray-700"
                                >
                                  {dept.name}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-end space-x-3">
                        <button
                          onClick={() => {
                            setAssignDeptStaffId(null);
                            setSelectedDeptIds([]);
                          }}
                          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                        >
                          İptal
                        </button>
                        <button
                          onClick={() =>
                            assignDepartmentsToStaff(
                              assignDeptStaffId,
                              selectedDeptIds
                            )
                          }
                          disabled={
                            isAssigningDept || selectedDeptIds.length === 0
                          }
                          className={`px-4 py-2 rounded-md ${
                            isAssigningDept || selectedDeptIds.length === 0
                              ? "bg-blue-300 cursor-not-allowed text-white"
                              : "bg-blue-600 hover:bg-blue-700 text-white"
                          }`}
                        >
                          {isAssigningDept ? "Atanıyor..." : "Ata"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {assignLabStaffId && (
                  <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg w-full max-w-md p-6">
                      <h3 className="text-lg font-medium text-gray-800 mb-4">
                        Laboratuvar Atama
                      </h3>

                      <div className="mb-4 max-h-80 overflow-y-auto">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Laboratuvarlar
                        </label>
                        <div className="space-y-2">
                          {laboratoryList.map((lab) => (
                            <div key={lab} className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id={`lab-${lab}`}
                                  type="checkbox"
                                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                  checked={selectedLabs.includes(lab)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setSelectedLabs([...selectedLabs, lab]);
                                    } else {
                                      setSelectedLabs(
                                        selectedLabs.filter((l) => l !== lab)
                                      );
                                    }
                                  }}
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor={`lab-${lab}`}
                                  className="font-medium text-gray-700"
                                >
                                  {lab}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-end space-x-3">
                        <button
                          onClick={() => {
                            setAssignLabStaffId(null);
                            setSelectedLabs([]);
                          }}
                          className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                        >
                          İptal
                        </button>
                        <button
                          onClick={() =>
                            assignLabsToStaff(assignLabStaffId, selectedLabs)
                          }
                          disabled={isAssigningLabs}
                          className={`px-4 py-2 rounded-md ${
                            isAssigningLabs
                              ? "bg-blue-300 cursor-not-allowed text-white"
                              : "bg-blue-600 hover:bg-blue-700 text-white"
                          }`}
                        >
                          {isAssigningLabs ? "Atanıyor..." : "Ata"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mb-8 bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-700 mb-3">
                    Yeni Personel Oluştur
                  </h3>
                  <form onSubmit={handleAddStaff} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="personelNameInput" className="sr-only">Personel Adı</label>
                        <input
                          id="personelNameInput"
                          aria-label="Personel Adı"
                          title="Personel Adı"
                          placeholder="Personel adı giriniz"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={newStaff.name}
                          onChange={(e) =>
                            setNewStaff({ ...newStaff, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="personelSurnameInput" className="sr-only">Personel Soyadı</label>
                        <input
                          id="personelSurnameInput"
                          aria-label="Personel Soyadı"
                          title="Personel Soyadı"
                          placeholder="Personel soyadı giriniz"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={newStaff.surname}
                          onChange={(e) =>
                            setNewStaff({ ...newStaff, surname: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="personelTitleInput" className="sr-only">Personel Ünvanı</label>
                        <input
                          id="personelTitleInput"
                          aria-label="Personel Ünvanı"
                          title="Personel Ünvanı"
                          placeholder="Ünvan"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={newStaff.title}
                          onChange={(e) =>
                            setNewStaff({ ...newStaff, title: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="personelEmailInput" className="sr-only">Personel Email</label>
                        <input
                          id="personelEmailInput"
                          aria-label="Personel Email"
                          title="Personel Email"
                          placeholder="Email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={newStaff.email}
                          onChange={(e) =>
                            setNewStaff({ ...newStaff, email: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="personelPhoneInput" className="sr-only">Personel Telefon</label>
                        <input
                          id="personelPhoneInput"
                          aria-label="Personel Telefon"
                          title="Personel Telefon"
                          placeholder="Telefon"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                          value={newStaff.phone}
                          onChange={(e) =>
                            setNewStaff({ ...newStaff, phone: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <label htmlFor="upload-photo" className="sr-only">Personel Fotoğrafı</label>
                        <div className="flex items-center gap-4">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                            id="upload-photo"
                          />
                          <label
                            htmlFor="upload-photo"
                            className="cursor-pointer inline-block px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm text-gray-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          >
                            Fotoğraf Yükle
                          </label>

                          {previewImage && (
                            <div className="relative h-16 w-16">
                              <Image
                                src={previewImage}
                                alt="Önizleme"
                                fill
                                className="rounded object-cover border border-gray-300"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {editStaffId ? (
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          disabled={isLoading.staff}
                          className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                            isLoading.staff
                              ? "bg-blue-400 cursor-not-allowed text-white"
                              : "bg-blue-600 hover:bg-blue-700 text-white"
                          }`}
                        >
                          {isLoading.staff ? "Kaydediliyor..." : "Kaydet"}
                        </button>
                        <button
                          type="button"
                          disabled={isLoading.staff}
                          onClick={handleCancelEdit}
                          className="px-4 py-2 rounded-md bg-gray-400 text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        >
                          İptal
                        </button>
                      </div>
                    ) : (
                      <button
                        type="submit"
                        disabled={isLoading.staff}
                        className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                          isLoading.staff
                            ? "bg-blue-400 cursor-not-allowed text-white"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                        }`}
                      >
                        {isLoading.staff
                          ? "Oluşturuluyor..."
                          : "Personel Oluştur"}
                      </button>
                    )}
                  </form>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-3">
                    Personel Listesi
                  </h3>
                  {isLoading.staff ? (
                    <div className="flex justify-center py-8">
                      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
                    </div>
                  ) : staffList.length === 0 ? (
                    <div className="bg-gray-50 rounded-lg p-8 text-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-16 w-16 mx-auto text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <p className="mt-4 text-gray-500">
                        Henüz personel eklenmemiş
                      </p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Ad Soyad
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Ünvan
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              İletişim
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Departmanlar
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              İşlemler
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {staffList.map((staff) => {
                            const isAcademic = isAcademicStaff(staff);
                            return (
                              <tr key={staff.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm font-medium text-gray-900">
                                    {staff.name} {staff.surname}
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {staff.title}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="font-medium">{staff.email}</div>
                                  <div>{staff.phone || "-"}</div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                  {staff.departments
                                    ?.map((dept) => dept.name)
                                    .join(", ") || "Belirtilmemiş"}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                  <div className="flex space-x-2">
                                    <button
                                      onClick={() => {
                                        setAssignDeptStaffId(staff.id);
                                        setSelectedDeptIds(
                                          staff.departments?.map((d) => d.id) ||
                                            []
                                        );
                                      }}
                                      className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                                    >
                                      Departman Ata
                                    </button>
                                    <button
                                      onClick={() => handleEditStaff(staff)}
                                      className="px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700"
                                    >
                                      Düzenle
                                    </button>
                                    <button
                                      onClick={() => handleDeleteStaff(staff.id)}
                                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                                    >
                                      Sil
                                    </button>
                                    {isAcademic && (
                                      <button
                                        onClick={() => {
                                          setAssignLabStaffId(staff.id);

                                          const labs = Array.isArray(
                                            staff.responsible_labs
                                          )
                                            ? staff.responsible_labs
                                            : [];

                                          // Sadece geçerli laboratuvarları al (opsiyonel ama faydalı)
                                          const validLabs = labs.filter(
                                            (lab: string) =>
                                              laboratoryList.includes(lab)
                                          );

                                          setSelectedLabs(validLabs);
                                        }}
                                        className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700"
                                      >
                                        Laboratuvar Ata
                                      </button>
                                    )}
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
