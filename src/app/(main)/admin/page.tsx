"use client";
import { useEffect, useState } from "react";
import { useTheme, Theme } from "../../context/themeContext";
import { upload } from "@vercel/blob/client";
import AdminTabs from "@/components/dashboard/AdminTabs";
import ThemeSettings from "@/components/dashboard/ThemeSettings";
import DepartmentManager from "@/components/dashboard/DepartmentManager";
import StaffManager from "@/components/dashboard/StaffManager";
import AssignModal from "@/components/dashboard/AssignModal";
import StaffForm from "@/components/dashboard/StaffForm";
import { useRouter } from "next/navigation";
import ThemeButton from "@/components/dashboard/themebutton";
import NewsManagement from "@/components/dashboard/NewsManagement";

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

type Moderator = {
  id: number;
  name: string;
  email: string;
  created_at: string;
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
  "Kalite Yöneticisi"
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
    moderators: false,
  });

  const [assignDeptStaffId, setAssignDeptStaffId] = useState<number | null>(null);
  const [isAssigningDept, setIsAssigningDept] = useState(false);
  const [pendingModerators, setPendingModerators] = useState<Moderator[]>([]);

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
    fetch("/api/auth/verify", { credentials: "include" }).then((res) => {
      if (!res.ok) {
        router.push("/admin/login");
      } else {
        setAuthChecked(true);
      }
    });
  }, [router]);

  useEffect(() => {
    if (activeTab === "moderator") {
      fetchPendingModerators();
    }
  }, [activeTab]);

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

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchStaff = async (depts: Department[]) => {
    setIsLoading((prev) => ({ ...prev, staff: true }));
    try {
      const res = await fetch("/api/staff");
      const data = await res.json();

      const populatedStaffList = data.map((staff: { departmentIds: number[]; }) => ({
        ...staff,
        departments: staff.departmentIds
          .map((deptId: number) => depts.find((d) => d.id === deptId))
          .filter(Boolean) as Department[],
      }));

      setStaffList(populatedStaffList);
    } catch (error) {
      console.error("Personel listesi yüklenirken hata:", error);
      alert("Personel listesi yüklenemedi");
    } finally {
      setIsLoading((prev) => ({ ...prev, staff: false }));
    }
  };

  useEffect(() => {
    if (departments.length > 0) {
      fetchStaff(departments);
    }
  }, [departments]);

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
    return (
      staff.departments?.some(
        (dept) => dept.name.toLowerCase() === "akademi"
      ) ?? false
    );
  };

  const assignLabsToStaff = async (staffId: number, labs: string[]) => {
    setIsAssigningLabs(true);
    try {
      const res = await fetch(`/api/staff/${staffId}/labs`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ labs }),
      });

      if (res.ok) {
        await fetchStaff(departments);
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
        await fetchStaff(departments);
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
        await fetchStaff(departments);
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
        await fetchStaff(departments);
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
        handleUploadUrl: "/api/upload/avatar",
      });

      return url;
    } catch (error) {
      console.error("Fotoğraf yüklenemedi:", error);
      return null;
    }
  }

  const fetchPendingModerators = async () => {
    setIsLoading((prev) => ({ ...prev, moderators: true }));
    try {
      const res = await fetch("/api/moderator/pending");
      const data = await res.json();
      setPendingModerators(data);
    } catch (error) {
      alert("Bekleyen moderatörler yüklenemedi");
    } finally {
      setIsLoading((prev) => ({ ...prev, moderators: false }));
    }
  };

  const handleApproveModerator = async (moderatorId: number) => {
    try {
      const res = await fetch("/api/moderator/approve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ moderatorId }),
      });
      if (res.ok) {
        setPendingModerators((prev) =>
          prev.filter((m) => m.id !== moderatorId)
        );
        alert("Moderatör onaylandı!");
      } else {
        alert("Onaylama başarısız");
      }
    } catch (error) {
      alert("Sunucu hatası");
    }
  };

  const handleRejectModerator = async (moderatorId: number) => {
    try {
      const res = await fetch("/api/moderator/reject", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ moderatorId }),
      });
      if (res.ok) {
        setPendingModerators((prev) =>
          prev.filter((m) => m.id !== moderatorId)
        );
        alert("Başvuru reddedildi!");
      } else {
        alert("Reddetme başarısız");
      }
    } catch (error) {
      alert("Sunucu hatası");
    }
  };

  if (!authChecked) {
    return null;
  }

  return (
    <div
      style={{
        background: theme.mode ? "#181825" : "#f8fafc",
        color: theme.mode ? "#fff" : "#23272f",
        minHeight: "100vh",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <div
        className="p-6 text-white flex items-center justify-between rounded-t-2xl"
        style={{
          background: theme.mode ? "#2d2e4a" : "#6ca4fe",
          color: "#fff",
        }}
      >
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
          style={{ background: theme.secondaryColor }}
          className="px-4 py-2 text-white rounded hover:opacity-90"
        >
          Çıkış Yap
        </button>
      </div>

      <AdminTabs activeTab={activeTab} setActiveTab={setActiveTab} />

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

        {activeTab === "departman" && (
          <DepartmentManager
            departments={departments}
            isLoading={isLoading}
            newDeptName={newDeptName}
            setNewDeptName={setNewDeptName}
            addDepartment={addDepartment}
            editDeptId={editDeptId}
            editDeptName={editDeptName}
            setEditDeptName={setEditDeptName}
            updateDepartment={updateDepartment}
            setEditDeptId={setEditDeptId}
            deleteDepartment={deleteDepartment}
          />
        )}

        {activeTab === "personel" && (
          <>
            <StaffForm
              newStaff={newStaff}
              setNewStaff={setNewStaff}
              selectedDeptIds={selectedDeptIds}
              setSelectedDeptIds={setSelectedDeptIds}
              previewImage={previewImage}
              handleImageChange={handleImageChange}
              handleAddStaff={handleAddStaff}
              isLoading={isLoading}
              editStaffId={editStaffId}
              handleCancelEdit={handleCancelEdit}
            />
            <StaffManager
              staffList={staffList}
              isLoading={isLoading}
              departments={departments}
              laboratoryList={laboratoryList}
              handleEditStaff={handleEditStaff}
              handleDeleteStaff={handleDeleteStaff}
              setAssignDeptStaffId={setAssignDeptStaffId}
              setAssignLabStaffId={setAssignLabStaffId}
              setSelectedDeptIds={setSelectedDeptIds}
              setSelectedLabs={setSelectedLabs}
              isAcademicStaff={isAcademicStaff}
            />
          </>
        )}

        {activeTab === "moderator" && (
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Bekleyen Moderatörler</h2>
            {pendingModerators.length === 0 ? (
              <div>Bekleyen moderatör başvurusu yok.</div>
            ) : (
              <table className="min-w-full border">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Ad Soyad</th>
                    <th className="border px-4 py-2">E-posta</th>
                    <th className="border px-4 py-2">Başvuru Tarihi</th>
                    <th className="border px-4 py-2">İşlem</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingModerators.map((mod) => (
                    <tr key={mod.id}>
                      <td className="border px-4 py-2">{mod.name}</td>
                      <td className="border px-4 py-2">{mod.email}</td>
                      <td className="border px-4 py-2">{mod.created_at}</td>
                      <td className="border px-4 py-2">
                        <button
                          className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                          onClick={() => handleApproveModerator(mod.id)}
                        >
                          Onayla
                        </button>
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded"
                          onClick={() => handleRejectModerator(mod.id)}
                        >
                          Reddet
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {activeTab === "haberler" && (
          <div className="p-4">
            <NewsManagement
              initialNewsList={[]}
              initialTotalCount={0}
              limit={10}
            />
          </div>
        )}
      </div>

      {assignDeptStaffId && (
        <AssignModal
          title="Departman Atama"
          items={departments}
          selectedItems={selectedDeptIds}
          setSelectedItems={setSelectedDeptIds}
          onAssign={() =>
            assignDepartmentsToStaff(assignDeptStaffId, selectedDeptIds)
          }
          onCancel={() => {
            setAssignDeptStaffId(null);
            setSelectedDeptIds([]);
          }}
          isAssigning={isAssigningDept}
          itemType="department"
        />
      )}

      {assignLabStaffId && (
        <AssignModal
          title="Laboratuvar Atama"
          items={laboratoryList}
          selectedItems={selectedLabs}
          setSelectedItems={setSelectedLabs}
          onAssign={() => assignLabsToStaff(assignLabStaffId, selectedLabs)}
          onCancel={() => {
            setAssignLabStaffId(null);
            setSelectedLabs([]);
          }}
          isAssigning={isAssigningLabs}
          itemType="lab"
        />
      )}
    </div>
  );
}