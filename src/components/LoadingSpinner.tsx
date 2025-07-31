"use client";

import { useTheme } from "@/app/context/themeContext"; // Assuming this is your theme context path

export default function LoadingSpinner() {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4"
        style={{ borderColor: theme.primaryColor }}
      ></div>
    </div>
  );
}