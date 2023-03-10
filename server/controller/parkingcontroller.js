import express from "express";
import ParkingData from "../models/parking.js";
import mongoose from "mongoose";

// parking slotes are fixed. So we are hardcoding in database

const router = express.Router();

export const getParkingStatus = async (req, res) => {
  try {    
    const mentorData = await ParkingData.find({}); // all mentors should be able to see all skills
    res.status(200).json(mentorData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// TODO: complete this. Send the mongo id using the frontend... parking id is req?
export const updateParkingStatus = async (req, res) => {
  const { id } = req.params;
  const { occupied } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { occupied, _id: id };
  await ParkingData.findByIdAndUpdate(id, updatedPost, { new: true });
  res.json(updatedPost);
};

    
export default router;
