// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJwt } from "@/lib/jwt";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { moderators } from "@/db/schema";

// JWT payload'ının tipini tanımla
interface JwtPayloadWithRole {
  id: number; // string -> number olarak değiştir
  email: string;
  role: "admin" | "moderator";
  iat: number;
  exp: number;
}

// middleware.ts
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  let user: JwtPayloadWithRole | null = null;

  if (token) {
    const decoded = verifyJwt(token);
    if (decoded) user = decoded as JwtPayloadWithRole;
  }

  // Admin paneli kontrolü
  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    !request.nextUrl.pathname.startsWith("/admin/login")
  ) {
    if (!user || user.role !== "admin") {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // API rotaları
  if (request.nextUrl.pathname.startsWith("/api")) {
    if (!user) {
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
    }

    // Moderator onay kontrolü
    if (user.role === "moderator") {
      const modUser = await db
        .select()
        .from(moderators)
        .where(eq(moderators.id, user.id));
      if (!modUser[0]?.approved) {
        return NextResponse.json(
          { error: "Hesabınız onaylanmamış" },
          { status: 403 }
        );
      }
    }

    // Haber API'leri için rol kontrolü
    if (request.nextUrl.pathname.startsWith("/api/news")) {
      if (user.role !== "admin" && user.role !== "moderator") {
        return NextResponse.json({ error: "Yetkisiz işlem" }, { status: 403 });
      }
    }
  }

  return NextResponse.next();
}
