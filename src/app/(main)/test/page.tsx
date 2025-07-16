import { Suspense } from 'react';
import NewsEditor from './NewsEditor';

export default function NewsEditorPage() {
  return (
    <Suspense fallback={<p>Editör Yükleniyor...</p>}>
      <NewsEditor />
    </Suspense>
  );
}