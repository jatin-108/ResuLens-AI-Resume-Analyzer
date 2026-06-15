import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import { resetPassword } from "../services/authService";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  // token is not used currently

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.password) {
      return toast.error("Password is required");
    }

    if (!formData.confirmPassword) {
      return toast.error("Confirm your password");
    }

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      setLoading(true);

      // Future backend
      // await resetPassword(token, formData.password);

      await resetPassword(token, formData.password);

      toast.success("Password reset successful");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to reset password");
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
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
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
            Create New Password 🔒
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
            Enter a new password to secure your account.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            {/* Password */}
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
                New Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter new password"
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

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute

                    right-5
                    top-1/2

                    -translate-y-1/2

                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
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
                Confirm Password
              </label>

              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
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

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="
                    absolute

                    right-5
                    top-1/2

                    -translate-y-1/2

                    text-gray-500
                    dark:text-gray-400
                  "
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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
              {loading ? "Updating Password..." : "Reset Password"}
            </motion.button>

            <p
              className="
                text-center

                text-gray-500
                dark:text-gray-400
              "
            >
              Back to{" "}
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

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
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
              Password Security
            </h2>

            <div
              className="
                mt-8

                space-y-5

                text-gray-500
                dark:text-gray-400
              "
            >
              <p>✔ Minimum 8 characters</p>

              <p>✔ Use uppercase letters</p>

              <p>✔ Include numbers and symbols</p>

              <p>✔ Keep your account secure</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResetPassword;
