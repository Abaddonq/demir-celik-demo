import { db } from '@/db';
import { departmentTable, staffDepartmentsTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

export const createDepartment = async (name: string) => {
  return db.insert(departmentTable).values({ name }).returning();
};

export const getAllDepartments = async () => {
  return db.select().from(departmentTable);
};

export const getDepartmentById = async (id: number) => {
  const [department] = await db
    .select()
    .from(departmentTable)
    .where(eq(departmentTable.id, id));
  return department;
};

export const updateDepartment = async (id: number, name: string) => {
  const [updatedDepartment] = await db
    .update(departmentTable)
    .set({ name })
    .where(eq(departmentTable.id, id))
    .returning();
  return updatedDepartment;
};

export const deleteDepartment = async (id: number) => {
  // İlişkili kayıtları sil
  await db
    .delete(staffDepartmentsTable)
    .where(eq(staffDepartmentsTable.department_id, id));
  
  // Departmanı sil
  const [deletedDepartment] = await db
    .delete(departmentTable)
    .where(eq(departmentTable.id, id))
    .returning();
  return deletedDepartment;
};
