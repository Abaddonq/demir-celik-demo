import React from 'react'
import InfoCard from '@/components/InfoCard'
import PageHeader from '@/components/PageHeader'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İç Kontrol | Belgeler ve Süreçler | Demir Çelik Enstitüsü',
  description: 'Karabük Üniversitesi Demir Çelik Enstitüsü\'nün iç kontrol süreçleri, organizasyon şeması, görev tanımları ve iş akış şemaları gibi resmi belgelere ulaşın. Kurumumuzun şeffaflık ve hesap verebilirlik ilkeleri çerçevesinde belirlenen tüm prosedürleri inceleyin.',
  keywords: 'iç kontrol, organizasyon şeması, görev tanımları, iş akış şeması, kamu hizmet standartları, yetki devri, iç kontrol belgesi, demir çelik enstitüsü, karabük üniversitesi',
  openGraph: {
    title: 'DCE İç Kontrol Belgeleri',
    description: 'Enstitümüzün iç kontrol, yönetim ve operasyonel süreçlerini gösteren resmi belgelere erişim sağlayın.',
    url: 'https://demircelik.karabuk.edu.tr/ic-kontrol',
    siteName: 'Karabük Üniversitesi Demir Çelik Enstitüsü',
    type: 'website',
  },
};

const page = () => {
  return (
    <div>
      <PageHeader
        imageUrl="/images/ic-kontrol.avif"
        title="İç Kontrol"
      />

      <main className="flex justify-center items-start min-h-screen pt-20 pb-4 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard title="Organizasyon Şeması" href="/images/organizasyon-semasi.webp" />
          <InfoCard title="Görev Tanımları" href="//demircelik.karabuk.edu.tr/wp-content/uploads/2024/12/GOREV-TANIMLARI-2024-9.pdf" />
          <InfoCard title="Hassas Görev Tanımları" href="//demircelik.karabuk.edu.tr/wp-content/uploads/2024/06/Hasas-Gorev-Tespiti-Formu.pdf" />
          <InfoCard title="İş Akış Şemaları" href="//demircelik.karabuk.edu.tr/wp-content/uploads/2024/06/isakissemasi.pdf" />
          <InfoCard title="Kamu Hizmet Standartları Tablosu" href="//demircelik.karabuk.edu.tr/wp-content/uploads/2024/06/kamuhizmetstandartlaritablosu.pdf" />
          <InfoCard title="Yıllık İş Süreçleri" href="/pdfs/yillikissureci.docx" />
          <InfoCard title="Yetki Devri Formu" href="/pdfs/yetkidevirformu.docx" />
          <InfoCard title="Akademik İdari Görev Devri Formu" href="/pdfs/Akademik-Idari-Gorev-Devri-Formu.docx" />
        </div>
     </main>

    </div>
  )
}

export default page

