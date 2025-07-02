// Bu dosya, admin panelinden moderatör başvurularını onaylamak için oluşturulmuştur.
// Güvenlik ve iş akışı açısından, moderatör başvurusu ile onay işlemi ayrı API endpointlerinde tutulur.
// Burada, JWT ile oturumdan admin id'si alınır ve onaylanan moderatör kaydına hem approved: true hem de approved_by: adminId yazılır.
// Böylece hangi adminin hangi moderatörü onayladığı kayıt altına alınır ve sistem güvenli, izlenebilir olur.

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { moderators } from "@/db/schema";
import { eq } from "drizzle-orm";
import { verifyJwt } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    const user = token ? verifyJwt(token) : null;
    if (!user) {
      return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
    }
    const adminId = typeof user === "object" && "id" in user ? user.id : null;
if (!adminId) {
  return NextResponse.json({ error: "Yetkisiz" }, { status: 401 });
}
    const { moderatorId } = await req.json();
    if (!moderatorId) {
      return NextResponse.json({ error: "Eksik moderatör id" }, { status: 400 });
    }
    await db.update(moderators)
      .set({ approved: true, approved_by: adminId })
      .where(eq(moderators.id, moderatorId));
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}
