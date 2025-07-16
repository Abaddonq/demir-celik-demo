'use client';
import { useTheme } from '@/app/context/themeContext';

export default function spektralanalizlaboratuvariPage() {
  const { theme } = useTheme();
  const { fontFamily, fontSizeBase, primaryColor, textColor } = theme || {};

  return (
    <div style={{ fontFamily, fontSize: fontSizeBase, color: textColor }} className="p-4">
      <h1 style={{ color: primaryColor }} className="text-3xl font-bold mb-6">
        Spektral analiz (Optik Emisyon Spektrometre) deneyi Nedir ve Ne işe Yarar?
      </h1>
      <p>
       Spektral analiz, bir malzemenin ışık yoluyla kimyasal bileşenlerini veya elementlerini 
       belirlemek için kullanılan bir analiz yöntemidir. Optik Emisyon Spektrometresi (OES),
        bu tür analizi gerçekleştiren bir cihazdır.
          </p>
<br />
        <p>
            OES, bir numunenin yüksek sıcaklıklarda (genellikle plazma veya kıvılcım kullanılarak)
             ısıtılmasıyla oluşan emisyon spektrumunu kaydederek çalışır. Bu spektrum, malzemenin 
             bileşenlerine ve elementlerine ait karakteristik ışık dalga boylarından oluşur.
        </p>
<br />
        <p>
            OES'in temel amacı, malzemenin içerdiği elementleri ve bunların yoğunluklarını
             belirlemektir. Bu bilgiler, malzemenin kalitesini kontrol etmek, bileşimini analiz etmek,
              metalürjik süreçleri izlemek ve endüstriyel üretimde kullanılan malzemelerin karakterizasyonunu sağlamak için kullanılır.
        </p>
<br />
        <p>
            Özellikle metalurji, metal dökümhaneleri, çelik üretimi, alüminyum ve demir cevheri analizi,
             kızgın metal analizi, kitle spektrometrisi gibi endüstriyel uygulamalarda OES sıklıkla kullanılır. Ayrıca,
              araştırma laboratuvarlarında ve üniversitelerde kimyasal analiz, malzeme bilimi ve metalurji araştırmalarında da yaygın olarak kullanılır.
        </p>
<br />        
        <h1 style={{ color: primaryColor }} className="text-3xl font-bold mb-6">
        Spektral Analiz (Optik Emisyon Spektrometre) Deneyi Nasıl Yapılır?
      </h1>
        <p>
Optik Emisyon Spektrometresi (OES) ile spektral analiz yapmak için genellikle şu adımlar izlenir:
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
      <h3 style={{ color: primaryColor }} className="text-xl font-bold text-blue-900">Numune Hazırlığı
</h3>
      <p className="text-gray-600 leading-relaxed mt-2">
      İncelemek istediğiniz numuneyi uygun boyutlara getirin ve hazırlayın.
       Metal numuneler genellikle önce temizlenir sonra yüksek hızda dönen cihazda
        60 numara ile zımparalanarak yüzey hazır hale getirilir.</p>
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
      <h3 style={{ color: primaryColor }} className="text-xl font-bold text-blue-900">Işıltı Oluşturma</h3>
      <p className="text-gray-600 leading-relaxed mt-2">
       Atomize edilmiş numunenin ışıltısı, optik emisyon spektrometresi tarafından alınır.
         Işıltı, numunenin içindeki elementlerin karakteristik ışığı yaymasıyla oluşur.
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
      <h3 style={{ color: primaryColor }} className="text-xl font-bold text-blue-900">Spektral Analiz</h3>
      <p className="text-gray-600 leading-relaxed mt-2">
       OES, numunedeki ışıltının spektrumunu kaydeder. Bu spektrum, elementlerin karakteristik emisyon çizgilerini içerir.
        Her bir elementin belirli bir dalga boyunda yaydığı ışık, elementin varlığını ve yoğunluğunu belirlemek için kullanılır.
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
      <h3 style={{ color: primaryColor }} className="text-xl font-bold text-blue-900">Veri Analizi ve Yorumlama</h3>
      <p className="text-gray-600 leading-relaxed mt-2">
      Elde edilen spektral veriler, genellikle bir bilgisayar programı kullanılarak analiz edilir. Bu analiz, numunedeki elementlerin varlığını, 
      yoğunluğunu ve diğer kimyasal özelliklerini belirlemeye yardımcı olur.
      </p>
    </div>
  </div>
</div>
<br />  
{/*__________________________________________________________________________________ */}
      {/* بطاقات أو صور أو مقاطع فيديو أو مكونات خاصة */}
    </div>
  );
}
