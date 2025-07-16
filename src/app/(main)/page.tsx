"use client";

import { useTheme } from "@/app/context/themeContext";
import PageHeader from "@/components/PageHeader";
// <<<<<<< HEAD
import AnasayfaSection from "@/components/AnasayfaSection";
import IntroSection from "@/components/IntroSection";
import LabSection from "@/components/LabSection";
import HistoryCard from "@/components/HistoryCard";
// // =======
// import HistoryCard from "@/components/HistoryCard";
// import InfoBox from "@/components/InfoBox";
// import Image from "next/image";
// import Link from "next/link";
// >>>>>>> 030d0c5477919e628a2ab64937e239c3cb29b63e

export default function Home() {
  const { theme } = useTheme();
  const {
    fontFamily = "sans-serif",
    fontSizeBase = "16px",
    textColor = "#000000",
  } = theme || {};

  return (
    
    <>
      <PageHeader
        imageUrl="/images/demir-celik.jpg"
        title="Demir Çelik Enstitüsü"
      />
{/* <<<<<<< HEAD */}

      <br />
      <br />

      <AnasayfaSection />
      <IntroSection />
      <LabSection />

      {/* هذا الجزء لا يتأثر بالثيم، نضيف له style من الثيم هنا */}
      <div
        style={{
          fontFamily,
          fontSize: "20px",
          color:  textColor,
          lineHeight: "2",
          fontWeight: "bold"
        }}
      >
        <br />
        <br />
        <h1 className="text-center">
          Karabük Üniversitesi Demir Çelik Enstitüsü
        </h1>
        <h1 className="text-center">
          Geleceği inşa etmek için teknolojiye yatırım yaparken, en iyi test ve
          ölçüm tekliflerini oluşturmak için sürekli olarak uzman ve
          akademisyenlerimiz ile sizin için çalışıyoruz.
        </h1>
        <br />
        <br />
      </div>
      <section className="px-10 py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <HistoryCard 
      title="Tarihçe" 
      description="Karabük Üniversitesi Demir Çelik Enstitüsü Türkiye ve dünyada demir çelik üretimi,
       enerji, çevre ve inşaat alanlarında yeni teknolojilerin geliştirilmesine, ürün kalitesinin artırılmasına,
        yönelik araştırmalar için gerekli bilimsel ortamı sağlamaktadır."
      moreInfoHref="/kurumsal/hakkimizda"
    />
    <HistoryCard 
      title="Yönetim Kadrosu" 
      description="Geleceği inşa etmek için teknolojiye yatırım yaparken, 
      en iyi test ve ölçüm tekliflerini oluşturmak için sürekli olarak uzman ve akademisyenlerimiz ile sizin için çalışıyoruz."
      moreInfoHref="/kurumsal/yonetim-kadromuz"

    />
    <HistoryCard 
      title="Kalite Belgeleri" 
      description="Mükemmellik ve kalite iyileştirme taahhüdümüzle,
       ön analizlerimiz için birbiriyle ilişkili bir dizi kalite kontrol ve güvence girişimi sunuyoruz."
      moreInfoHref="/hizli-erisim/kalite-belgeleri"
    />
    <HistoryCard 
      title="Laboratuvarlar" 
      description="Hassas Ölçüm ve Testler için Doğru yerdesiniz."
      moreInfoHref="/hizmetler/laboratuvarlar/dinamik-test-laboratuvari"
    />
    <HistoryCard 
      title="Yenilikler" 
      description="Sürekli olarak yenilikçi testlere öncülük ediyor, yeni ilişkiler kuruyor ve 
      testler sunmak için teknolojiye yatırım yapıyoruz."
      moreInfoHref="/hizmetler/raporlamalar"

    />
    <HistoryCard 
      title="Sürdürülebilirlik" 
      description="Özenli, çevik, müşteri odaklı ve ekip çalışması değerlerimizin öncülüğünde, 
      yalnızca çalışanlar için doğru olanı yapmakla kalmayıp, tutkuyla sürdürülebilir bir organizasyon inşa ediyoruz."
      moreInfoHref="/duyurular-ve-haberler"
    />
  </div>
</section>


     <div style={{
          fontFamily,
          fontSize: "20px",
          color:  textColor,
          lineHeight: "2",
          fontWeight: "bold"
        }}  >   
    <h1 className="text-center px-10 py-10 gap-30 ">Odak noktanız size mümkün olan en iyi test ve ölçüm hizmetlerini
       sunmak ve enstitümüz kuruluşunuzun ihtiyaç duyduğu mühendislik desteği için burada. Kapsamlı
        test ölçüm ve hizmet menümüzü inceleyerek ihtiyaçlarınızı belirleyebilirsiniz. 
Uzmanlık Alanlarımız</h1>
        <br /><br />
    </div>
    </>
  );
}
