import React from "react";
import {
  Box,
  Card,
  Button,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
  Collapse,
  CardActions,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useGetSlotsQuery } from "state/api";
import { Header } from "components";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import Pop from "../../components/Pop/Pop";
// Slot
const Slot = ({
  loc,
  slot_no,
  v_type,
  booked,
  name,
  licence_no,
  price,
  entry_time,
  exit_time,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);  
  const [openModal,setopenModal] = useState(false,);
  const [openPop,setopenPop] = useState(false,);
  // theme
  const theme = useTheme();
  
  //getting role info
  const role=localStorage.getItem('role');
  var price=localStorage.getItem('price');
  
  // Defining the font color based on the booked status
  const fontColor = booked === "yes" ? "#384051" : theme.palette.secondary[700];
  const fontc = booked === "yes" ? "#384051" : "#ffffff";
  

  function Judge(){
    if(role==="guard" && booked ==="no"){
      return(
        
        <Button onClick={()=>{setopenModal(true); }}
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
        
          Book this Slot
      </Button>
      
      )
      
    }
  }
  return (
    <Box>
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
          color={fontColor}
          gutterBottom
       
        >
          {loc}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price : ${price}
        </Typography>

        {/* Name */}
        <Typography variant="h5" component="div" color={fontc}>
          Slot no : {slot_no}
        </Typography>

        {/* Description */}
        <Typography variant="h5" color={fontc}>
          vehicle type : {v_type}
        </Typography>

        <Typography variant="h5" component="div" color={fontc}>
          Booked: {booked}
        </Typography>
        <br/>
        <Judge/>
      </CardContent>

      
          {/* See More/See Less */}
          {booked === "yes" && (
          <CardActions sx={{ mt: -1 }}>
            <Button
              variant="primary"
              size="small"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "See Less" : "See More"}
            </Button>
          </CardActions>
        )}
          {/* More Info */}
          <Collapse
            in={isExpanded}
            timeout="auto"
            unmountOnExit
            sx={{ color: theme.palette.neutral[300] }}
          >
            <CardContent>
              <Typography>Booked by : {name}</Typography>
              <Typography>Licence Number: {licence_no}</Typography>
              <Typography>Exit Time: {exit_time}</Typography>
              <Typography><br/></Typography>
              <Button onClick={()=>{setopenPop(true); }}
                  sx={{
                    backgroundColor: '#8fc3ff',
                    color: theme.palette.background.alt,
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "5px 13px",
            
                    "&:hover": {
                      backgroundColor: theme.palette.background.alt,
                      color: '#8fc3ff',
                    },
                  }}
                  >
        
                Release this Slot
              </Button>
            </CardContent>
          </Collapse>

        
    </Card>
    {openModal && <Modal closeModal={setopenModal } slot_no={slot_no} v_type={v_type} loc={loc} />}
    {openPop && <Pop closePop={setopenPop } slot_no={slot_no} v_type={v_type} loc={loc} />}
    </Box>
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
      <Header title="SLOTS" subtitle = "List Of All Slots For Parking" />

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
              booked,
              name,
              licence_no,
              exit_time,
            }) => (
              <Slot
                key={slot_no}
                _id={_id}
                loc={loc}
                slot_no={slot_no}
                v_type={v_type}
                booked={booked}
                name={name}
                licence_no={licence_no}
                exit_time={exit_time}
               
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
