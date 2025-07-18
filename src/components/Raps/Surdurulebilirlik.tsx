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
      className="max-w-4xl mx-auto px-4 py-6 md:py-10"
    >
      <h1 style={{ color: primaryColor }} className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        SÜRDÜRÜLEBİLİRLİK RAPORLAMASI
      </h1>

      <p className="mb-4 text-sm md:text-base">
        Sürdürülebilirlik Raporlaması, kuruluşların çevresel, sosyal ve yönetişim boyutlarında
        durumunu ve taahhütlerini beyan ettiği kapsamlı bir raporlama sürecidir.
      </p>

      <h2 style={{ color: primaryColor }} className="text-lg md:text-xl font-semibold mt-4 md:mt-6 mb-2">
        Neden Sürdürülebilirlik Raporu Hazırlanır?
      </h2>
      <p className="mb-2 text-sm md:text-base">
        Sürdürülebilirlik raporu, işletmelerin çevresel, sosyal ve yönetişim alanlarında yaptıkları
        çalışmaları ve taahhütleri paylaşmasını sağlar.
      </p>

      <h2 style={{ color: primaryColor }} className="text-lg md:text-xl font-semibold mt-4 md:mt-6 mb-2">
        Standartlar ve Zorunluluklar
      </h2>
      <p className="mb-4 text-sm md:text-base">
        Türkiye'de sürdürülebilirlik raporlaması zorunlu hale gelmiştir. Kamu Gözetimi, Muhasebe ve
        Denetim Standartları Kurumu (KGK) tarafından yayımlanan Türkiye Sürdürülebilirlik Raporlama
        Standartları (TSRS) bu alanda rehberlik sağlar.
      </p>

      <h2 style={{ color: primaryColor }} className="text-lg md:text-xl font-semibold mt-4 md:mt-6 mb-2">
        Rapor İçeriği
      </h2>

      <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
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