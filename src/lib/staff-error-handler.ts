import { NextResponse } from 'next/server';

export function handleStaffError(error: unknown) {
  if (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    typeof (error as { code: unknown }).code === 'string'
  ) {
    const code = (error as { code: string }).code;

    // JSONB hatası
    if (code === '22P02') {
      return NextResponse.json(
        { error: 'Geçersiz JSON formatı' },
        { status: 400 }
      );
    }

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
    
    if (code === 'REQUIRED_FIELDS_MISSING') {
      return NextResponse.json(
        { error: 'Ad, soyad ve ünvan alanları zorunludur' },
        { status: 400 }
      );
    }
    
    // Yeni hata tipi
    if (code === 'STAFF_NOT_FOUND') {
      return NextResponse.json(
        { error: 'Personel bulunamadı' },
        { status: 404 }
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