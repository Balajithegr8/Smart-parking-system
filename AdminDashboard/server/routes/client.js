import express from "express";

import {
  getProducts,
  getCustomers,
  getTransactions,
  getGeography,
  getSlots,
  getLocations,
} from "../controllers/client.js";

const router = express.Router();

// Routes
router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/slots", getSlots);
router.get("/locations", getLocations);
router.get("/transactions", getTransactions);
router.get("/occupancy", getGeography);

export default router;
