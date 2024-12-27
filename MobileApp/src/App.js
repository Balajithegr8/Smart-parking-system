import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import Layout from "./scenes/layout/Layout";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import LoginRegister from './LoginRegister';
import Today from './scenes/Today/Today';
import Profile from './scenes/Profile/Profile';
import Bookings from './scenes/Bookings/Bookings';
import PreBook from './scenes/PreBook/PreBook';
import Report from './scenes/Report/Report';
import './App.css';

function App() {

  const mode = "dark";
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginRegister />} />
            <Route element={<Layout />}>
              <Route path="/today" element={<Today />} />
              <Route path="/report" element={<Report />} />
              <Route path="/prebook" element={<PreBook />} />
              <Route path="/bookings" element={<Bookings />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;