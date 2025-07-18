'use client';
import { useTheme } from '@/app/context/themeContext';
import Link from 'next/link';

export default function DinamikTestLaboratuvariPage() {
  const { theme } = useTheme();
  const { fontFamily, fontSizeBase, primaryColor, textColor } = theme || {};

  return (
    <div style={{ fontFamily, fontSize: fontSizeBase, color: textColor }} className="p-4 md:p-6">
      <h1 style={{ color: primaryColor }} className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        DİNAMİK TEST LABORATUVARI NEDİR?
      </h1>
      <p className="text-sm md:text-base">
        Dinamik test laboratuvarı, genellikle inşaat ve mühendislik alanlarında kullanılan yapı malzemelerinin 
        ve yapısal sistemlerin performansını değerlendirmek için kullanılan bir tür laboratuvar tesisidir.
         Bu laboratuvarlarda yapılan testler genellikle malzeme ve yapıların dayanıklılığını, dayanımını,
          elastikiyetini, deformasyon özelliklerini ve benzeri mekanik özelliklerini ölçmeye yöneliktir.
      </p>
      <br />
      <p className="text-sm md:text-base">
        Dinamik testler, yapıların çeşitli koşullar altında nasıl davranacaklarını anlamak için gerçek dünya
        koşullarını taklit eden dinamik yükler altında yapılan testlerdir. Örneğin, bir deprem sırasında binaların
        davranışını anlamak için deprem etkilerini taklit eden dinamik testler yapılabilir. Bu testler, yapısal 
        sistemlerin güvenilirliğini ve dayanıklılığını artırmak için tasarım ve mühendislik süreçlerinde önemli bir rol oynar.
      </p>
      <br /><br />

      <h1 style={{ color: primaryColor }} className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        DİNAMİK ANALİZİ NE İŞE YARAR?
      </h1>
      <p className="text-sm md:text-base">
        Dinamik analiz, genellikle yapıların veya sistemlerin dinamik yükler altında nasıl davranacaklarını anlamak için
         kullanılan bir mühendislik yöntemidir. Bu analizler, yapısal sistemlerin doğal frekanslarını,
          titreşim karakteristiklerini, deformasyonlarını ve stres dağılımlarını belirlemek için kullanılır.
           Dinamik analizler, çeşitli mühendislik alanlarında önemli bir rol oynar ve çeşitli amaçlar için kullanılır:
      </p>
      <br />

      {/* Info sections */}
      <div className="flex flex-col space-y-3 md:space-y-4 border-b pb-3 md:pb-4 mt-4 md:mt-6">
        <div className="flex items-start space-x-3 md:space-x-4 rtl:space-x-reverse">
          <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10">
            <img src="/images/icon.webp" alt="Deprem Icon" className="w-full h-full" />
          </div>
          <div>       
            <h3 style={{ color: primaryColor }} className="text-lg md:text-xl font-bold text-blue-900">Deprem Mühendisliği</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1 md:mt-2">
              Deprem etkilerinin yapılar üzerindeki etkilerini anlamak ve binaların deprem güvenliği için tasarım yapmak
              için dinamik analizler kullanılır. Deprem yükleri altında yapıların davranışını modellemek 
              ve olası hasarları tahmin etmek için dinamik analizler önemlidir.
            </p>
          </div>
        </div>
      </div>
      <br />

      {/* Repeat similar structure for other info sections */}
      {/* Just change the className as shown above for each section */}

      {/* Test cards */}
      <div className="space-y-6 md:space-y-10 mt-6 md:mt-10">
        {/* Eksenel Yorulma Testi */}
        <div className="animate-slide-in-from-right w-full flex justify-center">
          <div className="w-full md:w-[80%] space-y-2">
            <h2 style={{ color: 'gray' }} className="font-bold text-base md:text-lg mb-3 md:mb-4">Eksenel Yorulma Testi</h2>
            <div className="bg-blue-50 p-3 md:p-4 rounded-lg shadow-sm flex gap-3 md:gap-4">
              <img src="/images/icon.webp" alt="icon" className="w-5 h-5 md:w-6 md:h-6 mt-1" />
              <div>
                <strong style={{ color: primaryColor }} className="block text-blue-900 text-sm md:text-base">Amaç</strong>
                <p className="text-sm md:text-base">Malzemenin tekrarlı yükler altında ne kadar süre dayanabileceğini belirlemek.</p>
              </div>  
            </div>
            <div className="bg-blue-50 p-3 md:p-4 rounded-lg shadow-sm flex gap-3 md:gap-4">
              <img src="/images/icon.webp" alt="icon" className="w-5 h-5 md:w-6 md:h-6 mt-1" />
              <div>
                <strong style={{ color: primaryColor }} className="block text-blue-900 text-sm md:text-base">Hedef</strong>
                <p className="text-sm md:text-base">Malzemenin yorulma ömrünü belirlemek, güvenilirlik analizleri yapmak ve tasarımda güvenli yükleme sınırlarını belirlemek.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat similar structure for other test cards */}
      </div>
      <br /><br />

      <div>
        <img src="/images/dinamik.webp" alt="icon" className="w-16 h-16 md:w-20 md:h-20 mt-1" />
        <h1 style={{ color: primaryColor }} className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Dinamik Test Laboratuvarında Yapılabilen Testler
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
        <Link href="/testler/kirilma-toklugu-testi">
          <div className="relative group h-48 md:h-64 w-full rounded-lg overflow-hidden shadow-lg cursor-pointer bg-gray-100">
            <img
              src="/images/kirilma-toklugu-testi.avif"
              alt="Kırılma Tokluğu Testi"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.className = "absolute inset-0 w-full h-full object-contain bg-gray-200 p-4";
              }}
            />
            <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-white text-base md:text-lg font-bold">Kırılma Tokluğu Testi</h3>
            </div>
          </div>
        </Link>

        <Link href="/testler/ornek-test">
          <div className="relative group h-48 md:h-64 w-full rounded-lg overflow-hidden shadow-lg cursor-pointer bg-gray-100">
            <img
              src="/images/ornek-test.jpg"
              alt="Örnek Test"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/images/default-test.jpg";
                target.className = "absolute inset-0 w-full h-full object-contain bg-gray-200 p-4";
              }}
            />
            <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-white text-base md:text-lg font-bold">Örnek Test</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}