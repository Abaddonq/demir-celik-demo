"use client";

import { useTheme } from "@/app/context/themeContext";
import Image from "next/image";
import Link from "next/link";
import { FaProjectDiagram } from "react-icons/fa";

export default function LabSection() {
  const { theme } = useTheme();
  const {
    fontFamily = "sans-serif",
    fontSizeBase = "16px",
    primaryColor = "#2A2E92",
    textColor = "#333333", // لون نص حيادي
    backgroundColor = primaryColor, // خلفية عامة حيادية وليست primary
  } = theme || {};

  return (
    <section
      className="py-12 relative overflow-hidden"
      style={{
        backgroundColor,
        color: textColor,
        fontFamily,
        fontSize: fontSizeBase,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* المحتوى */}
          <div style={{ color: "#ffff" }} className="md:w-1/2 space-y-8">
            <p className="text-lg leading-relaxed font-light">
              Demir Çelik Enstitüsü Laboratuvarları, bölgedeki ve ülke
              genelindeki metal alaşımları üreten sektörlerde kalite güvence
              sistemi geliştirilmesi amacıyla test/kalite kontrol, danışmanlık
              hizmetleri vermekte, kalifiye insan gücü yetiştirmekte,
              üniversite-sanayi işbirliği kapsamında Ar-Ge çalışmaları
              yürütmekte, ilgili alanda Ar-Ge çalışması yapan üniversiteler ve
              Ar-Ge kuruluşları ile işbirliği geliştirmektedir.
            </p>

            {/* عنصر 1 */}
            <div className="flex items-start gap-4">
              <FaProjectDiagram
                style={{ color: "#ffff" }}
                className="text-2xl mt-1"
              />
              <div>
                <h3 className="font-bold text-lg" style={{ color: "#ffff" }}>
                  Kalite Güvence Sistemi
                </h3>
                <p className="text-sm mt-1 font-light">
                  Demir Çelik Enstitüsü laboratuvarları, metal alaşımları
                  üreten...
                </p>
              </div>
            </div>

            <div className="border-t" style={{ borderColor: "#ccc" }} />

            {/* عنصر 2 */}
            <div className="flex items-start gap-4">
              <FaProjectDiagram
                className="text-2xl mt-1"
                style={{ color: "#ffff" }}
              />
              <div>
                <h3 className="font-bold text-lg" style={{ color: "#ffff" }}>
                  Geleceğe Yönelik Ar-Ge Çalışmaları
                </h3>
                <p className="text-sm mt-1 font-light">
                  Üniversitemiz, üniversite - sanayi bazında işbirliği
                  sağlayarak...
                </p>
              </div>
            </div>

            {/* زر */}
            <Link href="/hizmetler/genel-bakis">
              <button
                className="px-6 py-3 mt-4 rounded-md font-semibold transition-all"
                style={{
                  backgroundColor: "#ffffff",
                  color: primaryColor,
                }}
              >
                Daha Fazla Bilgi Alın →
              </button>
            </Link>
          </div>

          {/* الصورة */}
          <div className="md:w-1/3 mt-12 md:mt-0">
            <div className="rounded-[200px_0px_200px_0px] overflow-hidden">
              <Image
                src="/images/anasayfa3.avif"
                alt="Lab"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
