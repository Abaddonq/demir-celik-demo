import Accordion from '@/components/Accordion'
import React from 'react'
import InfoCard from '@/components/InfoCard'
import HistoryCard from '@/components/HistoryCard'
import PageHeader from '@/components/PageHeader'
import NewsCard from '@/components/NewsCard'
import CustomButton from '@/components/CustomButton'
import FAQ from '@/components/FAQ'
import LaboratoryList from '@/components/LaboratoryList'
import AccreditationList from '@/components/AccreditationList'
import RecentIssues from '@/components/RecentIssues'
import Person1 from '@/components/Person1'
import RaporList from '@/components/RaporList'
import InfoBox from '@/components/InfoBox'

const labs = [
  { slug: 'dinamik-test-laboratuvari', title: 'Dinamik Test Laboratuvarı' },
  { slug: 'kalinti-gerilme-olcme', title: 'Kalıntı Gerilme Ölçme Laboratuvarı' },
];
const reports = [
  { slug: 'mekanik-test-raporu', title: 'Mekanik Test Raporu' },
  { slug: 'kimyasal-analiz-raporu', title: 'Kimyasal Analiz Raporu' },
];
const exampleNews = {
  id: 1,
  title: 'Yeni Haber',
  description: 'Demir Çelik Enstitüsü güncel haberleri ve gelişmeleri.',
  content: 'Detaylı haber içeriği burada yer alır.',
  cover_image: '/images/demir-celik.jpg',
  created_at: '2024-06-01',
  updated_at: '2024-06-01',
  slug: 'yeni-haber',
  author_id: 1,
};
const examplePerson = {
  name: 'Ahmet',
  surname: 'Yılmaz',
  title: 'Laboratuvar Müdürü',
  phone: '0555 555 55 55',
  email: 'ahmet.yilmaz@demircelik.edu.tr',
  image_url: '/images/person1.png',
};

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-2 md:px-8">
      <PageHeader title="İç Kontrol - Tüm Componentler" imageUrl="/images/demir-celik.jpg" />
      <div className="max-w-5xl mx-auto flex flex-col gap-10 mt-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#202b85]">Accordion</h2>
          <Accordion />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#202b85]">InfoCard</h2>
          <InfoCard title="Organizasyon Şeması" />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#202b85]">HistoryCard</h2>
          <HistoryCard imageUrl="/images/dergis.jpg" title="Tarihçe" description="Karabük Üniversitesi Demir Çelik Enstitüsü'nün tarihçesi ve gelişimi." />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#202b85]">NewsCard</h2>
          <NewsCard news={exampleNews} />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#202b85]">CustomButton</h2>
          <CustomButton label="Daha Fazla Bilgi Alın" url="https://demircelik.karabuk.edu.tr/anasayfa/" />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#202b85]">FAQ</h2>
          <FAQ />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#202b85]">LaboratoryList</h2>
          <LaboratoryList items={labs} basePath="hizmetler/laboratuvarlar" />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#202b85]">AccreditationList</h2>
          <AccreditationList title="TÜRKAK Akreditasyonu" href="https://www.turkak.org.tr/" />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#202b85]">RecentIssues</h2>
          <RecentIssues />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#202b85]">Person1</h2>
          <Person1 person={examplePerson} />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#202b85]">RaporList</h2>
          <RaporList items={reports} basePath="hizmetler/raporlamalar" />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#202b85]">InfoBox</h2>
          <InfoBox image="/images/lab.jpg" title="Bilgi Kutusu" description="Bu bir örnek bilgi kutusudur." />
        </section>
      </div>
    </div>
  )
}

export default page