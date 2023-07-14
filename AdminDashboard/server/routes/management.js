import express from "express";

import { getAdmins, getUserPerformance, getCCTVCameras } from "../controllers/management.js";

const router = express.Router();

// Routes
router.get("/cameras", getCCTVCameras);
//router.get("/cctv", getCCTV);
router.get("/admins", getAdmins);
router.get("/performance/:id", getUserPerformance);

export default router;
