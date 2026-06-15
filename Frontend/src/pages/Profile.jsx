import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import {
  FiMail,
  FiFileText,
  FiAward,
  FiTrendingUp,
  FiCalendar,
} from "react-icons/fi";

import { getProfile } from "../services/profileService";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();

        setProfile(data.profile);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-24 text-gray-500 dark:text-gray-400">
        Loading profile...
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto">
      {/* Header */}
      <div>
        <h1
          className="
            text-4xl
            lg:text-5xl
            font-bold
            tracking-tight
          "
        >
          Account
          <span className="text-indigo-600"> Settings</span>
        </h1>

        <p
          className="
            mt-4
            text-lg

            text-gray-500
            dark:text-gray-400
          "
        >
          Manage your profile and resume statistics.
        </p>
      </div>

      {/* Profile Card */}
      <motion.div
        whileHover={{
          y: -5,
        }}
        className="
          mt-10

          bg-white
          dark:bg-gray-900

          border
          border-gray-200
          dark:border-gray-800

          rounded-[32px]

          p-6
          sm:p-8

          shadow-sm

          transition-colors
          duration-300
        "
      >
        <div
          className="
            flex
            flex-col
            sm:flex-row

            items-center
            gap-6
          "
        >
          {/* Avatar */}
          <div
            className="
              h-24
              w-24

              rounded-3xl

              bg-indigo-600

              text-white
              text-4xl
              font-bold

              flex
              items-center
              justify-center

              shrink-0
            "
          >
            {profile.name.charAt(0)}
          </div>

          {/* User Info */}
          <div className="text-center sm:text-left">
            <h2 className="text-3xl font-bold">{profile.name}</h2>

            <div
              className="
                mt-3

                flex
                items-center
                justify-center
                sm:justify-start

                gap-2

                text-gray-500
                dark:text-gray-400
              "
            >
              <FiMail />

              <span className="break-all">{profile.email}</span>
            </div>

            <div
              className="
                mt-3

                flex
                items-center
                justify-center
                sm:justify-start

                gap-2

                text-gray-500
                dark:text-gray-400
              "
            >
              <FiCalendar />

              <span>
                Member since{" "}
                {new Date(profile.memberSince).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Statistics */}
      <div
        className="
          mt-10

          grid
          md:grid-cols-2
          xl:grid-cols-3

          gap-6
        "
      >
        {/* Total Analyses */}
        <motion.div
          whileHover={{
            y: -5,
          }}
          className="
            bg-white
            dark:bg-gray-900

            border
            border-gray-200
            dark:border-gray-800

            rounded-[32px]

            p-8

            shadow-sm

            transition-colors
            duration-300
          "
        >
          <div
            className="
              h-14
              w-14

              rounded-2xl

              bg-indigo-100
              dark:bg-indigo-500/20

              flex
              items-center
              justify-center
            "
          >
            <FiFileText className="text-2xl text-indigo-600" />
          </div>

          <h3
            className="
              mt-6

              text-gray-500
              dark:text-gray-400

              font-medium
            "
          >
            Total Analyses
          </h3>

          <h2 className="mt-3 text-4xl sm:text-5xl font-bold">
            {profile.totalAnalyses}
          </h2>
        </motion.div>

        {/* Highest Score */}
        <motion.div
          whileHover={{
            y: -5,
          }}
          className="
            bg-white
            dark:bg-gray-900

            border
            border-gray-200
            dark:border-gray-800

            rounded-[32px]

            p-8

            shadow-sm

            transition-colors
            duration-300
          "
        >
          <div
            className="
              h-14
              w-14

              rounded-2xl

              bg-green-100
              dark:bg-green-500/20

              flex
              items-center
              justify-center
            "
          >
            <FiAward className="text-2xl text-green-600" />
          </div>

          <h3
            className="
              mt-6

              text-gray-500
              dark:text-gray-400

              font-medium
            "
          >
            Highest ATS Score
          </h3>

          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-green-600">
            {profile.highestScore}%
          </h2>
        </motion.div>

        {/* Average Score */}
        <motion.div
          whileHover={{
            y: -5,
          }}
          className="
            bg-white
            dark:bg-gray-900

            border
            border-gray-200
            dark:border-gray-800

            rounded-[32px]

            p-8

            shadow-sm

            transition-colors
            duration-300
          "
        >
          <div
            className="
              h-14
              w-14

              rounded-2xl

              bg-yellow-100
              dark:bg-yellow-500/20

              flex
              items-center
              justify-center
            "
          >
            <FiTrendingUp className="text-2xl text-yellow-600" />
          </div>

          <h3
            className="
              mt-6

              text-gray-500
              dark:text-gray-400

              font-medium
            "
          >
            Average ATS Score
          </h3>

          <h2 className="mt-3 text-4xl sm:text-5xl font-bold text-yellow-600">
            {profile.averageScore}%
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
