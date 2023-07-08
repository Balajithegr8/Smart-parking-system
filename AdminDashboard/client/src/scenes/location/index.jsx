import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useGetLocationsQuery } from "state/api";
import { Header } from "components";

// Product
const Location = ({
  loc,
  slot_no,
  totalSlots,
  availableSlots,
}) => {
  // theme
  const theme = useTheme();
  const history = useNavigate();

  const handleClick = () => {
    history(`/locations/${loc}`); // Redirect to the details page for the specific location
  };

  return (
    
    <Card 
      sx={{
        backgroundImage: "none",  
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
      
    >
      <Box >
      {/* Content */}
      <CardContent >
        {/* Category */}

        <Typography 
          sx={{ fontSize: 20 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {loc}
        </Typography>

        {/* Name */}
        <Typography variant="h5" component="div">
          Slots taken : {slot_no}
        </Typography>     

        {/* Available Slots */}
        
          <Typography variant="h5" component="div">
            Available slots: {totalSlots-slot_no}
          </Typography>

          {/* Total Slots */}
        
          <Typography variant="h5" component="div">
            Total slots: {totalSlots}
          </Typography>
        <br/>
          <Button onClick={handleClick}
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "5px 13px",

              "&:hover": {
                backgroundColor: theme.palette.background.alt,
                color: theme.palette.secondary.light,
              },
            }}
          >
            
            Book a Slot
          </Button>

      </CardContent>
      </Box>
    </Card>
  );
};

// Locations
const Locations = () => {
  // get data
  const { data, isLoading } = useGetLocationsQuery();
  // is medium/large desktop
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  // Calculate total and available slots for TP location
  const totalSlotsTP = 50;
  const availableSlotsTP = totalSlotsTP - data?.filter((location) => location.loc === "TP" && location.slot_no).length;

  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
      <Header title="LOCATIONS" subtitle="List Of Available Location For Parking" />
      <br/>
      {/* Content */}
      {data || !isLoading ? (
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
          {data.map(
            ({
              _id,
              loc,
              slot_no,      
             
            }) => (
              <Location
                key={_id}
                _id={_id}
                loc={loc}
                slot_no={slot_no}
                totalSlots={totalSlotsTP}
                availableSlots={availableSlotsTP}
                
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

export default Locations;
