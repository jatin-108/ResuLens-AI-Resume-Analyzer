import { NavLink, useNavigate } from "react-router-dom";

import {
  FiHome,
  FiUpload,
  FiBarChart2,
  FiUser,
  FiClock,
  FiLogOut,
} from "react-icons/fi";

import useAuth from "../../hooks/useAuth";

const Sidebar = ({ setIsSidebarOpen }) => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    logout();

    navigate("/login");
  };

  const handleLinkClick = () => {
    if (setIsSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  const linkClass = ({ isActive }) =>
    `
      flex
      items-center
      gap-3

      px-4
      py-3

      rounded-2xl

      font-medium

      transition-all

      ${isActive ? ` bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 ` : ` text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 `}
    `;

  return (
    <aside
      className="
           w-full
    h-full

    overflow-y-auto

    bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800

    border-r
    
    transition-colors
duration-300
    px-6
    py-8

    flex
    flex-col
      "
    >
      {/* Logo */}
      <div>
        <h1
          className="
            text-3xl
            font-black
            tracking-tight
          "
        >
          Resu
          <span className="text-indigo-600">Lens</span>
        </h1>

        <p
          className="
            mt-2
            text-sm
            text-gray-500 dark:text-gray-400
          "
        >
          AI Resume Analyzer
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-12">
        <ul className="space-y-3">
          <li>
            <NavLink
              to="/dashboard"
              end
              className={linkClass}
              onClick={handleLinkClick}
            >
              <FiHome className="text-lg" />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/upload"
              className={linkClass}
              onClick={handleLinkClick}
            >
              <FiUpload className="text-lg" />
              Upload Resume
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/analysis"
              className={linkClass}
              onClick={handleLinkClick}
            >
              <FiBarChart2 className="text-lg" />
              Analysis
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/history"
              className={linkClass}
              onClick={handleLinkClick}
            >
              <FiClock className="text-lg" />
              History
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/dashboard/profile"
              className={linkClass}
              onClick={handleLinkClick}
            >
              <FiUser className="text-lg" />
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Bottom */}
      <div className="mt-auto">
        <div
          className="
            p-4

            rounded-3xl

            bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700
          "
        >
          <h3
            className="font-semibold text-gray-900
    dark:text-white"
          >
            {user?.name}
          </h3>

          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-400

    break-all"
          >
            {user?.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="
            mt-5

            w-full

            flex
            items-center
            justify-center
            gap-3

            px-4
            py-3

            rounded-2xl

            bg-red-50 dark:bg-red-500/10 text-red-500 hover:bg-red-100 dark:hover:bg-red-500/20

            font-medium

            

            transition-all

            cursor-pointer
          "
        >
          <FiLogOut className="text-lg" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
