import Analysis from "../models/Analysis.js";

// Get Logged-in User's Analysis History
export const getAnalysisHistory = async (req, res) => {
  try {
    const analyses = await Analysis.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    return res.status(200).json({
      success: true,
      analyses,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch history",
    });
  }
};

// Get Single Analysis By ID
export const getAnalysisById = async (req, res) => {
  try {
    const analysis = await Analysis.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!analysis) {
      return res.status(404).json({
        success: false,
        message: "Analysis not found",
      });
    }

    return res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch analysis",
    });
  }
};
// Get Latest Analysis for Logged-in User
export const getLatestAnalysis = async (req, res) => {
  try {
    const analysis = await Analysis.findOne({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    if (!analysis) {
      return res.status(404).json({
        success: false,
        message: "No analysis found",
      });
    }

    return res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch latest analysis",
    });
  }
};
// Dashboard Stats
export const getDashboardStats = async (req, res) => {
  try {
    const analyses = await Analysis.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    const totalUploads = analyses.length;

    const averageScore =
      totalUploads > 0
        ? Math.round(
            analyses.reduce((sum, item) => sum + item.atsScore, 0) /
              totalUploads,
          )
        : 0;

    const bestScore =
      totalUploads > 0 ? Math.max(...analyses.map((item) => item.atsScore)) : 0;

    const recentAnalyses = analyses.slice(0, 3);

    return res.status(200).json({
      success: true,
      totalUploads,
      averageScore,
      bestScore,
      recentAnalyses,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard stats",
    });
  }
};
