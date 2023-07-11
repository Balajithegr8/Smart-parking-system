import mongoose from "mongoose";

// Models import
import CCTV from "../models/CCTV.js";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";

// Get CCTV
export const getCCTV = async (_, res) => {
  try {
    const cctv = await CCTV.find({ role: "cctv" }).select("-password");

    res.status(200).json(cctv);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

// Get Admins
export const getAdmins = async (_, res) => {
  try {
    const admins = await User.find({ role: { $in: ["admin", "guard","superadmin"] } }).select("-password");

    res.status(200).json(admins);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

// Get User Performance
export const getUserPerformance = async (req, res) => {
  try {
    const { id } = req.params;

    const userWithStats = await User.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } }, // Match user id
      {
        // Compare user id with affiliate stats table
        $lookup: {
          from: "affiliatestats",
          localField: "_id",
          foreignField: "userId",
          as: "affiliateStats",
        },
      },
      { $unwind: "$affiliateStats" }, // Flatten Array/Object
    ]);

    // sale transactions
    const saleTransactions = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map((id) => {
        return Transaction.findById(id);
      })
    );

    // filtered sale transactions
    const filteredSaleTransactions = saleTransactions.filter(
      (transaction) => transaction !== null
    );

    res
      .status(200)
      .json({ user: userWithStats[0], sales: filteredSaleTransactions });
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};
