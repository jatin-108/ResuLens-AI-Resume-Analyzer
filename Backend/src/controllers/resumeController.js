import { extractTextFromPDF } from "../services/pdfService.js";
import { analyzeResumeWithGroq } from "../services/groqService.js";
import Analysis from "../models/Analysis.js";

export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // Extract text from PDF buffer
    const extractedText = await extractTextFromPDF(req.file.buffer);

    // Analyze resume using Groq
    const analysis = await analyzeResumeWithGroq(extractedText);

    // Save analysis to MongoDB
    await Analysis.create({
      user: req.user._id,
      resumeName: req.file.originalname,
      atsScore: analysis.atsScore,
      strengths: analysis.strengths,
      weaknesses: analysis.weaknesses,
      suggestions: analysis.suggestions,
    });

    return res.status(200).json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error("RESUME ERROR:", error);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to analyze resume",
    });
  }
};
