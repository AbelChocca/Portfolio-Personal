import { Moon, Sun } from "lucide-react";
import { useDarkMode } from "./useDarkMode";

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="
        fixed top-6 right-6 z-50
        p-3 rounded-full
        bg-white/10 dark:bg-white/5
        backdrop-blur-md
        border border-white/10
        hover:scale-110
        transition-all duration-300
      "
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-yellow-300" />
      ) : (
        <Moon className="w-5 h-5 text-slate-800" />
      )}
    </button>
  );
};

export default DarkModeToggle;
