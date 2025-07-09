import { NextRequest, NextResponse } from "next/server";
import { getNewsById, updateNews, deleteNews } from "@/services/news.service";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    const newsItem = await getNewsById(id);
    
    if (!newsItem) {
      return NextResponse.json({ error: "Haber bulunamadı" }, { status: 404 });
    }
    
    return NextResponse.json(newsItem);
  } catch  {
    return NextResponse.json(
      { error: "Haber getirilirken hata oluştu" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    const updateData = await request.json();
    const updatedNews = await updateNews(id, updateData);
    return NextResponse.json(updatedNews);
  } catch  {
    return NextResponse.json(
      { error: "Haber güncellenirken hata oluştu" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    await deleteNews(id);
    return NextResponse.json({ message: "Haber silindi" });
  } catch  {
    return NextResponse.json(
      { error: "Haber silinirken hata oluştu" },
      { status: 500 }
    );
  }
}