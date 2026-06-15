import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { registerUser } from "../services/authService";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

    try {
      const data = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", data.token);

      localStorage.setItem("user", JSON.stringify(data.user));

      login(data.user);

      toast.success("Account created successfully");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
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
          duration: 0.6,
        }}
        className="w-full max-w-4xl"
      >
        <div
          className="
            bg-white
            dark:bg-gray-900

            border
            border-gray-200
            dark:border-gray-800

            rounded-[32px]

            shadow-[0_10px_40px_rgba(0,0,0,0.08)]

            p-10
            md:p-16

            transition-colors
            duration-300
          "
        >
          {/* Badge */}
          <span
            className="
              inline-flex

              px-4
              py-2

              rounded-full

              bg-indigo-100
              dark:bg-indigo-500/20

              text-indigo-600

              text-sm
              font-medium
            "
          >
            Get Started 🚀
          </span>

          {/* Heading */}
          <h1
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
            Create Your
            <span className="text-indigo-600"> Account</span>
          </h1>

          <p
            className="
              mt-5

              text-gray-500
              dark:text-gray-400

              leading-7
            "
          >
            Start analyzing resumes with AI and land more interviews.
          </p>

          <form onSubmit={handleSubmit} className="mt-12">
            {/* Row 1 */}
            <div
              className="
                flex
                flex-col
                md:flex-row

                gap-6
              "
            >
              {/* Full Name */}
              <div className="flex-1">
                <label
                  className="
                    block
                    mb-3

                    font-medium

                    text-gray-900
                    dark:text-white
                  "
                >
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="
                    w-full

                    px-5
                    py-4

                    rounded-2xl

                    border
                    border-gray-200
                    dark:border-gray-700

                    bg-white
                    dark:bg-gray-950

                    text-gray-900
                    dark:text-white

                    placeholder:text-gray-400

                    outline-none

                    transition-all
                    duration-300

                    focus:ring-4
                    focus:ring-indigo-100

                    focus:border-indigo-500
                  "
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex-1">
                <label
                  className="
                    block
                    mb-3

                    font-medium

                    text-gray-900
                    dark:text-white
                  "
                >
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="
                    w-full

                    px-5
                    py-4

                    rounded-2xl

                    border
                    border-gray-200
                    dark:border-gray-700

                    bg-white
                    dark:bg-gray-950

                    text-gray-900
                    dark:text-white

                    placeholder:text-gray-400

                    outline-none

                    transition-all
                    duration-300

                    focus:ring-4
                    focus:ring-indigo-100

                    focus:border-indigo-500
                  "
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
            </div>
            {/* Row 2 */}
            <div
              className="
                mt-6

                flex
                flex-col
                md:flex-row

                gap-6
              "
            >
              {/* Password */}
              <div className="flex-1">
                <label
                  className="
                    block
                    mb-3

                    font-medium

                    text-gray-900
                    dark:text-white
                  "
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    className="
                      w-full

                      px-5
                      py-4

                      rounded-2xl

                      border
                      border-gray-200
                      dark:border-gray-700

                      bg-white
                      dark:bg-gray-950

                      text-gray-900
                      dark:text-white

                      placeholder:text-gray-400

                      outline-none

                      transition-all
                      duration-300

                      focus:ring-4
                      focus:ring-indigo-100

                      focus:border-indigo-500
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

                {errors.password && (
                  <p className="mt-2 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div className="flex-1">
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
                      dark:bg-gray-950

                      text-gray-900
                      dark:text-white

                      placeholder:text-gray-400

                      outline-none

                      transition-all
                      duration-300

                      focus:ring-4
                      focus:ring-indigo-100

                      focus:border-indigo-500
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

                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-500">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              disabled={loading}
              className="
                mt-10

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
              {loading ? "Creating Account..." : "Create Account"}
            </motion.button>

            {/* Footer */}
            <p
              className="
                mt-8

                text-center

                text-gray-500
                dark:text-gray-400
              "
            >
              Already have an account?{" "}
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
        </div>
      </motion.div>
    </section>
  );
};

export default Register;
