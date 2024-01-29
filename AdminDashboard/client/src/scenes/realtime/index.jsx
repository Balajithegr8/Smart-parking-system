import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { useGetRealtimeQuery } from "state/api";
import { Header } from "components";

  
// Realtime
const Realtime = ({ loc, id, empty }) => {
  // theme
  const theme = useTheme();

  // Defining the font color based on the booked status
  const fontColor = empty ? "#384051" : theme.palette.secondary[700];
  const fontc = empty ? "#384051" : "#ffffff";

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
            {loc}
          </Typography>

          {/* Name */}
          <Typography variant="h5" component="div" color={fontc}>
            SLOT ID : {id}
          </Typography>

          <br></br>
          {/* Buttons based on booked status */}
          {empty ? (
            <Button variant="contained" color="primary"
            sx={{
              backgroundColor: theme.palette.primary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "5px 13px",
      
              "&:hover": {
                backgroundColor: theme.palette.background.alt,
                color: theme.palette.primary.light,
              },
            }}>
              Not Available
            </Button>
          ) : (
            <Button variant="contained" color="secondary" 
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
            }}>
              Available
            </Button>
          )}
          <br />
        </CardContent>
      </Card>
    </Box>
  );
};


// Realtime
const Realtimes = () => {
  // get data
  const { data, isLoading } = useGetRealtimeQuery();
  // is medium/large desktop
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  const filteredData = data || [];

  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
      <Header title="REALTIME SLOTS" subtitle="Dynamic slots changing with time" />

      {/* Content */}
      {filteredData.length > 0 || !isLoading ? (
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
          {filteredData.map(({ _id, id, empty }) => (
            <Realtime _id={_id} id={id} empty={empty} />
          ))}
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


export default Realtimes;
