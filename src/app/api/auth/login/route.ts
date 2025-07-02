import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/index";
import { admin, moderators } from "@/db/schema";
import { eq } from "drizzle-orm";
import { comparePassword } from "@/lib/auth";
import { signJwt } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // 1. Admin tablosunda ara
    const adminUser = (await db.select().from(admin).where(eq(admin.email, email)))[0];
    if (adminUser && await comparePassword(password, adminUser.password)) {
      const token = signJwt({ id: adminUser.id, email: adminUser.email, role: "admin" });
      const response = NextResponse.json({ success: true, role: "admin" });
      response.cookies.set("token", token, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
      return response;
    }

    // 2. Moderatör tablosunda ara
    const modUser = (await db.select().from(moderators).where(eq(moderators.email, email)))[0];
    if (modUser && await comparePassword(password, modUser.password!)) {
      if (!modUser.approved) {
        return NextResponse.json({ error: "Başvurunuz onay bekliyor" }, { status: 403 });
      }
      const token = signJwt({ id: modUser.id, email: modUser.email!, role: "moderator" });     
      const response = NextResponse.json({ success: true, role: "moderator" });
      response.cookies.set("token", token , {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });
      return response;
    }

    // Hiçbiri değilse
    return NextResponse.json({ error: "Kullanıcı bulunamadı" }, { status: 401 });

  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}