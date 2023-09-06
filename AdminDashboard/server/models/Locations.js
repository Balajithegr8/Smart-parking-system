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
    entry_time:Date,
    actual_entry_time:Date,
    exit_time:Date,
    actual_exit_time:Date,
    rule_breaker:String,
    Fine:Number,
  },
 );

const Location = mongoose.model("Locations", LocationSchema);

export default Location;
