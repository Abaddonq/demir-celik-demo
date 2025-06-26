import { db } from "@/db";
import { staffTable, staffDepartmentsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

// Tip alias (okunabilirlik için)
type StaffInsert = typeof staffTable.$inferInsert;

// ✅ PERSONEL OLUŞTUR
export const createStaff = async (
  staffData: StaffInsert,
  departmentIds: number[]
) => {
  return db.transaction(async (tx) => {
    // Email zorunlu kontrolü
    if (!staffData.email) {
      const error = new Error("Email boş olamaz") as Error & { code: string };
      error.code = "EMAIL_REQUIRED";
      throw error;
    }

    // Email benzersiz mi kontrol et
    const existing = await tx
      .select()
      .from(staffTable)
      .where(eq(staffTable.email, staffData.email));

    if (existing.length > 0) {
      const error = new Error("STAFF_EXISTS") as Error & { code: string };
      error.code = "STAFF_EXISTS";
      throw error;
    }

    // Yeni personel oluştur
    const [newStaff] = await tx
      .insert(staffTable)
      .values(staffData)
      .returning();

    // Departman ilişkilerini ekle
    if (departmentIds.length > 0) {
      await tx.insert(staffDepartmentsTable).values(
        departmentIds.map((deptId) => ({
          staff_id: newStaff.id,
          department_id: deptId,
        }))
      );
    }

    return newStaff;
  });
};

// ✅ TÜM PERSONELLERİ GETİR
export const getAllStaff = async () => {
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

// ✅ PERSONEL GÜNCELLE
export const updateStaff = async (
  id: number,
  staffData: Partial<StaffInsert>,
  departmentIds: number[]
) => {
  return db.transaction(async (tx) => {
    const [updatedStaff] = await tx
      .update(staffTable)
      .set(staffData)
      .where(eq(staffTable.id, id))
      .returning();

    // Eski departman ilişkilerini sil
    await tx
      .delete(staffDepartmentsTable)
      .where(eq(staffDepartmentsTable.staff_id, id));

    // Yeni ilişkileri ekle
    if (departmentIds.length > 0) {
      await tx.insert(staffDepartmentsTable).values(
        departmentIds.map((deptId) => ({
          staff_id: id,
          department_id: deptId,
        }))
      );
    }

    return updatedStaff;
  });
};

// ✅ PERSONEL SİL
export const deleteStaff = async (id: number) => {
  return db.transaction(async (tx) => {
    // Departman ilişkilerini sil
    await tx
      .delete(staffDepartmentsTable)
      .where(eq(staffDepartmentsTable.staff_id, id));

    // Personeli sil
    const [deletedStaff] = await tx
      .delete(staffTable)
      .where(eq(staffTable.id, id))
      .returning();

    return deletedStaff;
  });
};
