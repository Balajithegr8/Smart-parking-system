import mongoose from "mongoose";

const cctvSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  resolution: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  lastRecordedFootage: {
    type: Date,
    required: true,
  },
});


const cameras = mongoose.model("cameras", cctvSchema);

export default cameras;