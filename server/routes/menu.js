import express from "express";
import auth from "../middleware/auth.js";
import { createMenuItem, getMenuItems } from "../controller/Menucontroller.js";

const router = express.Router();
// TODO: add auth middleware as param
router.post("/", createMenuItem);
router.get("/", getMenuItems);

export default router;
