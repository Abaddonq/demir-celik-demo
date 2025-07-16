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
    <div style={{ fontFamily, fontSize: fontSizeBase, color: textColor }} className="p-4 space-y-10 max-w-7xl mx-auto">
      <img src="/images/dinamik.webp" alt="icon" className="w-20 h-20 mt-1" />
      <h1 style={{ color: primaryColor }} className="text-3xl font-bold mb-6">
        KURUMSAL KARBON AYAK İZİ RAPORLAMA
      </h1>

      <p>
        Kurumsal Karbon Ayak İzi Raporlama işletmelerin sera gazı emisyonlarını ölçmek,
        raporlamak ve azaltmak amacıyla yapılan bir süreçtir. İşte bu konuda daha fazla bilgi:
      </p>

      {/* Existing Cards */}
      <div>
        <h2 className="text-xl font-bold mb-3" style={{ color: primaryColor }}>
          ISO 14064-1 Standardı ve Kurumsal Karbon Ayak İzi Raporlama
        </h2>
        <div className="bg-blue-50 rounded-lg p-5 space-y-3">
          <div className="flex items-start gap-3">
            <FaFileAlt className="text-2xl text-blue-800 mt-1" />
            <p>
              ISO 14064-1:2018 standardı, kurumsal karbon ayak izi raporlamasını düzenleyen önemli bir kılavuz olarak öne çıkar.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaFileAlt className="text-2xl text-blue-800 mt-1" />
            <p>
              Bu standart, şirketlerin karbon emisyonlarını ölçerek, raporlayarak ve azaltarak çevresel etkilerini değerlendirmelerine yardımcı olur.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-3" style={{ color: primaryColor }}>
          Hesaplama ve Raporlama Süreci
        </h2>
        <div className="bg-blue-50 rounded-lg p-5 space-y-3">
          <div className="flex items-start gap-3">
            <FaFileAlt className="text-2xl text-blue-800 mt-1" />
            <p>
              İşletmeler, doğrudan ve dolaylı CO₂ emisyonlarını hesaplar ve bu verileri bir rapor halinde sunar.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaFileAlt className="text-2xl text-blue-800 mt-1" />
            <p>
              Raporlama süreci, işletmenin faaliyet sınırlarını belirlemeyi, emisyonları sınıflandırmayı ve sonuçları raporlamayı içerir.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaFileAlt className="text-2xl text-blue-800 mt-1" />
            <p>
              Raporlar, işletmenin çevresel performansını değerlendirmek, paydaşlarla iletişim kurmak ve sürdürülebilirlik hedeflerini takip etmek için kullanılır.
            </p>
          </div>
        </div>
      </div>
<br />
<br />
{/* ______________________________________________________________________________________ */}
      {/* New Section from Screenshot */}
      <div className="flex flex-col md:flex-row gap-8 items-center bg-white shadow-md rounded-lg p-6 max-w-7xl mx-auto">
        {/* Left: Circular Logo and Text */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 text-center md:text-left">
          <div className="mb-4">
            <div className="relative w-36 h-36 rounded-full border-4 border-orange-500 flex items-center justify-center mx-auto md:mx-0">
              {/* Circle text could be an SVG or simplified with just text */}
              <svg viewBox="0 0 200 200" className="w-36 h-36">
                <defs>
                  <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                </defs>
                <text fill="#f97316" fontSize="12" fontWeight="600">
                  <textPath href="#circlePath" startOffset="50%" textAnchor="middle" letterSpacing="3">
                    Karbon Ayak İzi Doğrulama
                  </textPath>
                </text>
                <g transform="translate(50,50)">
                  {/* Simple flask icons as in the logo */}
                  <circle cx="50" cy="60" r="10" fill="#f97316" />
                  <rect x="45" y="40" width="10" height="20" fill="#f97316" />
                  <rect x="40" y="80" width="20" height="5" fill="#f97316" />
                </g>
              </svg>
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            İşletmeler, bağımsız bir otorite tarafından onaylanan karbon ayak izi doğrulama sürecini de tercih edebilir.
            Bu süreç, şirketin emisyon hesaplamalarının belirli bir standarta veya protokole uygun olarak yapıldığının doğrulandığı bir süreçtir.
          </p>
        </div>

        {/* Middle: Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src="/images/karbon-ayak-izi.jpg"
            alt="Karbon Ayak İzi Doğrulama"
            className="rounded-lg object-cover max-h-64"
          />
        </div>

        {/* Right: Text Content */}
        <div className="md:w-1/3 space-y-4">
          <h2 style={{ color: primaryColor }} className="text-xl font-bold">
            Veri Kaynakları ve Doğruluk
          </h2>
          <p className="text-sm leading-relaxed">
            Hesaplamalar için uluslararası geçerli IPCC, DEFRA ve EPA veritabanları kullanılır.
            Hesaplamalar için uluslararası geçerli IPCC, DEFRA ve EPA veritabanları kullanılır.
            Yüksek doğruluklu sonuçlar elde etmek için bu veritabanları ile uyumlu çalışan yazılımlar tercih edilir.
          </p>

          <h3 className="font-semibold" style={{ color: secondaryColor }}>
            Karbon Ayak İzi Raporunun Kullanım Alanları
          </h3>
          <ul className="list-none space-y-2">
            {[
              'İç raporlama ve yönetim amaçları',
              'Dış raporlama (örneğin, sürdürülebilirlik raporları)',
              'İhracat evrakları ve müşteri talepleri için',
              'Sürdürülebilirlik hedeflerini takip etmek için',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold" style={{ color: primaryColor }}>
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
