import { db } from "@/db";
import { staffTable, staffDepartmentsTable, departmentTable } from "@/db/schema";
import { eq } from "drizzle-orm";

// Tip alias (okunabilirlik için)
type StaffInsert = typeof staffTable.$inferInsert;




export const addDepartmentsToStaff = async (
  staffId: number,
  departmentIds: number[]
) => {
  // Personelin var olduğunu kontrol et
  const staff = await getStaffById(staffId);
  if (!staff) {
    const error = new Error("Personel bulunamadı") as Error & { code: string };
    error.code = "STAFF_NOT_FOUND";
    throw error;
  }

  // Eski ilişkileri sil
  await db
    .delete(staffDepartmentsTable)
    .where(eq(staffDepartmentsTable.staff_id, staffId));

  // Yeni ilişkileri ekle
  if (departmentIds.length > 0) {
    await db.insert(staffDepartmentsTable).values(
      departmentIds.map((deptId) => ({
        staff_id: staffId,
        department_id: deptId,
      }))
    );
  }

  // ✅ Akademi kontrolü
  const akademi = await db
  .select()
  .from(departmentTable)
  .where(eq(departmentTable.name, "Akademi"))
  .limit(1)
  .then(rows => rows[0]);

  if (akademi && !departmentIds.includes(akademi.id)) {
    // Eğer akademi artık ilişkili değilse → sorumlu laboratuvarları sil
    await db
      .update(staffTable)
      .set({ responsible_labs: null }) // veya null da olabilir
      .where(eq(staffTable.id, staffId));
  }

  return {
    success: true,
    message: "Departmanlar başarıyla eklendi",
    staffId,
    departmentIds,
  };
};

export const createStaff = async (staffData: StaffInsert) => {
  // "not null" alanlar için ek kontrol
  if (!staffData.name || !staffData.surname || !staffData.title) {
    const error = new Error("Zorunlu alanlar eksik") as Error & { code: string };
    error.code = "REQUIRED_FIELDS_MISSING";
    throw error;
  }

  // Email kontrolü (email null olabilir)
  if (staffData.email) {
    const existing = await db
      .select()
      .from(staffTable)
      .where(eq(staffTable.email, staffData.email));

    if (existing.length > 0) {
      const error = new Error("STAFF_EXISTS") as Error & { code: string };
      error.code = "STAFF_EXISTS";
      throw error;
    }
  }

  // Sadece personel oluştur (transaction olmadan)
  const [newStaff] = await db
    .insert(staffTable)
    .values(staffData)
    .returning();

  return newStaff;
};

// ✅ TÜM PERSONELLERİ GETİR
export const getAllStaff = async (filter?: { department?: string }) => {
  if (filter?.department) {
    // Departman adı verilmişse, join ile filtrele
    const staffInDepartment = await db
      .select()
      .from(staffTable)
      .innerJoin(staffDepartmentsTable, eq(staffTable.id, staffDepartmentsTable.staff_id))
      .innerJoin(departmentTable, eq(staffDepartmentsTable.department_id, departmentTable.id))
      .where(eq(departmentTable.name, filter.department));
    // staffInDepartment dizisinde her eleman { staff: {...}, staff_departments: {...}, departments: {...} } şeklinde olur
    // Sadece staff verisini döndür
    return staffInDepartment.map(row => row.staff);
  }
  // Departman filtresi yoksa, tüm personelleri döndür
  return db.select().from(staffTable);
};

// ✅ ID İLE PERSONEL GETİR
export const getStaffById = async (id: number) => {
  const [staff] = await db
    .select()
    .from(staffTable)
    .where(eq(staffTable.id, id));
  return staff;
};

// ✅ PERSONEL + DEPARTMAN ID'LERİYLE GETİR
export const getStaffWithDepartments = async (id: number) => {
  const staff = await getStaffById(id);
  if (!staff) return null;

  const departments = await db
    .select({ id: staffDepartmentsTable.department_id })
    .from(staffDepartmentsTable)
    .where(eq(staffDepartmentsTable.staff_id, id));

  return {
    ...staff,
    departmentIds: departments.map((d) => d.id),
  };
};

export const updateStaff = async (
  id: number,
  staffData: Partial<StaffInsert>,
  departmentIds: number[]
) => {
  // Personel bilgilerini güncelle
  const [updatedStaff] = await db
    .update(staffTable)
    .set(staffData)
    .where(eq(staffTable.id, id))
    .returning();

  // Eski departman ilişkilerini sil
  await db
    .delete(staffDepartmentsTable)
    .where(eq(staffDepartmentsTable.staff_id, id));

  // Yeni ilişkileri ekle
  if (departmentIds.length > 0) {
    await db.insert(staffDepartmentsTable).values(
      departmentIds.map((deptId) => ({
        staff_id: id,
        department_id: deptId,
      }))
    );
  }

  return updatedStaff;
};

// ✅ PERSONEL SİL
export const deleteStaff = async (id: number) => {
  // Departman ilişkilerini sil
  await db
    .delete(staffDepartmentsTable)
    .where(eq(staffDepartmentsTable.staff_id, id));

  // Personeli sil
  const [deletedStaff] = await db
    .delete(staffTable)
    .where(eq(staffTable.id, id))
    .returning();

  return deletedStaff;
};
