// src/app/api/news/paginated/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db"; // Drizzle bağlantınız
import { news } from "@/db/schema"; // news şemanız
import { count } from "drizzle-orm"; // Toplam kayıt sayısını almak için `count` fonksiyonu

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1"); // Varsayılan sayfa 1
    const limit = parseInt(searchParams.get("limit") || "10"); // Varsayılan limit 10

    const offset = (page - 1) * limit; // Offset hesaplaması

    // Haberleri limit ve offset ile çek
    const newsList = await db.query.news.findMany({
      limit: limit,
      offset: offset,
      orderBy: (news, { desc }) => [desc(news.created_at)], // En yeni haberler üstte
    });

    // Toplam haber sayısını al
    // Drizzle'ın `count()` fonksiyonu bir dizi döndürür, bu dizinin ilk elemanının `count` özelliğine erişiyoruz.
    // Eğer dizi boşsa veya ilk eleman yoksa, varsayılan olarak 0 alıyoruz.
    const totalNewsCountResult = await db.select({ count: count() }).from(news);
    const totalCount = totalNewsCountResult.length > 0 ? totalNewsCountResult[0].count : 0;

    return NextResponse.json({
      news: newsList,
      totalCount: totalCount,
      currentPage: page,
      limit: limit,
      totalPages: Math.ceil(totalCount / limit),
    });
  } catch (error: any) { // Hata tipini 'any' olarak belirtiyoruz
    // Hata detaylarını konsola daha ayrıntılı yazdırıyoruz
    console.error("Sayfalı haberler getirilirken hata oluştu:", error.message || error);
    return NextResponse.json(
      { error: "Sayfalı haberler getirilirken hata oluştu: " + (error.message || "Bilinmeyen hata") },
      { status: 500 }
    );
  }
}
