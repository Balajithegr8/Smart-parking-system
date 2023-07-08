import mongoose from "mongoose";

// Product Schema
const CCTVSchema = new mongoose.Schema(
  {
    Date: String,
    Duration:String,
  },
 );

const CCTV = mongoose.model("CCTV", CCTVSchema);

export default CCTV;