import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
// Theme
import { themeSettings } from "theme";

// Scenes
import {
  Layout,
  Dashboard,
  Products,
  Slots,
  Realtime,
  Locations,
  User,
  Transactions,
  Overview,
  Daily,
  Monthly,
  Breakdown,
  CCTV,
  Admin,
  Performance,
} from "scenes";

// App
const App = () => {
  const [user,setLoginUser]= useState({})
  const abc=user
  
  // Dark/Light mode
  const mode = useSelector((state) => state.global.mode);
  // theme setting
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    
    <div className="app">
      <BrowserRouter>
        {/* Theme Provider */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* Routes */}
              <Route exact path="/" element={<Register />} />
              <Route path="/login" element={<Login setLoginUser={setLoginUser} />} />
              <Route element={<Layout abc={abc}/>}>
              <Route path="/dashboard" element={<Dashboard abc={abc}/> } />
              <Route path="/feedback" element={<Products />} /> 
              <Route path="/user" element={<User />} />
              <Route path="/slots" element={<Slots />} />
              <Route path="/realtime" element={<Realtime />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/cctv" element={<CCTV />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
          </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
