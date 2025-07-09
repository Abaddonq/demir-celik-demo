import { NextRequest, NextResponse } from "next/server";
import { updateNewsImage, deleteNewsImage } from "@/services/newsImage.service";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { imageId: string } }
) {
  try {
    const imageId = parseInt(params.imageId);
    const updateData = await request.json();
    
    const updatedImage = await updateNewsImage(imageId, updateData);
    return NextResponse.json(updatedImage);
  } catch  {
    return NextResponse.json(
      { error: "Görsel güncellenirken hata oluştu" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { imageId: string } }
) {
  try {
    const imageId = parseInt(params.imageId);
    await deleteNewsImage(imageId);
    return NextResponse.json({ message: "Görsel silindi" });
  } catch  {
    return NextResponse.json(
      { error: "Görsel silinirken hata oluştu" },
      { status: 500 }
    );
  }
}