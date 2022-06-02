import express from "express";
import {
  getAllDriver,
  getDriverById,
} from "../controllers/Driver.js";

const router = express.Router();

router.get("/", getAllDriver);
router.get("/:id", getDriverById);
export default router;
