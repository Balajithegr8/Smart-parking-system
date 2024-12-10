import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useMediaQuery } from "@mui/material";

const getUserName = async () => {
  // try {
  //   const res = await fetch(`http://localhost:9000/getUserData`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   if (!res.ok) {
  //     throw new Error("Failed to fetch user data");
  //   }
  //   const data = await res.json();
  //   return data.name;
  // } catch (error) {
  //   console.error("Error fetching user data:", error);
  //   return null;
  // }
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
          marginBottom: isNonMobile ? "2em" : "1em",
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
          gridTemplateRows: isNonMobile ? "1fr 1fr" : "3fr 1fr 5fr",
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
          padding: "1em",
        }}
      >
        <Box
          sx={{
            gridArea: "calendarBox",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1em",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h4" sx={{ color: "white" }}>
            Calendar Box
          </Typography>
        </Box>
        <Box
          sx={{
            gridArea: "availabilityButton",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1em",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h4" sx={{ color: "white" }}>
            Availability Button
          </Typography>
        </Box>
        <Box
          sx={{
            gridArea: "bookingsBox",
            backgroundColor: "rgba(0, 0, 255, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1em",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h4" sx={{ color: "white" }}>
            Bookings Box
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Today;
