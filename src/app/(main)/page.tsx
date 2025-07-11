import PageHeader from "@/components/PageHeader";
import HistoryCard from "@/components/HistoryCard";
import InfoBox from "@/components/InfoBox";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <PageHeader
        imageUrl="/images/demir-celik.jpg"
        title="Demir Çelik Enstitüsü"
      />
      {/* Tanıtım Alanı */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        {/* Sol: InfoBox daha da yatay büyük */}
        <div className="w-full md:w-[700px] flex-shrink-0">
          <InfoBox
            image="/images/lab2.jpg"
            title={
              <div className="flex flex-col items-center gap-4">
                <span className="block text-2xl md:text-3xl font-bold text-[#202b85] text-center">Ürünlerinizin kalitesini Kanıtlamak ve Üretiminizi Optimize Etmek İçin Size Yüksek Kaliteli Test Hizmetleri Sunan Güvenilir Bir İş Ortağı!</span>
              </div>
            }
            description=""
            className="w-full h-full p-10"
          />
        </div>
        {/* Sağ: Yazılar ve maddeler */}
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-200">
            Karabük Üniversitesi Demir Çelik Enstitüsü Türkiye ve dünyada demir çelik üretimi, enerji, çevre ve inşaat alanlarında yeni teknolojilerin geliştirilmesine, ürün kalitesinin artırılmasına, yönelik araştırmalar için gerekli bilimsel ortamı sağlamaktadır.<br/>
            Demir Çelik Enstitüsü ülkemizde kamu özel sektör kuruluşları tarafından üretilen ürünlerin uluslararası düzeyde kabul gören akreditasyon koşullarında kalite kontrol testlerini yaparak bilimsel araştırmalar, raporlamalar, enerji ve çevre etütleri yaptırmakta, koordine etmekte ve Türkiye'nin tüm mühendislik alanlarındaki strateji ve politikalarına katkı sağlamaktadır.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 bg-blue-50 rounded-lg px-4 py-2 font-semibold text-[#202b85]"><span className="inline-block w-6 h-6 bg-[#202b85] text-white rounded-full flex items-center justify-center">✓</span> Yüksek Kaliteli Test Hizmetleri</li>
            <li className="flex items-center gap-3 bg-blue-50 rounded-lg px-4 py-2 font-semibold text-[#202b85]"><span className="inline-block w-6 h-6 bg-[#202b85] text-white rounded-full flex items-center justify-center">✓</span> Uluslararası Alanda Çalışmalar</li>
            <li className="flex items-center gap-3 bg-blue-50 rounded-lg px-4 py-2 font-semibold text-[#202b85]"><span className="inline-block w-6 h-6 bg-[#202b85] text-white rounded-full flex items-center justify-center">✓</span> Kalite ve Güvence Sistemi</li>
          </ul>
        </div>
      </div>
      {/* 6'lı Kart Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <HistoryCard
          imageUrl="/images/dergis.jpg"
          title="Tarihçe"
          description="Karabük Üniversitesi Demir Çelik Enstitüsü Türkiye ve dünyada demir çelik üretimi, enerji, çevre ve inşaat alanlarında yeni teknolojilerin geliştirilmesine, ürün kalitesinin artırılmasına, yönelik araştırmalar için gerekli bilimsel ortamı sağlamaktadır."
          moreInfoHref="/kurumsal/hakkimizda"
        />
        <HistoryCard
          imageUrl="/images/person1.png"
          title="Yönetim Kadrosu"
          description="Geleceği inşa etmek için teknolojiye yatırım yaparken, en iyi test ve ölçüm tekliflerini oluşturmak için sürekli olarak uzman ve akademisyenlerimiz ile sizin için çalışıyoruz."
        />
        <HistoryCard
          imageUrl="/images/kalite-belgeleri.png"
          title="Kalite Belgeleri"
          description="Mükemmellik ve kalite iyileştirme taahhüdümüzle, ön analizlerimiz için birbiriyle ilişkili bir dizi kalite kontrol ve güvence girişimi sunuyoruz."
        />
        <HistoryCard
          imageUrl="/images/Laboratuvarlar.png"
          title="Laboratuvarlar"
          description="Hassas ÖlçüM ve Testler için Doğru yerdesiniz."
        />
        <HistoryCard
          imageUrl="/images/globe.svg"
          title="Yenilikler"
          description="Sürekli olarak yenilikçi testlere öncülük ediyor, yeni ilişkiler kuruyor ve testler sunmak için teknolojiye yatırım yapıyoruz."
        />
        <HistoryCard
          imageUrl="/images/mayis.png"
          title="Sürdürülebilirlik"
          description="Özenli, çevik, müşteri odaklı ve ekip çalışması değerlerimizin öncülüğünde, yalnızca çalışanlar için doğru olanı yapmakla kalmayıp, tutkuyla sürdürülebilir bir organizasyon inşa ediyoruz."
        />
      </div>
    </>
  );
}
