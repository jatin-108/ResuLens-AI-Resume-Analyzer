import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiClock, FiFileText, FiAward, FiTrendingUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getHistory } from "../services/analysisService";

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await getHistory();
        setHistory(data.analyses);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const highestScore =
    history.length > 0 ? Math.max(...history.map((item) => item.atsScore)) : 0;

  const averageScore =
    history.length > 0
      ? Math.round(
          history.reduce((sum, item) => sum + item.atsScore, 0) /
            history.length,
        )
      : 0;

  if (loading) {
    return (
      <div className="text-center mt-24 text-gray-500 dark:text-gray-400">
        Loading history...
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
          Analysis
          <span className="text-indigo-600"> History</span>
        </h1>

        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          View and revisit your previous resume analyses.
        </p>
      </div>

      {/* Stats */}
      <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Total Analyses */}
        <motion.div
          whileHover={{ y: -5 }}
          className="
            bg-white
            dark:bg-gray-900

            border
            border-gray-200
            dark:border-gray-800

            rounded-[32px]
            p-8
            shadow-sm

            transition-colors
            duration-300
          "
        >
          <div className="h-14 w-14 rounded-2xl bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center">
            <FiFileText className="text-2xl text-indigo-600" />
          </div>

          <h3 className="mt-6 text-gray-500 dark:text-gray-400 font-medium">
            Total Analyses
          </h3>

          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            {history.length}
          </h2>
        </motion.div>

        {/* Highest Score */}
        <motion.div
          whileHover={{ y: -5 }}
          className="
            bg-white
            dark:bg-gray-900

            border
            border-gray-200
            dark:border-gray-800

            rounded-[32px]
            p-8
            shadow-sm

            transition-colors
            duration-300
          "
        >
          <div className="h-14 w-14 rounded-2xl bg-green-100 dark:bg-green-500/20 flex items-center justify-center">
            <FiAward className="text-2xl text-green-600" />
          </div>

          <h3 className="mt-6 text-gray-500 dark:text-gray-400 font-medium">
            Highest Score
          </h3>

          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-green-600">
            {highestScore}%
          </h2>
        </motion.div>

        {/* Average Score */}
        <motion.div
          whileHover={{ y: -5 }}
          className="
            bg-white
            dark:bg-gray-900

            border
            border-gray-200
            dark:border-gray-800

            rounded-[32px]
            p-8
            shadow-sm

            transition-colors
            duration-300
          "
        >
          <div className="h-14 w-14 rounded-2xl bg-yellow-100 dark:bg-yellow-500/20 flex items-center justify-center">
            <FiTrendingUp className="text-2xl text-yellow-600" />
          </div>

          <h3 className="mt-6 text-gray-500 dark:text-gray-400 font-medium">
            Average Score
          </h3>

          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-yellow-600">
            {averageScore}%
          </h2>
        </motion.div>
      </div>

      {/* Empty State */}
      {history.length === 0 ? (
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold">No Analysis Found</h2>

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Upload and analyze your first resume.
          </p>
        </div>
      ) : (
        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {history.map((item) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={item._id}
              onClick={() => navigate(`/dashboard/history/${item._id}`)}
              className="
                bg-white
                dark:bg-gray-900

                border
                border-gray-200
                dark:border-gray-800

                rounded-[32px]
                p-7
                shadow-sm

                cursor-pointer

                transition-colors
                duration-300
              "
            >
              {/* Top */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <FiFileText className="text-xl text-indigo-600 shrink-0" />

                  <h3 className="font-semibold truncate">{item.resumeName}</h3>
                </div>

                <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 font-semibold shrink-0">
                  {item.atsScore}%
                </span>
              </div>

              {/* Date */}
              <div className="mt-6 flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <FiClock />

                <span className="text-sm">
                  {new Date(item.createdAt).toLocaleString()}
                </span>
              </div>

              {/* Progress */}
              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    ATS Score
                  </span>

                  <span className="text-sm font-semibold">
                    {item.atsScore}%
                  </span>
                </div>

                <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{
                      width: `${item.atsScore}%`,
                    }}
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center gap-2 text-indigo-600 font-medium">
                <FiAward />

                <span>Resume Analysis Completed</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default History;
