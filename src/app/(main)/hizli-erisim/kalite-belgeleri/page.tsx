// app/page.tsx
import AccreditationList from '@/components/AccreditationList'
  import PageHeader from '@/components/PageHeader';

const theme = {
  textColor: '#1E1E6A',
  underlineColor: '#F44336',
  iconColor: '#1E1E6A',
  iconHoverColor: '#F44336',
}

const links = [
  { title: ' Our Aktivasiyon ', href: 'https://demircelik.karabuk.edu.tr/wp-content/uploads/2024/05/akreditasyon.pdf' },
  { title: ' The first report', href: '/docs/en' },
  { title: 'TS EN ISO 9001:2015 ', href: '/iso/tr' },
  { title: 'TS EN ISO 9001:2015 ', href: '/iso/en' },
  { title: 'Syaset Cuvdat  ', href: '/quality' },
]

export default function Home() {
  return (
    <>
      <PageHeader
         imageUrl="/images/Kalita-belgileri.png" // ضع المسار الصحيح للصورة
         title="Kalite Belgeleri"
        />
    <div className="max-w-4xl mx-auto p-6 text-right">
      {links.map((item, idx) => (
        <AccreditationList key={idx} {...item} theme={theme} />
      ))}
    </div>
    </>
  )
}
