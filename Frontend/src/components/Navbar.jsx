import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header
      className="
        sticky
        top-0
        z-50

        backdrop-blur-xl

        bg-white/70
        dark:bg-gray-950/80

        border-b
        border-gray-100
        dark:border-gray-800

        transition-colors
        duration-300
      "
    >
      <nav
        className="
          max-w-7xl
          mx-auto

          h-20

          px-6

          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="
            text-3xl
            font-black
            tracking-tight

            text-gray-900
            dark:text-white
          "
        >
          Resu<span className="text-indigo-600">Lens</span>
        </Link>

        {/* Center Links */}
        <div className="hidden md:flex items-center gap-10">
          <ScrollLink
            to="features"
            smooth={true}
            duration={600}
            offset={-80}
            className="
              cursor-pointer

              text-gray-500
              dark:text-gray-400

              hover:text-gray-900
              dark:hover:text-white

              transition

              font-medium
            "
          >
            Features
          </ScrollLink>

          <ScrollLink
            to="how-it-works"
            smooth={true}
            duration={600}
            offset={-80}
            className="
              cursor-pointer

              text-gray-500
              dark:text-gray-400

              hover:text-gray-900
              dark:hover:text-white

              transition

              font-medium
            "
          >
            How It Works
          </ScrollLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              h-11
              w-11

              rounded-2xl

              bg-gray-100
              dark:bg-gray-800

              text-gray-700
              dark:text-gray-200

              hover:bg-gray-200
              dark:hover:bg-gray-700

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
              <FiMoon className="text-xl" />
            )}
          </button>

          <Link
            to="/login"
            className="
              hidden
              sm:block

              text-gray-700
              dark:text-gray-300

              font-semibold

              hover:text-black
              dark:hover:text-white

              transition
            "
          >
            Login
          </Link>

          <Link to="/register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-6
                py-3

                rounded-2xl

                bg-gray-900
                dark:bg-indigo-600

                text-white

                font-semibold

                shadow-lg

                hover:bg-black
                dark:hover:bg-indigo-500

                transition-all

                cursor-pointer
              "
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
