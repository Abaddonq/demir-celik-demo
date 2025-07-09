// src/app/api/news/slug/[slug]/route.ts

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db"; // Drizzle bağlantınızı import edin
import { news } from "@/db/schema"; // news şemanızı import edin
import { eq } from "drizzle-orm"; // Drizzle ORM'dan `eq` operatörünü import edin

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } } // URL'den slug parametresini yakalarız
) {
  try {
    const param = await params;
    const { slug } = param; // params objesinden slug'ı doğrudan alıyoruz
    console.log(`Fetching news with slug: ${slug}`);

    // Slug parametresinin mevcut olup olmadığını kontrol et
    if (!slug) {
      return NextResponse.json({ error: "Slug eksik." }, { status: 400 });
    }

    // Drizzle ORM kullanarak veritabanından slug'a göre haber bul
    const newsItem = await db.query.news.findFirst({
      where: eq(news.slug, slug), // `news` tablosunda `slug` sütununu eşleştir
    });

    // Haber bulunamazsa 404 yanıtı döndür
    if (!newsItem) {
      return NextResponse.json({ error: "Haber bulunamadı." }, { status: 404 });
    }

    // Haber başarıyla bulunursa JSON olarak döndür
    return NextResponse.json(newsItem);
  } catch (error) {
    // Herhangi bir hata oluşursa konsola logla ve 500 yanıtı döndür
    console.error("Haber getirilirken hata oluştu:", error);
    return NextResponse.json(
      { error: "Haber getirilirken bir hata oluştu." },
      { status: 500 }
    );
  }
}