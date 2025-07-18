
// laboratuvralar/kalinti/page.tsx

'use client';
import { useTheme } from '@/app/context/themeContext';

export default function kalintilablistPage() {
  const { theme } = useTheme();
  const { fontFamily, fontSizeBase, primaryColor, textColor } = theme || {};

  return (

    <div>
    <div style={{ fontFamily, fontSize: fontSizeBase, color: textColor }} className="p-2 md:p-4">
      <h1 style={{ color: primaryColor }} className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        Kalıntı Gerilme Ölçme Deneyi Nedir ve Ne işe Yarar?
      </h1>
      <p>
        Strain gage yapıştırılarak testere ile kesme sonucu kalıntı gerilme ölçüm deneyi,
         bir malzemenin plastik deformasyon sonrası geriye kalan iç gerilmesini ölçmek için
          yapılan bir deneydir. Bu deneyde, belirli bir noktaya strain gage sensörleri 
          yapıştırılarak malzeme testere yardımıyla kesilir. Kesme işlemi, malzemenin plastik
           deformasyona uğramasını sağlar ve strain gage'lerde meydana gelen deformasyon 
           ölçülerek kalıntı gerilme seviyesi belirlenir. Bu deney, malzemenin dayanıklılığını, 
           mukavemetini ve yorulma davranışını değerlendirmek için kullanılır. Ayrıca, ürün tasarımı 
           ve kalite kontrol süreçlerinde kullanılarak ürünlerin güvenilirliğini artırır ve endüstriyel
            uygulamalarda kullanılan malzemelerin performansını belirlemeye yardımcı olur.
          </p>
<br />
            <br />

        <h1 style={{ color: primaryColor }} className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        Kalıntı Gerilme Ölçme Deneyi Nasıl Yapılır?
      </h1>
        <p>
        Strain gage'lerle kalıntı gerilme ölçüm deneyini testere ile kesme yöntemiyle gerçekleştirmek için aşağıdaki adımları izlenir:
        </p>

        <br />
{/* ______________________________________________________________________________________ */}
<div className="flex flex-col space-y-2 md:space-y-4 border-b pb-2 md:pb-4 mt-4 md:mt-6">
  <div className="flex items-start space-x-3 md:space-x-4 rtl:space-x-reverse">
    {/* أيقونة أو صورة */}
    <div className="flex-shrink-0 text-orange-500 w-8 h-8 md:w-10 md:h-10">
          <img src="/images/icon.webp" alt="Deprem Icon" className="w-full h-full" />
        </div>
    {/* النص */}
    <div>       
      <h3 style={{ color: primaryColor }} className="text-lg md:text-xl font-bold text-blue-900">Hazırlık ve Temizlik</h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1 md:mt-2">
       Test edilecek malzemenin yüzeyi temizlenir ve yağ, kir gibi kalıntılardan arındırılır.
        Bu, strain gage'lerin doğru bir şekilde yapışmasını sağlamak için önemlidir.</p>
    </div>
  </div>
</div>
<br />
{/* ____________________________________________________________________________________ */}
    <div className="flex flex-col space-y-2 md:space-y-4 border-b pb-2 md:pb-4 mt-4 md:mt-6">
  <div className="flex items-start space-x-3 md:space-x-4 rtl:space-x-reverse">
    {/* أيقونة أو صورة */}
    <div className="flex-shrink-0 text-orange-500 w-8 h-8 md:w-10 md:h-10">
          <img src="/images/icon.webp" alt="Deprem Icon" className="w-full h-full" />
        </div>
    {/* النص */}
    <div>       
      <h3 style={{ color: primaryColor }} className="text-lg md:text-xl font-bold text-blue-900">
Strain Gage'lerin Yerleştirilmesi</h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1 md:mt-2">
       Belirli noktalara strain gage'ler yapıştırılır. Bu sensörler,
        malzemenin deformasyonunu ölçmek için kullanılacaktır. 
        Strain gage'lerin doğru bir şekilde yerleştirilmesi ve sabitlenmesi, doğru ölçümlerin alınmasını sağlar.
      </p>
    </div>
  </div>
</div>
    <br />
    {/* _____________________________________________________________________
     */}
    <div className="flex flex-col space-y-2 md:space-y-4 border-b pb-2 md:pb-4 mt-4 md:mt-6">
  <div className="flex items-start space-x-3 md:space-x-4 rtl:space-x-reverse">
    {/* أيقونة أو صورة */}
    <div className="flex-shrink-0 text-orange-500 w-8 h-8 md:w-10 md:h-10">
          <img src="/images/icon.webp" alt="Deprem Icon" className="w-full h-full" />
        </div>
    {/* النص */}
    <div>       
      <h3 style={{ color: primaryColor }} className="text-lg md:text-xl font-bold text-blue-900">Testere ile Kesme
</h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1 md:mt-2">
       Belirlenen noktalarda testere yardımıyla kontrollü bir şekilde kesme yapılır. 
       Kesme işlemi, malzemenin plastik deformasyona uğramasını sağlar.

      </p>
    </div>
  </div>
</div>
<br />
{/* _____________________________________________________________________________ */}
        <div className="flex flex-col space-y-2 md:space-y-4 border-b pb-2 md:pb-4 mt-4 md:mt-6">
  <div  style={{ color: primaryColor }} className="flex items-start space-x-3 md:space-x-4 rtl:space-x-reverse">
    {/* أيقونة أو صورة */}
    <div  style={{ color: primaryColor }} className="flex-shrink-0 text-orange-500 w-8 h-8 md:w-10 md:h-10">
          <img  style={{ color: primaryColor }} src="/images/icon.webp" alt="Deprem Icon" className="w-full h-full" />
        </div>
    {/* النص */}
    <div>       
      <h3 style={{ color: primaryColor }} className="text-lg md:text-xl font-bold text-blue-900">Deformasyonun Kaydedilmesi
</h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1 md:mt-2">
       Kesme işleminden sonra, strain gage'lerde meydana gelen deformasyon ve geriye kalan iç gerilme seviyesi kaydedilir.
        Bu, ölçüm cihazları veya veri kaydedicileri kullanılarak yapılır.
      </p>
    </div>
  </div>
</div>
<br />
{/* _____________________________________________________________________________ */}
 <div className="flex flex-col space-y-2 md:space-y-4 border-b pb-2 md:pb-4 mt-4 md:mt-6">
  <div  style={{ color: primaryColor }} className="flex items-start space-x-3 md:space-x-4 rtl:space-x-reverse">
    {/* أيقونة أو صورة */}
    <div  style={{ color: primaryColor }} className="flex-shrink-0 text-orange-500 w-8 h-8 md:w-10 md:h-10">
          <img  style={{ color: primaryColor }} src="/images/icon.webp" alt="Deprem Icon" className="w-full h-full" />
        </div>
    {/* النص */}
    <div>       
      <h3 style={{ color: primaryColor }} className="text-lg md:text-xl font-bold text-blue-900">Kalıntı Gerilme Ölçümü
</h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1 md:mt-2">
       Strain gage'ler aracılığıyla malzemenin geriye kalan iç gerilmesi ölçülür.
      </p>
    </div>
  </div>
</div>
<br />
{/* _____________________________________________________________________________________ */}

    <div className="flex flex-col space-y-2 md:space-y-4 border-b pb-2 md:pb-4 mt-4 md:mt-6">
  <div  style={{ color: primaryColor }} className="flex items-start space-x-3 md:space-x-4 rtl:space-x-reverse">
    {/* أيقونة أو صورة */}
    <div  style={{ color: primaryColor }} className="flex-shrink-0 text-orange-500 w-8 h-8 md:w-10 md:h-10">
          <img  style={{ color: primaryColor }} src="/images/icon.webp" alt="Deprem Icon" className="w-full h-full" />
        </div>
    {/* النص */}
    <div>       
      <h3 style={{ color: primaryColor }} className="text-lg md:text-xl font-bold text-blue-900">Verilerin Analizi ve Yorumlanması</h3>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1 md:mt-2">
Elde edilen veriler analiz edilir ve yorumlanarak malzemenin kalıntı gerilme davranışı hakkında bilgi edinilir. Bu adım,
 malzemenin dayanıklılığını ve mukavemetini değerlendirmek için önemlidir.      </p>
    </div>
  </div>
</div>
{/* _________________________________________________________________________________________ */}

<div className="mt-6 md:mt-12">
  {/* العنوان الرئيسي */}
  <h2 style={{ color: primaryColor }} className="text-xl md:text-2xl font-bold mb-4 text-center">
    Firmalar veya Akademisyenler için<br />
    <span className="text-2xl md:text-3xl">Strain Gage'lerle Kalıntı Gerilme</span><br />
    <span className="text-blue-600">Ölçüm Deneyi Ne İşe Yarar?</span>
  </h2>

  {/* البطاقة مع التصميم الخاص */}
  <div className="relative bg-white rounded-lg md:rounded-xl shadow-md md:shadow-lg overflow-hidden border border-gray-200 w-full md:max-w-4xl mx-auto">
    {/* الخلفية الزرقاء للعنوان */}
    <div style={{ backgroundColor: primaryColor }} className="px-4 md:px-6 py-3 md:py-4">
      <h3 className="text-white text-lg md:text-xl font-bold">Deneyin Kullanım Amaçları</h3>
    </div>
    
    {/* محتوى البطاقة */}
    <div className="p-4 md:p-6">
      <div className="flex flex-col md:flex-row gap-6 items-center">
        {/* الصورة */}
        <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden border border-gray-300">
          <img
            src="/images/kalinti.jpg"
            alt="Strain Gage Deneyi"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/images/default-experiment.jpg";
            }}
          />
        </div>
        
        {/* النص */}
        <div className="flex-1">
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Strain gage'lerle kalıntı gerilme ölçüm deneyi, hem firmalar hem de akademisyenler için malzeme performansını değerlendirmek, 
            ürün tasarımını geliştirmek, kalite kontrolü sağlamak, araştırma ve geliştirme çalışmaları yapmak ve güvenlik değerlendirmesi 
            yapmak gibi amaçlarla kullanılır. Bu deneyler, malzemelerin dayanıklılığı, mukavemeti ve yorulma davranışı gibi önemli 
            özelliklerini değerlendirerek ürünlerin kalitesini artırır ve yenilikçi çalışmalara olanak tanır.
          </p>
        </div>
      </div>
      
      {/* الأيقونات في الأسفل */}
      <div className="mt-4 md:mt-6 flex flex-wrap justify-center gap-2 md:gap-4">
        {['Değerlendirme', 'Tasarım', 'Kalite', 'Ar-Ge', 'Güvenlik'].map((item) => (
          <div key={item} className="flex items-center gap-1 md:gap-2 bg-gray-100 px-3 py-1 md:px-4 md:py-2 rounded-full">
            <img src="/images/icon.webp" alt="Check" className="w-4 h-4 md:w-5 md:h-5" />
            <span className="text-xs md:text-sm text-gray-800 font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

    </div>
    </div>
  );
}