import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import NotificationService from "./Notification/service/NotificationService.js";
import jsonwebtoken from "jsonwebtoken";
import cookieParser from "cookie-parser";
import User from "./models/User.js";
import Location from "./models/Locations.js";
import Reservation from "./models/Reservation.js";
import sendmail from "./helpers/sendmail.js";
import Report from "./models/Reports.js";
import { runPythonScript } from "./helpers/pythonRunner.js";
import scheduleTask from "./helpers/scheduler.js";
// Rate Limiter
import { rateLimiter } from "./middlewares/rateLimiter.js";

// Routes imports
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";
import PastBooking from "./models/PastBookings.js";

// Configuration
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(rateLimiter);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: "https://spark-mobile.onrender.com",
  credentials: true,
  allowedHeaders: [
    "set-cookie",
    "Content-Type",
    "Access-Control-Allow-Origin",
    "Access-Control-Allow-Credentials",
  ],
})
);

// Routes Setup
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

const image = 'https://i.imgur.com/dSivAVo.png'

// Mongoose Setup
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {

    console.log("\nScheduler is Online...");
    scheduleTask();
    app.listen(PORT, () => console.log(`Server Port: ${PORT}\n`));

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

  const { email, password } = req.body;

  User.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password && user.role === 'user') {

          const authToken = jsonwebtoken.sign({ email }, "DUMMYKEY");
          res.cookie("authToken", authToken, {
            path: "/",    //The cookie only accessible for all routes on the domain
            maxAge: 24 * 60 * 60 * 1000,  //1 Day
            httpOnly: true,
            secure: true,
            sameSite: 'None'

          });
          return res.status(200).json({ message: '🎉 Login Successful! Redirecting to dashboard...', toastType: 'success' });
        }
        else {
          return res.json({ message: '❌ Login Failed. Incorrect password.', toastType: 'error' })

        }
      }
      else {
        return res.json({ message: '❌ Login Failed. User does not exist.', toastType: 'error' })
      }
    })

});

app.get("/autoLogin", (req, res) => {

  const token = req.cookies.authToken;

  if (!token) {
    return res.sendStatus(401);
  }
  try {
    const decoded = jsonwebtoken.verify(token, "DUMMYKEY");
    return res.sendStatus(200);
  }
  catch (err) {
    return res.sendStatus(401);
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("authToken");
  return res.sendStatus(200);
});

app.post("/slots", async (req, res) => {
  const { name, email, licence_no, slot_no, loc, v_type, booked, entry_time, exit_time } = req.body;

  // Validate required fields
  if (!loc || !slot_no || !booked) {
    return res.status(400).send({ message: "Location, slot number, and booking status are required." });
  }

  try {
    // Find the location entry
    const existingLocation = await Location.findOne({ loc, slot_no });

    if (!existingLocation) {
      return res.status(404).send({ message: "Slot not found." });
    }

    // Update based on booking status
    if (booked === "yes") {
      // Update the existing location with booking details
      existingLocation.name = name;
      existingLocation.licence_no = licence_no;
      existingLocation.booked = "yes";
      existingLocation.email = email;
      existingLocation.entry_time = entry_time;
      existingLocation.exit_time = exit_time;

      await existingLocation.save();
      return res.send({ message: "Successfully updated, Arigato" });
    } else {
      // Save past booking details
      const pastBooking = new PastBooking({
        name,
        email,
        licence_no,
        loc,
        slot_no,
        v_type,
        booked,
        entry_time,
        exit_time,
      });
      await pastBooking.save();

      // Update the existing location to clear booking
      existingLocation.name = "";
      existingLocation.licence_no = "";
      existingLocation.booked = "no";
      existingLocation.email = ""; // Clear email as well
      existingLocation.entry_time = "";
      existingLocation.exit_time = "";

      await existingLocation.save();
      return res.send({ message: "Successfully updated, Arigato" });
    }
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).send({ message: "Server error. Please try again later." });
  }
});


app.post("/reports", async (req, res) => {
  const { email, slot_no, v_type, loc, licence_no, entry_time, exit_time, reason } = req.body;
  const newreport = new Report({ email, slot_no, v_type, loc, licence_no, entry_time, exit_time, reason });
  newreport.save();
  const user = await User.findOne({ email: email });
  const token = user.token;
  const title = "Reported Incident";
  const body = `Your vehicle with license plate ${licence_no} has been reported for ${reason} at ${loc} slot ${slot_no}`;
  NotificationService(token, title, body)
    .then(() => {
      res.status(200).send({ message: "Successfully Reported, Arigato" });
    })
    .catch((err) => {
      res.status(500).send({ message: "There was some error reporting the vehicle" });
    });
});

app.post("/notif", async (req, res) => {
  try {
    const { email, token } = req.body;
    if (!email || !token) {
      return res.status(400).json({ message: "Email and token are required" });
    }

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { $set: { token } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Token updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating token:", error);
    res.status(500).json({ message: "Server error", error });
  }
});


app.post("/reservations", async (req, res) => {
  const { loc, slot_no, email, v_type, licence_no, date, entry_time = "08:00", exit_time = "23:59" } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email: email });

    const name = user.name; // Retrieve the name from the User document
    console.log(`Reserving for: ${name}`);

    // Create a new reservation
    const newReservation = new Reservation({
      email,
      slot_no,
      v_type,
      loc,
      licence_no,
      entry_time,
      exit_time,
      date,
      name,
    });

    await newReservation.save();

    res.send({ message: '🎉 `Successfully Reserved for ${name}, slot - ${slot_no}', toastType: 'success' });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Server error" });
  }
});

runPythonScript();
setInterval(runPythonScript, 3000000);