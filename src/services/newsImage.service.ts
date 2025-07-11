import { db } from "@/db";
import { newsImages } from "@/db/schema";
import { eq } from "drizzle-orm";

type NewsImageInsert = typeof newsImages.$inferInsert;

export const addNewsImage = async (imageData: NewsImageInsert) => {
  const [newImage] = await db.insert(newsImages).values(imageData).returning();
  return newImage;
};

export const getNewsImages = async (id: number) => {
  return db
    .select()
    .from(newsImages)
    .where(eq(newsImages.news_id, id))
    .orderBy(newsImages.order_index);
};

export const updateNewsImage = async (
  imageId: number,
  updateData: Partial<NewsImageInsert>
) => {
  const [updatedImage] = await db
    .update(newsImages)
    .set(updateData)
    .where(eq(newsImages.id, imageId))
    .returning();
  return updatedImage;
};

export const deleteNewsImage = async (imageId: number) => {
  const [deletedImage] = await db
    .delete(newsImages)
    .where(eq(newsImages.id, imageId))
    .returning();
  return deletedImage;
};