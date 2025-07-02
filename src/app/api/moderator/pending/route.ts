import { NextResponse } from "next/server";
import { db } from "@/db";
import { moderators } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET() {
  const pending = await db.select().from(moderators).where(eq(moderators.approved, false));
  return NextResponse.json(pending);
}