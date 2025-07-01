import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/index";
import { admin } from "@/db/schema";
import { eq } from "drizzle-orm";
import { comparePassword } from "@/lib/auth";
import { signJwt } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Admini bul
    const result = await db.select().from(admin).where(eq(admin.email, email));
    const user = result[0];
    if (!user) {
      return NextResponse.json({ error: "Kullanıcı bulunamadı" }, { status: 401 });
    }

    // Şifreyi kontrol et
    const isValid = await comparePassword(password, user.password);
    if (!isValid) {
      return NextResponse.json({ error: "Şifre yanlış" }, { status: 401 });
    }

    // JWT üret
    const token = signJwt({ id: user.id, email: user.email });

    // Cookie olarak döndür (HTTP Only)
    const response = NextResponse.json({ success: true });
    response.cookies.set("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 gün
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}