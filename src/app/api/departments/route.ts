import { NextRequest, NextResponse } from 'next/server';
import { 
  createDepartment,
  getAllDepartments,
  getDepartmentById, 
  updateDepartment,
  deleteDepartment
} from '@/services/department.service';

export async function GET(_request: NextRequest) {
  try {
    const departments = await getAllDepartments();
    return NextResponse.json(departments);
  } catch {
    return NextResponse.json(
      { error: 'Departmanlar getirilirken hata oluştu' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json();

    if (!name || name.trim() === '') {
      return NextResponse.json(
        { error: 'Departman adı gereklidir' },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        { error: 'Departman adı 100 karakterden uzun olamaz' },
        { status: 400 }
      );
    }

    const [newDepartment] = await createDepartment(name.trim());
    if (!newDepartment) throw new Error("Departman oluşturulamadı");
    return NextResponse.json(newDepartment, { status: 201 });
  } catch (error: unknown) {
    return handleDepartmentError(error);
  }
}


export async function PUT(request: NextRequest) {
  try {
    const { id, name } = await request.json();
    if (!id || !name) {
      return NextResponse.json(
        { error: 'ID ve departman adı gereklidir' },
        { status: 400 }
      );
    }
    
    // Departmanın varlığını kontrol et
    const existingDepartment = await getDepartmentById(id);
    if (!existingDepartment) {
      return NextResponse.json(
        { error: 'Departman bulunamadı' },
        { status: 404 }
      );
    }
    
    const updatedDepartment = await updateDepartment(id, name);
    return NextResponse.json(updatedDepartment);
  } catch (error: unknown) {
    return handleDepartmentError(error);
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();
    if (!id) {
      return NextResponse.json(
        { error: 'Departman ID gereklidir' },
        { status: 400 }
      );
    }
    
    // Departmanın varlığını kontrol et
    const existingDepartment = await getDepartmentById(id);
    if (!existingDepartment) {
      return NextResponse.json(
        { error: 'Departman bulunamadı' },
        { status: 404 }
      );
    }
    
    await deleteDepartment(id);
    return NextResponse.json({ message: 'Departman silindi' });
  } catch  {
    return NextResponse.json(
      { error: 'Departman silinirken hata oluştu' },
      { status: 500 }
    );
  }
}

// Hata yönetimi için yardımcı fonksiyon
function handleDepartmentError(error: unknown) {
  // Hata nesnesi olup olmadığını kontrol et
  if (error instanceof Error) {
    // Drizzle'dan gelen hata koduna erişmek için
    const errorObj = error as { code?: string };
    
      if (errorObj.code === '23505') {
        return NextResponse.json(
          { error: 'Bu departman adı zaten mevcut' },
          { status: 409 }
        );
      }
    }
    // Varsayılan hata yanıtı
    return NextResponse.json(
      { error: 'Bir hata oluştu' },
      { status: 500 }
    );
  }