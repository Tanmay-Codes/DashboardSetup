// src/main.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import { lightTheme, darkTheme } from "./theme";

import { darkTheme, lightTheme } from "./theme";
import Layout from "./layout";
import Projects from "./pages/Projects";
import LoginSignup from "./pages/LoginSignup";
import Clients from "./pages/Clients";

const App = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route
            path="/"
            element={
              <Layout toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            }
          >
            <Route path="dashboard" element={<Projects />} />
            <Route path="clients" element={<Clients />} />
            {/*
            <Route path="contributors" element={<Contributors />} />
            <Route path="finance" element={<Finance />} />
            <Route path="profile" element={<Profile />} /> */}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
