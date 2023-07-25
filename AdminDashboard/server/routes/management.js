import express from "express";

import { getFootage, getAdmins, getUserPerformance, getCCTVCameras } from "../controllers/management.js";

const router = express.Router();

// Routes
router.get("/cameras", getCCTVCameras);
router.get("/footages", getFootage);
router.get("/admins", getAdmins);
router.get("/performance/:id", getUserPerformance);

export default router;
