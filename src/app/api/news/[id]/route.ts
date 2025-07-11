// src/app/api/news/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getNewsById, updateNews, deleteNews } from "@/services/news.service"; // Servislerinizi import edin

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const newsId = parseInt(id);

    if (isNaN(newsId)) {
      return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 });
    }

    const newsItem = await getNewsById(newsId);
    
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
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const newsId = parseInt(id);

    if (isNaN(newsId)) {
      return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 });
    }

    const updateData = await request.json();
    const updatedNews = await updateNews(newsId, updateData);
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
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const newsId = parseInt(id);

    if (isNaN(newsId)) {
      return NextResponse.json({ error: "Geçersiz ID" }, { status: 400 });
    }

    await deleteNews(newsId);
    return NextResponse.json({ message: "Haber başarıyla silindi" });
  } catch (error: any) {
    console.error("Haber silinirken hata oluştu:", error);
    return NextResponse.json(
      { error: "Haber silinirken hata oluştu: " + error.message },
      { status: 500 }
    );
  }
}