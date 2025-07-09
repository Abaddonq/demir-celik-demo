import { NextRequest, NextResponse } from "next/server";
import { createNews, getAllNews } from "@/services/news.service";

export async function GET() {
  try {
    const newsList = await getAllNews();
    return NextResponse.json(newsList);
  } catch  {
    return NextResponse.json(
      { error: "Haberler getirilirken hata oluştu" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const newsData = await request.json();
    const newNews = await createNews(newsData);
    return NextResponse.json(newNews, { status: 201 });
  } catch  {
    return NextResponse.json(
      { error: "Haber oluşturulurken hata oluştu" },
      { status: 500 }
    );
  }
}