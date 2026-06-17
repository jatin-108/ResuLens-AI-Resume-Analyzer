import express from "express";

import {
  getAnalysisHistory,
  getAnalysisById,
  getLatestAnalysis,
  getDashboardStats,
} from "../controllers/analysisController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/history", protect, getAnalysisHistory);
router.get("/latest", protect, getLatestAnalysis);
router.get("/dashboard", protect, getDashboardStats);
router.get("/:id", protect, getAnalysisById);

export default router;
