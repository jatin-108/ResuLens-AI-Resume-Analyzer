import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiCheckCircle, FiTrendingUp, FiZap } from "react-icons/fi";

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-[#fafafa]
        dark:bg-gray-950

        min-h-[90vh]

        transition-colors
        duration-300
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          top-20
          right-20

          w-[400px]
          h-[400px]

          bg-indigo-100
          dark:bg-indigo-500/20

          rounded-full

          blur-[120px]
        "
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative z-20"
          >
            <span
              className="
                inline-flex

                px-5
                py-2

                rounded-full

                bg-indigo-100
                dark:bg-indigo-500/20

                text-indigo-600

                text-sm
                font-medium
              "
            >
              AI-Powered Resume Analysis
            </span>

            <h1
              className="
                mt-8

                text-5xl
                md:text-6xl
                xl:text-7xl

                font-bold

                leading-[1.05]

                tracking-tight

                text-gray-900
                dark:text-white
              "
            >
              Land More Interviews with
              <span className="text-indigo-600">
                {" "}
                AI-Powered Resume Analysis
              </span>
            </h1>

            <p
              className="
                mt-8

                text-lg

                text-gray-500
                dark:text-gray-400

                leading-8

                max-w-xl
              "
            >
              Upload your resume and receive ATS scores, skill gap analysis and
              personalized AI recommendations to maximize your chances.
            </p>

            <div className="mt-10">
              <Link to="/register">
                <motion.button
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className="
                    px-8
                    py-4

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

                    relative
                    z-30
                  "
                >
                  Analyze Resume
                </motion.button>
              </Link>
            </div>

            <div className="mt-8 text-gray-500 dark:text-gray-400">
              Trusted by Developers and Students
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            {/* Main Card */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                relative

                w-full
                max-w-lg

                rounded-3xl

                border
                border-gray-200
                dark:border-gray-800

                bg-white
                dark:bg-gray-900

                p-8

                shadow-2xl

                z-0

                transition-colors
                duration-300
              "
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Resume.pdf
              </h3>

              <div className="mt-5 space-y-3">
                <div className="h-3 rounded bg-gray-800 dark:bg-gray-200" />
                <div className="h-3 rounded bg-gray-500" />
                <div className="h-3 rounded bg-gray-300 dark:bg-gray-700 w-3/4" />
              </div>

              <div className="mt-10 flex justify-center">
                <div className="h-44 w-44 rounded-full bg-[conic-gradient(#4f46e5_86%,#e5e7eb_0)] flex items-center justify-center">
                  <div className="h-32 w-32 rounded-full bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                      86%
                    </h2>

                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      ATS Score
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ATS Card */}
            <motion.div
              {...floatingAnimation}
              className="
                hidden
                lg:block

                absolute
                top-8
                -right-8

                bg-white
                dark:bg-gray-900

                border
                border-gray-200
                dark:border-gray-800

                rounded-3xl

                p-5

                shadow-xl

                transition-colors
                duration-300
              "
            >
              <div className="flex items-center gap-3">
                <FiTrendingUp className="text-indigo-600 text-xl" />

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ATS Score
                  </p>

                  <h3 className="font-bold text-xl text-gray-900 dark:text-white">
                    86%
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              {...floatingAnimation}
              className="
                hidden
                lg:block

                absolute
                bottom-0
                -left-8

                bg-white
                dark:bg-gray-900

                border
                border-gray-200
                dark:border-gray-800

                rounded-3xl

                p-5

                shadow-xl

                transition-colors
                duration-300
              "
            >
              <div className="space-y-2 text-gray-900 dark:text-white">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-green-500" />
                  React.js
                </div>

                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-green-500" />
                  Node.js
                </div>

                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-green-500" />
                  MongoDB
                </div>
              </div>
            </motion.div>

            {/* Suggestion */}
            <motion.div
              {...floatingAnimation}
              className="
                hidden
                xl:block

                absolute
                top-1/2
                -left-16

                bg-white
                dark:bg-gray-900

                border
                border-gray-200
                dark:border-gray-800

                rounded-3xl

                p-5

                shadow-xl

                transition-colors
                duration-300
              "
            >
              <div className="flex items-center gap-3">
                <FiZap className="text-yellow-500 text-xl" />

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Suggestion
                  </p>

                  <p className="font-semibold text-gray-900 dark:text-white">
                    Improve keywords
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
