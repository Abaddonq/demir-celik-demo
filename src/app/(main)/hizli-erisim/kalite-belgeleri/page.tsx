// app/page.tsx
import AccreditationList from '@/components/AccreditationList'
  import PageHeader from '@/components/PageHeader';

const theme = {
  textColor: '#1E1E6A',
  underlineColor: '#F44336',
  iconColor: '#1E1E6A',
  iconHoverColor: '#F44336',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
}

const links = [
  { title: 'Akreditasyon Belgelerimiz (Türkçe) ', href: 'https://demircelik.karabuk.edu.tr/wp-content/uploads/2024/05/akreditasyon.pdf' },
  { title: ' Akreditasyon Belgelerimiz (İngilizce)', href: 'https://demircelik.karabuk.edu.tr/wp-content/uploads/2024/05/akreditasyon.ingilizce.pdf' },
  { title: 'TS EN ISO 9001:2015 (Türkçe)', href: 'https://demircelik.karabuk.edu.tr/wp-content/uploads/2025/03/Cert_2405-KBU-9GD-Mart25-Tr1.pdf' },
  { title: 'TS EN ISO 9001:2015 (İngilizce)', href: 'https://demircelik.karabuk.edu.tr/wp-content/uploads/2025/03/Cert-2405-KBU-9GD-Mart25-En1.pdf' },
  { title: 'Kalite Politikası ', href: 'https://demircelik.karabuk.edu.tr/wp-content/uploads/2024/05/kalitepolitikasi.pdf' },
  { title: 'Tarafsızlık Beyanı  ', href: 'https://demircelik.karabuk.edu.tr/wp-content/uploads/2024/05/tarafsizlikbeyani.pdf' },
  { title: 'Standartlar  ', href: 'https://demircelik.karabuk.edu.tr/wp-content/uploads/2024/05/standartlar.pdf ' },
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
        <AccreditationList key={idx} {...item} />
      ))}
    </div>
    </>
  )
}
