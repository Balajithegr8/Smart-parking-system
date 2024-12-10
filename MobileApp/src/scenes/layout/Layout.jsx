import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 922px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box
      display={isNonMobile ? "flex" : "block"}
      width="100%"
      height="100%"
      sx={{
        minHeight: "100vh", // Ensure it covers the full viewport height
      }}
    >
      {isNonMobile && (
        <Box width="200px" bgcolor="grey.800">
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </Box>
      )}
      <Box flexGrow={1}>
        <Outlet />
      </Box>
      {!isNonMobile && (
        <Box position="fixed" bottom={0} width="100%" bgcolor="grey.800">
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </Box>
      )}
    </Box>
  );
};

export default Layout;