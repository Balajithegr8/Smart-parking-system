import mongoose from "mongoose";

// Slot Schema
const SlotSchema = new mongoose.Schema(
  {
    
    loc: String,
    slot_no:String,
    v_type: String,
    
  },
 );

const Slot = mongoose.model("Slots", SlotSchema);

export default Slot;
