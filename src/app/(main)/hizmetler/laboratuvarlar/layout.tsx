  // src/app/(main)/hizmetler/laboratuvarlar/layout.tsx
  import React from 'react';
  import { labs } from '@/data/labs';
  import LaboratoryList from '@/components/LaboratoryList';
  import PageHeader from '@/components/PageHeader';


  export const metadata = {
    title: 'Laboratuvarlar'
  };

  export default function LabsLayout({
    children
  }: {
    children: React.ReactNode;
  }) {
    return (
<>
          <PageHeader
        imageUrl="/images/Laboratuvarlar.png" // ضع المسار الصحيح للصورة
        title="Laboratuvarlar" 
      />
      <div className="flex items-start bg-gray-100 p-4">
        {/* الـ Sidebar ثابت */}
        <div className="self-start">
          <LaboratoryList
            items={labs}
            basePath="hizmetler/laboratuvarlar"
            // theme={{
            //   fontFamily: 'Tajawal',
            //   fontSizeBase: '15px',
            //   primaryColor: '#1e3a8a',
            //   defaultBgColor: '#1e3a8a',
            //   hoverBgColor: '#f97316',
            //   activeBgC olor: '#f97316'
            // }}
          />
        </div>

        

        {/* المحتوى الديناميكي يتغيّر حسب الـ page الحالي */}
        <main className="self-start flex-1 ml-6 p-6 bg-white shadow rounded h-auto">
          {children}
        </main>
      </div>
      </>
    );
  }
