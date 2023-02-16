import express from "express";
import MenuItem from "../models/menu.js";

const router = express.Router();

export const getMenuItems = async (req, res) => {
  try {
    const menuItem = await MenuItem.find({});
    // console.log(MenuItem);
    res.status(200).json(menuItem);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createMenuItem = async (req, res) => {
    const post = req.body;
    // console.log(req.userId)
    const newMenuItem = new MenuItem({
      ...post,
      creator: req.userId,
    });
  
    try {
      await newMenuItem.save();
      res.status(201).json({ message: "Menu Item created successfully!" });
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
  
  export default router;
