import mongoose from "mongoose";

const parkingSchema = mongoose.Schema({
    Parkingid: { type: String, required:true },
    occupied: { type: Boolean, required:true },
})

var ParkingStatus = mongoose.model("ParkingStatus", parkingSchema);

export default ParkingStatus;
