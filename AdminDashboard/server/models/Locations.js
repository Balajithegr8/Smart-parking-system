import mongoose from "mongoose";
const Schema = mongoose.Schema;
// Location Schema
const LocationSchema = new mongoose.Schema(
  {
    name: String,
    licence_no: String,
    loc: String,
    slot_no:String,
    v_type: String,
    booked: String,
    entry_time: String,
    exit_time: String,
    
  },
 );

const Location = mongoose.model("Locations", LocationSchema);

export default Location;
