import express from "express";
import {
  getAllPlat,
  getPlatById,
} from "../controllers/Plat.js";

const router = express.Router();

router.get("/", getAllPlat);
router.get("/:id", getPlatById);
export default router;
