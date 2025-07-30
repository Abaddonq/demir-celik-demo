import LaboratoryList from '@/components/LaboratoryList';
import PageHeader from '@/components/PageHeader';
import ScrollToTop from '@/components/ScrollToTop';


export default function LabsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <PageHeader 
        imageUrl="/images/Laboratuvarlar.avif" 
        title="Laboratuvarlar" 
      />
      <div className="flex flex-col md:flex-row items-start bg-gray-100 p-2 md:p-4">
        <div className="w-full md:w-auto md:self-start mb-4 md:mb-0">
          <LaboratoryList />
        </div>
        
        <main className="w-full md:flex-1 md:ml-6 p-4 md:p-6 bg-white shadow rounded h-auto">
          {children}
        </main>
      </div>
    </>
  );
}