import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJwt } from "@/lib/jwt"; 

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith("/admin") &&
    !request.nextUrl.pathname.startsWith("/admin/login")
  ) {
    const token = request.cookies.get("token")?.value; 
    const user = token ? verifyJwt(token) : null; 
    if (!user) { 
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  
  if (request.nextUrl.pathname.startsWith("/api")) {
    const token = request.cookies.get("token")?.value;
    const user = token ? verifyJwt(token) : null; 
    if (!user) { 
      return NextResponse.json({ error: "Yetkisiz erişim" }, { status: 401 });
    }
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
};