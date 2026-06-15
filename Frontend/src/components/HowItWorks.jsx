import { motion } from "framer-motion";
import { FiUploadCloud, FiCpu, FiBarChart2 } from "react-icons/fi";

const steps = [
  {
    icon: FiUploadCloud,
    number: "01",
    title: "Upload Resume",
    description: "Upload your resume in PDF format securely and instantly.",
  },

  {
    icon: FiCpu,
    number: "02",
    title: "AI Analysis",
    description:
      "Our AI evaluates ATS compatibility, skills, formatting and content quality.",
  },

  {
    icon: FiBarChart2,
    number: "03",
    title: "Get Insights",
    description:
      "Receive ATS scores, personalized recommendations and actionable improvements.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: index * 0.2,
      duration: 0.7,
    },
  }),
};

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="
        py-28

        bg-[#fafafa]
        dark:bg-gray-950

        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
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
            How It Works
          </span>

          <h2
            className="
              mt-6

              text-4xl
              md:text-5xl

              font-bold

              tracking-tight

              text-gray-900
              dark:text-white
            "
          >
            Improve Your Resume in
            <span className="text-indigo-600"> Three Simple Steps</span>
          </h2>

          <p
            className="
              mt-6

              text-lg

              text-gray-500
              dark:text-gray-400

              leading-8
            "
          >
            Optimize your resume and increase your chances of landing more
            interviews with AI-powered analysis.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-20

            grid
            md:grid-cols-2
            lg:grid-cols-3

            gap-8
          "
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  relative

                  bg-white
                  dark:bg-gray-900

                  border
                  border-gray-200
                  dark:border-gray-800

                  rounded-3xl

                  p-8

                  shadow-sm

                  hover:shadow-2xl

                  transition-all
                  duration-300
                "
              >
                {/* Number */}
                <div
                  className="
                    absolute

                    top-6
                    right-6

                    text-5xl

                    font-bold

                    text-gray-100
                    dark:text-gray-800
                  "
                >
                  {step.number}
                </div>

                {/* Icon */}
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
                  <Icon
                    className="
                      text-3xl
                      text-indigo-600
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-8

                    text-2xl

                    font-semibold

                    text-gray-900
                    dark:text-white
                  "
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-5

                    text-gray-500
                    dark:text-gray-400

                    leading-7
                  "
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
