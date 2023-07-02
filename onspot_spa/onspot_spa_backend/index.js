import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
 
const PORT = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname:String,
  id:String,
  password:String
})

const User= new mongoose.model("User",userSchema)

//routes

app.post("/login", (req,res) =>{

  const {id, password }  = req.body

  User.findOne({ id: id })
    .then((user) => {

      if (user) {

        if(password === user.password){
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

  const { firstname, lastname, id, password }  = req.body

  User.findOne({ id: id })
    .then((user) => {
      if (user) {
        res.send({ message: "User Already registered" });
      } else {
        const newUser = new User({
          firstname,
          lastname,
          id,
          password,
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


