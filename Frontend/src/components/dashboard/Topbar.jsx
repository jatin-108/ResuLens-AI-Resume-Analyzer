import useAuth from "../../hooks/useAuth";

import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";

const Topbar = ({ setIsSidebarOpen }) => {
  const { user } = useAuth();

  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className="sticky top-0 z-50 h-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-colors duration-300">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Hamburger */}
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="
    lg:hidden
    h-11
    w-11
    rounded-2xl
    bg-gray-100
dark:bg-gray-800

text-gray-700
dark:text-gray-200
    flex
    items-center
    justify-center
    cursor-pointer
  "
        >
          <FiMenu className="text-xl" />
        </button>

        <div>
          <h1
            className="
              text-2xl
              lg:text-3xl
              font-bold
              tracking-tight
            "
          >
            Dashboard
          </h1>

          <p
            className="
              hidden
              sm:block

              text-sm
              text-gray-500
dark:text-gray-400
            "
          >
            Welcome back, {user?.name}
          </p>
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="
      h-11
      w-11

      rounded-2xl

      bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700

      flex
      items-center
      justify-center

      transition-all

      

      cursor-pointer
    "
        >
          {darkMode ? (
            <FiSun className="text-xl text-yellow-500" />
          ) : (
            <FiMoon className="text-xl text-gray-700" />
          )}
        </button>

        {/* Avatar */}
        <div
          className="
      h-11
      w-11

      rounded-2xl

      bg-indigo-600

      text-white
      font-bold

      flex
      items-center
      justify-center
    "
        >
          {user?.name?.charAt(0)}
        </div>

        {/* User Info */}
        <div className="hidden xl:block">
          <h3
            className="font-semibold  text-gray-900
    dark:text-white"
          >
            {user?.name}
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
            {user?.email}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
