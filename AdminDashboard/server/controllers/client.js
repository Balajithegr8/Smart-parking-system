import getCountryISO3 from "country-iso-2-to-3";
import _ from "lodash";
import axios from "axios";

// Models import
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
import Location from "../models/Locations.js";
import Report from "../models/Reports.js";
import Realtime from "../models/Realtime.js";
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import Reservations from "../models/Reservation.js";
import PastBookings from "../models/PastBookings.js";

const API_KEY = process.env.OPENWEATHER_API_KEY;
const CITY = process.env.CITY;

// Get Products
export const getProducts = async (_, res) => {
  try {
    const products = await Product.find();
    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });

        return {
          ...product._doc,
          stat,
        };
      })
    );

    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get Customers
export const getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getmobuser = async (req, res) => {
  try {
    const mobuser = await User.findOne({ email: req.params.email });
    res.status(200).json(mobuser);
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getmobloc = async (req, res) => {
  try {
    const mobloc = await Location.findOne({ email: req.params.email });
    res.status(200).json(mobloc);
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getmobreports = async (req, res) => {
  try {
    const mobreports = await Report.find({ email: req.params.email });
    res.status(200).json(mobreports);
  }
  catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get Slots
export const getSlots = async (req, res) => {
  try {
    const slots = await Location.find();
    res.status(200).json(slots);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get Reservations
export const getreservations = async (req, res) => {
  try {
    const reserve = await Reservations.find({ email: req.params.email });
    res.status(200).json(reserve);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getallreservations = async (req, res) => {
  try {
    const allreserve = await Reservations.find();
    res.status(200).json(allreserve);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Get PastBookings
export const getpastbookings = async (req, res) => {
  try {
    const pastbook = await PastBookings.find({ email: req.params.email });
    res.status(200).json(pastbook);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const gettoday = async (req, res) => {
  try {
    const today = await Location.find({ email: req.params.email });
    res.status(200).json(today);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRealtime = async (req, res) => {
  try {
    const realtime = await Realtime.find();
    res.status(200).json(realtime);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getWeatherCondition = async () => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;
    const response = await axios.get(url);
    console.log(response.data.weather[0].main);
    return response.data.weather[0].main; // Extracting main weather condition (e.g., Clear, Rain, Clouds)
  } catch (error) {
    console.error("Error fetching weather data:", error.message);
    return "Clear"; // Default to Clear if API call fails
  }
};

// Get Locations
export const getLocations = async (req, res) => {
  try {
    const weatherCondition = await getWeatherCondition(); // Fetch weather condition

    // **Weather-based price adjustment**
    let weatherPriceAdjustment = 0;
    switch (weatherCondition) {
      case "Clouds":
        weatherPriceAdjustment = 0.25;
        break;
      case "Rain":
        weatherPriceAdjustment = 1;
        break;
      case "Thunderstorm":
        weatherPriceAdjustment = 1.25;
        break;
      default:
        weatherPriceAdjustment = 0;
    }

    const locations = await Location.aggregate([
      {
        $group: {
          _id: "$loc",
          count: { $sum: 1 },
          slots: { $push: "$slot_no" },
          booked: { $sum: { $cond: [{ $eq: ["$booked", "yes"] }, 1, 0] } },
        }
      },
      {
        $project: {
          _id: 0,
          loc: "$_id",
          slot_no: {
            $cond: {
              if: { $eq: [{ $size: "$slots" }, 1] },
              then: "1",
              else: { $size: "$slots" }
            }
          },
          booked: 1,
        }
      }
    ]);

    // Apply weather-based pricing after aggregation
    locations.forEach(location => {
      location.currentPrice = 1 + (location.booked * 0.025) + weatherPriceAdjustment;
      console.log("Location:", location.loc, "Current Price:", location.currentPrice, "Weather:", weatherCondition);
    });

    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get Transactions

export const getTransactions = async (req, res) => {
  try {
    const customers = await Transaction.find();
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// export const getTransactions = async (req, res) => {
//   try {
//     // sort - { "field": "userId", sort: "desc" }
//     const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

//     // sanitize search
//     var safeSearch = _.escapeRegExp(search);

//     // Formatted sort - { userId: -1 }
//     const generateSort = () => {
//       const sortParsed = JSON.parse(sort);
//       const sortFormatted = {
//         [sortParsed.field]: sortParsed.sort == "asc" ? 1 : -1,
//       };

//       return sortFormatted;
//     };

//     // sort formatted
//     const sortFormatted = Boolean(sort) ? generateSort() : {};

//     // get transactions
//     const transactions = await Transaction.find({
//       $or: [
//         { cost: { $regex: new RegExp(safeSearch, "i") } },
//         { userId: { $regex: new RegExp(safeSearch, "i") } },
//       ],
//     })
//       .sort(sortFormatted)
//       .skip(page * pageSize)
//       .limit(pageSize);

//     // total transactions
//     const total = await Transaction.countDocuments({
//       name: { $regex: safeSearch, $options: "i" },
//     });

//     res.status(200).json({
//       transactions,
//       total,
//     });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

// Get Geography
export const getGeography = async (req, res) => {
  try {
    const users = await User.find();

    // Convert country ISO 2 -> ISO 3
    const mappedLocations = users.reduce((acc, { country }) => {
      const countryISO3 = getCountryISO3(country);
      if (!acc[countryISO3]) {
        acc[countryISO3] = 0;
      }

      acc[countryISO3]++;

      return acc;
    }, {});

    // format countries to match geography
    const formattedLocations = Object.entries(mappedLocations).map(
      ([country, count]) => {
        return { id: country, value: count };
      }
    );

    res.status(200).json(formattedLocations);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
