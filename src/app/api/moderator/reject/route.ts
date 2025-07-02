import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { moderators } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const { moderatorId } = await req.json();
    if (!moderatorId) {
      return NextResponse.json({ error: "Eksik moderatör id" }, { status: 400 });
    }
    await db.delete(moderators).where(eq(moderators.id, moderatorId));
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Sunucu hatası" }, { status: 500 });
  }
}