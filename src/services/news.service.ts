import { db } from "@/db";
import { news } from "@/db/schema";
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
  try {
    // Sadece 'news' tablosundan ilgili haberi silmek yeterli.
    // 'onDelete: "cascade"' sayesinde ilişkili görseller otomatik silinecektir.
    const [deletedNews] = await db
      .delete(news)
      .where(eq(news.id, id))
      .returning(); // Silinen kaydı döndürür

    if (!deletedNews) { // Eğer 'deletedNews' undefined ise, haber bulunamadı demektir.
      throw new Error(`ID ${id} ile haber bulunamadı veya silinemedi.`);
    }

    return deletedNews; // Silinen haberin bilgisini dön
  } catch (error) {
    console.error("news.service.ts - deleteNews hatası:", error);
    throw error; // Hatayı çağırana (API rotasına) yeniden fırlat
  }
};