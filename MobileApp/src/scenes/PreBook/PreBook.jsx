"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, Button, Select, MenuItem, TextField, Typography, Grid, IconButton } from "@mui/material";
import { addDays, format, startOfWeek } from "date-fns";

export default function PreBook() {
  const [currentWeek, setCurrentWeek] = useState(startOfWeek(new Date()));
  const [selectedDate, setSelectedDate] = useState(null);

  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeek, i));

  const nextWeek = () => setCurrentWeek(addDays(currentWeek, 7));
  const prevWeek = () => setCurrentWeek(addDays(currentWeek, -7));

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
          maxWidth: 800, // Adjust the maxWidth for the container
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
                Office
              </Typography>
              <Select
                fullWidth
                defaultValue=""
                sx={{ backgroundColor: "rgba(128, 128, 128, 0.2)", borderRadius: 1 }}
              >
                <MenuItem value="main">Main Office</MenuItem>
                <MenuItem value="branch">Branch Office</MenuItem>
              </Select>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography color="white" mb={1}>
                Parking Lot
              </Typography>
              <Select
                fullWidth
                defaultValue=""
                sx={{ backgroundColor: "rgba(128, 128, 128, 0.2)", borderRadius: 1 }}
              >
                <MenuItem value="lot-a">Lot A</MenuItem>
                <MenuItem value="lot-b">Lot B</MenuItem>
              </Select>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography color="white" mb={1}>
                Vehicle
              </Typography>
              <Select
                fullWidth
                defaultValue=""
                sx={{ backgroundColor: "rgba(128, 128, 128, 0.2)", borderRadius: 1 }}
              >
                <MenuItem value="car">Car</MenuItem>
                <MenuItem value="motorcycle">Motorcycle</MenuItem>
              </Select>
            </Box>

            
          </Grid>

          {/* Calendar Section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold" color="white" mb={2}>
              Select Date
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
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
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <Grid item xs={1.7} key={day}>
                  <Typography color="white" align="center" variant="caption" sx={{ paddingLeft: "15px" }}>
                    {day}
                  </Typography>
                </Grid>
              ))}
              {weekDays.map((day) => (
                <Grid item xs={1.7} key={day}>
                  <Button
                    variant="text"
                    fullWidth
                    onClick={() => setSelectedDate(day)}
                    sx={{
                      color: day.getDate() === 10 ? "red" : "white",
                      paddingRight: "30px",
                      backgroundColor:
                        selectedDate && day.toDateString() === selectedDate.toDateString()
                          ? "rgba(255, 255, 255, 0.2)"
                          : "transparent",
                    }}
                  >
                    {format(day, "d")}
                  </Button>
                </Grid>
              ))}
            </Grid>
            <br/>
            <Button
                variant="contained"
                fullWidth
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

