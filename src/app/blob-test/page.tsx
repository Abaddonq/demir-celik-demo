import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Ana Sayfa</h1>
      <Image
        src="https://clqyfszptjb4gzut.public.blob.vercel-storage.com/output-HHupBcPBWu3GtWbBDzmsK8QmrllsBU.png"
        alt="Yüklenen Görsel"
        width={600} 
        height={400} 
        style={{ maxWidth: '100%', height: 'auto' }}
      />
    </div>
  );
}
