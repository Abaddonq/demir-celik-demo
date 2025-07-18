// src/app/(main)/hizmetler/raporlama/page.tsx
import { redirect } from 'next/navigation';
import { reports } from '@/data/reports';

export default function Page() {
  const firstSlug = reports[0]?.slug || '404';
  redirect(`/hizmetler/raporlamalar/${firstSlug}`);
}