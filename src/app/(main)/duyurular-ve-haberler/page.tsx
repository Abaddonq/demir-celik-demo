import { Suspense } from 'react';
import NewsListClient from './NewsListClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Duyurular ve Haberler | Demir Çelik Enstitüsü',
  description: 'Karabük Üniversitesi Demir Çelik Enstitüsü tarafından yapılan son duyurular, akademik haberler, etkinlikler ve sektörle ilgili gelişmeler hakkında güncel bilgilere ulaşın.',
  keywords: 'duyurular, haberler, güncel, etkinlikler, demir çelik enstitüsü, karabük üniversitesi, sektör haberleri, akademik duyurular, sempozyum, yayınlar',
  openGraph: {
    title: 'Güncel Duyurular ve Haberler',
    description: 'Enstitümüzdeki son gelişmeleri, duyuruları ve etkinlikleri kaçırmayın.',
    url: 'https://demircelik.karabuk.edu.tr/duyurular-ve-haberler/',
    siteName: 'Karabük Üniversitesi Demir Çelik Enstitüsü',
    type: 'website',
  },
};

export default function NewsListPage() {
  return (
    <Suspense fallback={<p>Haberler yükleniyor...</p>}>
      <NewsListClient />
    </Suspense>
  );
}