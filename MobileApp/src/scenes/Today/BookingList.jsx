import React from "react";
import { Box } from "@mui/material";
import BookingItem from "./BookingItem";

const bookingsData = [
  {
    name: "Neassa Parking, Sample Office",
    time: "4:15 PM - 04:30 PM",
    status: "RELEASED",
    vehicle: "YHTHG",
  },
  {
    name: "Neassa Parking, Sample Office",
    time: "4:15 PM - 04:30 PM",
    status: "APPROVED",
    vehicle: "YHTHG",
  },

  // Add more bookings as needed
  {
    name: "Neassa Parking, Sample Office",
    time: "4:15 PM - 04:30 PM",
    status: "RELEASED",
    vehicle: "YHTHG",
  },
  {
    name: "Neassa Parking, Sample Office",
    time: "4:15 PM - 04:30 PM",
    status: "APPROVED",
    vehicle: "YHTHG",
  },
];

const BookingsList = () => {
  return (
    <Box sx={{ overflowY: "scroll", maxHeight: "100%" }}>
      {bookingsData.map((booking, index) => (
        <BookingItem key={index} booking={booking} />
      ))}
    </Box>
  );
};

export default BookingsList;
