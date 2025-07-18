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
        imageUrl="/images/Raporlamalar.jpg"
        title="Raporlamalar"
      />
      <div className="flex flex-col md:flex-row items-start bg-gray-100 p-2 md:p-4">
        <div className="w-full md:w-auto md:self-start mb-4 md:mb-0">
          <RaporList
            items={reports}
            basePath="hizmetler/raporlamalar"
          />
        </div>
        <main className="w-full md:flex-1 md:ml-6 p-4 md:p-6 bg-white shadow rounded h-auto">
          {children}
        </main>
      </div>
    </>
  );
}