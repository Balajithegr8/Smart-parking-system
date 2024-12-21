import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";

const Maps = ({ open, onClose, reservation }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "rgba(182, 197, 211, 0.84)",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    backdropFilter: "blur(10px)",
    color: "black", // Explicitly set text color to black
    ...theme.applyStyles("light", {
      backgroundColor: "rgba(60, 56, 39, 0.5)",
    }),
  }));

  const getMapSrc = (location) => {
    const locationMap = {
      "Main campus":
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d486.29350262893263!2d80.03785770810062!3d12.820773254075004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1734803550969!5m2!1sen!2sin", // Replace with actual embed links
      UB: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1156.5937839280034!2d80.04179462155228!3d12.823733896935078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70d445bce8d%3A0x4d70241000120f32!2sParking%20Lot%201%2C%20Intra%20College%20Rd%2C%20Potheri%2C%20SRM%20Nagar%2C%20Kattankulathur%2C%20Tamil%20Nadu%20603203!5e0!3m2!1sen!2sin!4v1734803888674!5m2!1sen!2sin",
      TP: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1156.5895438504974!2d80.0418951844898!3d12.824656618252698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f70d674fd169%3A0xa046292dbeff8551!2sParking%20Lot%202%2C%20Potheri%2C%20SRM%20Nagar%2C%20Kattankulathur%2C%20Tamil%20Nadu%20603203!5e0!3m2!1sen!2sin!4v1734803790648!5m2!1sen!2sin",
    };
    return locationMap[location] || "https://www.google.com/maps"; // Default map
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          border: "2px solid #fff",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "72%", // 80% of the screen width
          height: "65%", // 60% of the screen height
          bgcolor: "rgba(255, 255, 255, 0)",
          backdropFilter: "blur(10px)",
          boxShadow: 24,
          p: 4,
          borderRadius: 6,
          overflowY: "auto", // Add scroll if content overflows
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Track color
            borderRadius: "8px",
            padding: "20px 0", // Adds padding to shrink the scrollbar thumb
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255, 255, 255, 0.3)", // Thumb color
            borderRadius: "8px",
            minHeight: "10px", // Ensures a minimum thumb height
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.5)", // Thumb hover color
          },
        }}
      >
        {reservation ? (
          <div>
            <Box
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                zIndex: 10,
                cursor: "pointer",
              }}
              onClick={onClose}
            >
              <CloseIcon />
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Item>Location: {reservation.loc}</Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>{reservation.slot_no}</Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    {" "}
                    {(() => {
                      const [hour, minutes] = reservation.entry_time
                        .split(":")
                        .map(Number);
                      const period = hour < 12 ? "AM" : "PM";
                      const formattedHour = hour % 12 || 12;
                      const formattedMinutes = String(minutes).padStart(2, "0");
                      return `${formattedHour}:${formattedMinutes} ${period}`;
                    })()}
                  </Item>
                </Grid>
                <Grid item xs={8} mb={2}>
                  <Item>
                    Date:{" "}
                    {new Date(reservation.date).toLocaleDateString(undefined, {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </Item>
                </Grid>
              </Grid>
            </Box>

            <iframe
              src={getMapSrc(reservation.loc)}
              width="100%"
              height="400"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
        ) : (
          <Typography>No reservation selected</Typography>
        )}
      </Box>
    </Modal>
  );
};

export default Maps;
