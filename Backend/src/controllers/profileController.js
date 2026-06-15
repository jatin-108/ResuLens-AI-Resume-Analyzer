import User from "../models/User.js";
import Analysis from "../models/Analysis.js";

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const analyses = await Analysis.find({
      user: req.user._id,
    });

    const totalAnalyses = analyses.length;

    const highestScore =
      analyses.length > 0
        ? Math.max(...analyses.map((item) => item.atsScore))
        : 0;

    const averageScore =
      analyses.length > 0
        ? Math.round(
            analyses.reduce((sum, item) => sum + item.atsScore, 0) /
              analyses.length,
          )
        : 0;

    return res.status(200).json({
      success: true,

      profile: {
        name: user.name,
        email: user.email,
        memberSince: user.createdAt,

        totalAnalyses,
        highestScore,
        averageScore,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch profile",
    });
  }
};
