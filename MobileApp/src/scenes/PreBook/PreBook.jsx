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
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "url('/parking-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 4,
      }}
    >
      <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)", p: 4, borderRadius: 2, maxWidth: 400, width: "100%" }}>
        <Typography variant="h5" fontWeight="bold" color="white" mb={2}>
          Parking Request
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Typography color="white" mb={1}>Office</Typography>
          <Select fullWidth defaultValue="" sx={{ backgroundColor: "rgba(128, 128, 128, 0.2)", borderRadius: 1 }}>
            <MenuItem value="main">Main Office</MenuItem>
            <MenuItem value="branch">Branch Office</MenuItem>
          </Select>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography color="white" mb={1}>Parking Lot</Typography>
          <Select fullWidth defaultValue="" sx={{ backgroundColor: "rgba(128, 128, 128, 0.2)", borderRadius: 1 }}>
            <MenuItem value="lot-a">Lot A</MenuItem>
            <MenuItem value="lot-b">Lot B</MenuItem>
          </Select>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography color="white" mb={1}>Vehicle</Typography>
          <Select fullWidth defaultValue="" sx={{ backgroundColor: "rgba(128, 128, 128, 0.2)", borderRadius: 1 }}>
            <MenuItem value="car">Car</MenuItem>
            <MenuItem value="motorcycle">Motorcycle</MenuItem>
          </Select>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography color="white" mb={1}>Duration</Typography>
          <TextField
            fullWidth
            placeholder="Enter duration"
            variant="outlined"
            sx={{ backgroundColor: "rgba(128, 128, 128, 0.2)", borderRadius: 1 }}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography color="white" mb={1}>Select Date</Typography>
          <Box display="flex" alignItems="center" justifyContent="space-between">
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
                <Typography color="white" align="center" variant="caption">
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
        </Box>

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
      </Box>
    </Box>
  );
}
