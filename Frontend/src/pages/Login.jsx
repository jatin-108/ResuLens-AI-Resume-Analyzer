import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiEye, FiEyeOff, FiCheckCircle } from "react-icons/fi";
import toast from "react-hot-toast";

import useAuth from "../hooks/useAuth";
import { loginUser } from "../services/authService";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

    try {
      const data = await loginUser(formData);

      // Clear previous user's analysis

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      login(data.user);

      toast.success("Login successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="min-h-screen bg-[#fafafa]  dark:bg-gray-950 overflow-hidden  transition-colors
    duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 min-h-screen grid lg:grid-cols-2 items-center gap-20">
        {/* LEFT */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span
            className="
              inline-flex
              px-5
              py-2
              rounded-full
              bg-indigo-100 dark:bg-indigo-500/20
              text-indigo-600
              text-sm
              font-medium
            "
          >
            Welcome Back
          </span>

          <h1
            className="
              mt-8
              text-5xl
              font-bold
              tracking-tight
              text-gray-900 dark:text-white
            "
          >
            Sign In To
            <span className="text-indigo-600"> ResuLens</span>
          </h1>

          <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 leading-8">
            Start analyzing resumes with AI and improve your chances of landing
            more interviews.
          </p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="mt-12 space-y-6">
            {/* Email */}
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
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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

  placeholder:text-gray-400

  outline-none

  focus:ring-4
  focus:ring-indigo-100

  transition-colors
"
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

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
  dark:bg-gray-900

  text-gray-900
  dark:text-white

  placeholder:text-gray-400

  outline-none

  focus:ring-4
  focus:ring-indigo-100

  transition-colors
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
                    text-gray-500 dark:text-gray-400
                    cursor-pointer
                  "
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              {errors.password && (
                <p className="mt-2 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              disabled={loading}
              className="
                w-full
                py-4
                rounded-2xl
                bg-gray-900
dark:bg-indigo-600
hover:bg-black
dark:hover:bg-indigo-500
transition-all
                text-white
                font-semibold
                shadow-lg
                cursor-pointer
              "
            >
              {loading ? "Signing In..." : "Sign In"}
            </motion.button>
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="
      text-sm
      text-indigo-600

      hover:text-indigo-500

      transition
    "
              >
                Forgot Password?
              </Link>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-center">
              Don't have an account?{" "}
              <Link to="/register" className="text-indigo-600 font-semibold">
                Register
              </Link>
            </p>
          </form>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="hidden lg:flex justify-center"
        >
          <div
            className="
  relative

  w-full
  max-w-md

  rounded-3xl

  border
  border-gray-200
  dark:border-gray-800

  bg-white
  dark:bg-gray-900

  p-8

  shadow-2xl

  transition-colors
  duration-300
"
          >
            <h3
              className="
    text-xl
    font-bold

    text-gray-900
    dark:text-white
  "
            >
              Resume.pdf
            </h3>

            <div className="mt-5 space-y-3">
              <div className="h-3 rounded bg-gray-800 dark:bg-gray-200"></div>
              <div className="h-3 rounded bg-gray-500 dark:bg-gray-100"></div>
              <div className="h-3 rounded bg-gray-300 dark:bg-gray-700 w-3/4"></div>
            </div>

            <div className="mt-10 flex justify-center">
              <div className="h-44 w-44 rounded-full bg-[conic-gradient(#4f46e5_86%,#e5e7eb_0)] flex items-center justify-center">
                <div
                  className="
    h-32
    w-32

    rounded-full

    bg-white
    dark:bg-gray-900

    flex
    flex-col
    items-center
    justify-center

    transition-colors
  "
                >
                  <h2
                    className="
    text-4xl
    font-bold

    text-gray-900
    dark:text-white
  "
                  >
                    86%
                  </h2>

                  <p
                    className="
    text-sm

    text-gray-500
    dark:text-gray-400
  "
                  >
                    ATS Score
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 space-y-3">
              <div
                className="
    mt-10
    space-y-3

    text-gray-900
    dark:text-white
  "
              >
                <FiCheckCircle className="text-green-500" />
                React.js
              </div>

              <div
                className="
    mt-10
    space-y-3

    text-gray-900
    dark:text-white
  "
              >
                <FiCheckCircle className="text-green-500" />
                Node.js
              </div>

              <div
                className="
    mt-10
    space-y-3

    text-gray-900
    dark:text-white
  "
              >
                <FiCheckCircle className="text-green-500" />
                MongoDB
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Login;
