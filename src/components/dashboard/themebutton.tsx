import React from "react";
import { useTheme } from "../../app/context/themeContext";

const ThemeButton = () => {
  const { theme, toggleMode } = useTheme();

  return (
    <button
      onClick={toggleMode}
      className={
        theme.mode
          ? "px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          : "px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
      }
    >
      {theme.mode ? "Light Mode'a Geç" : "Dark Mode'a Geç"}
    </button>
  );
};

export default ThemeButton;