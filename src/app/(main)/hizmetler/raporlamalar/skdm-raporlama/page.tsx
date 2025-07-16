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
        SKDM RAPORLAMA
      </h1>

      <p>
        Sınırda Karbon Düzenleme Mekanizması (SKDM), Avrupa Birliği’nin sınır ötesi karbon emisyonlarını 
        kontrol altına almak amacıyla geliştirilmiş bir mekanizmadır:
      </p>

      {/* Existing Cards */}
      <div>
        <h2 className="text-xl font-bold mb-3" style={{ color: primaryColor }}>
          Hukuki Çerçeve
        </h2>
        <div className="bg-blue-50 rounded-lg p-5 space-y-3">
          <div className="flex items-start gap-3">
            <FaFileAlt className="text-2xl text-blue-800 mt-1" />
            <p>
              AB Resmi Gazetesi’nde 16 Mayıs 2023 tarihinde yayımlanan AB Tüzüğü (2023/956) ile SKDM’nin temel yasal çerçevesi oluşturulmuştur.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaFileAlt className="text-2xl text-blue-800 mt-1" />
            <p>
            SKDM aracılığıyla AB, ilk aşamada çimento, demir-çelik, alüminyum, gübre, hidrojen ve elektrik sektörlerine ilişkin yerli ve 
            ithal ürünlerin tabi olduğu karbon bedelini eşitlemeyi amaçlar.          
            </p>
          </div>
          <div className="flex items-start gap-3">
            <FaFileAlt className="text-2xl text-blue-800 mt-1" />
            <p>
Bu mekanizma, AB’nin sera gazı emisyonlarında 2030 yılına kadar asgari %55 azaltım sağlanması hedefine ulaşılmasını destekler.  </p>
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
Ülkemizde Avrupa Yeşil Mutakabatı (AYM) ile öngörülen tedbirlerden Sınırda Karbon Düzenleme Mekanizmasına
 (SKDM) temel yasal çerçeve (AB) 2023/956 sayılı Tüzük) AB Resmi Gazetesi’nde 16 Mayıs 2023 tarihinde yayımlanmıştır.
  SKDM aracılığıyla AB, ilk aşamada, çimento, demir-çelik, alüminyum, gübre, hidrojen ve elektrik sektörlerine ilişkin
   yerli ve ithal ürünlerin tabi olduğu karbon bedelini eşitlemeyi amaçlamaktadır.
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
    
          <p className="text-sm leading-relaxed">
            AYM’nin odağında yer alan iklim eylemi alanında ise, Avrupa’yı 2050 yılına kadar dünyanın
             ilk iklim-nötr kıtası haline getirmeye yönelik siyasi taahhüdün hukuki açıdan bağlayıcı 
             bir yükümlülüğe dönüştürülmesi amacıyla, 30 Haziran 2021 tarihinde "Avrupa İklim Yasası"
              kabul edilmiştir Yasa kapsamında ayrıca, AB'nin 2030 yılına yönelik öngördüğü sera gazı 
              emisyonlarında 1990’a kıyasla %40 azaltım sağlanması hedefi de "1990’a kıyasla en az %55 
              azaltım" olarak güncellenerek üye ülkeler üzerine bağlayıcı hale getirilmiştir. Söz konusu 
              güncellenmiş hedef Aralık 2020'de, AB'nin Paris Anlaşmasına yeni katkısı (NDC) olarak Birleşmiş 
              Milletler İklim Değişikliği Çerçeve Sözleşmesi (UNFCCC) kapsamında sunulmuştur. Avrupa Komisyonu 
              tarafından AB’nin 2040 sera gazı emisyon hedefinin, 1990 seviyesine kıyasla %90 oranında azaltım olması 
              önerilmektedir.
          </p>

          <h3 className="font-semibold" style={{ color: secondaryColor }}>
            Uygulama ve Hedefler
          </h3>
          <ul className="list-none space-y-4">
            {[
              'SKDM, Avrupa Birliği’nde uygulanan iklim değişikliği politikalarının AB dışında da uygulanabilmesini hedefler',
              'Avrupa dışındaki karbon yoğun endüstrileri temiz teknolojilere ve üretim süreçlerine yönlendirmeyi amaçlar',
              'Firmaların emisyon kısıtlamalarının daha az olduğu ülkelere üretimlerini kaymasından kaynaklı karbon kaçağının önüne geçmeyi amaçlar.',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold" style={{ color: primaryColor }}>
                <BsCheck2 className="text-orange-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
