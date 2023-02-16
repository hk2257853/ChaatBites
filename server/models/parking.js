import mongoose from "mongoose";

const parkingSchema = mongoose.Schema({
    occupied: { type: Boolean, required:true },
})

var ParkingStatus = mongoose.model("ParkingStatus", parkingSchema);

export default ParkingStatus;
