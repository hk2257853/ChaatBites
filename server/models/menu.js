import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    name: { type: String, required:true },
    image: { type: String, required:true },
    price: { type: Number, required:true },
    description: { type: String, required:true },
    // veg: { type: Boolean, required:true },
    creator: { type: String },
})

var MenuItem = mongoose.model("Menu", itemSchema);

export default MenuItem;
