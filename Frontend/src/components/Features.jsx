import { motion } from "framer-motion";
import {
  FiBarChart2,
  FiCpu,
  FiTarget,
  FiAward,
  FiClock,
  FiDownload,
} from "react-icons/fi";

import { features } from "../data/features";

const iconMap = {
  chart: FiBarChart2,
  cpu: FiCpu,
  target: FiTarget,
  award: FiAward,
  clock: FiClock,
  download: FiDownload,
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.6,
    },
  }),
};

const Features = () => {
  return (
    <section
      id="features"
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
            Features
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
            Powerful Features for
            <span className="text-indigo-600"> Modern Job Seekers</span>
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
            Everything you need to optimize your resume and increase your
            chances of landing interviews.
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
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];

            return (
              <motion.div
                key={feature.title}
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
                  group

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
                      text-indigo-600
                      text-3xl
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
                  {feature.title}
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
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
