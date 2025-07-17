"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";

interface NewsItem {
  id: number;
  title: string;
  description: string | null;
  content: string;
  cover_image: string | null;
  created_at: string;
  updated_at: string;
  slug: string;
}

export default function NewsDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchNews = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`/api/news/slug/${slug}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Haber bulunamadı. Lütfen URL'yi kontrol edin.");
          }
          const errorData = await response.json();
          throw new Error(
            errorData.error || "Haber getirilirken bir sorun oluştu."
          );
        }

        const data: NewsItem = await response.json();
        setNewsItem(data);
      } catch (err: any) {
        console.error("Haber detayları çekilirken hata:", err);
        setError(err.message || "Haber yüklenirken bir sorun oluştu.");
        toast.error(err.message || "Haber yüklenirken bir sorun oluştu.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [slug]);

  // Yükleme durumu için daha modern bir UI
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent mb-4"></div>
        <p className="text-xl font-semibold text-gray-700">
          İçerik Yükleniyor...
        </p>
      </div>
    );
  }

  // Hata durumu için daha açıklayıcı bir UI
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-50 p-4 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-red-500 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-red-700 mb-2">
          Bir hata oluştu!
        </h2>
        <p className="text-lg text-red-600 mb-6">{error}</p>
        <button
          onClick={() => router.back()} // Geri dön butonu
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
        >
          Geri Dön
        </button>
      </div>
    );
  }

  // Haber bulunamadı durumu için
  if (!newsItem) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-gray-400 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="text-2xl font-bold text-gray-700 mb-2">
          Haber bulunamadı!
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Aradığınız haber yayından kaldırılmış veya yanlış bir adrese gitmiş
          olabilirsiniz.
        </p>
        <button
          onClick={() => router.push("/duyurular-ve-haberler")} // Duyurular sayfasına yönlendir
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
        >
          Tüm Duyurulara Göz Atın
        </button>
      </div>
    );
  }

  // Güvenlik uyarısı: İçeriği sanitize etmek için DOMPurify gibi bir kütüphane kullanmanız ŞİDDETLE tavsiye edilir.
  // Örn: import DOMPurify from 'dompurify';
  // const sanitizedContent = DOMPurify.sanitize(newsItem.content);
  const renderedContent = { __html: newsItem.content };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Geri Dön Butonu */}
        <div className="p-6">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 text-lg font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Geri Dön
          </button>
        </div>

        {/* Kapak fotoğrafı - Daha büyük ve etkileyici */}
        {newsItem.cover_image && (
          <div className="relative w-full h-64 sm:h-80 md:h-96 bg-gray-200 overflow-hidden">
            <Image
              src={newsItem.cover_image}
              alt={newsItem.title || "Haber Kapak Resmi"}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105" // Hafif hover efekti
            />
          </div>
        )}

        <div className="p-6 sm:p-8 md:p-10 lg:p-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {newsItem.title}
          </h1>

          {newsItem.description && (
            <p className="text-lg sm:text-xl text-gray-600 mb-6 italic border-l-4 border-blue-400 pl-4">
              {newsItem.description}
            </p>
          )}

          <div className="flex items-center text-sm text-gray-500 mb-8 pb-6 border-b border-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h.01M7 11h.01M12 15h.01M16 15h.01M12 19h.01M16 19h.01M3 17V7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
              />
            </svg>
            <span>
              Yayın Tarihi:{" "}
              {new Date(newsItem.created_at).toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <div
            className="prose prose-lg sm:prose-xl max-w-none text-gray-800 leading-relaxed"
            dangerouslySetInnerHTML={renderedContent}
          />

          <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap gap-4 items-center justify-end">
            <span className="font-semibold text-gray-700">Paylaş:</span>
            <button
              onClick={() => {
                const shareUrl = window.location.href;
                const shareTitle = newsItem?.title || "Haber Başlığı";
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Facebook
            </button>
            <button
              onClick={() => {
                const shareUrl = window.location.href;
                const shareTitle = newsItem?.title || "Haber Başlığı";
                window.open(
                  `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-sky-600 transition"
            >
              X
            </button>
            <button
              onClick={() => {
                const shareUrl = window.location.href;
                const shareTitle = newsItem?.title || "Haber Başlığı";
                
                window.open(
                  `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`,
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
