import express from "express";

import { getCCTV, getAdmins, getUserPerformance } from "../controllers/management.js";

const router = express.Router();

// Routes
router.get("/cctv", getCCTV);
router.get("/admins", getAdmins);
router.get("/performance/:id", getUserPerformance);

export default router;
