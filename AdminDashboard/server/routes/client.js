import express from "express";

import {
  getCustomers,
  getTransactions,
  getGeography,
  getSlots,
  getmobuser,
  getLocations,
  getProducts,
  getRealtime,
  getmobloc,
  getmobreports,
  getreservations,
  getpastbookings,
  gettoday,
  getallreservations,

} from "../controllers/client.js";

const router = express.Router();

// Routes

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/slots", getSlots);
router.get("/locations", getLocations);
router.get("/transactions", getTransactions);
router.get("/occupancy", getGeography);
router.get("/realtime", getRealtime);
router.get("/mobuser/:email", getmobuser);
router.get("/mobloc/:email", getmobloc);
router.get("/mobreports/:email", getmobreports);
router.get("/reservation/:email", getreservations);
router.get("/allreservation", getallreservations);
router.get("/pastbookings/:email", getpastbookings);
router.get("/today/:email", gettoday);

export default router;
