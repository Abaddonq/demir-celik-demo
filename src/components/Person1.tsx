"use client";
import { useTheme } from "@/app/context/themeContext";
import { Staff } from "@/lib/dashboardTypes";

interface Person1Props {
  person: Staff;
}

export default function Person1({ person }: Person1Props) {
  const { theme } = useTheme();

  const {
    primaryColor = "#1E3A8A",
    secondaryColor = "#F97316",
    fontFamily = "sans-serif",
    fontSizeBase = "16px",
    backgroundColor = "#ffffff",
    textColor = "#333333",
  } = theme || {};

  if (!person) return null;

  return (
    // Dış flex konteynerini kaldırdık, çünkü bu genellikle sayfa düzeninde kontrol edilir.
    // Person kartının kendisi mobil uyumlu hale getirildi.
    <div
      className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-md p-4 sm:p-6 flex flex-col items-center text-center space-y-2 sm:space-y-3
      transition-all duration-300 hover:shadow-lg hover:scale-105 transform mx-auto" // mx-auto ile ortalama ve responsive max-width
      style={{
        backgroundColor,
        borderColor: secondaryColor,
        fontFamily, // Font ailesini buraya taşıdık
      }}
    >
      <img
        src={person.image_url || "/images/default_person.jpg"}
        alt={`${person.name} ${person.surname}`}
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 shadow-lg object-cover object-top transition-all duration-300" // Resim boyutunu responsive yaptık
        style={{
          borderColor: primaryColor,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = secondaryColor)}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = primaryColor)}
      />
      <h2 className="text-lg sm:text-xl font-bold" style={{ color: primaryColor }}> {/* Font boyutunu responsive yaptık */}
        {person.name} {person.surname}
      </h2>
      <p className="text-sm sm:text-base text-gray-500" style={{ color: textColor }}>{person.title}</p> {/* Font boyutunu responsive yaptık */}
      <p className="text-xs sm:text-sm" style={{ color: textColor }}>{person.phone}</p> {/* Font boyutunu responsive yaptık */}
      <p className="text-xs sm:text-sm" style={{ color: primaryColor }}>{person.email}</p> {/* Font boyutunu responsive yaptık */}
    </div>
  );
}