"use client";
import { useTheme } from "@/app/context/themeContext";
import { useEffect, useState } from "react";

export default function Person1({ person }) {
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
    <div className="flex justify-end p-6" style={{ fontFamily, fontSize: fontSizeBase }}>
      <div
        className="w-full max-w-md rounded-2xl shadow-md p-6 flex flex-col items-center text-center space-y-3
        transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
        style={{
          backgroundColor,
          borderColor: secondaryColor,
        }}
      >
        <img
          src={person.image_url || "/images/person1.png"}
          alt={`${person.name} ${person.surname}`}
          className="w-40 h-40 rounded-full border-4 shadow-lg object-cover object-top transition-all duration-300"
          style={{
            borderColor: primaryColor,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderColor = secondaryColor)}
          onMouseLeave={(e) => (e.currentTarget.style.borderColor = primaryColor)}
        />
        <h2 className="text-xl font-bold" style={{ color: primaryColor }}>
          {person.name} {person.surname}
        </h2>
        <p className="text-gray-500" style={{ color: textColor }}>{person.title}</p>
        <p className="text-sm" style={{ color: textColor }}>{person.phone}</p>
        <p className="text-sm" style={{ color: primaryColor }}>{person.email}</p>
      </div>
    </div>
  );
}
