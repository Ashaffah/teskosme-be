import express from "express";
import {
  createTracking,
  updateTracking,
  getAllTracking,
  getTrackingById
} from "../controllers/Tracking.js";

const router = express.Router();

router.post("/", createTracking);
router.patch("/:id", updateTracking);
router.get("/", getAllTracking);
router.get("/:id", getTrackingById);
export default router;
