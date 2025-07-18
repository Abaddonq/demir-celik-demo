import { notFound } from 'next/navigation';
import DinamikTest from '@/components/Labs/DinamikTestLab';
import KalintiGerilme from '@/components/Labs/Kalintilablist';
import SpektralAnalizLab from '@/components/Labs/SpektralAnalizLab';

export async function generateStaticParams() {
  return [
    { slug: 'dinamik-test-laboratuvari' },
    { slug: 'kalinti-gerilme-olcme' },
    { slug: 'spektral-analiz-laboratuvari' }
  ];
}

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<any>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const componentMap: Record<string, React.ReactNode> = {
    'dinamik-test-laboratuvari': <DinamikTest />,
    'kalinti-gerilme-olcme': <KalintiGerilme />,
    'spektral-analiz-laboratuvari': <SpektralAnalizLab />
  };

  const selectedComponent = componentMap[slug];

  if (!selectedComponent) return notFound();

  return (
    <div className="p-2 md:p-6">
      {selectedComponent}
    </div>
  );
}