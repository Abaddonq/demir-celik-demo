
import { reports } from '@/data/reports';
import { notFound } from 'next/navigation';
import RapClient from './RapClient';

export async function generateStaticParams() {
  return reports.map((lab) => ({ slug: lab.slug }));
}

export default function RapPage({ params }: { params: { slug: string } }) {
  const lab = reports.find((l) => l.slug === params.slug);
  if (!lab) return notFound();

  return <RapClient lab={lab} />;
}
