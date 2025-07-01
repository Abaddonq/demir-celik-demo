import { reports } from '@/data/reports';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return reports.map((report) => ({ slug: report.slug }));
}

export default function ReportDetailPage({ params }: { params: { slug: string } }) {
  const report = reports.find((r) => r.slug === params.slug);
  if (!report) return notFound();

  return (
    <>
      <h1 className="text-2xl font-bold text-blue-900 mb-4">{report.title}</h1>
      <p className="text-gray-700">{report.description}</p>
    </>
  );
}
