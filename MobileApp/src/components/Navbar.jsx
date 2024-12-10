import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import EnforcementIcon from '@mui/icons-material/Gavel';
import AddIcon from '@mui/icons-material/AddCircle';
import OutOfOfficeIcon from '@mui/icons-material/WorkOff';
import ProfileIcon from '@mui/icons-material/Person';

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const isNonMobile = useMediaQuery("(min-width: 922px)");

  const navItems = [
    { icon: <HomeIcon sx={{ fontSize: '2rem' }} />, label: "Today" },
    { icon: <EnforcementIcon sx={{ fontSize: '2rem' }} />, label: "Report" },
    { icon: <AddIcon sx={{ fontSize: '3rem', height: '42px', width: '42px' }} />, label: "Add" },
    { icon: <OutOfOfficeIcon sx={{ fontSize: '2rem' }} />, label: "Out" },
    { icon: <ProfileIcon sx={{ fontSize: '2rem' }} />, label: "Profile" },
  ];

  return (
    <Box
      display="flex"
      flexDirection={isNonMobile ? "column" : "row"}
      alignItems="center"
      justifyContent="space-around"
      height={isNonMobile ? "60vh" : "auto"}
      bgcolor="rgba(21, 40, 75, 0.8)" 
      p={isNonMobile ? 2 : 1}
      sx={{
        backdropFilter: "blur(100px)",
        color: "white",
        backdropFilter: "blur(20px)",
        height: isNonMobile ? "100vh" : "auto",
        zIndex: 1,
        width: "100%",
      }}
    >
      {navItems.map((item, index) => (
        <Box
          key={index}
          display="flex"
          flexDirection={isNonMobile ? "row" : "column"}
          alignItems="center"
          justifyContent="center"
          sx={{ padding: "0.5rem" }}
        >
          {item.icon}
          {(isNonMobile || item.label !== "Add") && (
            <Typography
              variant="h6"
              sx={{
                fontSize: "1.2rem",
                padding: isNonMobile ? "0 0.5rem" : "0.5rem 0",
                textAlign: "center",
              }}
            >
              {item.label}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
}

export default Navbar;