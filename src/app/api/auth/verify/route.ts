import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/lib/jwt";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Token bulunamadı" }, { status: 401 });
  }

  const user = verifyJwt(token);
  if (!user) {
    return NextResponse.json({ error: "Geçersiz token" }, { status: 401 });
  }

  return NextResponse.json({ 
    success: true, 
    user: { 
      id: (user as any).id, 
      email: (user as any).email 
    } 
  });
} 