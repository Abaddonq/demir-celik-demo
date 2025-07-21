"use client";

import { useTheme } from "@/app/context/themeContext";
import PageHeader from "@/components/PageHeader"; // PageHeader lazy yüklenmeyecek

// next/dynamic import edildi
import dynamic from "next/dynamic";

// Tüm diğer bileşenler lazy loading ile yüklenecek
const DynamicAnasayfaSection = dynamic(() => import("@/components/AnasayfaSection"), {
  ssr: false,
  loading: () => <p>Ana sayfa bölümü yükleniyor...</p>, // İsteğe bağlı
});

const DynamicIntroSection = dynamic(() => import("@/components/IntroSection"), {
  ssr: false,
  loading: () => <p>Giriş bölümü yükleniyor...</p>, // İsteğe bağlı
});

const DynamicLabSection = dynamic(() => import("@/components/LabSection"), {
  ssr: false,
  loading: () => <p>Laboratuvarlar bölümü yükleniyor...</p>, // İsteğe bağlı
});

const DynamicHistoryCard = dynamic(() => import("@/components/HistoryCard"), {
  ssr: false,
  loading: () => <p>Geçmiş kartları yükleniyor...</p>, // İsteğe bağlı
});

// react-icons özelinde, genelde bu kütüphanenin kendisi büyükse
// iconları lazy yüklemek yerine sadece ihtiyacımız olanları import etmek daha verimli olur.
// Ancak eğer FaHistory vb. de ayrı ayrı büyükse, onlar için de dynamic kullanabiliriz.
// Şimdilik default olarak bırakıyorum, çünkü genelde bu ikonlar küçük bundle'lar oluşturur.
import {
  FaHistory,
  FaUsers,
  FaCertificate,
  FaFlask,
  FaLightbulb,
  FaLeaf,
} from "react-icons/fa";

export default function Home() {
  const { theme } = useTheme();
  const { textColor = "#111827" } = theme || {};

  return (
    <>
      {/* PageHeader lazy yüklenmeyecek */}
      <PageHeader
        imageUrl="/images/demir-celik.avif"
        title="Demir Çelik Enstitüsü"
      />

      {/* Lazy yüklenen AnasayfaSection */}
      <DynamicAnasayfaSection />

      <hr className="border-slate-300 my-8 w-full" />

      {/* Lazy yüklenen IntroSection */}
      <DynamicIntroSection />

      <hr className="border-slate-300 my-8 w-full" />

      {/* Lazy yüklenen LabSection */}
      <DynamicLabSection />

      {/* Kurumsal misyon beyanı - Bu bir bileşen değil, mevcut haliyle kalacak */}
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

      {/* Kurumsal grid - İçindeki HistoryCard'lar lazy yüklenecek */}
      <div className="pb-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <DynamicHistoryCard
          title="Tarihçe"
          description="Karabük Üniversitesi Demir Çelik Enstitüsü, Türkiye ve dünyada demir-çelik üretimi, enerji, çevre ve inşaat alanlarında yeni teknolojilerin geliştirilmesine ve ürün kalitesinin artırılmasına yönelik bilimsel ortam sağlar."
          moreInfoHref="/kurumsal/hakkimizda"
          icon={<FaHistory />}
        />
        <DynamicHistoryCard
          title="Yönetim Kadrosu"
          description="Uzman kadromuz ve akademisyenlerimizle en iyi test ve ölçüm hizmetini sunmak için çalışıyoruz."
          moreInfoHref="/kurumsal/yonetim-kadromuz"
          icon={<FaUsers />}
        />
        <DynamicHistoryCard
          title="Kalite Belgeleri"
          description="Mükemmellik ve kalite iyileştirme taahhüdümüzle, ön analizlerimiz için birbiriyle ilişkili kalite kontrol ve güvence girişimleri sunuyoruz."
          moreInfoHref="/hizli-erisim/kalite-belgeleri"
          icon={<FaCertificate />}
        />
        <DynamicHistoryCard
          title="Laboratuvarlar"
          description="Hassas ölçüm ve testler için doğru yerdesiniz."
          moreInfoHref="/hizmetler/laboratuvarlar/dinamik-test-laboratuvari"
          icon={<FaFlask />}
        />
        <DynamicHistoryCard
          icon={<FaLightbulb />}
          title="Yenilikler"
          description="Sürekli olarak yenilikçi testlere öncülük ediyor, yeni ilişkiler kuruyor ve teknolojiye yatırım yapıyoruz."
          moreInfoHref="/hizmetler/raporlamalar"
        />
        <DynamicHistoryCard
          title="Sürdürülebilirlik"
          description="Çevik, müşteri odaklı ve ekip çalışması değerlerimizle sürdürülebilir bir organizasyon inşa ediyoruz."
          moreInfoHref="/duyurular-ve-haberler"
          icon={<FaLeaf />}
        />
      </div>

      {/* Uzmanlık Alanlarımız - Bu bir bileşen değil, mevcut haliyle kalacak */}
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