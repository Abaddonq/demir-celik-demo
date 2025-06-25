import { integer, jsonb, pgTable, varchar, text, boolean, primaryKey } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  surname: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 254 }).notNull().unique(), 
  additionalDetails: jsonb("additionalDetails"),
});

export const staffTable = pgTable("staff", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),  
  name: varchar({ length: 50 }).notNull(),  
  surname: varchar({ length: 50 }).notNull(), 
  title: varchar({ length: 50 }).notNull(),  
  phone: varchar({ length: 20 }),  
  email: varchar({ length: 254 }).unique(), 
  responsible_labs: jsonb("responsible_labs"), 
  image_url: varchar({ length: 255 }), 
});

export const departmentTable = pgTable("departments", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 100 }).notNull().unique(),
});

export const staffDepartmentsTable = pgTable(
  "staff_departments",
  {
    staff_id: integer()
      .notNull()
      .references(() => staffTable.id, { onDelete: "cascade" }),
    department_id: integer()
      .notNull()
      .references(() => departmentTable.id, { onDelete: "cascade" }),
  },
  (table) => ({
    pk: primaryKey({ 
      columns: [table.staff_id, table.department_id] 
    }),
  })
);

export const theme = pgTable('theme', {
  id: varchar('id').primaryKey().notNull(),
  mode: boolean('mode').notNull(),
  primaryColor: text('primary_color').notNull(),
  secondaryColor: text('secondary_color').notNull(),
  fontFamily: text('font_family').notNull(),
  fontSizeBase: text('font_size_base').notNull(),
});
