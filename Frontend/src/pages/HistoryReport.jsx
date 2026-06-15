import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import jsPDF from "jspdf";

import {
  FiCheckCircle,
  FiXCircle,
  FiTrendingUp,
  FiZap,
  FiDownload,
} from "react-icons/fi";

import { getAnalysisById } from "../services/analysisService";

const HistoryReport = () => {
  const { id } = useParams();

  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const data = await getAnalysisById(id);

        if (mounted) {
          setAnalysis(data.analysis);
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, [id]);

  const downloadPDF = () => {
    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(20);
    doc.text("Resume Analysis Report", 20, y);

    y += 15;

    doc.setFontSize(12);
    doc.text(`Resume: ${analysis.resumeName}`, 20, y);

    y += 10;

    doc.text(`ATS Score: ${analysis.atsScore}%`, 20, y);

    y += 20;

    doc.setFontSize(16);
    doc.text("Strengths", 20, y);

    analysis.strengths.forEach((item) => {
      y += 10;

      doc.setFontSize(12);

      doc.text(`• ${item}`, 25, y);
    });

    y += 20;

    doc.setFontSize(16);
    doc.text("Weaknesses", 20, y);

    analysis.weaknesses.forEach((item) => {
      y += 10;

      doc.setFontSize(12);

      doc.text(`• ${item}`, 25, y);
    });

    y += 20;

    doc.setFontSize(16);
    doc.text("Suggestions", 20, y);

    analysis.suggestions.forEach((item) => {
      y += 10;

      doc.setFontSize(12);

      doc.text(`• ${item}`, 25, y);
    });

    doc.save("Resume_Report.pdf");
  };

  if (loading) {
    return (
      <div className="text-center mt-24 text-gray-500 dark:text-gray-400">
        Loading report...
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="text-center mt-24 text-gray-500 dark:text-gray-400">
        Analysis not found.
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto">
      {/* Header */}
      <div
        className="
          flex
          flex-col
          gap-6

          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
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
            <span className="text-indigo-600"> Report</span>
          </h1>

          <p
            className="
              mt-4
              text-lg

              text-gray-500
              dark:text-gray-400
            "
          >
            {analysis.resumeName}
          </p>
        </div>

        <motion.button
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          onClick={downloadPDF}
          className="
            w-full
            sm:w-fit

            flex
            items-center
            justify-center
            gap-3

            px-5
            py-3

            rounded-2xl

            bg-gray-900
            dark:bg-indigo-600

            text-white

            font-medium

            shadow-lg

            hover:bg-black
            dark:hover:bg-indigo-500

            transition-all
            duration-300

            cursor-pointer
          "
        >
          <FiDownload />
          Download PDF
        </motion.button>
      </div>

      {/* ATS Score Card */}
      <motion.div
        whileHover={{
          y: -5,
        }}
        className="
          mt-10

          bg-white
          dark:bg-gray-900

          border
          border-gray-200
          dark:border-gray-800

          rounded-[32px]

          p-6
          sm:p-8
          lg:p-10

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
            ATS Score
          </h2>
        </div>

        <h2
          className="
            mt-8

            text-5xl
            sm:text-6xl
            lg:text-7xl

            font-bold

            text-indigo-600
          "
        >
          {analysis.atsScore}%
        </h2>

        <div
          className="
            mt-8
            h-4

            bg-gray-200
            dark:bg-gray-800

            rounded-full

            overflow-hidden
          "
        >
          <div
            className="
              h-full
              bg-indigo-600

              rounded-full

              transition-all
              duration-1000
            "
            style={{
              width: `${analysis.atsScore}%`,
            }}
          />
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
          whileHover={{ y: -5 }}
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
            <FiCheckCircle className="text-2xl text-green-600" />

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
            {analysis.strengths.map((item, index) => (
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

                <span className="break-words leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Weaknesses */}
        <motion.div
          whileHover={{ y: -5 }}
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
            <FiXCircle className="text-xl sm:text-2xl text-red-600" />

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
            {analysis.weaknesses.map((item, index) => (
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

                <span className="break-words leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Suggestions */}
      <motion.div
        whileHover={{ y: -5 }}
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
          <FiZap className="text-xl sm:text-2xl text-yellow-500" />

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
          {analysis.suggestions.map((item, index) => (
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

              <span className="break-words leading-7">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default HistoryReport;
