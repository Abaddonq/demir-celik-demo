// src/app/(main)/hizmetler/laboratuvarlar/layout.tsx
import { labs } from '@/data/labs';
import LaboratoryList from '@/components/LaboratoryList';
import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Laboratuvarlar'
};

export default function LabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PageHeader 
        imageUrl="/images/Laboratuvarlar.avif" 
        title="Laboratuvarlar" 
      />
      <div className="flex items-start bg-gray-100 p-4">
        <div className="self-start">
          <LaboratoryList />
        </div>
        
        <main className="self-start flex-1 ml-6 p-6 bg-white shadow rounded h-auto">
          {children}
        </main>
      </div>
    </>
  );
}