import React from 'react';
import PageHeader from '@/components/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Numune Kabul Kriterleri | Laboratuvar Hizmetleri | Demir Çelik Enstitüsü',
  description: 'Karabük Üniversitesi Demir Çelik Enstitüsü laboratuvarlarında (XRD, XRF, SEM, Metalografi vb.) analiz yaptırmak için gerekli olan güncel numune kabul kriterleri hakkında detaylı bilgi. Numunelerin boyutu, ağırlığı ve hazırlanışıyla ilgili tüm prosedürleri inceleyin.',
  keywords: 'numune kabul kriterleri, laboratuvar, xrd, xrf, sem, metalografi, korozyon, demir çelik enstitüsü, karabük üniversitesi, analiz, test',
  openGraph: {
    title: 'DCE Laboratuvarı Numune Kabul Kriterleri',
    description: 'Enstitümüz laboratuvarlarında yapılacak analizler için numunelerin taşıması gereken özellikler ve kabul standartları.',
    url: 'https://demircelik.karabuk.edu.tr/numune-kabul-kriterleri', 
    siteName: 'Karabük Üniversitesi Demir Çelik Enstitüsü',
    type: 'website',
  },
};

const xrdItems = [
  'Bulk numune; Yükseklik 4-7 mm ,5x5 mm minimum , 20x20 mm geçmemelidir.',
  'Toz numune; 2 gram ve 50 mikron altı olmalıdır.',
  'Böbrek taşı temizlenmiş ve kuru olarak getirilmelidir.'
];

const xrfItems = [
  'Bulk numunelerde;20-40 mm çap ve yükseklik 10-20mm olmalıdır.',
  'Toz Numunelerde ;10 gr olmalıdır.',
  'Sıvı numunelerde; 100 ml olmalıdır.'
];

const optikItems = [
  'Sadece bulk ve demir esaslı numuneler analiz edilmektedir.',
  'Numune 25 mm ile 50 mm arası çapta olmalıdır.',
  'Numune yüksekliği 7 mm ile 40 mm arası olmalıdır.'
];

const korozyonItems = [
  'Numune yüzeyinde kaplama veya yüzey işlemi yoksa bakalite alınmalıdır.',
  'Numune çapı 8 mm ile 15 mm arasında olmalıdır.',
  'Numune yüksekliği 3 mm ile 5 mm arasında olmalıdır.'
];

const semItems = [
  'SEM görüntüsü alınacak numuneler nemli olmayan ya da sulu olmayan katı numuneler olmalıdır.',
  "Katı numuneler 1 cm'lik çapa sahip dairesel numune tutucusu üzerine yerleştirilebilir olmalıdır. Numunelerin yüksekliği 25 mm'i geçmemelidir.",
  'Radyoaktivite içeren numunelere analiz yapılmamaktadır.',
  'Numune ambalajları numuneyi açıklayacak bilgileri içeren etikete sahip olmalıdır. Analiz talep eden kişi/kurumun, her bir numunenin konulduğu paketin üzerini silinmeyecek şekilde 01den başlanarak mutlaka etiketlemesi gerekmektedir. Analiz sonuçlarında sadece numune kodları belirtilecektir.'
];

const metalografiItems = [
  'Diskotom için maksimum numune boyutu 40x15x10cm olmalıdır.',
  'Hassas kesme için maksimum numune boyutu 24x8x5cm olmalıdır.',
  'Sıcak bakalite alma için, çap max 2.1 cm olmalıdır.',
  'Zımparalama için, numune hafif metal ise 8x8x4 cm, numune ağır metal ise 3x3x2 cm olmalıdır.'
];

export default function NumuneKabulKriterleriPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pb-16">
      <PageHeader
        title="Numune Kabul Kriterleri"
        imageUrl="/images/lab.jpg"
      />
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* XRD */}
        <h3 className="text-2xl md:text-3xl font-bold text-[#202b85] mb-8 mt-6">1. XRD için numune özellikleri;</h3>
        <ul>
          {xrdItems.map((item, i) => (
            <li
              key={i}
              className="py-3 border-b border-gray-300 last:border-b-0"
            >
              <span className="text-base md:text-lg text-[#202b85] font-semibold">{item}</span>
            </li>
          ))}
        </ul>
        {/* XRF */}
        <h3 className="text-2xl md:text-3xl font-bold text-[#202b85] mb-8 mt-12">2. XRF için numune özellikleri;</h3>
        <ul>
          {xrfItems.map((item, i) => (
            <li
              key={i}
              className="py-3 border-b border-gray-300 last:border-b-0"
            >
              <span className="text-base md:text-lg text-[#202b85] font-semibold">{item}</span>
            </li>
          ))}
        </ul>
        {/* Optik Emisyon Spektral Analiz Lab. */}
        <h3 className="text-xl md:text-2xl font-bold text-[#202b85] mt-12 mb-2">Optik Emisyon Spektral Analiz Lab. Numune Kabul Kriterleri</h3>
        <ul>
          {optikItems.map((item, i) => (
            <li
              key={i}
              className="py-3 border-b border-gray-300 last:border-b-0"
            >
              <span className="text-base md:text-lg text-[#202b85] font-semibold">{item}</span>
            </li>
          ))}
        </ul>
        {/* Korozyon Lab. */}
        <h3 className="text-xl md:text-2xl font-bold text-[#202b85] mt-12 mb-2">Korozyon Lab. Numune Kabul Kriterleri</h3>
        <ul>
          {korozyonItems.map((item, i) => (
            <li
              key={i}
              className="py-3 border-b border-gray-300 last:border-b-0"
            >
              <span className="text-base md:text-lg text-[#202b85] font-semibold">{item}</span>
            </li>
          ))}
        </ul>
        {/* SEM Laboratuvarı */}
        <h3 className="text-xl md:text-2xl font-bold text-[#202b85] mt-12 mb-2">SEM Laboratuvarı Numune Kabul Kriterleri</h3>
        <ul>
          {semItems.map((item, i) => (
            <li
              key={i}
              className="py-3 border-b border-gray-300 last:border-b-0"
            >
              <span className="text-base md:text-lg text-[#202b85] font-semibold">{item}</span>
            </li>
          ))}
        </ul>
        {/* Metalografi Laboratuvarı */}
        <h3 className="text-xl md:text-2xl font-bold text-[#202b85] mt-12 mb-2">Metalografi Laboratuvarı Numune Kabul Kriterleri</h3>
        <ul>
          {metalografiItems.map((item, i) => (
            <li
              key={i}
              className="py-3 border-b border-gray-300 last:border-b-0"
            >
              <span className="text-base md:text-lg text-[#202b85] font-semibold">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}