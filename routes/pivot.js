import express from "express";
import {
  getAllPivot,
  getPivotById,
} from "../controllers/Pivot.js";

const router = express.Router();

router.get("/", getAllPivot);
router.get("/:id", getPivotById);
export default router;
