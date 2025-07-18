"use client";
import Link from "next/link";
import { useTheme } from "@/app/context/themeContext";

interface HistoryCardProps {
  // imageUrl?: string;
  title: string;
  description: string;
  moreInfoHref?: string;
}

export default function HistoryCard({
  title,
  description,
  moreInfoHref,
}: HistoryCardProps) {
  const { theme } = useTheme();

  // Hedef linki belirle
  const href = moreInfoHref || "https://demircelik.karabuk.edu.tr/hakkimizda/";
  const isInternal = moreInfoHref && moreInfoHref.startsWith("/");

  return (
    <div
      className="rounded-2xl p-6 text-center max-w-sm shadow-md transition-all duration-300 hover:shadow-lg group"
      style={{
        backgroundColor: theme.cardBackground || "#eaf6fd",
        fontFamily: theme.fontFamily,
      }}
    >
      <div className="flex justify-center mb-4">
        <div
          className="p-4 rounded-[20%] inline-block transition-all duration-300 group-hover:scale-110 bg-white"
          style={{
            backgroundColor: theme.primaryColor || "#202b85",
            color: theme.cardTextColor || "#ffffff",
          }}
        >
          {/* <img src={imageUrl} alt={title} className="w-16 h-16 object-contain rounded" /> */}
        </div>
      </div>

      <h2
        className="text-xl font-bold mb-2 transition-all duration-300 group-hover:scale-105"
        style={{ color: theme.primaryColor || "#202b85" }}
      >
        {title}
      </h2>

      <p
        className="text-sm mb-4 transition-all duration-300"
        style={{ color: theme.textColor || "#666666" }}
      >
        {description}
      </p>

      {isInternal ? (
        <Link
          href={href}
          className="group flex items-center gap-2 font-bold justify-center transition-all duration-300"
          style={{ color: theme.primaryColor || "#202b85" }}
        >
          <span
            className="w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              backgroundColor: theme.primaryColor || "#202b85",
              color: theme.cardTextColor || "#ffffff",
            }}
          >
            +
          </span>
          <span
            className="transition-all duration-300 group-hover:text-orange-500"
            style={{ color: theme.primaryColor || "#202b85" }}
          >
            Daha Fazla Bilgi
          </span>
        </Link>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 font-bold justify-center transition-all duration-300"
          style={{ color: theme.primaryColor || "#202b85" }}
        >
          <span
            className="w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300"
            style={{
              backgroundColor: theme.primaryColor || "#202b85",
              color: theme.cardTextColor || "#ffffff",
            }}
          >
            +
          </span>
          <span
            className="transition-all duration-300 group-hover:text-orange-500"
            style={{ color: theme.primaryColor || "#202b85" }}
          >
            Daha Fazla Bilgi
          </span>
        </a>
      )}

      <style jsx>{`
        .group:hover {
          background-color: ${theme.secondaryColor || "#ff7f50"} !important;
        }
      `}</style>
    </div>
  );
}
