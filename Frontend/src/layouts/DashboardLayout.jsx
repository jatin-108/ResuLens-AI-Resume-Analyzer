import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-64 shrink-0">
        <Sidebar />
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="
            fixed
            inset-0
            bg-black/40
            dark:bg-black/60
            z-40
            lg:hidden
          "
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`
    fixed
    inset-y-0
    left-0

    z-[45]

    w-64

    transition-transform
    duration-300

    lg:hidden

    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
      </div>

      {/* Main */}
      <div
        className="flex-1 min-w-0  transition-colors
    duration-300"
      >
        <div className={isSidebarOpen ? "hidden lg:block" : "block"}>
          <Topbar setIsSidebarOpen={setIsSidebarOpen} />
        </div>

        <main
          className="
            p-4
            sm:p-6
            lg:p-8
            transition-colors duration-300
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
