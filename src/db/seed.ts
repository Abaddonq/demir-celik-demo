import { config } from "dotenv";
config(); // Environment variables'ları yükle

// DATABASE_URL kontrolü
if (!process.env.DATABASE_URL) {
  console.error("❌ DATABASE_URL environment variable bulunamadı!");
  console.log("Lütfen .env dosyasında DATABASE_URL'i tanımlayın:");
  console.log("DATABASE_URL=postgresql://username:password@host:port/database");
  process.exit(1);
}

import { db } from "./index";
import { admin } from "./schema";
import { hashPassword } from "@/lib/auth";

console.log("Bağlantı adresi:", process.env.DATABASE_URL);

async function seed() {
  try {
    // Admin kullanıcısı ekle
    const email = "admin@site.com";
    const password = "admin123";
    const hashedPassword = await hashPassword(password);

    await db.insert(admin).values({
      email,
      password: hashedPassword,
    });

    console.log("✅ Admin kullanıcısı eklendi!");
    console.log("Email: admin@site.com");
    console.log("Şifre: admin123");
  } catch (error) {
    console.error("❌ Admin eklenemedi:", error);
  }
}

seed();