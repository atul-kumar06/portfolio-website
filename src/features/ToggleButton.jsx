import { Moon, Sun } from "lucide-react";
import React, { useState, useEffect } from "react";

const ToggleButton = () => {
  const [isDarkMode, setisDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setisDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setisDarkMode(false);
    }
  }, []);

  function changetheme() {
    const newTheme = !isDarkMode;

    setisDarkMode(newTheme);

    document.documentElement.classList.toggle("dark", newTheme);

    localStorage.setItem("theme", newTheme ? "dark" : "light");
  }

  return (
    <button
      onClick={changetheme}
      className="relative flex items-center justify-center w-10 h-10 cursor-pointer"
    >
      <Sun
        className={`absolute transition-all duration-500 ease-in-out ${isDarkMode ? "rotate-0 opacity-100 text-yellow-500" : "rotate-180 opacity-0"}`}
      />
      <Moon
        className={`absolute transition-all duration-500 ease-in-out ${isDarkMode ? "-rotate-180 opacity-0" : "rotate-0 opacity-100 text-blue-900"} `}
      />
    </button>
  );
};

export default ToggleButton;
