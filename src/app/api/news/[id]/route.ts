// src/app/api/news/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getNewsById, updateNews, deleteNews } from "@/services/news.service"; // Servislerinizi import edin

export async function GET(
  request: NextRequest,
  context: { params: { id: string } } // params yerine context kullanıyoruz
) {
  try {
    // context.params'ı await ederek proxy davranışını çözüyoruz
    // Bu, Next.js'in hata mesajında önerdiği "params should be awaited" durumunu ele alır.
    const resolvedParams = await context.params;
    const id = parseInt(resolvedParams.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 });
    }

    const newsItem = await getNewsById(id);
    
    if (!newsItem) {
      return NextResponse.json({ error: "Haber bulunamadı" }, { status: 404 });
    }
    
    return NextResponse.json(newsItem);
  } catch (error: any) {
    console.error("Haber getirilirken hata oluştu:", error);
    return NextResponse.json(
      { error: "Haber getirilirken hata oluştu: " + error.message },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  context: { params: { id: string } } // params yerine context kullanıyoruz
) {
  try {
    // context.params'ı await ederek proxy davranışını çözüyoruz
    const resolvedParams = await context.params;
    const id = parseInt(resolvedParams.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 });
    }

    const updateData = await request.json();
    const updatedNews = await updateNews(id, updateData);
    return NextResponse.json(updatedNews);
  } catch (error: any) {
    console.error("Haber güncellenirken hata oluştu:", error);
    return NextResponse.json(
      { error: "Haber güncellenirken hata oluştu: " + error.message },
      { status: 500 }
    );
  }
}


export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const resolvedParams = await context.params;
    const id = parseInt(resolvedParams.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 });
    }

    await deleteNews(id);
    // Doğru mesajı döndür:
    return NextResponse.json({ message: "Haber başarıyla silindi" });
  } catch (error: any) {
    console.error("Haber silinirken hata oluştu:", error);
    return NextResponse.json(
      { error: "Haber silinirken hata oluştu: " + error.message },
      { status: 500 }
    );
  }
}
