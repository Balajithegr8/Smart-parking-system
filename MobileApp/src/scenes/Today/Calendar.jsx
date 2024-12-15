import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Calendar = () => {
  const isNonMobile = useMediaQuery("(min-width: 922px)");
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const [currentWeekStart, setCurrentWeekStart] = useState(
    getStartOfWeek(today)
  );

  function getStartOfWeek(date) {
    const dayOfWeek = date.getDay(); // 0 (Sun) to 6 (Sat)
    const start = new Date(date);
    start.setDate(date.getDate() - dayOfWeek);
    return start;
  }

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setCurrentMonth(date.getMonth());
    setCurrentYear(date.getFullYear());
  };

  const handlePrevious = () => {
    if (isNonMobile) {
      // Navigate to previous month
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      // Navigate to previous week
      const newStartOfWeek = new Date(currentWeekStart);
      newStartOfWeek.setDate(newStartOfWeek.getDate() - 7);
      setCurrentWeekStart(newStartOfWeek);
    }
  };

  const handleNext = () => {
    if (isNonMobile) {
      // Navigate to next month
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    } else {
      // Navigate to next week
      const newStartOfWeek = new Date(currentWeekStart);
      newStartOfWeek.setDate(newStartOfWeek.getDate() + 7);
      setCurrentWeekStart(newStartOfWeek);
    }
  };

  // Generate dates for the calendar
  const dates = [];
  if (isNonMobile) {
    // Full month view
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Empty slots before the first day
    for (let i = 0; i < firstDayOfMonth; i++) {
      dates.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(new Date(currentYear, currentMonth, i));
    }
  } else {
    // One week view
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentWeekStart);
      date.setDate(currentWeekStart.getDate() + i);
      dates.push(date);
    }
  }

  // Format date as "DD MMM"
  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    return `${day} ${month}`;
  };

  return (
    <Box
      display="grid"
      gridTemplateRows="auto auto auto"
      gridTemplateAreas={`
        "monthYear"
        "daysOfWeek"
        "dates"
      `}
      gap="1em"
      padding="1em"
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
        width: "100%",
        maxWidth: isNonMobile ? "600px" : "100%",
        margin: "0 auto",
      }}
    >
      <Box
        gridArea="monthYear"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Previous Button */}
        <IconButton onClick={handlePrevious}>
          <ArrowBackIosIcon />
        </IconButton>

        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {isNonMobile
            ? `${new Date(currentYear, currentMonth).toLocaleString("default", {
                month: "long",
              })} ${currentYear}`
            : `${formatDate(currentWeekStart)} - ${formatDate(
                new Date(
                  currentWeekStart.getFullYear(),
                  currentWeekStart.getMonth(),
                  currentWeekStart.getDate() + 6
                )
              )}`}
        </Typography>

        {/* Next Button */}
        <IconButton onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      <Box
        gridArea="daysOfWeek"
        display="grid"
        gridTemplateColumns="repeat(7, 1fr)"
        textAlign="center"
      >
        {daysOfWeek.map((day, index) => (
          <Typography key={index} variant="body1" sx={{ fontWeight: "bold" }}>
            {day}
          </Typography>
        ))}
      </Box>

      <Box
        gridArea="dates"
        display="grid"
        gridTemplateColumns="repeat(7, 1fr)"
        textAlign="center"
      >
        {dates.map((dateObj, index) => {
          if (!dateObj) {
            // Empty slot in the grid
            return <Box key={`empty-${index}`} />;
          }
          const date = dateObj.getDate();
          const isSelected =
            dateObj.toDateString() === selectedDate.toDateString();
          return (
            <Box
              key={dateObj.toDateString()}
              onClick={() => handleDateClick(dateObj)}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "40px",
                width: "40px",
                margin: "auto",
                borderRadius: "50%",
                backgroundColor: isSelected ? "red" : "transparent",
                color: isSelected ? "white" : "inherit",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "rgba(255, 0, 0, 0.3)",
                },
              }}
            >
              <Typography variant="body1" sx={{ fontSize: "0.9rem" }}>
                {date}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Calendar;
