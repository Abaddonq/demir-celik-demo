"use client";

import Link from "next/link";
import { FaUserTie, FaFileAlt, FaFolderOpen, FaPlus } from "react-icons/fa";

type Theme = {
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
};

type InfoCardsProps = {
  theme: Theme;
};

export default function InfoCards({ theme }: InfoCardsProps) {
  const cards = [
    {
      icon: <FaFolderOpen size={40} />,
      title: "Tarihçe",
      description:
        "Karabük Üniversitesi Demir Çelik Enstitüsü Türkiye ve dünyada demir çelik üretimi, enerji, çevre ve inşaat alanlarında yeni teknolojilerin geliştirilmesine katkı sağlar.",
      link: "/kurumsal/tarihce",
      iconColor: theme.primaryColor,
    },
    {
      icon: <FaUserTie size={40} />,
      title: "Yönetim Kadrosu",
      description:
        "En iyi test ve ölçüm tekliflerini oluşturmak için sürekli olarak uzman ve akademisyen kadromuzla çalışıyoruz.",
      link: "/kurumsal/yonetim",
      iconColor: theme.secondaryColor,
    },
    {
      icon: <FaFileAlt size={40} />,
      title: "Kalite Belgeleri",
      description:
        "Mükemmellik ve kalite iyileştirme taahhüdümüzle, analizlerimiz için kalite kontrol ve güvence sunuyoruz.",
      link: "/kurumsal/kalite-belgeleri",
      iconColor: theme.primaryColor,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[#EEF5FF] rounded-3xl text-center p-8 shadow hover:shadow-lg transition-all duration-300"
          style={{ fontFamily: theme.fontFamily }}
        >
          <div className="flex justify-center mb-4">
            <div
              className="w-20 h-20 rounded-[20%] flex items-center justify-center transition-colors duration-300"
              style={{
                backgroundColor: "#fff",
                color: card.iconColor,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color =
                  theme.secondaryColor;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = card.iconColor;
              }}
            >
              {card.icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold text-[#1D2087] mb-2">
            {card.title}
          </h3>
          <p className="text-gray-600 text-sm mb-6">{card.description}</p>
          <Link
            href={card.link}
            className="inline-flex items-center gap-2 text-[#1D2087] font-bold hover:underline"
          >
            <FaPlus />
            Daha Fazla Bilgi
          </Link>
        </div>
      ))}
    </section>
  );
}
