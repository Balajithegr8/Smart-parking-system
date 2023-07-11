import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useGetSlotsQuery } from "state/api";
import { Header } from "components";

// Product
const Slot = ({
  loc,
  slot_no,
  v_type
}) => {
  // theme
  const theme = useTheme();

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      {/* Content */}
      <CardContent>
        {/* Category */}
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {loc}
        </Typography>

        {/* Name */}
        <Typography variant="h5" component="div">
          {slot_no}
        </Typography>

        {/* Description */}
        <Typography variant="body2">{v_type}</Typography>
      </CardContent>
    </Card>
  );
};

// Slots
const Slots = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const loc = searchParams.get("loc");  
  // get data
  const { data, isLoading } = useGetSlotsQuery();
  // is medium/large desktop
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  const filteredData = data ? data.filter(slot => slot.loc === loc) : [];

  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
      <Header title="SLOTS" subtitle="List Of Available Location For Parking" />

      {/* Content */}
      {filteredData.length > 0 || !isLoading ?  (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {/* Loop over each product */}
          {filteredData.map(
            ({
              _id,
              loc,
              slot_no,      
              v_type,
            }) => (
              <Slot
                key={_id}
                _id={_id}
                loc={loc}
                slot_no={slot_no}
                v_type={v_type}
              />
            )
          )}
        </Box>
      ) : (
        // Loader
        <Typography variant="h5" mt="20%" textAlign="center">
          Loading...
        </Typography>
      )}
    </Box>
  );
};

export default Slots;
