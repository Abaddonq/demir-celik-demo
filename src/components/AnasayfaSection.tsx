'use client';
import { useTheme } from "@/app/context/themeContext";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export default function AnasayfaSection() {
  const { theme } = useTheme();
  const {
    fontFamily = "sans-serif",
    fontSizeBase = "16px",
    primaryColor = "#1E3A8A",
    textColor = "#000000",
    backgroundColor = "#ffffff",
  } = theme || {};

  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between gap-8 px-6 py-10 "
      style={{
        fontFamily,
        fontSize: fontSizeBase,
        color: textColor,
        backgroundColor,
      }}
    >
      {/* Left: Başlık */}
      <div className="flex-1 text-left">
        <h1 style={{ color: primaryColor }} className="text-3xl lg:text-4xl font-bold leading-relaxed md:px-10">
          Ürünlerinizin kalitesini kanıtlamak ve üretiminizi optimize etmek için
          size yüksek kaliteli test hizmetleri sunan güvenilir bir iş ortağı!
        </h1>
      </div>

      {/* Middle: Görsel */}
      <div className="flex-shrink-0">
        <div className="relative w-[300px] h-[400px] lg:w-[350px] lg:h-[450px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/anasayfa1.jpg" // اسم الصورة التي وضعتها (غيّره إذا لزم)
            alt="Test Image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Right: Açıklama ve özellikler */}
      <div  style={{ color: primaryColor }}  className="flex-1 space-y-4 text-justify md:px-20">
        <p>
          Karabük Üniversitesi Demir Çelik Enstitüsü Türkiye ve dünyada demir
          çelik üretimi, enerji, çevre ve inşaat alanlarında yeni teknolojilerin
          geliştirilmesine, ürün kalitesinin artırılmasına, yönelik araştırmalar
          için gerekli bilimsel ortamı sağlamaktadır. Demir Çelik Enstitüsü
          ülkemizde kamu özel sektör kuruluşları tarafından üretilen ürünlerin
          uluslararası düzeyde kabul gören akreditasyon koşullarında kalite
          kontrol testlerini yaparak bilimsel araştırmalar, raporlamalar, enerji
          ve çevre etütleri yaptırmakta, koordine etmekte ve Türkiye’nin tüm
          mühendislik alanlarındaki strateji ve politikalarına katkı
          sağlamaktadır.
        </p>

        <div className="bg-blue-100 rounded-xl p-4 flex items-center gap-3">
          <FaCheckCircle color={primaryColor} />
          <span>Yüksek Kaliteli Test Hizmetleri</span>
        </div>
        <div className="bg-blue-100 rounded-xl p-4 flex items-center gap-3">
          <FaCheckCircle color={primaryColor} />
          <span>Uluslararası Alanda Çalışmalar</span>
        </div>
        <div className="bg-blue-100 rounded-xl p-4 flex items-center gap-3">
          <FaCheckCircle color={primaryColor} />
          <span>Kalite ve Güvence Sistemi</span>
        </div>
      </div>
    </section>
  );
}
