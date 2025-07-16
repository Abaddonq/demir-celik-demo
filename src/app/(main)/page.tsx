"use client";

import { useTheme } from "@/app/context/themeContext";
import PageHeader from "@/components/PageHeader";
import AnasayfaSection from "@/components/AnasayfaSection";
import IntroSection from "@/components/IntroSection";
import LabSection from "@/components/LabSection";
import { primaryKey } from "drizzle-orm/gel-core";
import AnasayfaCards from "@/components/AnasayfaCards";
import AccreditationList from "@/components/AccreditationList";
import Accordion from "@/components/Accordion";
import InfoCard from "@/components/InfoCard";
import HistoryCard from "@/components/HistoryCard";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
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
