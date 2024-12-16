import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Tabs, 
  Tab, 
  Card, 
  CardContent, 
  styled
} from '@mui/material';
import { useGetreservationQuery } from '../../state/api';
import { useGetpastbookingsQuery } from '../../state/api';

const BackgroundBox = styled(Box)(({ theme }) => ({
  height: '100vh',
  backgroundImage: `url('../../static/11.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
}));

const ContentBox = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  // backdropFilter: 'blur(10px)',
  color: 'white',
  flex: 1,
  overflow: 'auto',
  borderRadius: 15,
}));

const EventCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  marginBottom: theme.spacing(1),
  borderRadius: 15,
}));

export default function Bookings() {
  const [activeTab, setActiveTab] = useState(0);
  const [bottomNavValue, setBottomNavValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const email=localStorage.getItem("email");
  const {data, isloading, error} = useGetreservationQuery(email);
  const {data:pastdata, isloading:isload, error:err} = useGetpastbookingsQuery(email);

  if(isloading || isload){
    return <div>Loading...</div>
  }
  if(error || err){
    return <div>Error Loading reports...</div>
  }

  return (
    <BackgroundBox>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Box>
            <div style={{ position: "relative", textAlign: "left", zIndex: 1 ,marginTop:"20px" }}>
                <h1 style={{ margin: 0, fontSize: "2rem" }}>
                    Bookings
                </h1>
                <p style={{ margin: "0.5rem 0", fontSize: "0.7rem" ,color:"white"}}>
                    Your schedule, at a glance
                </p>
            </div>
          </Box>
          <Button color="inherit" sx={{ marginLeft: 'auto' }}>Add Timer Off</Button>
        </Toolbar>
      </AppBar>

      <ContentBox>
        <StyledCard>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange} 
            indicatorColor="primary"
            textColor="inherit"
            variant="fullWidth"
          >
            <Tab label="Upcoming" />
            <Tab label="Past" />
          </Tabs>
          <CardContent>
  {activeTab === 0 ? (
    <Box
      sx={{
        maxHeight: '400px', // Set the max height for the scrollable area
    overflowY: 'auto', // Enable vertical scrolling
    padding: 1, // Optional padding for better appearance
    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Track color
      borderRadius: '8px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(255, 255, 255, 0.3)', // Thumb color
      borderRadius: '8px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Thumb hover color
    },
      }}
    >
      {data && data.length > 0 ? (
        data.map((reservation, index) => (
          <EventCard key={index}>
            <CardContent>
              <Typography variant="body2">
                {reservation.loc}, {reservation.v_type} {reservation.licence_no}
              </Typography>
              <Box display="flex" justifyContent="space-between" mt={1}>
                <Typography variant="body2">
                  {(() => {
                    const [hour, minutes] = reservation.entry_time.split(':').map(Number); 
                    const period = hour < 12 ? 'AM' : 'PM';
                    const formattedHour = hour % 12 || 12; 
                    const formattedMinutes = String(minutes).padStart(2, '0');
                    return `${formattedHour}:${formattedMinutes} ${period}`;
                  })()} - 
                  {(() => {
                    const [hour, minutes] = reservation.exit_time.split(':').map(Number);
                    const period = hour < 12 ? 'AM' : 'PM';
                    const formattedHour = hour % 12 || 12;
                    const formattedMinutes = String(minutes).padStart(2, '0');
                    return ` ${formattedHour}:${formattedMinutes} ${period}`;
                  })()}
                </Typography>
                <Typography variant="body2">
                  {new Date(reservation.date).toLocaleDateString(undefined, {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </Typography>
              </Box>
            </CardContent>
          </EventCard>
        ))
      ) : (
        <Typography color="textSecondary">No upcoming reservations</Typography>
      )}
    </Box>
  ) : (
    <Box
      sx={{
        maxHeight: '400px', // Set the max height for the scrollable area
        overflowY: 'auto', // Enable vertical scrolling
        padding: 1, // Optional padding for better appearance
      }}
    >
      {pastdata && pastdata.length > 0 ? (
        pastdata.map((past, index) => (
          <EventCard key={index}>
            <CardContent>
              <Typography variant="body2">
                {past.loc}, {past.v_type} {past.licence_no}
              </Typography>
              <Box display="flex" justifyContent="space-between" mt={1}>
                <Typography variant="body2">
                  {(() => {
                    const [hour, minutes] = past.entry_time.split(':').map(Number);
                    const period = hour < 12 ? 'AM' : 'PM';
                    const formattedHour = hour % 12 || 12;
                    const formattedMinutes = String(minutes).padStart(2, '0');
                    return `${formattedHour}:${formattedMinutes} ${period}`;
                  })()} - 
                  {(() => {
                    const [hour, minutes] = past.exit_time.split(':').map(Number);
                    const period = hour < 12 ? 'AM' : 'PM';
                    const formattedHour = hour % 12 || 12;
                    const formattedMinutes = String(minutes).padStart(2, '0');
                    return ` ${formattedHour}:${formattedMinutes} ${period}`;
                  })()}
                </Typography>
                <Typography variant="body2">
                  {new Date(past.updatedAt).toLocaleDateString(undefined, {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </Typography>
              </Box>
            </CardContent>
          </EventCard>
        ))
      ) : (
        <Typography color="textSecondary">No Past Bookings</Typography>
      )}
    </Box>
  )}
</CardContent>

        </StyledCard>
      </ContentBox>
    </BackgroundBox>
  );
}

