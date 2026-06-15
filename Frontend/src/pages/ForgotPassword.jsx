import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { forgotPassword } from "../services/authService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }

    try {
      setLoading(true);

      // Future Backend API
      // await forgotPassword(email);
      const data = await forgotPassword(email);

      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        min-h-screen

        bg-[#fafafa]
        dark:bg-gray-950

        flex
        items-center
        justify-center

        px-6
        py-10

        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
        {/* LEFT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.7,
          }}
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
            Forgot Password 🔐
          </span>

          <h1
            className="
              mt-8

              text-5xl

              font-bold

              tracking-tight

              text-gray-900
              dark:text-white
            "
          >
            Reset Your
            <span className="text-indigo-600"> Password</span>
          </h1>

          <p
            className="
              mt-6

              text-lg

              leading-8

              text-gray-500
              dark:text-gray-400
            "
          >
            Enter your email address and we'll send you a password reset link.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            <div>
              <label
                className="
                  block

                  mb-3

                  font-medium

                  text-gray-900
                  dark:text-white
                "
              >
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="
                  w-full

                  px-5
                  py-4

                  rounded-2xl

                  border
                  border-gray-200
                  dark:border-gray-700

                  bg-white
                  dark:bg-gray-900

                  text-gray-900
                  dark:text-white

                  outline-none

                  focus:ring-4
                  focus:ring-indigo-100

                  transition-all
                "
              />
            </div>

            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              disabled={loading}
              className="
                w-full

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
              {loading ? "Sending Reset Link..." : "Send Reset Link"}
            </motion.button>

            <p
              className="
                text-center

                text-gray-500
                dark:text-gray-400
              "
            >
              Remember your password?{" "}
              <Link
                to="/login"
                className="
                  text-indigo-600

                  font-semibold
                "
              >
                Sign In
              </Link>
            </p>
          </form>
        </motion.div>

        {/* RIGHT */}
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
            duration: 0.7,
          }}
          className="
            hidden
            lg:flex

            justify-center
          "
        >
          <div
            className="
              w-full

              max-w-md

              rounded-3xl

              border
              border-gray-200
              dark:border-gray-800

              bg-white
              dark:bg-gray-900

              p-10

              shadow-2xl
            "
          >
            <h2
              className="
                text-3xl

                font-bold

                text-gray-900
                dark:text-white
              "
            >
              Secure Recovery
            </h2>

            <p
              className="
                mt-5

                leading-8

                text-gray-500
                dark:text-gray-400
              "
            >
              Your account security is important to us. We'll send a secure
              password reset link directly to your email.
            </p>

            <div
              className="
                mt-10

                rounded-3xl

                bg-indigo-100
                dark:bg-indigo-500/20

                p-8
              "
            >
              <h3 className="font-bold text-indigo-600">
                🔒 Password Recovery
              </h3>

              <p
                className="
                  mt-4

                  text-sm

                  text-gray-600
                  dark:text-gray-300
                "
              >
                Reset links expire after a limited time for additional security.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForgotPassword;
