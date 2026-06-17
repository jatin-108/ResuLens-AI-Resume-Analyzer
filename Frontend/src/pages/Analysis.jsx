import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getLatestAnalysis } from "../services/analysisService";

import {
  FiCheckCircle,
  FiXCircle,
  FiTrendingUp,
  FiAward,
  FiAlertCircle,
  FiZap,
} from "react-icons/fi";

const Analysis = () => {
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestAnalysis = async () => {
      try {
        const data = await getLatestAnalysis();

        setAnalysis(data.analysis);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestAnalysis();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-24 text-gray-500">Loading analysis...</div>
    );
  }

  if (!analysis) {
    return (
      <div className="text-center mt-24">
        <h2 className="text-4xl font-bold">No Analysis Found</h2>

        <p className="mt-4 text-gray-500 dark:text-gray-400">
          Upload a resume to generate ATS insights.
        </p>
      </div>
    );
  }

  const scoreColor =
    analysis.atsScore >= 90
      ? "bg-green-500"
      : analysis.atsScore >= 70
        ? "bg-blue-500"
        : analysis.atsScore >= 50
          ? "bg-yellow-500"
          : "bg-red-500";

  return (
    <section className="max-w-7xl mx-auto ">
      {/* Header */}
      <div>
        <h1
          className="
            text-4xl
            lg:text-5xl
            font-bold
            tracking-tight
          "
        >
          Resume
          <span className="text-indigo-600"> Analysis Report</span>
        </h1>

        <p
          className="
    mt-4
    text-lg

    text-gray-500
    dark:text-gray-400

    transition-colors
    duration-300
  "
        >
          AI-powered ATS insights and recommendations.
        </p>
      </div>

      {/* Stats */}
      <div
        className="
          mt-12
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-6
        "
      >
        {/* ATS Score */}
        <motion.div
          whileHover={{
            y: -5,
          }}
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
          <div
            className="
              h-14
              w-14
              rounded-2xl
              bg-indigo-100
              flex
              items-center
              justify-center
            "
          >
            <FiAward
              className="
                text-2xl
                text-indigo-600
              "
            />
          </div>

          <h3
            className="
              mt-6
              text-gray-500
dark:text-gray-400
              font-medium
            "
          >
            ATS Score
          </h3>

          <h2
            className="
              mt-3
              text-4xl
sm:text-5xl
              font-bold
              text-indigo-600
            "
          >
            {analysis.atsScore}%
          </h2>
        </motion.div>

        {/* Strengths */}
        <motion.div
          whileHover={{
            y: -5,
          }}
          className="
            bg-white
dark:bg-gray-900

border
border-gray-200
dark:border-gray-800

transition-colors
duration-300
            rounded-[32px]
            p-8
            shadow-sm
          "
        >
          <div
            className="
              h-14
              w-14
              rounded-2xl
              bg-green-100
              flex
              items-center
              justify-center
            "
          >
            <FiCheckCircle
              className="
                text-2xl
                text-green-600
              "
            />
          </div>

          <h3
            className="
              mt-6
              text-gray-500
dark:text-gray-400
              font-medium
            "
          >
            Strengths
          </h3>

          <h2
            className="
              mt-3
              text-4xl
sm:text-5xl
              font-bold
              text-green-600
            "
          >
            {analysis.strengths?.length || 0}
          </h2>
        </motion.div>

        {/* Weaknesses */}
        <motion.div
          whileHover={{
            y: -5,
          }}
          className="
            bg-white
dark:bg-gray-900

border
border-gray-200
dark:border-gray-800

transition-colors
duration-300
            rounded-[32px]
            p-8
            shadow-sm
          "
        >
          <div
            className="
              h-14
              w-14
              rounded-2xl
              bg-red-100
              flex
              items-center
              justify-center
            "
          >
            <FiAlertCircle
              className="
                text-2xl
                text-red-600
              "
            />
          </div>

          <h3
            className="
              mt-6
                            text-gray-500
dark:text-gray-400
              font-medium
            "
          >
            Weaknesses
          </h3>

          <h2
            className="
              mt-3
              text-4xl
sm:text-5xl
              font-bold
              text-red-600
            "
          >
            {analysis.weaknesses?.length || 0}
          </h2>
        </motion.div>
      </div>

      {/* ATS Performance */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
  mt-8

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
        <div className="flex items-center gap-3">
          <FiTrendingUp
            className="
              text-2xl
              text-indigo-600
            "
          />

          <h2
            className="
               text-xl
    sm:text-2xl

    font-bold
            "
          >
            ATS Performance
          </h2>
        </div>

        <div className="mt-8">
          <div
            className=" flex
    items-center
    justify-between

    gap-4

    mb-3"
          >
            <span className="font-medium">Resume Score</span>

            <span className="font-bold">{analysis.atsScore}%</span>
          </div>

          <div
            className=" h-4

    bg-gray-200
    dark:bg-gray-800

    rounded-full

    overflow-hidden

    transition-colors
    duration-300"
          >
            <div
              className={`${scoreColor} h-full transition-all rounded-full duration-1000`}
              style={{
                width: `${analysis.atsScore}%`,
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Strengths & Weaknesses */}
      <div
        className="
           mt-8

  grid
  grid-cols-1
  lg:grid-cols-2

  gap-6
  lg:gap-8
        "
      >
        {/* Strengths */}
        <motion.div
          whileHover={{
            y: -5,
          }}
          className="
            bg-white
  dark:bg-gray-900

  border
  border-gray-200
  dark:border-gray-800

  rounded-[32px]

  p-6
  sm:p-8

  shadow-sm

  transition-colors
  duration-300
          "
        >
          <div className="flex items-center gap-3">
            <FiCheckCircle
              className="
                text-2xl
                text-green-600
              "
            />

            <h2
              className="
                text-xl
sm:text-2xl
                font-bold
                text-green-600
              "
            >
              Strengths
            </h2>
          </div>

          <ul className="mt-8 space-y-5">
            {analysis.strengths?.map((item, index) => (
              <li
                key={index}
                className="
                    flex
                    items-start
                    gap-3
                  "
              >
                <FiCheckCircle
                  className="
                      mt-1
                      shrink-0
                      text-green-600
                    "
                />

                <span
                  className="
    break-words
    leading-7
  "
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Weaknesses */}
        <motion.div
          whileHover={{
            y: -5,
          }}
          className="
            bg-white
dark:bg-gray-900

border
border-gray-200
dark:border-gray-800

transition-colors
duration-300
            rounded-[32px]
            p-6
sm:p-8
            shadow-sm
          "
        >
          <div className="flex items-center gap-3">
            <FiXCircle
              className="
                text-2xl
                text-red-600
              "
            />

            <h2
              className="
                text-xl
sm:text-2xl
                font-bold
                text-red-600
              "
            >
              Weaknesses
            </h2>
          </div>

          <ul className="mt-8 space-y-5">
            {analysis.weaknesses?.map((item, index) => (
              <li
                key={index}
                className="
                    flex
                    items-start
                    gap-3
                  "
              >
                <FiXCircle
                  className="
                      mt-1
                      shrink-0
                      text-red-600
                    "
                />

                <span
                  className="
    break-words
    leading-7
  "
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Suggestions */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
           mt-8

  bg-white
  dark:bg-gray-900

  border
  border-gray-200
  dark:border-gray-800

  rounded-[32px]

  p-6
  sm:p-8

  shadow-sm

  transition-colors
  duration-300
        "
      >
        <div className="flex items-center gap-3">
          <FiZap
            className="
              text-2xl
              text-yellow-500
            "
          />

          <h2
            className="
              text-xl
    sm:text-2xl
              font-bold
            "
          >
            Improvement Suggestions
          </h2>
        </div>

        <ul className="mt-8 space-y-5">
          {analysis.suggestions?.map((item, index) => (
            <li
              key={index}
              className="
                  flex
                  items-start
                  gap-3
                "
            >
              <FiZap
                className="
                    mt-1
                    shrink-0
                    text-yellow-500
                  "
              />

              <span
                className="
    break-words
    leading-7
  "
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Analysis;
