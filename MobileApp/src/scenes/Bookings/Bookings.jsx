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
  BottomNavigation, 
  BottomNavigationAction,
  styled
} from '@mui/material';
import { 
  Home as HomeIcon, 
  AccessTime as ClockIcon, 
  Add as PlusIcon, 
  Work as BriefcaseIcon, 
  Person as UserIcon 
} from '@mui/icons-material';

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
              <>
                <EventCard>
                  <CardContent>
                    <Typography variant="body2">Neassa Parking, Sample Office</Typography>
                    <Box display="flex" justifyContent="space-between" mt={1}>
                      <Typography variant="body2">4:15 PM - 04:30 PM</Typography>
                      <Typography variant="body2">23 OCT 2023</Typography>
                    </Box>
                  </CardContent>
                </EventCard>
                <EventCard>
                  <CardContent>
                    <Typography variant="body2">Neassa Parking, Sample Office</Typography>
                    <Box display="flex" justifyContent="space-between" mt={1}>
                      <Typography variant="body2">4:15 PM - 04:30 PM</Typography>
                      <Typography variant="body2">23 OCT 2023</Typography>
                    </Box>
                  </CardContent>
                </EventCard>
              </>
            ) : (
              <Typography color="textSecondary">No past events</Typography>
            )}
          </CardContent>
        </StyledCard>
      </ContentBox>
    </BackgroundBox>
  );
}

