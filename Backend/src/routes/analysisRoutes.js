import express from "express";

import {
  getAnalysisHistory,
  getAnalysisById,
} from "../controllers/analysisController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/history", protect, getAnalysisHistory);

router.get("/:id", protect, getAnalysisById);

export default router;
