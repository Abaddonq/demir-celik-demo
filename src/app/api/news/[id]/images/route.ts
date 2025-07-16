// src/app/api/news/[id]/images/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db"; // Drizzle bağlantınızı import edin
import { newsImages } from "@/db/schema"; // newsImages şemanızı import edin
import { eq } from "drizzle-orm"; // Drizzle'dan eq fonksiyonunu import edin

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const newsId = parseInt(id);
    
    const images = await db.query.newsImages.findMany({
      where: (newsImages, { eq }) => eq(newsImages.news_id, newsId),
    });

    return NextResponse.json(images);
  } catch (error) {
    console.error("Görseller getirilirken hata oluştu:", error);
    return NextResponse.json(
      { error: "Görseller getirilirken hata oluştu" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const newsId = parseInt(id);

    if (isNaN(newsId)) {
      return NextResponse.json({ error: "Geçersiz Haber ID'si" }, { status: 400 });
    }

    const { images } = await request.json();

    if (!Array.isArray(images) || images.length === 0) {
      return NextResponse.json(
        { error: "Görsel URL'leri dizisi bulunamadı veya boş." },
        { status: 400 }
      );
    }

    const valuesToInsert = images.map((url: string, index: number) => ({
      news_id: newsId,
      image_url: url,
      order_index: index,
      caption: null,
    }));

    const insertedImages = await db.insert(newsImages).values(valuesToInsert).returning();

    return NextResponse.json({ success: true, insertedImages }, { status: 201 });
  } catch (error: any) {
    console.error("Haber görselleri kaydedilirken hata:", error);
    return NextResponse.json(
      { error: "Haber görselleri kaydedilirken bir hata oluştu: " + error.message },
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
      return NextResponse.json({ error: "Geçersiz Haber ID'si" }, { status: 400 });
    }

    await db.delete(newsImages).where(eq(newsImages.news_id, newsId));

    return NextResponse.json({ success: true, message: "Tüm görseller silindi" });
  } catch (error: any) {
    console.error("Görseller silinirken hata:", error);
    return NextResponse.json(
      { error: "Görseller silinirken bir hata oluştu: " + error.message },
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
      return NextResponse.json({ error: "Geçersiz Haber ID'si" }, { status: 400 });
    }

    const { images } = await request.json();

    // Önce tüm eski görselleri sil
    await db.delete(newsImages).where(eq(newsImages.news_id, newsId));

    // Yeni görselleri ekle
    const valuesToInsert = images.map((url: string, index: number) => ({
      news_id: newsId,
      image_url: url,
      order_index: index,
      caption: null,
    }));

    const insertedImages = await db.insert(newsImages).values(valuesToInsert).returning();

    return NextResponse.json({ success: true, insertedImages });
  } catch (error: any) {
    console.error("Görseller güncellenirken hata:", error);
    return NextResponse.json(
      { error: "Görseller güncellenirken bir hata oluştu: " + error.message },
      { status: 500 }
    );
  }
}