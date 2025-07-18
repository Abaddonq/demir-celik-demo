"use client";

import { useTheme } from "@/app/context/themeContext";
import PageHeader from "@/components/PageHeader";
import AnasayfaSection from "@/components/AnasayfaSection";
import IntroSection from "@/components/IntroSection";
import LabSection from "@/components/LabSection";
import HistoryCard from "@/components/HistoryCard";
import {
  FaHistory,
  FaUsers,
  FaCertificate,
  FaFlask,
  FaLightbulb,
  FaLeaf
} from "react-icons/fa";

export default function Home() {
  const { theme } = useTheme();
  const { textColor = "#111827" } = theme || {};

  return (
    <>
      <PageHeader
        imageUrl="/images/demir-celik.avif"
        title="Demir Çelik Enstitüsü"
      />

      <AnasayfaSection />

      <hr className="border-slate-300 my-8 w-full" />

      <IntroSection />

      <hr className="border-slate-300 my-8 w-full" />

      <LabSection />

      {/* Kurumsal misyon beyanı */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <h1
            className="text-3xl font-semibold text-center mb-4"
            style={{ color: textColor }}
          >
            Karabük Üniversitesi Demir Çelik Enstitüsü
          </h1>
          <p className="text-lg text-center max-w-4xl mx-auto leading-relaxed">
            Geleceği inşa etmek için teknolojiye yatırım yaparken, en iyi test
            ve ölçüm tekliflerini oluşturmak için sürekli olarak uzman ve
            akademisyenlerimizle sizin için çalışıyoruz.
          </p>
        </div>
      </section>

      {/* Kurumsal grid */}
      <div className="pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  <HistoryCard
    title="Tarihçe"
    description="Karabük Üniversitesi Demir Çelik Enstitüsü, Türkiye ve dünyada demir-çelik üretimi, enerji, çevre ve inşaat alanlarında yeni teknolojilerin geliştirilmesine ve ürün kalitesinin artırılmasına yönelik bilimsel ortam sağlar."
    moreInfoHref="/kurumsal/hakkimizda"
    icon={<FaHistory />}
  />
  <HistoryCard
    title="Yönetim Kadrosu"
    description="Uzman kadromuz ve akademisyenlerimizle en iyi test ve ölçüm hizmetini sunmak için çalışıyoruz."
    moreInfoHref="/kurumsal/yonetim-kadromuz"
    icon={<FaUsers />}
  />
  <HistoryCard
    title="Kalite Belgeleri"
    description="Mükemmellik ve kalite iyileştirme taahhüdümüzle, ön analizlerimiz için birbiriyle ilişkili kalite kontrol ve güvence girişimleri sunuyoruz."
    moreInfoHref="/hizli-erisim/kalite-belgeleri"
    icon={<FaCertificate />}
  />
  <HistoryCard
    title="Laboratuvarlar"
    description="Hassas ölçüm ve testler için doğru yerdesiniz."
    moreInfoHref="/hizmetler/laboratuvarlar/dinamik-test-laboratuvari"
    icon={<FaFlask />}
  />
  <HistoryCard
    icon={<FaLightbulb />}
    title="Yenilikler"
    description="Sürekli olarak yenilikçi testlere öncülük ediyor, yeni ilişkiler kuruyor ve teknolojiye yatırım yapıyoruz."
    moreInfoHref="/hizmetler/raporlamalar"
    
  />
  <HistoryCard
    title="Sürdürülebilirlik"
    description="Çevik, müşteri odaklı ve ekip çalışması değerlerimizle sürdürülebilir bir organizasyon inşa ediyoruz."
    moreInfoHref="/duyurular-ve-haberler"
    icon={<FaLeaf />}
  />
</div>


      {/* Uzmanlık Alanlarımız */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto">
          <h2
            className="text-2xl font-semibold text-center mb-4"
            style={{ color: textColor }}
          >
            Uzmanlık Alanlarımız
          </h2>
          <p className="text-center leading-relaxed">
            Odak noktamız, size en iyi test ve ölçüm hizmetlerini sunmak ve
            kuruluşunuzun ihtiyaç duyduğu mühendislik desteğini sağlamaktır.
            Kapsamlı test-ölçüm menümüzü inceleyerek ihtiyaçlarınızı
            belirleyebilirsiniz.
          </p>
        </div>
      </section>
    </>
  );
}
