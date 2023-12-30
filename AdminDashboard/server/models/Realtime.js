import mongoose from "mongoose";
const Schema = mongoose.Schema;
// Realtime Schema
const RealtimeSchema = new mongoose.Schema(
  {
    id:Number,
    empty:Boolean,
    
  },
 );

const Realtime = mongoose.model("Realtime", RealtimeSchema);

export default Realtime;