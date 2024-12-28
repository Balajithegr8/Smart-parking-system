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
import { ToastContainer } from "react-toastify";
import { addDays, format, startOfWeek } from "date-fns";
import { useGetallreservationQuery } from "../../state/api";
import CustomToast from "../../CustomToast";

export default function PreBook() {
  const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date()));
  const [selectedDate, setSelectedDate] = useState(null);
  const [toastMessage, setToastMessage] = useState(""); // Message for toast
  const [toastType, setToastType] = useState(""); // Type of toast
  const email = localStorage.getItem("email");
  const { data, isLoading, error } = useGetallreservationQuery();
  const [formData, setFormData] = useState({
    loc: "",
    v_type: "",
    licence_no: "",
    date: null,
    slot_no: "",
    email: email,
  });

  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeek, i));

  const availableSlotscar = [
    "A6",
    "A7",
    "A8",
    "A9",
    "A10",
    "B6",
    "B7",
    "B8",
    "B9",
    "B10",
    "C6",
    "C7",
    "C8",
    "C9",
    "C10",
  ];
  const availableSlotsbike = [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "B1",
    "B2",
    "B3",
    "B4",
    "B5",
    "C1",
    "C2",
    "C3",
    "C4",
    "C5",
  ];

  const nextWeek = () => setCurrentWeek(addDays(currentWeek, 7));
  const prevWeek = () => setCurrentWeek(addDays(currentWeek, -7));

  const onprebook = () => {
    if (
      !formData.loc ||
      !formData.v_type ||
      !formData.licence_no ||
      !formData.date
    ) {
      setToastMessage("❌ Please fill in all fields.");
      setToastType("error");
    } else {
      formData.slot_no = Randomslot();
      if (formData.slot_no === "no") {
        setToastMessage(
          `❌ No slot in ${formData.loc} available for the selected date`
        );
        setToastType("error");
        alert(`No slot in ${formData.loc} available for the selected date`);
      } else {
        formData.date = formData.date.setUTCHours(0, 0, 0, 0);
        axios
          .post(
            "http://localhost:9000/reservations",
            formData
          )
          .then((response) => {
            console.log(response);
            formData.loc = "";
            formData.v_type = "";
            formData.licence_no = "";
            formData.date = null;
            setToastMessage(
              `🎉 Successfully Reserved slot - ${formData.slot_no}`
            );
            setToastType("success");
          })
          .catch((error) => {
            console.error(error);
            setToastMessage("❌ An error occurred. Please try again.");
            setToastType("error");
          });
      }
    }
  };

  const Randomslot = () => {
    const availableSlots =
      formData.v_type === "car" ? availableSlotscar : availableSlotsbike;

    if (!data || data.length === 0) {
      return availableSlots[0];
    }

    for (const slot of availableSlots) {
      const isReserved = data.some((reservation) => {
        const reservationDate = new Date(reservation.date);
        const SameDate =
          reservationDate.getDate() === formData.date.getDate() &&
          reservationDate.getMonth() === formData.date.getMonth() &&
          reservationDate.getFullYear() === formData.date.getFullYear();

        if (SameDate && reservation.slot_no === slot) {
          return true;
        }
      });
      if (!isReserved) {
        return slot;
      }
    }
    return "no";
  };

  const handleChange = (field, value) => {
    if (field === "date") {
      const nextDate = new Date(value);
      nextDate.setDate(nextDate.getDate() + 1);
      setFormData((prev) => ({ ...prev, [field]: nextDate }));
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }));
    }
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
      <div sx={{ overflow: "auto" }}>
        <Box
          sx={{
            minHeight: "flex",
            backgroundImage: "url('/parking-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            overflow: "auto",
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
                    <MenuItem value="Bike">Motorcycle</MenuItem>
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
                          handleChange("date", day); // Set selected date to formData as Date object
                          setSelectedDate(day); // Update selectedDate state for UI
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
      <CustomToast toastMessage={toastMessage} toastType={toastType} />
      <ToastContainer />
    </div>
  );
}
