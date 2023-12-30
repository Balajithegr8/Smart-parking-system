import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import fs from 'fs';
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import User from "./models/User.js";
import Location from "./models/Locations.js";
import Realtime from "./models/Realtime.js";
// Rate Limiter
import { rateLimiter } from "./middlewares/rateLimiter.js";
import { spawn } from 'child_process';
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
  
  app.post("/login", (req,res) =>{
  
    const {email, password }  = req.body
  
    User.findOne({ email: email })
      .then((user) => {
  
        if (user) {
  
          if(password === user.password && user.role==="user"){
            res.send({message:"you are not allowed, Yowai mo"})
          }
          else if(password === user.password){
            
            res.send({message:"Login success",user:user})
          }
          else{
            res.send({message:"password dint match"})
          }
        
        } else {
  
          res.send({message: "User not registered"})
  
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send({ message: "Server error" });
      });
  
  })
  
  app.post("/Register", (req,res) =>{
  
    const { name, email, password ,occupation="Faculty" ,phoneNumber ,transaction=[],role="guard"}  = req.body
  
    User.findOne({email: email })
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
            .save() // Removed the callback function here
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
  
  
  app.post("/slots", (req, res) => {
    const { name, licence_no, slot_no,loc, v_type, booked, entry_time,exit_time  } = req.body;
    if(booked==="yes"){
      Location.findOne({ loc, slot_no })
        .then((existingLocation) => {
          if (existingLocation) {
            // Update the existing data
            existingLocation.name = name;
            existingLocation.licence_no = licence_no;
            existingLocation.booked = "yes";
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
    else{
      Location.findOne({ loc, slot_no })
        .then((existingLocation) => {
          if (existingLocation) {
            // Update the existing data
            existingLocation.name = "";
            existingLocation.licence_no = "";
            existingLocation.booked = "no";
    
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

  async function saveDataToMongoDB(parsedData) {
    const occupancyData = parsedData[0].occupancy_status;

  
    try {
      // Clear existing data in the MongoDB collection
      await Realtime.deleteMany({});
      
      // Insert new data into the MongoDB collection
      await Realtime.insertMany(occupancyData);
  
      console.log('Data successfully saved to MongoDB');
    } catch (err) {
      console.error('Error manipulating data in MongoDB:', err);
    }
  }
  
  

  // Function to run the Python script
  function runPythonScript() {
    const sensor = spawn('python', ['main.py']);
      sensor.on('close', (code) => {
        if (code === 0) {
          const jsonData = fs.readFileSync('occupancy_data.json', 'utf8');
    
          // Parse JSON data
          const parsedData = JSON.parse(jsonData);
    
          // Call a function to save the data to MongoDB
          saveDataToMongoDB(parsedData);
        } 
        else {
          console.error('Python script failed with code', code);
        }
      }
    );
  }
  
  // Run the Python script initially
  runPythonScript();
  
  // Set up a periodic execution every 10 minutes(6,000 milliseconds)
  const intervalId = setInterval(runPythonScript, 60000);
