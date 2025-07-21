"use client";

import { useTheme } from "@/app/context/themeContext";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image"; // Next.js Image bileşeni

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
      className="w-full py-16 px-4 md:px-10"
      style={{ fontFamily, fontSize: fontSizeBase, color: textColor, backgroundColor }}
    >
      {/* Title */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h1
          className="text-3xl md:text-4xl font-bold leading-relaxed"
          style={{ color: primaryColor }}
        >
          Ürünlerinizin kalitesini kanıtlamak ve üretiminizi optimize etmek için size yüksek kaliteli test hizmetleri sunan güvenilir bir iş ortağı!
        </h1>
      </div>

      {/* Image + Description Block */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Tilted Image */}
        <div className="relative w-[300px] md:w-[350px] lg:w-[400px] aspect-[3/4] transform rotate-[-3deg] shadow-xl rounded-2xl overflow-hidden border border-gray-300 dark:border-gray-700">
          <Image
            src="/images/anasayfa1.avif"
            alt="Test Image"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 400px"
            // priority prop'unu buradan kaldırdık!
          />
        </div>

        {/* Text Box */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-8 space-y-5 max-w-2xl">
          <p style={{ color: primaryColor }} className="text-sm md:text-base text-justify">
            Çelik Enstitüsü Türkiye ve dünyada demir çelik üretimi, enerji, çevre ve inşaat alanlarında yeni teknolojilerin geliştirilmesine, ürün kalitesinin artırılmasına yönelik araştırmalar için gerekli bilimsel ortamı sağlamaktadır. Kalite kontrol testlerini yaparak bilimsel araştırmalar, enerji ve çevre etütleri yaptırmakta ve Türkiye’nin tüm mühendislik alanlarındaki strateji ve politikalarına katkı sağlamaktadır.
          </p>

          <div className="space-y-3">
            <div className="bg-blue-100 rounded-xl p-3 flex items-center gap-3">
              <FaCheckCircle color={primaryColor} />
              <span>Yüksek Kaliteli Test Hizmetleri</span>
            </div>
            <div className="bg-blue-100 rounded-xl p-3 flex items-center gap-3">
              <FaCheckCircle color={primaryColor} />
              <span>Uluslararası Alanda Çalışmalar</span>
            </div>
            <div className="bg-blue-100 rounded-xl p-3 flex items-center gap-3">
              <FaCheckCircle color={primaryColor} />
              <span>Kalite ve Güvence Sistemi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}