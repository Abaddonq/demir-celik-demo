import { NextRequest, NextResponse } from "next/server";
import { getNewsImages, addNewsImage } from "@/services/newsImage.service";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const newsId = parseInt(params.id);
    const images = await getNewsImages(newsId);
    return NextResponse.json(images);
  } catch  {
    return NextResponse.json(
      { error: "Görseller getirilirken hata oluştu" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const newsId = parseInt(params.id);
    const { image_url, caption, order_index } = await request.json();
    
    const newImage = await addNewsImage({
      news_id: newsId,
      image_url,
      caption,
      order_index
    });
    
    return NextResponse.json(newImage, { status: 201 });
  } catch  {
    return NextResponse.json(
      { error: "Görsel eklenirken hata oluştu" },
      { status: 500 }
    );
  }
}