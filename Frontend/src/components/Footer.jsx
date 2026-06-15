import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer
      className="
        bg-[#fafafa]
        dark:bg-gray-950

        border-t
        border-gray-200
        dark:border-gray-800

        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-16">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="
                text-3xl
                font-black
                tracking-tight

                text-gray-900
                dark:text-white
              "
            >
              Resu
              <span className="text-indigo-600">Lens</span>
            </Link>

            <p
              className="
                mt-6

                text-gray-500
                dark:text-gray-400

                leading-7

                max-w-sm
              "
            >
              AI-powered resume analysis platform helping developers and
              students land more interviews.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3
              className="
                text-lg
                font-semibold

                text-gray-900
                dark:text-white
              "
            >
              Product
            </h3>

            <div className="mt-6 space-y-4">
              <ScrollLink
                to="features"
                smooth
                duration={600}
                offset={-80}
                className="
                  block

                  cursor-pointer

                  text-gray-500
                  dark:text-gray-400

                  hover:text-gray-900
                  dark:hover:text-white

                  transition
                "
              >
                Features
              </ScrollLink>

              <ScrollLink
                to="how-it-works"
                smooth
                duration={600}
                offset={-80}
                className="
                  block

                  cursor-pointer

                  text-gray-500
                  dark:text-gray-400

                  hover:text-gray-900
                  dark:hover:text-white

                  transition
                "
              >
                How It Works
              </ScrollLink>
            </div>
          </div>

          {/* Account */}
          <div>
            <h3
              className="
                text-lg
                font-semibold

                text-gray-900
                dark:text-white
              "
            >
              Account
            </h3>

            <div className="mt-6 space-y-4">
              <Link
                to="/login"
                className="
                  block

                  text-gray-500
                  dark:text-gray-400

                  hover:text-gray-900
                  dark:hover:text-white

                  transition
                "
              >
                Login
              </Link>

              <Link
                to="/register"
                className="
                  block

                  text-gray-500
                  dark:text-gray-400

                  hover:text-gray-900
                  dark:hover:text-white

                  transition
                "
              >
                Register
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-20

            pt-8

            border-t
            border-gray-200
            dark:border-gray-800

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-6

            transition-colors
            duration-300
          "
        >
          <p
            className="
              text-sm

              text-gray-500
              dark:text-gray-400

              text-center
            "
          >
            © 2026{" "}
            <span className="font-semibold text-indigo-600">ResuLens</span>. All
            rights reserved.
          </p>

          <p
            className="
              text-sm

              text-gray-500
              dark:text-gray-400

              text-center
            "
          >
            Built with React • Node • MongoDB • Groq AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
