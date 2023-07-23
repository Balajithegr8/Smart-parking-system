import { ObjectId } from "mongodb";
import mongoose from "mongoose";

// Transaction Schema
const TransactionSchema = new mongoose.Schema(
  {
    
    userId:String,
    cost: String,
    createdAt:Date,
    products:Array,

  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;

