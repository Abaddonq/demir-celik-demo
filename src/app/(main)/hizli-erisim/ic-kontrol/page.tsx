import Accordion from '@/components/Accordion'
import React from 'react'
import InfoCard from '@/components/InfoCard'
import PageHeader from '@/components/PageHeader'

const page = () => {
  return (
    <div>
      <PageHeader
        imageUrl="/images/ic-control.jpg"
        title="İç Kontrol"
      />

      <main className="flex justify-center items-start min-h-screen pt-20 pb-4 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard title="Organizasyon Şeması" href="/images/organizasyon-semasi.png" />
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

