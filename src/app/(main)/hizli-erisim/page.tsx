'use client'; 

import React from 'react';
import Accordion from '@/components/Accordion';
import HistoryCard from '@/components/HistoryCard'

const HizliErisimPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Hızlı Erişim</h1>
      <Accordion />
      <HistoryCard
        imageUrl="/images/demir-celik.jpg" // Resim URL'sini buraya ekleyin
        title="Kuruluş Hikayemiz" // Başlığı buraya ekleyin
        description="Şirketimizin kuruluşundan bugüne kadar olan önemli dönüm noktalarını anlatın." // Açıklamayı buraya ekleyin
      />
    </div>
  );
};

export default HizliErisimPage;