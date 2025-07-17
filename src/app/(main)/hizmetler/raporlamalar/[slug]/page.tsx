// }// src/app/(main)/hizmetler/laboratuvarlar/[slug]/page.tsx
import { notFound } from 'next/navigation';

// استيراد كل المكونات
import KurumsalKarbonAyakIziPage from '@/components/Raps/KurumsalKarbonRap';
import SkdmRap from '@/components/Raps/SkdmRap';
import Surdurulebilirlik from '@/components/Raps/Surdurulebilirlik';

export async function generateStaticParams() {
  return [
    { slug: 'kurumsal-karbon-ayak-izi' },
    { slug: 'skdm-raporlama' },
    { slug: 'surdurulebilirlik-raporlamasi'}
    // أضف جميع الـ slugs هنا
  ];
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // خريطة slug -> component
  const componentMap: Record<string, React.ReactNode> = {
    'kurumsal-karbon-ayak-izi': <KurumsalKarbonAyakIziPage />,
    'skdm-raporlama': <SkdmRap />,
    'surdurulebilirlik-raporlamasi': <Surdurulebilirlik />,
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
