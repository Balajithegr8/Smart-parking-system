import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import EnforcementIcon from '@mui/icons-material/Gavel';
import AddIcon from '@mui/icons-material/AddCircle';
import OutOfOfficeIcon from '@mui/icons-material/WorkOff';
import ProfileIcon from '@mui/icons-material/Person';
import { Link } from "react-router-dom"; // For routing

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const isNonMobile = useMediaQuery("(min-width: 922px)");

  const navItems = [
    { icon: <HomeIcon sx={{ fontSize: '1.7rem' }} />, label: "Today", path: "/today" },
    { icon: <EnforcementIcon sx={{ fontSize: '1.7rem' }} />, label: "Report", path: "/report" },
    { icon: <AddIcon sx={{ fontSize: '2.3rem' }} />, label: "PreBook", path: "/prebook" },
    { icon: <OutOfOfficeIcon sx={{ fontSize: '1.7rem' }} />, label: "Bookings", path: "/bookings" },
    { icon: <ProfileIcon sx={{ fontSize: '1.7rem' }} />, label: "Profile", path: "/profile" },
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
        height: isNonMobile ? "100vh" : "auto",
        zIndex: 1,
        width: "100%",
      }}
    >
      {navItems.map((item, index) => (
        <Link
        key={index}
        to={item.path}
        style={{ textDecoration: "none", color: "white" }} // Added routing with Link
        >
        <Box
          key={index}
          display="flex"
          flexDirection={isNonMobile ? "row" : "column"}
          alignItems="center"
          justifyContent="center"
          sx={{ padding: "0.5rem" }}
        >
          {item.icon}
          {(isNonMobile || item.label !== "PreBook") && (
            <Typography
              variant="h6"
              sx={{
                fontSize: "0.9rem",
                padding: isNonMobile ? "0 0.5rem" : "0.5rem 0",
                textAlign: "center",
              }}
            >
              {item.label}
            </Typography>
          )}
        </Box>
        </Link>
      ))}
    </Box>
  );
}

export default Navbar;