"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import axios from "axios";
import {
  Box,
  Button,
  Select,
  MenuItem,
  TextField,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import { addDays, format, startOfWeek } from "date-fns";

export default function PreBook() {
  const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date()));
  const [selectedDate, setSelectedDate] = useState(null);
  const email=localStorage.getItem("email");
  const [formData, setFormData] = useState({
    loc: "",
    v_type: "",
    licence_no: "",
    date: addDays(new Date(), 1),
    slot_no: "",
    email: email,
  });

  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeek, i));

  const nextWeek = () => setCurrentWeek(addDays(currentWeek, 7));
  const prevWeek = () => setCurrentWeek(addDays(currentWeek, -7));

  const onprebook = () => {
    if (
      !formData.loc ||
      !formData.v_type ||
      !formData.licence_no ||
      !formData.date
    ) {
      alert("Please fill in all fields");
    }
    formData.slot_no = randomslot();
    if (formData.slot_no == "no") {
      alert("No slot available for the selected date");
    } else {
      console.log(formData);
      axios
        .post("http://localhost:9000/reservations", formData)
        .then((response) => {
          alert(response.data.message);
        });
    }
  };

  const randomslot = () => {
    return "D8";
  }; //return an empty slot that is ok to be booked for that particular date

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <div
        style={{
          paddingLeft: "25px",
          paddingTop: "10px",
          position: "relative",
          textAlign: "left",
          zIndex: 1,
          marginTop: "20px",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "2rem" }}>Reservation</h1>
        <p style={{ margin: "0.5rem 0", fontSize: "0.7rem", color: "white" }}>
          To Book your slot before you arrive
        </p>
      </div>
      <Box
        sx={{
          minHeight: "flex",
          backgroundImage: "url('/parking-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            p: 4,
            borderRadius: 2,
            width: "100%",
          }}
        >
          <Grid container spacing={4}>
            {/* Input Fields Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight="bold" color="white" mb={2}>
                Parking Request
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography color="white" mb={1}>
                  Location
                </Typography>
                <Select
                  fullWidth
                  defaultValue=""
                  value={formData.loc}
                  onChange={(e) => handleChange("loc", e.target.value)}
                  sx={{
                    backgroundColor: "rgba(128, 128, 128, 0.2)",
                    borderRadius: 1,
                  }}
                >
                  <MenuItem value="UB">UB</MenuItem>
                  <MenuItem value="TP">TP</MenuItem>
                  <MenuItem value="Main campus">Main Campus</MenuItem>
                </Select>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography color="white" mb={1}>
                  Vehicle Type
                </Typography>
                <Select
                  fullWidth
                  defaultValue=""
                  value={formData.v_type}
                  onChange={(e) => handleChange("v_type", e.target.value)}
                  sx={{
                    backgroundColor: "rgba(128, 128, 128, 0.2)",
                    borderRadius: 1,
                  }}
                >
                  <MenuItem value="car">Car</MenuItem>
                  <MenuItem value="motorcycle">Motorcycle</MenuItem>
                </Select>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography color="white" mb={1}>
                  Number Plate
                </Typography>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Number Plate"
                  variant="filled"
                  value={formData.licence_no}
                  onChange={(e) => handleChange("licence_no", e.target.value)}
                />
              </Box>
            </Grid>

            {/* Calendar Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight="bold" color="white" mb={2}>
                Select Date
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mb={2}
              >
                <IconButton onClick={prevWeek} sx={{ color: "white" }}>
                  <ChevronLeft />
                </IconButton>
                <Typography color="white" fontWeight="bold">
                  {format(currentWeek, "MMMM yyyy")}
                </Typography>
                <IconButton onClick={nextWeek} sx={{ color: "white" }}>
                  <ChevronRight />
                </IconButton>
              </Box>
              <Grid container spacing={1} mt={1}>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <Grid item xs={1.7} key={day}>
                      <Typography
                        color="white"
                        align="center"
                        variant="caption"
                        sx={{ paddingLeft: "15px" }}
                      >
                        {day}
                      </Typography>
                    </Grid>
                  )
                )}
                {weekDays.map((day) => (
                  <Grid item xs={1.7} key={day}>
                    <Button
                      variant="text"
                      fullWidth
                      onClick={() => {
                        handleChange("date", day);
                        setSelectedDate(day); // Ensure selectedDate is updated
                      }}
                      sx={{
                        color:
                          selectedDate &&
                          day.toDateString() === selectedDate.toDateString()
                            ? "black"
                            : day.toDateString() === new Date().toDateString()
                            ? "red" // Today's date is red
                            : "white", // Default color
                        backgroundColor:
                          selectedDate &&
                          day.toDateString() === selectedDate.toDateString()
                            ? "rgba(255, 255, 255, 0.2)" // Slight background for selected date
                            : "transparent",
                        paddingRight: "30px",
                      }}
                    >
                      {format(day, "d")}
                    </Button>
                  </Grid>
                ))}
              </Grid>
              <br />
              <Button
                variant="contained"
                fullWidth
                onClick={() => onprebook()}
                sx={{
                  backgroundColor: "#1976D2",
                  color: "white",
                  "&:hover": { backgroundColor: "#1565C0" },
                }}
              >
                Request Parking
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
