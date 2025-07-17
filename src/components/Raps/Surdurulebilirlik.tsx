'use client';

import { useTheme } from '@/app/context/themeContext';

export default function Surdurulebilirlik() {
  const { theme } = useTheme();
  const {
    fontFamily = 'sans-serif',
    fontSizeBase = '16px',
    primaryColor = '#1e3a8a',
    secondaryColor = '#f97316',
    textColor = '#000000',
  } = theme || {};

  return (
    <div
      style={{ fontFamily, fontSize: fontSizeBase, color: textColor }}
      className="max-w-4xl mx-auto px-4 py-10"
    >
      <h1 style={{ color: primaryColor }} className="text-3xl font-bold mb-6">
        SÜRDÜRÜLEBİLİRLİK RAPORLAMASI
      </h1>

      <p className="mb-4">
        Sürdürülebilirlik Raporlaması, kuruluşların çevresel, sosyal ve yönetişim boyutlarında
        durumunu ve taahhütlerini beyan ettiği kapsamlı bir raporlama sürecidir. İş dünyasının
        sürdürülebilirlik konusundaki farkındalığını artırmak ve şirketlerin bu alandaki
        performanslarını geliştirmek amacıyla yapılmaktadır.
      </p>

      <h2 style={{ color: primaryColor }} className="text-xl font-semibold mt-6 mb-2">
        Neden Sürdürülebilirlik Raporu Hazırlanır?
      </h2>
      <p className="mb-2">
        Sürdürülebilirlik raporu, işletmelerin çevresel, sosyal ve yönetişim alanlarında yaptıkları
        çalışmaları ve taahhütleri paylaşmasını sağlar.
      </p>
      <p className="mb-4">
        Bu raporlar, işletmelerin sürdürülebilirlik performansını değerlendirmek, paydaşlarla
        iletişim kurmak ve gelecekteki hedefleri belirlemek için kullanılır.
      </p>

      <h2 style={{ color: primaryColor }} className="text-xl font-semibold mt-6 mb-2">
        Veri Kaynakları ve Doğruluk
      </h2>
      <p className="mb-2">
        İşletmeler, uluslararası standartlara uygun veri kaynakları kullanarak raporlarını hazırlar.
      </p>
      <p className="mb-4">
        Doğruluk ve güvenilirlik için bağımsız denetimler tercih edilir. Sürdürülebilirlik
        raporları, işletmelerin toplumsal ve çevresel etkilerini anlamalarına yardımcı olur ve
        sürdürülebilir bir geleceğe katkı sağlar.
      </p>

      <h2 style={{ color: primaryColor }} className="text-xl font-semibold mt-6 mb-2">
        Standartlar ve Zorunluluklar
      </h2>
      <p className="mb-4">
        Türkiye’de sürdürülebilirlik raporlaması zorunlu hale gelmiştir. Kamu Gözetimi, Muhasebe ve
        Denetim Standartları Kurumu (KGK) tarafından yayımlanan Türkiye Sürdürülebilirlik Raporlama
        Standartları (TSRS) bu alanda rehberlik sağlar.
        <br />
        Ayrıca AB’de faaliyet gösteren belli büyüklükteki firmalar için Kurumsal Sürdürülebilirlik
        Raporlama Direktifi (CSRD) uygulanmaktadır. Bu direktif, şirketlerin sosyal ve çevresel
        etkilerini tespit etmelerini, olumsuz etkileri azaltmalarını ve bunları raporlamalarını
        zorunlu kılar.
      </p>

      <h2 style={{ color: primaryColor }} className="text-xl font-semibold mt-6 mb-2">
        Rapor İçeriği
      </h2>

      <ul className="list-disc list-inside space-y-3">
        <li>
          <strong>Çevresel Performans:</strong> Enerji tüketimi, atık yönetimi, su kullanımı, karbon ayak izi vb.
        </li>
        <li>
          <strong>Sosyal Performans:</strong> İşçi hakları, toplumsal katkılar, insan hakları, çeşitlilik ve kapsayıcılık vb.
        </li>
        <li>
          <strong>Yönetişim Performansı:</strong> Etik kurallar, yönetim yapısı, şeffaflık, risk yönetimi vb.
        </li>
      </ul>
    </div>
  );
}
