// components/NewsCard.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/app/context/themeContext'; // Tema hook'unuzun yolu
import { NewsItem } from '@/lib/news'; // Haber öğesi tipi için bir arayüz tanımlayacağız

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  const { theme } = useTheme();

  // Haber açıklamasını belirli bir uzunlukta kesmek için yardımcı fonksiyon
  const truncateDescription = (text: string | null, maxLength: number) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <Link href={`/duyurular-ve-haberler/${news.slug}`} passHref>
      <div
        className="block rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg group cursor-pointer h-full flex flex-col"
        style={{
          backgroundColor: theme.cardBackground || '#ffffff',
          fontFamily: theme.fontFamily,
          color: theme.textColor || '#333333',
        }}
      >
        {/* Haber Kapak Görseli */}
        {news.cover_image && (
          <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
            <Image
              src={news.cover_image}
              alt={news.title || "Haber Kapak Görseli"}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}

        {/* Haber İçeriği */}
        <div className="p-6 flex flex-col flex-grow">
          <h2
            className="text-2xl font-bold mb-2 leading-tight transition-colors duration-300 group-hover:text-blue-700"
            style={{ color: theme.primaryColor || '#202b85' }}
          >
            {news.title}
          </h2>
          <p
            className="text-sm mb-4 flex-grow"
            style={{ color: theme.textColor || '#666666' }}
          >
            {truncateDescription(news.description || news.content, 150)}
          </p>

          {/* Yayın Tarihi */}
          <div className="text-xs text-gray-500 mt-auto pt-4 border-t border-gray-100">
            Yayın Tarihi:{" "}
            {new Date(news.created_at).toLocaleDateString("tr-TR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>

          {/* Daha Fazla Bilgi Butonu */}
          <div className="mt-4 text-right">
            <span
              className="inline-flex items-center gap-1 font-semibold text-sm transition-all duration-300 group-hover:gap-2"
              style={{ color: theme.primaryColor || '#202b85' }}
            >
              Daha Fazla Oku
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// NewsItem tipi için bir dosya oluşturalım: types/news.ts
// Bu arayüzü news.service.ts'den veya schema.ts'den alabilirsiniz.
// Eğer yoksa, bu dosyayı oluşturun:
// types/news.ts
/*
export interface NewsItem {
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
*/
