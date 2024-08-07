/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/Layout.jsx

import { Toolbar, IconButton, Box } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SidePanel } from "./SidePanel";

const drawerWidth = 240;

const Layout = ({ toggleTheme, isDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box>
      <SidePanel
        drawerWidth={drawerWidth}
        drawerOpen={drawerOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Toolbar>
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
          <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: "auto" }}>
            {isDarkMode ? "Light" : "Dark"} Theme
          </IconButton>
        </IconButton>
      </Toolbar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: "margin 0.3s ease",
          marginLeft: drawerOpen ? `${drawerWidth}px` : "0px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
