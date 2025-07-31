// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJwt } from "@/lib/jwt";

// JWT payload'ının tipini tanımla
interface JwtPayloadWithRole {
  id: string; // auth/login/route.ts'den gelen id
  email: string; // auth/login/route.ts'den gelen email
  role: "admin" | "moderator"; // auth/login/route.ts'den gelen rol (schema.ts'deki tablolara göre)
  iat: number; // Issued At (Oluşturulma zamanı)
  exp: number; // Expiration Time (Süre bitim zamanı)
}

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  let user: JwtPayloadWithRole | null = null;

  if (token) {
    const decoded = verifyJwt(token);
    if (decoded) {
      // Doğrulanmış payload'ı tanımladığımız tipe dönüştür
      user = decoded as JwtPayloadWithRole;
    }
  }

  // Admin paneli rotaları için kontrol
  // Sadece admin rolüne sahip kullanıcıların /admin ile başlayan ve /admin/login olmayan rotalara erişimini sağlar
  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    !request.nextUrl.pathname.startsWith("/admin/login")
  ) {
    // Kullanıcı yoksa VEYA kullanıcı varsa ama rolü 'admin' değilse
    if (!user || user.role !== "admin") {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  // API rotaları için genel yetkilendirme kontrolü
  // Haber oluşturma (POST) veya diğer kritik işlemler için rol kontrolü ekliyoruz.
  if (request.nextUrl.pathname.startsWith("/api")) {
    // Eğer kullanıcı yoksa (token yok veya geçersiz)
    if (!user) {
      return NextResponse.json({ error: "Yetkisiz erişim", message: "Token yok veya geçersiz" }, { status: 401 });
    }

    // Haber ile ilgili tüm işlemler (GET, POST, PUT, DELETE) için kontrol
    // news tablosuna erişen /api/news rotaları için yetki kontrolü
    if (request.nextUrl.pathname.startsWith("/api/news")) {
      // Sadece 'admin' veya 'moderator' rollerine sahip kullanıcıların erişimine izin ver
      if (user.role !== "admin" && user.role !== "moderator") {
        return NextResponse.json({ error: "Yetkisiz işlem", message: "Bu kaynağa erişmeye yetkiniz yok." }, { status: 403 });
      }
    }

    // Diğer /api rotaları için daha spesifik yetkilendirme gerekebilir.
    // Örneğin, kullanıcılarla ilgili API'ler, staff API'leri vb.
    // Bu kısım, uygulamanızdaki her API rotasının gerektirdiği yetki seviyesine göre genişletilebilir.
    // Eğer buraya kadar geldiyse ve özel bir blok tarafından engellenmediyse, geçerli token'ı olan bir kullanıcı isteği devam ettirebilir.
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
};