import mongoose from "mongoose";

// Product Schema
const footageSchema = new mongoose.Schema(
  {
    date: String,
    duration:String,
  },
 );

const footage = mongoose.model("footage", footageSchema);

export default footage;