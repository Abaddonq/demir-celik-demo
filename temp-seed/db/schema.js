"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pendingModerators = exports.admin = exports.theme = exports.staffDepartmentsTable = exports.departmentTable = exports.staffTable = exports.usersTable = void 0;
var pg_core_1 = require("drizzle-orm/pg-core");
exports.usersTable = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.integer)().primaryKey().generatedAlwaysAsIdentity(),
    name: (0, pg_core_1.varchar)({ length: 255 }).notNull(),
    surname: (0, pg_core_1.varchar)({ length: 255 }).notNull(),
    email: (0, pg_core_1.varchar)({ length: 254 }).notNull().unique(),
    additionalDetails: (0, pg_core_1.jsonb)("additionalDetails"),
});
exports.staffTable = (0, pg_core_1.pgTable)("staff", {
    id: (0, pg_core_1.integer)().primaryKey().generatedAlwaysAsIdentity(),
    name: (0, pg_core_1.varchar)({ length: 50 }).notNull(),
    surname: (0, pg_core_1.varchar)({ length: 50 }).notNull(),
    title: (0, pg_core_1.varchar)({ length: 50 }).notNull(),
    phone: (0, pg_core_1.varchar)({ length: 20 }),
    email: (0, pg_core_1.varchar)({ length: 254 }).unique(),
    responsible_labs: (0, pg_core_1.jsonb)("responsible_labs"),
    image_url: (0, pg_core_1.varchar)({ length: 255 }),
});
exports.departmentTable = (0, pg_core_1.pgTable)("departments", {
    id: (0, pg_core_1.integer)().primaryKey().generatedAlwaysAsIdentity(),
    name: (0, pg_core_1.varchar)({ length: 100 }).notNull().unique(),
});
exports.staffDepartmentsTable = (0, pg_core_1.pgTable)("staff_departments", {
    staff_id: (0, pg_core_1.integer)()
        .notNull()
        .references(function () { return exports.staffTable.id; }, { onDelete: "cascade" }),
    department_id: (0, pg_core_1.integer)()
        .notNull()
        .references(function () { return exports.departmentTable.id; }, { onDelete: "cascade" }),
}, function (table) { return ({
    pk: (0, pg_core_1.primaryKey)({
        columns: [table.staff_id, table.department_id]
    }),
}); });
exports.theme = (0, pg_core_1.pgTable)('theme', {
    id: (0, pg_core_1.varchar)('id').primaryKey().notNull(),
    mode: (0, pg_core_1.boolean)('mode').notNull(),
    primaryColor: (0, pg_core_1.text)('primary_color').notNull(),
    secondaryColor: (0, pg_core_1.text)('secondary_color').notNull(),
    fontFamily: (0, pg_core_1.text)('font_family').notNull(),
    fontSizeBase: (0, pg_core_1.text)('font_size_base').notNull(),
});
exports.admin = (0, pg_core_1.pgTable)("admin", {
    id: (0, pg_core_1.integer)().primaryKey().generatedAlwaysAsIdentity(),
    email: (0, pg_core_1.varchar)({ length: 254 }).notNull().unique(),
    password_hash: (0, pg_core_1.text)().notNull(),
    created_at: (0, pg_core_1.text)(), // veya timestamp() kullanabilirsin
    updated_at: (0, pg_core_1.text)(), // veya timestamp() kullanabilirsin
});
exports.pendingModerators = (0, pg_core_1.pgTable)("pending_moderators", {
    id: (0, pg_core_1.integer)().primaryKey().generatedAlwaysAsIdentity(),
    name: (0, pg_core_1.varchar)({ length: 100 }).notNull(),
    surname: (0, pg_core_1.varchar)({ length: 100 }).notNull(),
    email: (0, pg_core_1.varchar)({ length: 150 }).notNull().unique(),
    password_hash: (0, pg_core_1.text)().notNull(),
    status: (0, pg_core_1.varchar)({ length: 20 }),
    created_at: (0, pg_core_1.text)(),
});
