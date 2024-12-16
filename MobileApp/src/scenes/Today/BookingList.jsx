import React from "react";
import { Box } from "@mui/material";
import BookingItem from "./BookingItem";
import { useGettodayQuery } from "../../state/api";

const email = localStorage.getItem("email");

const BookingsList = () => {
  const { data, error, isLoading } = useGettodayQuery(email);

  const bookings =
    data?.map(
      ({
        loc,
        v_type,
        entry_time,
        exit_time,
        booked,
        licence_no,
        slot_no,
      }) => ({
        name: loc,
        slot_no: slot_no,
        v_type: v_type,
        entry_time: entry_time,
        exit_time: exit_time,
        status: booked === "yes" ? "APPROVED" : "RELEASED",
        vehicle: licence_no || "N/A",
      })
    ) || [];

  return (
    <Box
      sx={{
        overflowY: "scroll",
        maxHeight: "100%",
        padding: 1, // Optional padding for better appearance
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Track color
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(255, 255, 255, 0.3)", // Thumb color
          borderRadius: "8px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Thumb hover color
        },
      }}
    >
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching bookings data.</p>}
      {bookings.length > 0
        ? bookings.map((booking, index) => (
            <BookingItem key={index} booking={booking} />
          ))
        : !isLoading && <p>No bookings available.</p>}
    </Box>
  );
};

export default BookingsList;
