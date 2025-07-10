'use client';

import { useTheme } from '@/app/context/themeContext';

export default function RapClient({ lab }: { lab: any }) {
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
      className="p-4 space-y-6"
      style={{ fontFamily, fontSize: fontSizeBase, color: textColor }}
    >
      <h1 className="text-2xl font-bold mb-4" style={{ color: primaryColor }}>
        {lab.title}
      </h1>

      <div className="space-y-2">
        <h2 style={{ fontFamily, fontSize: fontSizeBase, color: textColor }}>KARABÜK ÜNİVERSİTESİ DEMİR ÇELİK ENSTİTÜSÜ MALZEME ARAŞTIRMA VE GELİŞTİRME MERKEZİ (MARGEM) LABORATUVARLARI</h2>
        <p><strong>Açıklama:</strong> {lab.description}</p>
        <p><strong>Adres:</strong> {lab.address}</p>
        <p><strong>E-Posta:</strong> {lab.email}</p>
        <p><strong>Telefon:</strong> {lab.phone}</p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2" style={{ color: secondaryColor }}>
          Konum Bilgisi
        </h2>
        <p>{lab.locationDescription}</p>
      </div>

      {lab.tests?.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-2" style={{ color: primaryColor }}>
            Testler
          </h2>
          {lab.tests.map((test: any, idx: number) => (
            <div
              key={idx}
              className="p-4 my-3 rounded-xl shadow-md"
              style={{ backgroundColor: "#f0f8ff", borderLeft: `4px solid ${primaryColor}` }}
            >
              <h3 className="text-lg font-bold mb-1" style={{ color: secondaryColor }}>{test.name}</h3>
              <p><strong>Amaç:</strong> {test.purpose}</p>
              <p><strong>Hedef:</strong> {test.goal}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
