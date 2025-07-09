// src/app/(main)/hizmetler/raporlama/layout.tsx
import { reports } from '@/data/reports';
import RaporList from '@/components/RaporList';
import React from 'react';
  import PageHeader from '@/components/PageHeader';


export const metadata = {
  title: 'Raporlama'
};

export default function RaporlamaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <PageHeader
                imageUrl="/images/Raporlamalar.jpg" // ضع المسار الصحيح للصورة
                title="Raporlamalar"
              />
    <div className="flex items-start bg-gray-100 p-4">
      <div className="self-start">
        <RaporList
          items={reports}
          basePath="hizmetler/raporlamalar"
        />
      </div>
      <main className="self-start flex-1 ml-6 p-6 bg-white shadow rounded h-auto">
        {children}
      </main>
    </div>
    </>
  );
}
