import express from "express";
import {
  getAllCar,
  getCarById,
} from "../controllers/Car.js";

const router = express.Router();

router.get("/", getAllCar);
router.get("/:id", getCarById);
export default router;
