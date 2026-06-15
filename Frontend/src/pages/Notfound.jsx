import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Notfound = () => {
  return (
    <section
      className="
        relative

        min-h-screen

        overflow-hidden

        bg-[#fafafa]
        dark:bg-gray-950

        flex
        items-center
        justify-center

        px-6

        transition-colors
        duration-300
      "
    >
      {/* Glow */}
      <div
        className="
          absolute

          -top-32
          -left-32

          h-96
          w-96

          rounded-full

          bg-indigo-100
          dark:bg-indigo-500/20

          blur-[140px]
        "
      />

      <div
        className="
          absolute

          -bottom-32
          -right-32

          h-96
          w-96

          rounded-full

          bg-purple-100
          dark:bg-purple-500/20

          blur-[140px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative

          z-10

          max-w-2xl

          text-center
        "
      >
        {/* 404 */}
        <h1
          className="
            text-[120px]
            md:text-[180px]

            font-black

            tracking-tight

            text-indigo-600
          "
        >
          404
        </h1>

        {/* Heading */}
        <h2
          className="
            text-4xl
            md:text-5xl

            font-bold

            tracking-tight

            text-gray-900
            dark:text-white
          "
        >
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p
          className="
            mt-6

            text-lg

            leading-8

            text-gray-500
            dark:text-gray-400
          "
        >
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div
          className="
            mt-12

            flex
            flex-col
            sm:flex-row

            items-center
            justify-center

            gap-5
          "
        >
          <Link to="/">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
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
              "
            >
              Go Home
            </motion.button>
          </Link>

          <Link to="/dashboard">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                px-8
                py-4

                rounded-2xl

                border
                border-gray-200
                dark:border-gray-700

                bg-white
                dark:bg-gray-900

                text-gray-900
                dark:text-white

                font-semibold

                hover:bg-gray-50
                dark:hover:bg-gray-800

                transition-all

                cursor-pointer
              "
            >
              Dashboard
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Notfound;
