import { redirect } from 'next/navigation';
import { reports } from '@/data/reports'; // ✅ استخدام استيراد صحيح

export default function Page() {
  const firstSlug = reports[0]?.slug || '404';
  redirect(`/hizmetler/raporlamalar/${firstSlug}`);
}
