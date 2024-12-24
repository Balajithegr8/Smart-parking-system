import { spawn } from "child_process";
import fs from "fs";
import Realtime from "../models/Realtime.js";

const saveDataToMongoDB = async (parsedData) => {
  try {
    await Realtime.deleteMany({});
    await Realtime.insertMany(parsedData[0].occupancy_status);
    console.log("Data successfully saved to MongoDB.");
  } catch (error) {
    console.error("Error saving data to MongoDB:", error.message);
  }
};

export const runPythonScript = () => {
  const sensor = spawn("python3", ["main.py"]);

  sensor.on("close", (code) => {
    if (code === 0) {
      const jsonData = fs.readFileSync("occupancy_data.json", "utf8");
      const parsedData = JSON.parse(jsonData);
      saveDataToMongoDB(parsedData);
    } else {
      console.error("Python script failed with code:", code);
    }
  });
};
