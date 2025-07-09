// app/duyurular-ve-haberler/[slug]/page.tsx
"use client"; // Bu bileşenin istemci tarafında çalışmasını sağlar

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Dinamik parametreleri almak için
import Image from "next/image"; // Next.js'in optimize edilmiş Image bileşeni
import { toast } from "sonner"; // Bildirimler için

// Haber öğesi için TypeScript arayüzü
interface NewsItem {
  id: number;
  title: string;
  description: string | null;
  content: string;
  cover_image: string | null;
  created_at: string;
  updated_at: string;
  slug: string;
  author_id: number;
}

export default  function NewsDetailPage() {
  const params = useParams(); // URL parametrelerini al
  const slug = params.slug as string; // 'slug' parametresini string olarak al
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Sayfa yüklendiğinde veya slug değiştiğinde haber verisini çek
  useEffect(() => {
    if (!slug) return; // Slug yoksa işlemi durdur

    const fetchNews = async () => {
      try {
        setLoading(true); // Yükleme durumunu başlat
        setError(null); // Önceki hataları temizle

        // Slug'a göre haber getiren API rotasını çağır
        const response = await fetch(`/api/news/slug/${slug}`);

        if (!response.ok) {
          // Yanıt başarılı değilse hata fırlat
          if (response.status === 404) {
            throw new Error("Haber bulunamadı.");
          }
          const errorData = await response.json();
          throw new Error(errorData.error || "Haber getirilirken hata oluştu.");
        }

        const data: NewsItem = await response.json();
        setNewsItem(data); // Gelen veriyi state'e kaydet
      } catch (err: any) {
        console.error("Haber detayları çekilirken hata:", err);
        setError(err.message || "Haber yüklenirken bir sorun oluştu.");
        toast.error(err.message || "Haber yüklenirken bir sorun oluştu.");
      } finally {
        setLoading(false); // Yükleme durumunu bitir
      }
    };

    fetchNews(); // Fonksiyonu çağır
  }, [slug]); // slug değiştiğinde yeniden çalış

  // Yükleme durumu gösterimi
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-700">Yükleniyor...</p>
      </div>
    );
  }

  // Hata durumu gösterimi
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-red-600">Hata: {error}</p>
      </div>
    );
  }

  // Haber bulunamadı durumu (API'den null dönmesi durumunda)
  if (!newsItem) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-700">Haber bulunamadı.</p>
      </div>
    );
  }

  // Haber içeriğini HTML olarak render etmek için kullanılır.
  // Not: `dangerouslySetInnerHTML` kullanırken XSS (Cross-Site Scripting) saldırılarına karşı dikkatli olun.
  // Eğer içerik güvenilmeyen kaynaklardan geliyorsa, bir HTML temizleme (sanitization) kütüphanesi (örn. DOMPurify) kullanmanız şiddetle tavsiye edilir.
  // Kendi admin panelinizden yüklediğiniz içerik için genellikle bu bir sorun teşkil etmez.
  const renderedContent = { __html: newsItem.content };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {/* Kapak fotoğrafı varsa göster */}
        {newsItem.cover_image && (
          <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden">
            <Image
              src={newsItem.cover_image}
              alt={newsItem.title || "Kapak Resmi"}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}

        {/* Haber Başlığı */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          {newsItem.title}
        </h1>

        {/* Kısa Açıklama varsa göster */}
        {newsItem.description && (
          <p className="text-xl text-gray-600 mb-6 italic">
            {newsItem.description}
          </p>
        )}

        {/* Yayın Tarihi */}
        <div className="text-sm text-gray-500 mb-8 border-b pb-4">
          Yayın Tarihi:{" "}
          {new Date(newsItem.created_at).toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>

        {/* Haber İçeriği */}
        <div
          className="prose prose-lg max-w-none text-gray-800" // Tailwind Typography eklentiniz varsa güzel stil sağlar
          dangerouslySetInnerHTML={renderedContent}
        />
      </div>
    </div>
  );
}