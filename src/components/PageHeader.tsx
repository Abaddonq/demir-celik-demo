import React from 'react';
import Image from 'next/image'; // next/image bileşenini import edin

type PageHeaderProps = {
  title: string;
  imageUrl: string;
};

export default function PageHeader({ title, imageUrl }: PageHeaderProps) {
  return (
    <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Arka plan resmi için next/image kullanın */}
      <Image
        src={imageUrl}
        alt={title} // Erişilebilirlik için alt metin ekleyin
        fill // Kapsayıcı div'i doldurur
        className="object-cover absolute inset-0 -z-10" // CSS ile konumlandırma ve z-index
        priority // Bu resmin LCP adayı olduğunu belirtir, hemen yüklensin
        fetchPriority="high" // Tarayıcıya bu resmin yüksek öncelikli olduğunu bildirir
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" // Duyarlı görsel boyutlandırma
      />
      <h1 className="text-3xl md:text-6xl font-bold text-white px-6 py-3 rounded-xl z-10 relative">
        {title}
      </h1>
    </div>
  );
}