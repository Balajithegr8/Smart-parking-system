import mongoose from "mongoose";

// Product Schema
const CCTVSchema = new mongoose.Schema(
  {
    date: String,
    duration:String,
  },
 );

const CCTV = mongoose.model("CCTV", CCTVSchema);

export default CCTV;