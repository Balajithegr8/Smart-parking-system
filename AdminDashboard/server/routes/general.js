import express from "express";

import { getUser, 
         getDashboardStats,
         getProducts,
} from "../controllers/general.js";

const router = express.Router();

// Routes
router.get("/feedback", getProducts);
router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);

export default router;
