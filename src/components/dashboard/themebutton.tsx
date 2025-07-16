import React from "react";
import { useTheme } from "../../app/context/themeContext";

const ThemeButton = () => {
  const { theme, toggleMode } = useTheme();

  return (
    <button
      onClick={toggleMode}
      className={`w-full sm:w-auto px-4 py-2 rounded-md text-sm sm:text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        theme.mode
          ? "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500"
          : "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500"
      }`}
    >
      {theme.mode ? "Light Mode'a Geç" : "Dark Mode'a Geç"}
    </button>
  );
};

export default ThemeButton;
