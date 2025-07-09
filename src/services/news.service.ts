import { db } from "@/db";
import { news, newsImages } from "@/db/schema";
import { eq } from "drizzle-orm";

type NewsInsert = typeof news.$inferInsert;
type NewsUpdate = Partial<NewsInsert>;

export const createNews = async (newsData: NewsInsert) => {
  const [newNews] = await db.insert(news).values(newsData).returning();
  return newNews;
};

export const getNewsById = async (id: number) => {
  const [newsItem] = await db.select().from(news).where(eq(news.id, id));
  return newsItem;
};

export const getAllNews = async () => {
  return db.select().from(news);
};

export const updateNews = async (id: number, newsData: NewsUpdate) => {
  const [updatedNews] = await db
    .update(news)
    .set({
      ...newsData,
      updated_at: new Date(), // Her güncellemede otomatik
    })
    .where(eq(news.id, id))
    .returning();
  return updatedNews;
};

export const deleteNews = async (id: number) => {
  return db.transaction(async (tx) => {
    await tx.delete(newsImages).where(eq(newsImages.news_id, id));
    const [deletedNews] = await tx
      .delete(news)
      .where(eq(news.id, id))
      .returning();
    return deletedNews;
  });
};
