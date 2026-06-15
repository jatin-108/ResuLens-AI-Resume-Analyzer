import { useState } from "react";
import toast from "react-hot-toast";
import { FiUploadCloud, FiFileText, FiTrash2 } from "react-icons/fi";
import { motion } from "framer-motion";
import { uploadResume } from "../services/resumeService";
import { useNavigate } from "react-router-dom";
import useAnalysis from "../hooks/useAnalysis";

const Uploadresume = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setAnalysis } = useAnalysis();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      toast.error("Only PDF files are allowed");
      return;
    }

    setFile(selectedFile);
    toast.success("Resume selected successfully");
  };

  const handleAnalyze = async () => {
    try {
      if (!file) {
        toast.error("Please select a resume");
        return;
      }

      setLoading(true);

      const data = await uploadResume(file);

      setAnalysis(data.analysis);

      toast.success("Analysis completed successfully");

      navigate("/dashboard/analysis");
    } catch {
      toast.error("Resume analysis failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-5xl mx-auto">
      {/* Heading */}
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
          Upload Your
          <span className="text-indigo-600"> Resume</span>
        </h1>

        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Upload your resume and receive AI-powered ATS analysis and
          personalized recommendations.
        </p>
      </div>

      {/* Upload Area */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-12"
      >
        <input
          id="resume"
          type="file"
          accept=".pdf"
          hidden
          onChange={handleFileChange}
        />

        <label
          htmlFor="resume"
          className="
            h-80 sm:h-96

            border-2
            border-dashed

            border-indigo-300
            dark:border-indigo-500/30

            rounded-[32px]

            bg-white
            dark:bg-gray-900

            shadow-sm

            flex
            flex-col
            items-center
            justify-center

            cursor-pointer

            hover:border-indigo-600
            hover:bg-indigo-50

            dark:hover:bg-indigo-500/10

            transition-all
            duration-300
          "
        >
          <div
            className="
              h-24
              w-24

              rounded-3xl

              bg-indigo-100
              dark:bg-indigo-500/20

              flex
              items-center
              justify-center
            "
          >
            <FiUploadCloud className="text-5xl text-indigo-600" />
          </div>

          <h2 className="mt-8 text-3xl font-bold">Drag & Drop Resume</h2>

          <p className="mt-4 text-gray-500 dark:text-gray-400">
            or click to browse files
          </p>

          <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">
            PDF only • Max size 5 MB
          </p>
        </label>
      </motion.div>

      {/* Resume Preview */}
      {file && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            mt-10

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
              flex
              flex-col
              sm:flex-row

              gap-6

              sm:items-center
              sm:justify-between
            "
          >
            <div className="flex items-center gap-5">
              <div
                className="
                  h-16
                  w-16

                  rounded-2xl

                  bg-indigo-100
                  dark:bg-indigo-500/20

                  flex
                  items-center
                  justify-center
                "
              >
                <FiFileText className="text-3xl text-indigo-600" />
              </div>

              <div>
                <h3 className="text-xl font-bold break-all">{file.name}</h3>

                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  {(file.size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>

            <button
              onClick={() => setFile(null)}
              className="
                h-12
                w-12

                rounded-2xl

                bg-red-50
                dark:bg-red-500/10

                text-red-500

                flex
                items-center
                justify-center

                hover:bg-red-100
                dark:hover:bg-red-500/20

                transition-all
                duration-300

                cursor-pointer
              "
            >
              <FiTrash2 className="text-xl" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Analyze Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleAnalyze}
        disabled={!file || loading}
        className="
          mt-10

          w-full

          py-5

          rounded-[24px]

          bg-gray-900
          dark:bg-indigo-600

          text-white

          text-lg
          font-semibold

          shadow-lg

          hover:bg-black
          dark:hover:bg-indigo-500

          transition-all
          duration-300

          disabled:opacity-50
          disabled:cursor-not-allowed

          cursor-pointer
        "
      >
        {loading ? "Analyzing Resume..." : "Analyze Resume"}
      </motion.button>
    </section>
  );
};

export default Uploadresume;
