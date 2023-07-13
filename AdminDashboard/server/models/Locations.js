import mongoose from "mongoose";

// Location Schema
const LocationSchema = new mongoose.Schema(
  {
    
    loc: String,
    slot_no:String,
    v_type: String,
    
  },
 );

const Location = mongoose.model("Locations", LocationSchema);

export default Location;
