'use client';
import { useTheme } from '@/app/context/themeContext';
import Link from 'next/link';

export default function DinamikTestLaboratuvariPage() {
  const { theme } = useTheme();
  const { fontFamily, fontSizeBase, primaryColor, textColor } = theme || {};

  return (
    <div style={{ fontFamily, fontSize: fontSizeBase, color: textColor }} className="p-4">
      <h1 style={{ color: primaryColor }} className="text-3xl font-bold mb-6">
        DİNAMİK TEST LABORATUVARI NEDİR?
      </h1>
      <p>
        Dinamik test laboratuvarı, genellikle inşaat ve mühendislik alanlarında kullanılan yapı malzemelerinin 
        ve yapısal sistemlerin performansını değerlendirmek için kullanılan bir tür laboratuvar tesisidir.
         Bu laboratuvarlarda yapılan testler genellikle malzeme ve yapıların dayanıklılığını, dayanımını,
          elastikiyetini, deformasyon özelliklerini ve benzeri mekanik özelliklerini ölçmeye yöneliktir.
          </p>
<br />
          <p>
        Dinamik testler, yapıların çeşitli koşullar altında nasıl davranacaklarını anlamak için gerçek dünya
        koşullarını taklit eden dinamik yükler altında yapılan testlerdir. Örneğin, bir deprem sırasında binaların
        davranışını anlamak için deprem etkilerini taklit eden dinamik testler yapılabilir. Bu testler, yapısal 
        sistemlerin güvenilirliğini ve dayanıklılığını artırmak için tasarım ve mühendislik süreçlerinde önemli bir rol oynar.
            </p>
            <br />
            <br />

        <h1 style={{ color: primaryColor }} className="text-3xl font-bold mb-6">
        DİNAMİK ANALİZİ NE İŞE YARAR?
      </h1>
        <p>
        Dinamik analiz, genellikle yapıların veya sistemlerin dinamik yükler altında nasıl davranacaklarını anlamak için
         kullanılan bir mühendislik yöntemidir. Bu analizler, yapısal sistemlerin doğal frekanslarını,
          titreşim karakteristiklerini, deformasyonlarını ve stres dağılımlarını belirlemek için kullanılır.
           Dinamik analizler, çeşitli mühendislik alanlarında önemli bir rol oynar ve çeşitli amaçlar için kullanılır:
        </p>

        <br />
{/* ______________________________________________________________________________________ */}
<div className="flex flex-col space-y-4 border-b pb-4 mt-6">
  <div className="flex items-start space-x-4 rtl:space-x-reverse">
    {/* أيقونة أو صورة */}
    <div className="flex-shrink-0 text-orange-500 w-10 h-10">
          <img src="/images/icon.webp" alt="Deprem Icon" className="w-10 h-10" />
        </div>
    {/* النص */}
    <div>       
      <h3 style={{ color: primaryColor }} className="text-xl font-bold text-blue-900">Deprem Mühendisliği</h3>
      <p className="text-gray-600 leading-relaxed mt-2">
       Deprem etkilerinin yapılar üzerindeki etkilerini anlamak ve binaların deprem güvenliği için tasarım yapmak
        için dinamik analizler kullanılır. Deprem yükleri altında yapıların davranışını modellemek 
        ve olası hasarları tahmin etmek için dinamik analizler önemlidir.</p>
    </div>
  </div>
</div>
<br />
{/* ____________________________________________________________________________________ */}
    <div className="flex flex-col space-y-4 border-b pb-4 mt-6">
  <div className="flex items-start space-x-4 rtl:space-x-reverse">
    {/* أيقونة أو صورة */}
    <div className="flex-shrink-0 text-orange-500 w-10 h-10">
          <img src="/images/icon.webp" alt="Deprem Icon" className="w-10 h-10" />
        </div>
    {/* النص */}
    <div>       
      <h3 style={{ color: primaryColor }} className="text-xl font-bold text-blue-900">Yapısal Tasarım ve Optimize Etme</h3>
      <p className="text-gray-600 leading-relaxed mt-2">
       Yapısal sistemlerin optimize edilmesi ve tasarımında dinamik analizler kullanılır.
        Yapının taşıma kapasitesi, yüksek rüzgar hızlarına veya diğer dış etkilere karşı
         dayanıklılığı, yapısal sistemlerin optimize edilmesi için dinamik analizlerle değerlendirilir..
      </p>
    </div>
  </div>
</div>
    <br />
    {/* _____________________________________________________________________
     */}
    <div className="flex flex-col space-y-4 border-b pb-4 mt-6">
  <div className="flex items-start space-x-4 rtl:space-x-reverse">
    {/* أيقونة أو صورة */}
    <div className="flex-shrink-0 text-orange-500 w-10 h-10">
          <img src="/images/icon.webp" alt="Deprem Icon" className="w-10 h-10" />
        </div>
    {/* النص */}
    <div>       
      <h3 style={{ color: primaryColor }} className="text-xl font-bold text-blue-900">Köprüler ve Yüksek Yapılar</h3>
      <p className="text-gray-600 leading-relaxed mt-2">
       Köprüler ve yüksek binalar gibi büyük yapıların dinamik davranışlarını anlamak ve titreşimlerini kontrol
        altında tutmak için dinamik analizler kullanılır. Özellikle, köprülerde ve yüksek binalarda 
        rüzgar etkileri veya geçiş yapan araçların titreşimleri gibi dinamik yükler dikkate alınır.
      </p>
    </div>
  </div>
</div>
<br />
{/* _____________________________________________________________________________ */}
        <div className="flex flex-col space-y-4 border-b pb-4 mt-6">
  <div  style={{ color: primaryColor }} className="flex items-start space-x-4 rtl:space-x-reverse">
    {/* أيقونة أو صورة */}
    <div  style={{ color: primaryColor }} className="flex-shrink-0 text-orange-500 w-10 h-10">
          <img  style={{ color: primaryColor }} src="/images/icon.webp" alt="Deprem Icon" className="w-10 h-10" />
        </div>
    {/* النص */}
    <div>       
      <h3 style={{ color: primaryColor }} className="text-xl font-bold text-blue-900">Uçak ve Uzay Araçları Tasarımı</h3>
      <p className="text-gray-600 leading-relaxed mt-2">
       Uçaklar ve uzay araçları gibi hava ve uzay araçlarının titreşimlerini ve dinamik davranışlarını 
       analiz etmek için dinamik analizler kullanılır. Bu, araçların yapısal bütünlüğünü sağlamak 
       ve uçuş güvenliğini artırmak için önemlidir..
      </p>
    </div>
  </div>
</div>
<br />
{/* _____________________________________________________________________________ */}
 <div className="flex flex-col space-y-4 border-b pb-4 mt-6">
  <div  style={{ color: primaryColor }} className="flex items-start space-x-4 rtl:space-x-reverse">
    {/* أيقونة أو صورة */}
    <div  style={{ color: primaryColor }} className="flex-shrink-0 text-orange-500 w-10 h-10">
          <img  style={{ color: primaryColor }} src="/images/icon.webp" alt="Deprem Icon" className="w-10 h-10" />
        </div>
    {/* النص */}
    <div>       
      <h3 style={{ color: primaryColor }} className="text-xl font-bold text-blue-900">Makine ve Ekipman Tasarımı</h3>
      <p className="text-gray-600 leading-relaxed mt-2">
       Büyük makinelerin ve ekipmanların titreşimlerini ve dinamik davranışlarını analiz etmek, 
       tasarım sürecinde performanslarını optimize etmek için dinamik analizler kullanılır.
      </p>
    </div>
  </div>
</div>
<br />
{/* _____________________________________________________________________________________ */}
{/* --------------------------- */}
{/* بطاقات الإختبار - مثل الموقع الرسمي */}
{/* --------------------------- */}
<div className="space-y-10 mt-10">
  {/* Eksenel Yorulma Testi */}
  <div className="animate-slide-in-from-right w-full flex justify-center">
    <div className="w-full md:w-[80%] space-y-2">
      <h2 style={{ color: 'gray' }} className="font-bold text-lg mb-4">Eksenel Yorulma Testi</h2>
      <div className="bg-blue-50 p-4 rounded-lg shadow-sm flex gap-4">
        <img src="/images/icon.webp" alt="icon" className="w-6 h-6 mt-1" />
        <div>
          <strong style={{ color: primaryColor }} className="block text-blue-900">Amaç</strong>
          <p>Malzemenin tekrarlı yükler altında ne kadar süre dayanabileceğini belirlemek.</p>
        </div>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg shadow-sm flex gap-4">
        <img src="/images/icon.webp" alt="icon" className="w-6 h-6 mt-1" />
        <div>
          <strong style={{ color: primaryColor }} className="block text-blue-900">Hedef</strong>
          <p>Malzemenin yorulma ömrünü belirlemek, güvenilirlik analizleri yapmak ve tasarımda güvenli yükleme sınırlarını belirlemek.</p>
        </div>
      </div>
    </div>
  </div>

  {/* Yorulma Çatlak İlerleme Testi */}
  <div className="animate-slide-in-from-right w-full flex justify-center">
    <div className="w-full md:w-[80%] space-y-2">
      <h2 style={{ color: 'gray' }} className="font-bold text-lg mb-4">Yorulma Çatlak İlerleme Testi</h2>
      <div className="bg-blue-50 p-4 rounded-lg shadow-sm flex gap-4">
        <img src="/images/icon.webp" alt="icon" className="w-6 h-6 mt-1" />
        <div>
          <strong style={{ color: primaryColor }} className="block text-blue-900">Amaç</strong>
          <p>Malzemedeki çatlakların zaman içinde nasıl ilerlediğini ve büyüme hızını incelemek.</p>
        </div>
      </div>
      <div className="bg-blue-50 p-4 rounded-lg shadow-sm flex gap-4">
        <img src="/images/icon.webp" alt="icon" className="w-6 h-6 mt-1" />
        <div>
          <strong style={{ color: primaryColor }} className="block text-blue-900">Hedef</strong>
          <p>Çatlak büyüme mekanizmalarını anlamak، malzemenin kullanım ömrünü tahmin etmek ve önleyici bakım stratejilerini geliştirmek.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<br />
<br />
{/* ___________________________________________________________________________________________________________ */}

<div>
  <img src="/images/dinamik.webp" alt="icon" className="w-20 h-20 mt-1" />
  <h1 style={{ color: primaryColor }} className="text-3xl font-bold mb-6">
    Dinamik Test Laboratuvarında Yapılabilen Testler
  </h1>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

  <Link href="/testler/kirilma-toklugu-testi">
    <div className="relative group h-64 w-100 rounded-lg overflow-hidden shadow-lg cursor-pointer bg-gray-100">
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
        <h3 className="text-white text-xl font-bold">Kırılma Tokluğu Testi</h3>
      </div>
    </div>
  </Link>

  {/* البطاقة الثانية */}
  <Link href="/testler/ornek-test">
    <div className="relative group h-64 w-100 rounded-lg overflow-hidden shadow-lg cursor-pointer bg-gray-100">
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
        <h3 className="text-white text-xl font-bold">Örnek Test</h3>
      </div>
    </div>
  </Link>
</div>



      {/* بطاقات أو صور أو مقاطع فيديو أو مكونات خاصة */}
    </div>
  );
}
