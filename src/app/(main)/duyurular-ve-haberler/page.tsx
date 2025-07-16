import { Suspense } from 'react';
import NewsListClient from './NewsListClient';

export default function NewsListPage() {
  return (
    <Suspense fallback={<p>Haberler yükleniyor...</p>}>
      <NewsListClient />
    </Suspense>
  );
}