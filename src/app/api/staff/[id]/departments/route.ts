import { NextRequest, NextResponse } from 'next/server';
import { addDepartmentsToStaff } from '@/services/staff.service';
import { handleStaffError } from '@/lib/staff-error-handler';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const staffId = parseInt(id);
    if (isNaN(staffId)) {
      return NextResponse.json(
        { error: "Geçersiz personel ID" },
        { status: 400 }
      );
    }

    const { departmentIds } = await request.json();

    if (!departmentIds || !Array.isArray(departmentIds)) {
      return NextResponse.json(
        { error: "Departman ID listesi gereklidir" },
        { status: 400 }
      );
    }

    const result = await addDepartmentsToStaff(staffId, departmentIds);
    return NextResponse.json(result, { status: 201 });
  } catch (error: unknown) {
    return handleStaffError(error);
  }
}