import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { staffTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { handleStaffError } from '@/lib/staff-error-handler';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise <{ id: string }> }
) {
  try {
    const {id} = await params;
    const staffId = parseInt(id);
    if (isNaN(staffId)) {
      return NextResponse.json(
        { error: "Geçersiz personel ID" },
        { status: 400 }
      );
    }

    const { labs } = await request.json();

    if (!Array.isArray(labs)) {
      return NextResponse.json(
        { error: "Laboratuvar listesi gereklidir" },
        { status: 400 }
      );
    }

    // Personelin var olduğunu kontrol et
    const [staff] = await db
      .select()
      .from(staffTable)
      .where(eq(staffTable.id, staffId));

    if (!staff) {
      return NextResponse.json(
        { error: "Personel bulunamadı" },
        { status: 404 }
      );
    }

    // Laboratuvarları güncelle
    const [updatedStaff] = await db
      .update(staffTable)
      .set({ 
        responsible_labs: JSON.stringify(labs) 
      })
      .where(eq(staffTable.id, staffId))
      .returning();

    return NextResponse.json(updatedStaff);
  } catch (error: unknown) {
    return handleStaffError(error);
  }
}