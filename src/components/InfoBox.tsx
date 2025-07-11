"use client";
import { useTheme } from "@/app/context/themeContext";
import { useEffect, useState, ReactNode } from "react";

interface InfoBoxProps {
  image: string;
  title: ReactNode;
  description: string;
  className?: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ image, title, description, className }) => (
  <div
    className={
      `flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 m-4 w-full transition-transform transition-shadow duration-200 hover:scale-105 hover:shadow-xl border border-gray-200 dark:border-gray-700 ${className || ''}`
    }
  >
    <img src={image} alt="info" className="w-40 h-24 object-cover rounded mb-4" />
    <h3 className="text-lg font-bold text-center mb-2 text-gray-900 dark:text-white">{title}</h3>
    <p className="text-sm text-gray-700 dark:text-gray-300 text-center">{description}</p>
  </div>
);

export default InfoBox;