import express from "express";
import {
  createTracking,
  updateTracking,
} from "../controllers/Tracking.js";

const router = express.Router();

router.post("/", createTracking);
router.patch("/:id", updateTracking);
export default router;
