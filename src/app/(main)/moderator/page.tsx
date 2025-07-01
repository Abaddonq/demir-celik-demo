import { NextResponse } from "next/server";
import { db } from "@/db"; // kendi db import yolunu kullan
import { pendingModerators } from "@/db/schema"; // tabloyu schema.ts'de tanımlamalısın
import { hash } from "bcryptjs"; // bcryptjs'i eklemelisin: npm install bcryptjs
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { name, surname, email, password } = await req.json();

    // Basit validasyon
    if (!name || !surname || !email || !password) {
      return NextResponse.json({ error: "Tüm alanlar zorunlu" }, { status: 400 });
    }

    // E-posta benzersiz mi?
    const exists = (await db
      .select()
      .from(pendingModerators)
      .where(eq(pendingModerators.email, email)))[0];

    if (exists) {
      return NextResponse.json({ error: "Bu e-posta ile başvuru zaten var" }, { status: 400 });
    }

    // Şifreyi hash'le
    const password_hash = await hash(password, 10);

    // Başvuruyu kaydet
    await db.insert(pendingModerators).values({
      name: name,
      surname: surname,
      email: email,
      password_hash: password_hash,
      status: "pending",
      created_at: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}