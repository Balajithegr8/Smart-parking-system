import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import User from "./models/User.js";
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