'use client';

import React from 'react';
import InfoCard from '@/components/InfoCard';
import PageHeader from '@/components/PageHeader';

const quickAccessItems = [
  {
    title: 'Hizmet İşleyiş Süreci',
    icon: '🧬',
    link: '/hizli-erisim/hizmet-isleyis-sureci',
  },
  {
    title: 'Kalite Belgeleri',
    icon: '📄',
    link: '/hizli-erisim/kalite-belgeleri',
  },
  {
    title: 'İç Kontrol',
    icon: '🔗',
    link: '/hizli-erisim/ic-kontrol',
  },
  {
    title: 'Fiyat Listesi',
    icon: '📊',
    link: '/hizli-erisim/fiyat-listesi',
  },
  {
    title: 'SEM Randevu',
    icon: '🧲',
    link: '/hizli-erisim/sem-randevu',
  },
  {
    title: 'Numune Kabul Kriterleri',
    icon: '🧪',
    link: '/hizli-erisim/numune-kabul-kriterleri',
  },
];

const HizliErisimPage = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Hızlı Erişim"
        imageUrl="/images/lab.avif" 
      />
      
      <div className="w-full px-4 py-8">
        <div className="flex flex-row-reverse flex-wrap justify-center gap-19 max-w-7xl mx-auto">
          {quickAccessItems.map((item) => (
            <div 
              key={item.title}
              className="w-64 h-72 flex-shrink-0" // Tüm kartlar aynı boyutta
            >
              <InfoCard
                title={item.title}
                href={item.link}
                className="w-full h-full" // Kartın içeriği tam boyutta dolsun
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HizliErisimPage;