import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import User from "./models/User.js";
import Location from "./models/Locations.js";
import sendmail from "./helpers/sendmail.js";
import Report from "./models/Reports.js";
import { runPythonScript } from "./helpers/pythonRunner.js";

// Rate Limiter
import { rateLimiter } from "./middlewares/rateLimiter.js";

// Routes imports
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";


// Data imports
/*
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import AffiliateStat from "./models/AffiliateStat.js";
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
  dataAffiliateStat,
} from "./data/index.js";
*/

// Configuration
dotenv.config();
const app = express();
app.use(express.json());
app.use(rateLimiter);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes Setup
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

const image = 'https://i.ibb.co/k5BVRkQ/DALL-E-2024-12-05-22-56-00-A-sleek-and-modern-logo-design-for-SPARK-a-smart-parking-system-The-logo.png'

// Mongoose Setup
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* 
        User.insertMany(dataUser);
        Product.insertMany(dataProduct);
        ProductStat.insertMany(dataProductStat);
        Transaction.insertMany(dataTransaction);
        OverallStat.insertMany(dataOverallStat);
        AffiliateStat.insertMany(dataAffiliateStat);
    */
  })
  .catch((error) => console.log(`${error} did not connect.`));


//routes

app.get("/health", (req, res) => {
  res.send("Server is up and running!");
});


app.post("/login", (req, res) => {

  const { email, password } = req.body

  User.findOne({ email: email })
    .then((user) => {

      if (user) {

        if (password === user.password && user.role === "user") {
          res.send({ message: "you are not allowed, Yowai mo" })
        }
        else if (password === user.password) {

          res.send({ message: "Login success", user: user })
        }
        else {
          res.send({ message: "password dint match" })
        }

      } else {

        res.send({ message: "User not registered" })

      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Server error" });
    });

})

app.post("/Register", (req, res) => {

  const { name, email, password, occupation = "Faculty", phoneNumber, transaction = [], role = "guard" } = req.body

  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        res.send({ message: "User Already registered" });
      } else {
        const newUser = new User({
          name,
          email,
          password,
          occupation,
          phoneNumber,
          transaction,
          role
        });
        newUser
          .save()
          .then(() => {
            res.send({ message: "Successfully Registered, Please login now. " });

          })
          .catch((err) => {
            console.error(err);
            res.status(500).send({ message: "Server error" });
          });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Server error" });
    });



});

app.post('/registeruser', async (req, res) => {
  const { name, email, password, occupation = "Guest", phoneNumber, transaction = [], role = "user" } = req.body;

  try {
    // Check if the user already exists
    const user = await User.findOne({ email: email });
    if (user) {
      return res.json({ message: 'User already exists', toastType: 'error' });
    }

    // Create and save the new user
    const newUser = new User({
      name,
      email,
      password,
      occupation,
      phoneNumber,
      transaction,
      role,
    });

    try {
      // Attempt to send the email
      await sendmail(email, name, image);
    } catch (err) {
      return res.json({ message: 'Please Enter Valid Email', toastType: 'error' });
    }

    // Respond with success message
    newUser.save();
    return res.json({ message: '🎉 User Created Successfully! Redirecting to login...', toastType: 'success' });

  } catch (err) {
    // Handle database or other unexpected errors
    console.error("Error registering user:", err.message);
    return res.status(500).json({ message: 'Error saving user', toastType: 'error' });
  }
});



app.post('/loginuser', async (req, res) => {

  const { email, password } = req.body
  User.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password && user.role === 'user') {
          return res.json({ message: '🎉 Login Successful! Redirecting to dashboard...', toastType: 'success' })
        }
        else {
          return res.json({ message: '❌ Login Failed. Incorrect password.', toastType: 'error' })

        }
      }
      else {
        return res.json({ message: '❌ Login Failed. User does not exist.', toastType: 'error' })
      }
    })

})


app.post("/slots", (req, res) => {
  const { name, email, licence_no, slot_no, loc, v_type, booked, entry_time, exit_time } = req.body;
  if (booked === "yes") {
    Location.findOne({ loc, slot_no })
      .then((existingLocation) => {
        if (existingLocation) {
          // Update the existing data
          existingLocation.name = name;
          existingLocation.licence_no = licence_no;
          existingLocation.booked = "yes";
          existingLocation.email = email;
          existingLocation.entry_time = entry_time;
          existingLocation.exit_time = exit_time;

          existingLocation.save()
            .then(() => {
              res.send({ message: "Successfully updated, Arigato" });
            })
            .catch((err) => {
              console.error(err);
              res.status(500).send({ message: "Server error" });
            });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({ message: "Server error" });
      });
  }
  else {
    Location.findOne({ loc, slot_no })
      .then((existingLocation) => {
        if (existingLocation) {
          // Update the existing data
          existingLocation.name = "";
          existingLocation.licence_no = "";
          existingLocation.booked = "no";
          existingLocation.email = email;
          existingLocation.entry_time = entry_time;
          existingLocation.exit_time = exit_time;

          existingLocation.save()
            .then(() => {
              res.send({ message: "Successfully updated, Arigato" });
            })
            .catch((err) => {
              console.error(err);
              res.status(500).send({ message: "Server error" });
            });
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({ message: "Server error" });
      });
  }
});

app.post("/reports", (req, res) => {
  const { email, slot_no, v_type, loc, licence_no, entry_time, exit_time, reason } = req.body;
  const newreport = new Report({ email, slot_no, v_type, loc, licence_no, entry_time, exit_time, reason });
  newreport.save()
    .then(() => {
      res.send({ message: "Successfully Reported, Arigato" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ message: "Server error" });
    });
});


runPythonScript();
setInterval(runPythonScript, 3000000);