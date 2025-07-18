'use client';
import { useTheme } from '@/app/context/themeContext';
import { FaFileAlt } from 'react-icons/fa';
import { GiHexagonalNut } from 'react-icons/gi';
import { BsCheck2 } from 'react-icons/bs';

export default function KurumsalKarbonAyakIziPage() {
  const { theme } = useTheme();
  const {
    fontFamily = 'sans-serif',
    fontSizeBase = '16px',
    primaryColor = '#1e3a8a',
    secondaryColor = '#f97316',
    textColor = '#000000',
  } = theme || {};

  return (
    <div style={{ fontFamily, fontSize: fontSizeBase, color: textColor }} className="p-2 md:p-4 space-y-6 md:space-y-10 max-w-7xl mx-auto">
      <img src="/images/dinamik.webp" alt="icon" className="w-16 h-16 md:w-20 md:h-20 mt-1" />
      <h1 style={{ color: primaryColor }} className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        KURUMSAL KARBON AYAK İZİ RAPORLAMA
      </h1>

      <p className="text-sm md:text-base">
        Kurumsal Karbon Ayak İzi Raporlama işletmelerin sera gazı emisyonlarını ölçmek,
        raporlamak ve azaltmak amacıyla yapılan bir süreçtir. İşte bu konuda daha fazla bilgi:
      </p>

      <div>
        <h2 className="text-lg md:text-xl font-bold mb-3" style={{ color: primaryColor }}>
          ISO 14064-1 Standardı ve Kurumsal Karbon Ayak İzi Raporlama
        </h2>
        <div className="bg-blue-50 rounded-lg p-4 md:p-5 space-y-2 md:space-y-3">
          <div className="flex items-start gap-3">
            <FaFileAlt className="text-xl md:text-2xl text-blue-800 mt-1" />
            <p className="text-sm md:text-base">
              ISO 14064-1:2018 standardı, kurumsal karbon ayak izi raporlamasını düzenleyen önemli bir kılavuz olarak öne çıkar.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaFileAlt className="text-xl md:text-2xl text-blue-800 mt-1" />
            <p className="text-sm md:text-base">
              Bu standart, şirketlerin karbon emisyonlarını ölçerek, raporlayarak ve azaltarak çevresel etkilerini değerlendirmelerine yardımcı olur.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-lg md:text-xl font-bold mb-3" style={{ color: primaryColor }}>
          Hesaplama ve Raporlama Süreci
        </h2>
        <div className="bg-blue-50 rounded-lg p-4 md:p-5 space-y-2 md:space-y-3">
          <div className="flex items-start gap-3">
            <FaFileAlt className="text-xl md:text-2xl text-blue-800 mt-1" />
            <p className="text-sm md:text-base">
              İşletmeler, doğrudan ve dolaylı CO₂ emisyonlarını hesaplar ve bu verileri bir rapor halinde sunar.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaFileAlt className="text-xl md:text-2xl text-blue-800 mt-1" />
            <p className="text-sm md:text-base">
              Raporlama süreci, işletmenin faaliyet sınırlarını belirlemeyi, emisyonları sınıflandırmayı ve sonuçları raporlamayı içerir.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center bg-white shadow-md rounded-lg p-4 md:p-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start md:w-1/3 text-center md:text-left">
          <div className="mb-4">
            <div className="relative w-24 h-24 md:w-36 md:h-36 rounded-full border-4 border-orange-500 flex items-center justify-center mx-auto md:mx-0">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                </defs>
                <text fill="#f97316" fontSize="10" fontWeight="600">
                  <textPath href="#circlePath" startOffset="50%" textAnchor="middle" letterSpacing="3">
                    Karbon Ayak İzi Doğrulama
                  </textPath>
                </text>
                <g transform="translate(50,50)">
                  <circle cx="50" cy="60" r="8" fill="#f97316" />
                  <rect x="45" y="40" width="10" height="20" fill="#f97316" />
                  <rect x="40" y="80" width="20" height="5" fill="#f97316" />
                </g>
              </svg>
            </div>
          </div>
          <p className="text-xs md:text-sm leading-relaxed max-w-xs">
            İşletmeler, bağımsız bir otorite tarafından onaylanan karbon ayak izi doğrulama sürecini de tercih edebilir.
          </p>
        </div>

        <div className="md:w-1/3 flex justify-center">
          <img
            src="/images/karbon-ayak-izi.jpg"
            alt="Karbon Ayak İzi Doğrulama"
            className="rounded-lg object-cover h-40 md:h-64"
          />
        </div>

        <div className="md:w-1/3 space-y-3 md:space-y-4">
          <h2 style={{ color: primaryColor }} className="text-lg md:text-xl font-bold">
            Veri Kaynakları ve Doğruluk
          </h2>
          <p className="text-xs md:text-sm leading-relaxed">
            Hesaplamalar için uluslararası geçerli IPCC, DEFRA ve EPA veritabanları kullanılır.
          </p>

          <h3 className="font-semibold text-sm md:text-base" style={{ color: secondaryColor }}>
            Karbon Ayak İzi Raporunun Kullanım Alanları
          </h3>
          <ul className="list-none space-y-2">
            {[
              'İç raporlama ve yönetim amaçları',
              'Dış raporlama (örneğin, sürdürülebilirlik raporları)',
              'İhracat evrakları ve müşteri talepleri için',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs md:text-sm font-semibold" style={{ color: primaryColor }}>
                <BsCheck2 className="text-orange-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}