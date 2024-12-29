import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetmobreportsQuery } from '../../state/api';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Card, 
  CardContent, 
  styled,
} from '@mui/material';

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
  color: 'white',
  flex: 1,
  marginBottom: "1000px",
  overflow: 'auto',
  maxHeight: '70vh',
  borderRadius: 15,
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
}));

const EventCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  marginBottom: theme.spacing(1),
  borderRadius: 15,
}));

export default function Report() {
  const navigate = useNavigate();
  useEffect(() => {
    async function autoLogin() {
      const response = await fetch("https://spark-backend-j18q.onrender.com/autoLogin", {
        method: "GET",
        credentials: "include",
      });
      if (response.status !== 200) {
        navigate("/");
      }
    }
    autoLogin();
  }, [navigate]);

  const email=localStorage.getItem("email");
  const {data, isloading, error} = useGetmobreportsQuery(email);

  if(isloading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>Error Loading reports...</div>
  }

  return (
    <BackgroundBox>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Box>
            <div style={{ position: "relative", textAlign: "left", zIndex: 1 ,marginTop:"20px" }}>
                <h1 style={{ margin: 0, fontSize: "2rem" }}>
                    Reports
                </h1>
                <p style={{ margin: "0.5rem 0", fontSize: "0.7rem" ,color:"white"}}>
                    Record of parking violations and Reports
                </p>
            </div>
          </Box>
        </Toolbar>
      </AppBar>

      <ContentBox>
        
        <StyledCard>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop:"5%"}}>
        <h2 style={{ fontSize: "1.7rem", fontWeight: "lighter" }}> Reports </h2>
        </div>
          <CardContent>
                  {data && Array.isArray(data) && data.length > 0 ? (
                    data.map((report, index) => (
                    <EventCard key={index}>
                      <CardContent>
                        <Typography variant="body2">{report.reason}</Typography>
                        <Box display="flex" justifyContent="space-between" mt={1}>
                          <Typography variant="body2">
                          {(() => {
                              const [hour, minutes] = report.entry_time.split(':').map(Number); // Convert to numbers
                              const period = hour < 12 ? 'AM' : 'PM'; // Determine AM/PM
                              const formattedHour = hour % 12 || 12; // Convert hour to 12-hour format
                              const formattedMinutes = String(minutes).padStart(2, '0'); // Ensure 2-digit minutes
                              return `${formattedHour}:${formattedMinutes} ${period}`;
                              })()} - 
                            {(() => {
                              const [hour, minutes] = report.exit_time.split(':').map(Number); // Convert to numbers
                              const period = hour < 12 ? 'AM' : 'PM'; // Determine AM/PM
                              const formattedHour = hour % 12 || 12; // Convert hour to 12-hour format
                              const formattedMinutes = String(minutes).padStart(2, '0'); // Ensure 2-digit minutes
                              return ` ${formattedHour}:${formattedMinutes} ${period}`;
                              })()} 
                          </Typography>
                          <Typography variant="body2"> {new Date(report.createdAt).toLocaleDateString(undefined, {
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
                          <Typography variant="body2">No reports available</Typography>
                  )}
          </CardContent>
        </StyledCard>
      </ContentBox>
    </BackgroundBox>
  );
}

