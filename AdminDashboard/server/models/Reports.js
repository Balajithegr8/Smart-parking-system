import mongoose from "mongoose";
const Schema = mongoose.Schema;
// Location Schema
const ReportSchema = new Schema(
  {
    email: String,
    licence_no: String,
    loc: String,
    slot_no:String,
    v_type: String,
    entry_time: String,
    exit_time: String,
    reason: String,
    
  },
 );

const Report = mongoose.model("Reports", ReportSchema);

export default Report;
