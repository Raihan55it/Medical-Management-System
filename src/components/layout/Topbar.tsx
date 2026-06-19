import { useContext } from "react";
import { ThemeContext } from "../../context/ThemContext.tsx";

const Topbar = () => {
  const themContext = useContext(ThemeContext);

  if (!themContext) return null;

  const { theme, toggleTheme } = themContext;
  return (
    <div className="h-14 flex items-center justify-between px-4 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
      <h2 className="font-semibold text-gray-800 dark:text-white">Dashboard</h2>
      <div>
        <input
          placeholder="search"
          className="border px-2 py-1 rounded text-sm dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm"
        >
          {theme === "light" ? "🌙" : "  🌞"}
        </button>
        <div className="w-8 h-8 rounded-full bg-blue-500"></div>
      </div>
    </div>
  );
};

export default Topbar;
