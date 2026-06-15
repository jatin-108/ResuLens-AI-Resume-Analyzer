import { motion } from "framer-motion";
import {
  FiUpload,
  FiClock,
  FiUser,
  FiFileText,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <section className="space-y-12">
      {/* Heading */}
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
          Welcome back,
          <span className="text-indigo-600"> {user?.name}</span> 👋
        </h1>

        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Track and optimize your resumes with AI-powered analysis.
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Total Uploads */}
        <motion.div
          whileHover={{ y: -5 }}
          className="
            bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-800
            rounded-3xl
            p-8
            shadow-sm
            transition-colors duration-300
          "
        >
          <div className="h-14 w-14 rounded-2xl bg-indigo-100 flex items-center justify-center">
            <FiFileText className="text-2xl text-indigo-600" />
          </div>

          <h3 className="mt-6 text-gray-500 dark:text-gray-400 font-medium">
            Total Uploads
          </h3>

          <h2 className="mt-3 text-4xl font-bold">12</h2>
        </motion.div>

        {/* Average ATS */}
        <motion.div
          whileHover={{ y: -5 }}
          className="
            bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-800
            rounded-3xl
            p-8
            shadow-sm
            transition-colors duration-300
          "
        >
          <div className="h-14 w-14 rounded-2xl bg-green-100 flex items-center justify-center">
            <FiTrendingUp className="text-2xl text-green-600" />
          </div>

          <h3 className="mt-6 text-gray-500 dark:text-gray-400 font-medium">
            Average ATS
          </h3>

          <h2 className="mt-3 text-4xl font-bold">84%</h2>
        </motion.div>

        {/* Best Score */}
        <motion.div
          whileHover={{ y: -5 }}
          className="
            bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-800
            rounded-3xl
            p-8
            shadow-sm
            transition-colors duration-300
          "
        >
          <div className="h-14 w-14 rounded-2xl bg-yellow-100 flex items-center justify-center">
            <FiAward className="text-2xl text-yellow-600" />
          </div>

          <h3 className="mt-6 text-gray-500 dark:text-gray-400 font-medium">
            Best Score
          </h3>

          <h2 className="mt-3 text-4xl font-bold">91%</h2>
        </motion.div>
      </div>

      {/* Bottom Grid */}
      <div className="grid xl:grid-cols-2 gap-8">
        {/* Recent Analyses */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-800
            rounded-3xl
            p-8
            shadow-sm
            transition-colors duration-300
          "
        >
          <h2 className="text-2xl font-bold">Recent Analyses</h2>

          <div className="mt-8 space-y-6">
            {[
              {
                name: "Resume.pdf",
                date: "Uploaded 2 days ago",
                score: "86%",
                color: "green",
              },
              {
                name: "React Resume.pdf",
                date: "Uploaded yesterday",
                score: "91%",
                color: "indigo",
              },
              {
                name: "Node Resume.pdf",
                date: "Uploaded today",
                score: "82%",
                color: "yellow",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.date}
                  </p>
                </div>

                <span
                  className={`
                    px-4 py-2 rounded-full font-semibold
                    ${
                      item.color === "green"
                        ? "bg-green-100 text-green-600"
                        : item.color === "indigo"
                          ? "bg-indigo-100 text-indigo-600"
                          : "bg-yellow-100 text-yellow-600"
                    }
                  `}
                >
                  {item.score}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            bg-white dark:bg-gray-900
            border border-gray-200 dark:border-gray-800
            rounded-3xl
            p-8
            shadow-sm
            transition-colors duration-300
          "
        >
          <h2 className="text-2xl font-bold">Quick Actions</h2>

          <div className="mt-8 space-y-5">
            <Link
              to="/dashboard/upload"
              className="
                flex items-center gap-4
                p-5 rounded-2xl
                bg-indigo-50 dark:bg-indigo-500/10
                hover:bg-indigo-100 dark:hover:bg-indigo-500/20
                transition-all duration-300
              "
            >
              <FiUpload className="text-2xl text-indigo-600" />

              <div>
                <h3 className="font-semibold">Upload Resume</h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Analyze a new resume
                </p>
              </div>
            </Link>

            <Link
              to="/dashboard/history"
              className="
                flex items-center gap-4
                p-5 rounded-2xl
                bg-gray-50 dark:bg-gray-800
                hover:bg-gray-100 dark:hover:bg-gray-700
                transition-all duration-300
              "
            >
              <FiClock className="text-2xl" />

              <div>
                <h3 className="font-semibold">View History</h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Check previous reports
                </p>
              </div>
            </Link>

            <Link
              to="/dashboard/profile"
              className="
                flex items-center gap-4
                p-5 rounded-2xl
                bg-gray-50 dark:bg-gray-800
                hover:bg-gray-100 dark:hover:bg-gray-700
                transition-all duration-300
              "
            >
              <FiUser className="text-2xl" />

              <div>
                <h3 className="font-semibold">Profile</h3>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Manage your account
                </p>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
