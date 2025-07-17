// src/app/(main)/hizmetler/raporlama/[slug]/page.tsx
import { notFound } from 'next/navigation';

import KurumsalKarbonAyakIziPage from '@/components/Raps/KurumsalKarbonRap';
import SkdmRap from '@/components/Raps/SkdmRap';
import Surdurulebilirlik from '@/components/Raps/Surdurulebilirlik';

export async function generateStaticParams() {
  return [
    { slug: 'kurumsal-karbon-ayak-izi' },
    { slug: 'skdm-raporlama' },
    { slug: 'surdurulebilirlik-raporlamasi' }
  ];
}
type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<any>;
};


export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const componentMap: Record<string, React.ReactNode> = {
    'kurumsal-karbon-ayak-izi': <KurumsalKarbonAyakIziPage />,
    'skdm-raporlama': <SkdmRap />,
    'surdurulebilirlik-raporlamasi': <Surdurulebilirlik />
  };

  const selectedComponent = componentMap[slug];

  if (!selectedComponent) return notFound();

  return (
    <div className="p-6">
      {selectedComponent}
    </div>
  );
}