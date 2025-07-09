// src/app/api/news/[id]/images/route.ts
// (Bu dosyanın adının [id] klasörünün içinde olduğundan emin olun)

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db"; // Drizzle bağlantınızı import edin
import { newsImages } from "@/db/schema"; // newsImages şemanızı import edin

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const paramsId = await params.id;
    const newsId = parseInt(paramsId);
    // getNewsImages fonksiyonunuzun ne döndürdüğüne bağlı olarak burası düzgün çalışıyor olmalı
    // newsImage.service.ts dosyanızdaki getNewsImages fonksiyonunun doğru olduğundan emin olun.
    // Eğer `newsImage.service` kullanıyorsanız, muhtemelen bu kısım çalışıyordur.
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
  // Klasör adınız [id] ise, parametre adı da 'id' olmalı
  { params }: { params: { id: string } }
) {
  try {
    // 1. params.id hatasını düzeltme: id'yi destructure ederek alıyoruz
    const { id } = await params;
    const newsId = parseInt(id);

    if (isNaN(newsId)) {
      return NextResponse.json({ error: "Geçersiz Haber ID'si" }, { status: 400 });
    }

    // 2. Request body'yi doğru şekilde ayrıştırma
    // page.tsx'ten { images: [...] } şeklinde geldiği için
    const { images } = await request.json();

    if (!Array.isArray(images) || images.length === 0) {
      // Eğer hiç görsel URL'si gelmezse 400 hata döndür
      return NextResponse.json(
        { error: "Görsel URL'leri dizisi bulunamadı veya boş." },
        { status: 400 }
      );
    }

    // 3. Her bir görsel URL'si için insert edilecek değerleri hazırlama
    const valuesToInsert = images.map((url: string, index: number) => ({
      news_id: newsId,
      image_url: url,
      order_index: index, // Görsellerin editördeki sırasını korumak için
      caption: null, // Editörden gelmiyorsa şimdilik null olabilir
    }));

    // 4. Drizzle ile toplu ekleme işlemi
    const insertedImages = await db.insert(newsImages).values(valuesToInsert).returning();

    // Başarılı yanıt
    return NextResponse.json({ success: true, insertedImages }, { status: 201 });
  } catch (error: any) {
    console.error("Haber görselleri kaydedilirken hata:", error);
    return NextResponse.json(
      { error: "Haber görselleri kaydedilirken bir hata oluştu: " + error.message },
      { status: 500 }
    );
  }
}