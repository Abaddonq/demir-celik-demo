"use client";

import { useTheme } from "@/app/context/themeContext";
import Image from "next/image";
import Link from "next/link";

export default function IntroSection() {
  const { theme } = useTheme();
  const {
    fontFamily = "sans-serif",
    fontSizeBase = "16px",
    primaryColor = "#F97316", // برتقالي افتراضي
    textColor = "#333333",
    backgroundColor = "#ffffff",
  } = theme || {};

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between py-16"
      style={{
        fontFamily,
        fontSize: fontSizeBase,
        backgroundColor,
        color: textColor,
      }}
    >
      {/* النص */}
      <div className="md:w-2/4 mb-10 md:mb-0 space-y-6 leading-relaxed">
        <p>
          Bilimin insanlığın iyiliği için kullanılması gerektiğine inanıyoruz,
          bu mühendislik ile ilgili soruların yanıtlarını bulmak için Demir
          Çelik Enstitüsü olarak sürekli çalışıyoruz. Demir Çelik sektörüne,
          malzeme geliştirme, Çevre ve Enerji verimliliği, Karbon ayakizi, SKDM
          gibi alanlarda yeni bakış açıları sunmaya kadar derin bir bilimsel
          uzmanlık bilgisine sahibiz.{" "}
        </p>
        <p>
          İnsan iyiliği için bilimi kullanmaya inanıyoruz, bu yüzden dünya
          çapında gece gündüz çalışıyoruz ve sağlık sorularına cevaplar
          sunuyoruz. Bu, tanı testlerini ilerletmekten, yeni ilaçların piyasaya
          sürülmesine yardımcı olmaya, veriler aracılığıyla yeni bakış açıları
          sunmaya kadar her şeyi kapsar, hepsi derin bir bilimsel uzmanlık
          kaynağından gelir{" "}
        </p>
        <Link href="/hizmetler/genel-bakis">
          <button
            className="text-white px-6 py-3 rounded-md shadow-lg transition-all"
            style={{ backgroundColor: primaryColor }}
          >
            Daha Fazla Bilgi Alın
          </button>
        </Link>
      </div>

      {/* الصورة */}
      <div className="md:w-1/2 relative">
        <div
          className="rounded-[100px_0px_100px_0px] overflow-hidden border-4"
          style={{ borderColor: primaryColor }}
        >
          <Image
            src="/images/anasayfa2.avif"
            alt="Intro Image"
            width={600}
            height={400}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
