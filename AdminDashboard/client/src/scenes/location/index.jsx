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
import Datepickers from "components/Datepickers";
import { useGetLocationsQuery } from "state/api";

import { Header } from "components";

// Product
const Location = ({
  loc,
  slot_no,
  booked,
  currentPrice,
}) => {

 

  // theme
  const theme = useTheme();
  const history = useNavigate();
  const name=localStorage.getItem('name');
  const role=localStorage.getItem('role');
  const handleClick = () => {
    localStorage.setItem('price', currentPrice);
    history(`/slots?loc=${loc}`); // Redirect to the details page for the specific location
  };

  function Judge(){
    if(role==="guard"){
      return(<Button onClick={handleClick}
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
      </Button>)
    }
    else{
      return(
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
        
        See All Slots
      </Button>
      )
    }
  }

  
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
          Slots taken : {booked}
        </Typography>     

        {/* Available Slots */}
        
          <Typography variant="h5" component="div">
            Available slots: {slot_no-booked}
          </Typography>

          {/* Total Slots */}
        
          <Typography variant="h5" component="div">
            Total slots: {slot_no}
          </Typography>
          <Typography variant="h5" component="div">
            Cost :{currentPrice}
          </Typography>
          
        <br/>
        <Judge/>
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
  
  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
      <Header title="LOCATIONS" subtitle="List Of Available Location For Parking" />
      <br/>
      <Datepickers/>
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
              booked,      
              currentPrice,
             
            }) => (
              <Location
                key={loc}
                _id={_id}
                loc={loc}
                slot_no={slot_no}
                booked={booked}
                currentPrice={currentPrice}
                
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
