import AccreditationList from "@/components/AccreditationList";
import PageHeader from "@/components/PageHeader";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kalite Belgeleri ve Akreditasyon | Demir Çelik Enstitüsü',
  description: 'Karabük Üniversitesi Demir Çelik Enstitüsü\'nün resmi kalite belgeleri, akreditasyon sertifikaları (ISO 9001:2015), kalite politikası ve tarafsızlık beyanına ulaşın. Laboratuvar ve hizmet kalitemizi kanıtlayan tüm standart ve sertifikaları inceleyin.',
  keywords: 'kalite belgeleri, akreditasyon, ISO 9001, kalite politikası, tarafsızlık beyanı, standartlar, demir çelik enstitüsü, karabük üniversitesi, laboratuvar kalitesi',
  openGraph: {
    title: 'DCE Kalite Belgeleri ve Akreditasyon',
    description: 'Enstitümüzün uluslararası standartlara uygunluğunu gösteren kalite ve akreditasyon belgelerine erişim sağlayın.',
    url: 'https://demircelik.karabuk.edu.tr/kalite-belgeleri',
    siteName: 'Karabük Üniversitesi Demir Çelik Enstitüsü',
    type: 'website',
  },
};


const links = [
  {
    title: "Akreditasyon Belgelerimiz (Türkçe) ",
    href: "https://demircelik.karabuk.edu.tr/wp-content/uploads/2024/05/akreditasyon.pdf",
  },
  {
    title: " Akreditasyon Belgelerimiz (İngilizce)",
    href: "https://demircelik.karabuk.edu.tr/wp-content/uploads/2024/05/akreditasyon.ingilizce.pdf",
  },
  {
    title: "TS EN ISO 9001:2015 (Türkçe)",
    href: "https://demircelik.karabuk.edu.tr/wp-content/uploads/2025/03/Cert_2405-KBU-9GD-Mart25-Tr1.pdf",
  },
  {
    title: "TS EN ISO 9001:2015 (İngilizce)",
    href: "https://demircelik.karabuk.edu.tr/wp-content/uploads/2025/03/Cert-2405-KBU-9GD-Mart25-En1.pdf",
  },
  {
    title: "Kalite Politikası ",
    href: "https://demircelik.karabuk.edu.tr/wp-content/uploads/2024/05/kalitepolitikasi.pdf",
  },
  {
    title: "Tarafsızlık Beyanı  ",
    href: "https://demircelik.karabuk.edu.tr/wp-content/uploads/2024/05/tarafsizlikbeyani.pdf",
  },
  {
    title: "Standartlar  ",
    href: "https://demircelik.karabuk.edu.tr/wp-content/uploads/2024/05/standartlar.pdf ",
  },
];

export default function Home() {
  return (
    <>
      <PageHeader
        imageUrl="/images/Kalite-belgeleri.avif" 
        title="Kalite Belgeleri"
      />
      <div className="max-w-4xl mx-auto p-6 text-right">
        {links.map((item, idx) => (
          <AccreditationList key={idx} {...item} />
        ))}
      </div>
    </>
  );
}
