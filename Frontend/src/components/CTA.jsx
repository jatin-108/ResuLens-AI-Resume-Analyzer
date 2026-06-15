import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section
      className="
        bg-[#fafafa]
        dark:bg-gray-950

        py-32

        overflow-hidden

        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative

            overflow-hidden

            rounded-[40px]

            bg-gradient-to-br
            from-indigo-600
            to-indigo-800

            p-10
            md:p-14
            lg:p-20

            text-center

            shadow-2xl
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              -top-24
              -left-24

              h-72
              w-72

              rounded-full

              bg-white/10

              blur-[120px]
            "
          />

          <div
            className="
              absolute
              -bottom-24
              -right-24

              h-72
              w-72

              rounded-full

              bg-white/10

              blur-[120px]
            "
          />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <span
              className="
                inline-flex

                px-5
                py-2

                rounded-full

                bg-white/20

                text-white

                text-sm
                font-medium
              "
            >
              Start Today
            </span>

            <h2
              className="
                mt-8

                text-4xl
                md:text-5xl
                lg:text-6xl

                font-bold

                leading-tight

                text-white
              "
            >
              Ready To Improve Your Resume?
            </h2>

            <p
              className="
                mt-8

                text-lg

                leading-8

                text-indigo-100

                max-w-2xl

                mx-auto
              "
            >
              Upload your resume and receive ATS scores, skill gap analysis and
              AI-powered recommendations in seconds.
            </p>

            <Link to="/register">
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="
                  mt-12

                  px-8
                  py-4

                  rounded-2xl

                  bg-white

                  text-gray-900

                  font-semibold

                  shadow-xl

                  hover:shadow-2xl

                  transition-all

                  cursor-pointer
                "
              >
                Analyze Resume Now
              </motion.button>
            </Link>

            <p className="mt-10 text-indigo-200">
              ⭐ Trusted by Developers and Students
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
