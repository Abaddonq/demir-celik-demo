"use client";
import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";
import { useState } from "react";
import { useTheme } from "@/app/context/themeContext"; // تأكد من المسار الصحيح

// props tipi ekle
interface InfoCardProps {
  title: string;
  hasLink?: boolean;
  href?: string;
  className?: string;
}

export default function InfoCard({
  title,
  hasLink = true,
  href = "#",
}: InfoCardProps) {
  const [hovered, setHovered] = useState(false);
  const { theme } = useTheme();

  const {
    fontFamily = "sans-serif",
    fontSizeBase = "16px",
    primaryColor = "#1E3A8A",
    secondaryColor = "#F97316",
    backgroundColor = "#ffffff",
    textColor = "#000000",
  } = theme || {};

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-[300px] border border-gray-300 rounded-2xl shadow-md 
    hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 
    flex flex-col justify-between items-center p-6 text-center group"
      style={{
        backgroundColor,
        fontFamily,
      }}
    >
      {/* الأيقونة */}
      <div className="flex justify-center items-center w-16 h-16 rounded-full border border-gray-400 mb-2 transition-colors duration-300">
        <FaFileAlt
          className="text-2xl transition-colors duration-300"
          style={{
            color: hovered ? secondaryColor : primaryColor,
          }}
        />
      </div>

      {/* العنوان */}
      <h3
        className="text-xl font-semibold mt-6 mb-2 transition-colors duration-300"
        style={{ color: primaryColor }}
      >
        {title}
      </h3>

      {/* زر الرابط */}
      {hasLink ? (
        <Link href={href} className="mt-auto">
          <div className="flex items-center cursor-pointer transition-colors duration-300">
            <span
              className="mr-2 text-sm font-medium transition-colors duration-300"
              style={{
                color: hovered ? secondaryColor : primaryColor,
              }}
            >
              İnceleyin
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 stroke-current transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{
                color: hovered ? secondaryColor : primaryColor,
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </Link>
      ) : (
        <div className="h-[24px] mt-auto"></div>
      )}
    </div>
  );
}
