// }// src/app/(main)/hizmetler/laboratuvarlar/[slug]/page.tsx
import { notFound } from 'next/navigation';

// استيراد كل المكونات
import DinamikTest from '@/components/Labs/DinamikTestLab';
import KalintiGerilme from '@/components/Labs/Kalintilablist';
import SpektralAnalizLab from '@/components/Labs/SpektralAnalizLab';

export async function generateStaticParams() {
  return [
    { slug: 'dinamik-test-laboratuvari' },
    { slug: 'kalinti-gerilme-olcme' },
    { slug: 'spektral-analiz-laboratuvari'}
    // أضف جميع الـ slugs هنا
  ];
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // خريطة slug -> component
  const componentMap: Record<string, React.ReactNode> = {
    'dinamik-test-laboratuvari': <DinamikTest />,
    'kalinti-gerilme-olcme': <KalintiGerilme />,
    'spektral-analiz-laboratuvari':<SpektralAnalizLab/>,
    // أضف باقي المكونات هنا
  };

  const selectedComponent = componentMap[slug];

  if (!selectedComponent) return notFound();

  return (
    <div className="p-6">
      {selectedComponent}
    </div>
  );
}
