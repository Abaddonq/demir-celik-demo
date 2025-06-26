import { NextRequest, NextResponse } from 'next/server';
import { 
  createStaff,
  getAllStaff,
  getStaffWithDepartments,
  updateStaff,
  deleteStaff,
} from '@/services/staff.service';
import { staffTable } from "@/db/schema";

type StaffInsert = typeof staffTable.$inferInsert;

export async function GET( _request : NextRequest) {
  try {
    const staffList = await getAllStaff();

    const staffWithDepartments = await Promise.all(
      staffList.map(async (staff) => {
        const fullData = await getStaffWithDepartments(staff.id);
        return fullData || staff;
      })
    );

    return NextResponse.json(staffWithDepartments);
  } catch {
    return NextResponse.json(
      { error: 'Personel listesi getirilirken hata oluştu' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { staffData } = await request.json();

    if (!staffData) {
      return NextResponse.json(
        { error: "Personel verileri gereklidir" },
        { status: 400 }
      );
    }

    // Gerekli alanları kontrol et
    if (!staffData.name || !staffData.surname || !staffData.title) {
      return NextResponse.json(
        { error: "Ad, soyad ve ünvan zorunlu alanlardır" },
        { status: 400 }
      );
    }

    // Tip dönüşümü yap
    const staffInsert: StaffInsert = {
      name: staffData.name,
      surname: staffData.surname,
      title: staffData.title,
      phone: staffData.phone || null,
      email: staffData.email || null,
      responsible_labs: staffData.responsible_labs || null,
      image_url: staffData.image_url || null
    };

    const newStaff = await createStaff(staffInsert);
    return NextResponse.json(newStaff, { status: 201 });
  } catch (error: unknown) {
    return handleStaffError(error);
  }
}
export async function PUT(request: NextRequest) {
  try {
    const { id, staffData, departmentIds } = await request.json();

    if (!id || !staffData || !departmentIds) {
      return NextResponse.json(
        { error: "Personel ID, verileri ve departman ID'leri gereklidir" },
        { status: 400 }
      );
    }

    const updatedStaff = await updateStaff(id, staffData, departmentIds);
    return NextResponse.json(updatedStaff);
  } catch (error: unknown) {
    return handleStaffError(error);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // ID'yi URL parametresinden al
    const url = new URL(request.url);
    const id = url.searchParams.get("id");
    
    if (!id) {
      return NextResponse.json(
        { error: 'Personel ID gereklidir' },
        { status: 400 }
      );
    }

    const deletedStaff = await deleteStaff(Number(id));
    if (!deletedStaff) {
      return NextResponse.json(
        { error: 'Personel bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Personel silindi' });
  } catch (error: unknown) {
    return handleStaffError(error);
  }
}

// Hata nesnesinin yapısını güvenli şekilde kontrol eden fonksiyon
function handleStaffError(error: unknown) {
  if (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    typeof (error as { code: unknown }).code === 'string'
  ) {
    const code = (error as { code: string }).code;

    if (code === '23505' || code === 'STAFF_EXISTS') {
      return NextResponse.json(
        { error: 'Bu email adresi zaten kullanılıyor' },
        { status: 409 }
      );
    }

    if (code === 'EMAIL_REQUIRED') {
      return NextResponse.json(
        { error: 'Email alanı zorunludur' },
        { status: 400 }
      );
    }
    
    // Yeni hata tipi
    if (code === 'REQUIRED_FIELDS_MISSING') {
      return NextResponse.json(
        { error: 'Ad, soyad ve ünvan alanları zorunludur' },
        { status: 400 }
      );
    }
  }

  // Diğer hatalar için loglama
  console.error("Beklenmeyen hata:", error);
  return NextResponse.json(
    { error: 'Sunucu hatası oluştu' },
    { status: 500 }
  );
}
