import {
  integer,
  jsonb,
  pgTable,
  varchar,
  text,
  boolean,
  primaryKey,
  serial,
  timestamp,
} from "drizzle-orm/pg-core";

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
      columns: [table.staff_id, table.department_id],
    }),
  })
);

export const theme = pgTable("theme", {
  id: varchar("id").primaryKey().notNull(),
  mode: boolean("mode").notNull(),
  primaryColor: text("primary_color").notNull(),
  secondaryColor: text("secondary_color").notNull(),
  fontFamily: text("font_family").notNull(),
  fontSizeBase: text("font_size_base").notNull(),
});

export const admin = pgTable("admin", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
});

export const moderators = pgTable("moderators", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }),
  email: varchar("email", { length: 255 }).unique(),
  password: varchar("password", { length: 255 }),
  created_at: text("created_at"),
  approved: boolean("approved").default(false), // EKLE
  approved_by: integer("approved_by").notNull(), // EKLE (veya varchar, admin id tipine göre)
});

export const news = pgTable("news", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description"),
  content: text("content").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
  slug: varchar("slug", { length: 255 }).unique().notNull(),
  author_id: integer("author_id")
    .notNull()
    .references(() => admin.id),
  cover_image: varchar("cover_image", { length: 255 }),
});

export const newsImages = pgTable("news_images", {
  id: serial("id").primaryKey(),
  news_id: integer("news_id").references(() => news.id, {
    onDelete: "cascade",
  }),
  image_url: varchar("image_url", { length: 255 }).notNull(),
  caption: varchar("caption", { length: 255 }),
  order_index: integer("order_index").default(0),
});

