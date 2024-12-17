import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useMediaQuery } from "@mui/material";
import Calendar from "./Calendar"; // Import the Calendar component
import BookingsList from "./BookingList";

const getUserName = async () => {

  return "Balaji P";
};

const Today = () => {
  const isNonMobile = useMediaQuery("(min-width: 922px)");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchName = async () => {
      const userName = await getUserName();
      if (userName) {
        setName(userName);
      } else {
        setError("Failed to fetch user data");
      }
    };
    fetchName();
  }, []);
  return (
    <Box
      display="grid"
      gridTemplateRows="auto 1fr"
      gridTemplateAreas={`
        "header"
        "body"
      `}
      height="100vh"
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        marginTop: isNonMobile ? "2em" : "1em",
      }}
    >
      <Box
        display="grid"
        gridTemplateColumns={isNonMobile ? "10fr 1fr" : "5fr 1fr"}
        gridTemplateAreas={`
          "name icon"
        `}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: "100%",
          marginBottom: isNonMobile ? "2em" : "0",
          gridArea: "header",
          marginTop: isNonMobile ? "3vh" : "2vh",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: isNonMobile ? "3rem" : "1.5rem",
            textAlign: "center",
            marginRight: isNonMobile ? "1em" : "0",
            gridArea: "name",
          }}
        >
          {error ? error : `Welcome, ${name}`}
        </Typography>
        <IconButton
          color="primary"
          aria-label="notifications"
          sx={{
            color: "white",
            gridArea: "icon",
          }}
        >
          <NotificationsIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box
        sx={{
          gridArea: "body",
          display: "grid",
          gridTemplateColumns: isNonMobile ? "1fr 1fr" : "1fr",
          gridTemplateRows: isNonMobile ? "1fr 1fr" : "3fr 1.5fr 10fr",
          gridTemplateAreas: isNonMobile
            ? `
              "calendarBox bookingsBox"
              "availabilityButton bookingsBox"
            `
            : `
              "calendarBox"
              "availabilityButton"
              "bookingsBox"
            `,
          gap: "1em",
          background: "rgba(0, 0, 0, 0.3)",
          margin: "1.3em",
        }}
      >
        <Box
          sx={{
            gridArea: "calendarBox",
            display: "flex",
            marginLeft: isNonMobile ? "1em" : "0",
            alignItems: isNonMobile ? "center" : "start",
            justifyContent: isNonMobile ? "center" : "start",
          }}
        >
          <Calendar />
        </Box>
        <Box
          sx={{
            gridArea: "availabilityButton",
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            gridRow: isNonMobile ? "2" : "2",
            padding: isNonMobile ? "0" : "1em",

            marginLeft: isNonMobile ? "1em" : "0",
          }}
        >
          <Button
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              width: "100%",
              color: "black",
              fontWeight: "bold",
              borderRadius: "8px",
              height: "3em",
              fontSize: "1.4em",
              textTransform: "none",
            }}
          >
            Check Today's Availability
          </Button>
        </Box>
        <Box
          sx={{
            gridArea: "bookingsBox",
            display: "flex",
            alignItems: "start",
            marginTop: isNonMobile ? "4.5vh" : "0",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          <Box
            sx={{
              gridArea: "bookingsBox",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "flex-start",
              borderRadius: "8px",
              padding: "1em",
              overflowY: "auto",
            }}
          >
            <BookingsList />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Today;
