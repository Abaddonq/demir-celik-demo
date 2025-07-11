import { redirect } from 'next/navigation';
import { labs } from '@/data/labs'; // ✅ استخدام استيراد صحيح

export default function Page() {
  const firstSlug = labs[0]?.slug || '404';
  redirect(`/hizmetler/laboratuvarlar/${firstSlug}`);
}
