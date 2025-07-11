import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { news } from "@/db/schema";
import { count, ilike, or } from "drizzle-orm"; // ilike ve or eklemeleri

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const searchTerm = searchParams.get("search") || ""; // Arama terimini al

    const offset = (page - 1) * limit;

    // Arama terimine göre filtre oluştur
    const searchFilter = searchTerm
      ? or(
          ilike(news.title, `%${searchTerm}%`),
          ilike(news.description, `%${searchTerm}%`)
        )
      : undefined;

    // Haberleri filtre ile çek
    const newsList = await db.query.news.findMany({
      where: searchFilter,
      limit: limit,
      offset: offset,
      orderBy: (news, { desc }) => [desc(news.created_at)],
    });

    // Filtreli toplam haber sayısını al
    const totalNewsCountResult = searchFilter
      ? await db.select({ count: count() }).from(news).where(searchFilter)
      : await db.select({ count: count() }).from(news);

    const totalCount =
      totalNewsCountResult.length > 0 ? totalNewsCountResult[0].count : 0;

    return NextResponse.json({
      news: newsList,
      totalCount: totalCount,
      currentPage: page,
      limit: limit,
      totalPages: Math.ceil(totalCount / limit),
    });
  } catch (error: any) {
    console.error(
      "Sayfalı haberler getirilirken hata oluştu:",
      error.message || error
    );
    return NextResponse.json(
      {
        error:
          "Sayfalı haberler getirilirken hata oluştu: " +
          (error.message || "Bilinmeyen hata"),
      },
      { status: 500 }
    );
  }
}
