
import { reports } from '@/data/reports';
import { notFound } from 'next/navigation';
import RapClient from './RapClient';

export async function generateStaticParams() {
  return reports.map((lab) => ({ slug: lab.slug }));
}

export default async function RapPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const lab = reports.find((l) => l.slug === slug);
  if (!lab) return notFound();

  return <RapClient lab={lab} />;
}
