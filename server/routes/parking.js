import express from "express";
import auth from "../middleware/auth.js";
import { updateParkingStatus, getParkingStatus } from "../controller/parkingcontroller.js";

const router = express.Router();
// TODO: add auth middleware as param
router.patch("/:id", updateParkingStatus);
router.get("/", getParkingStatus);

export default router;
