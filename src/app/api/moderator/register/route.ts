import { NextResponse } from "next/server";
import { db } from "@/db";
import { moderators } from "@/db/schema";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Tüm alanlar zorunlu" }, { status: 400 });
    }

    const exists = (await db
      .select()
      .from(moderators)
      .where(eq(moderators.email, email)))[0];

    if (exists) {
      return NextResponse.json({ error: "Bu e-posta ile başvuru zaten var" }, { status: 400 });
    }

    const password_hash = await hash(password, 10);

    await db.insert(moderators).values({
      name: name,
      email: email,
      password: password_hash,
      created_at: new Date().toISOString(),
      approved: false,
      approved_by: 0,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
} 