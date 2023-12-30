import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CameraOutdoorIcon from '@mui/icons-material/CameraOutdoor';

import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  LocalParkingOutlined,
  FeedbackOutlined,
} from "@mui/icons-material";

import { FlexBetween } from ".";
import profileImage from "assets/profile.jpeg";

// Nav items
const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  
  {
    text: "User",
    icon: <Groups2Outlined />,
  },
  {
    text: "Locations",
    icon: <LocalParkingOutlined />,
  },
  {
    text: "Realtime",
    icon: <LocalParkingOutlined />,
    condition: (role) => role === "admin" || role === "superadmin" || role === "guard",
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Sales",
    icon: null,
    condition: (role) => role === "admin" || role === "superadmin",
  },
  
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
    condition: (role) => role === "admin" || role === "superadmin",

  },
  {
    text: "Feedback",
    icon: <FeedbackOutlined />,
    condition: (role) => role === "admin" || role === "superadmin",
    
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
    condition: (role) => role === "admin" || role === "superadmin",

  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
    condition: (role) => role === "admin" || role === "superadmin",

  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
    condition: (role) => role === "admin" || role === "superadmin",

  },
  {
    text: "Management",
    icon: null,
    condition: (role) => role === "admin" || role === "superadmin",

  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
    condition: (role) => role === "admin" || role === "superadmin",

  },
  {
    text: "CCTV",
    icon: <CameraOutdoorIcon  />,
    condition: (role) => role === "admin" || role === "superadmin",

  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
    condition: (role) => role === "admin" || role === "superadmin",

  },
];

// Sidebar
const Sidebar = ({
  abc,
  isNonMobile,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  // config
  var { name, role } = abc; 
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  
  //to retrieve the name and role after reload 
  if(name===undefined){
    name=localStorage.getItem('name')
    role=localStorage.getItem('role')
  }

  // set active path
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  // const { data, isLoading } = useGetnameQuery();
  return (
    <Box component="nav">
      {isSidebarOpen && (
        // Sidebar
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
            "& .MuiDrawer-paper::-webkit-scrollbar": {
              width: 0,
            },
          }}
        >
          <Box width="100%">
            {/* Brand Info */}
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography
                    variant="h1"
                    fontWeight="bold"
                    onClick={() => {
                      navigate("/dashboard");
                      setActive("dashboard");
                    }}
                    sx={{
                      cursor: "pointer",
                    }}
                    title="SPARK"
                  >
                    SPARK
                  </Typography>
                </Box>
                {/* Mobile Sidebar Toggle Icon */}
                {!isNonMobile && (
                  <IconButton
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    title="Close Sidebar"
                  >
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>

            {/* Sidebar items */}
            <List>
              {navItems.map(({ text, icon, condition }) => {
                if (!icon ) {
                  if (condition && !condition(role)) {
                    return null; // Skip rendering this item
                  }
                  return (
                    
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }

                // lowercase text
                const lcText = text.toLowerCase();

                if (condition && !condition(role)) {
                  return null; // Skip rendering this item
                }
            
                // name1=getname();
                return (
                  <ListItem key={text} title={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      {/* icon */}
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>

                      {/* text */}
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          {/* User */}
          <Box pb="1rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {name}
                  {/* Balaji prakasam */}
                  
                  
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {role}
                  {/* Admin */}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </FlexBetween>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};


export default Sidebar;
