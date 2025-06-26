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
  const [newDeptName, setNewDeptName] = useState("");
  const [editDeptId, setEditDeptId] = useState<number | null>(null);
  const [editDeptName, setEditDeptName] = useState("");

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

  // GÜNCELLENDİ: Staff ekleme fonksiyonu (sadece temel bilgileri oluşturur)
  const handleAddStaff = async (e: React.FormEvent) => {
    e.preventDefault();

    // Zorunlu alan kontrolü
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
      const res = await fetch("/api/staff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          staffData: {
            ...newStaff,
            // null olabilecek alanlar için düzeltme
            phone: newStaff.phone || null,
            email: newStaff.email || null,
          },
        }),
      });

      if (res.ok) {
        // ... başarılı işlemler
      } else {
        // Hata mesajını doğrudan kullan
        const err = await res.json();
        alert(err.error || "Personel oluşturulamadı.");
      }
    } catch (error) {
      console.error("Personel oluşturulurken hata:", error);
      alert("Sunucu hatası.");
    } finally {
      setIsLoading((prev) => ({ ...prev, staff: false }));
    }
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

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
          <h1 className="text-2xl md:text-3xl font-bold">Admin Paneli</h1>
          <p className="mt-1 opacity-90">
            Tema, departman ve personel yönetimi
          </p>
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
          {/* Theme Settings Tab */}
          {activeTab === "tema" && (
            <div>
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Tema Ayarları
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tema Modu
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        name="mode"
                        value={form.mode.toString()}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            mode: e.target.value === "true",
                          }))
                        }
                      >
                        <option value="false">Light Mode</option>
                        <option value="true">Dark Mode</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Font Ailesi
                      </label>
                      <select
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={form.fontFamily}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            fontFamily: e.target.value,
                          }))
                        }
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Font Boyutu (px)
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={form.fontSizeBase}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            fontSizeBase: e.target.value,
                          }))
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ana Renk
                      </label>
                      <div className="flex items-center">
                        <input
                          type="color"
                          className="w-12 h-12 border border-gray-300 rounded cursor-pointer"
                          value={form.primaryColor}
                          onChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              primaryColor: e.target.value,
                            }))
                          }
                        />
                        <span className="ml-3 text-sm text-gray-600">
                          {form.primaryColor}
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        İkincil Renk
                      </label>
                      <div className="flex items-center">
                        <input
                          type="color"
                          className="w-12 h-12 border border-gray-300 rounded cursor-pointer"
                          value={form.secondaryColor}
                          onChange={(e) =>
                            setForm((prev) => ({
                              ...prev,
                              secondaryColor: e.target.value,
                            }))
                          }
                        />
                        <span className="ml-3 text-sm text-gray-600">
                          {form.secondaryColor}
                        </span>
                      </div>
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

          {/* Departments Tab */}
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
                                <input
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                  value={editDeptName}
                                  onChange={(e) =>
                                    setEditDeptName(e.target.value)
                                  }
                                />
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

          {/* Staff Management Tab */}
          {activeTab === "personel" && (
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Personel Yönetimi
              </h2>

              {/* Departman Atama Modalı */}
              {assignDeptStaffId && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                  <div className="bg-white rounded-lg w-full max-w-md p-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">
                      Departman Atama
                    </h3>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Departman Seçin
                      </label>
                      <select
                        multiple
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 min-h-[150px]"
                        value={selectedDeptIds.map(String)}
                        onChange={(e) =>
                          setSelectedDeptIds(
                            Array.from(e.target.selectedOptions, (opt) =>
                              Number(opt.value)
                            )
                          )
                        }
                      >
                        {departments.map((dept) => (
                          <option key={dept.id} value={dept.id}>
                            {dept.name}
                          </option>
                        ))}
                      </select>
                      <p className="mt-1 text-xs text-gray-500">
                        Çoklu seçim için Ctrl/Cmd tuşunu basılı tutun
                      </p>
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

              <div className="mb-8 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Yeni Personel Oluştur
                </h3>
                <form onSubmit={handleAddStaff} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ad*
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Personel adı"
                        value={newStaff.name}
                        onChange={(e) =>
                          setNewStaff({ ...newStaff, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Soyad*
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Personel soyadı"
                        value={newStaff.surname}
                        onChange={(e) =>
                          setNewStaff({ ...newStaff, surname: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ünvan*
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ünvan"
                        value={newStaff.title}
                        onChange={(e) =>
                          setNewStaff({ ...newStaff, title: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Email"
                        value={newStaff.email}
                        onChange={(e) =>
                          setNewStaff({ ...newStaff, email: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Telefon"
                        value={newStaff.phone}
                        onChange={(e) =>
                          setNewStaff({ ...newStaff, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading.staff}
                    className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                      isLoading.staff
                        ? "bg-blue-400 cursor-not-allowed text-white"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    {isLoading.staff ? "Oluşturuluyor..." : "Personel Oluştur"}
                  </button>
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
                        {staffList.map((staff) => (
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
                                      staff.departments?.map((d) => d.id) || []
                                    );
                                  }}
                                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                  Departman Ata
                                </button>
                                <button
                                  onClick={() => handleDeleteStaff(staff.id)}
                                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                                >
                                  Sil
                                </button>
                              </div>
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
        </div>
      </div>
    </div>
  );
}
