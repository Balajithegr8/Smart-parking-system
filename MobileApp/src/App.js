import React from 'react';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { themeSettings } from "./theme";
import Layout from "./scenes/layout/Layout";
import { BrowserRouter as Router, Route, Switch,Routes } from 'react-router-dom';
import LoginRegister from './LoginRegister';
import Dashboard from './Dashboard';
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
          <Route path="/" element={<LoginRegister/>} />
            <Route element={<Layout />}>
              <Route path="/userdashboard" element={<Dashboard/>} />
            </Route>
          
        </Routes>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;