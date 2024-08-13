import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Outlet } from "react-router-dom";
import CustomAccordianMenu from "../components/CustomAccordianMenu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { menuItems } from "../../data";
import { Typography } from "@mui/material";
const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

// eslint-disable-next-line react/prop-types
export default function Layout({ toggleTheme, isDarkMode }) {
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            sx={{ ml: "auto", opacity: open ? 1 : 0 }}
          >
            {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <IconButton onClick={handleDrawer}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              onClick={() => setOpen(true)}
              key={index}
              disablePadding
              sx={{
                display: "block",
              }}
            >
              <ListItemButton
                sx={{
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  py: 0,
                }}
                onClick={(e) =>
                  // console.log(
                  //   e.target.ariaLabel ? e.target.ariaLabel : e.target.innerText
                  // )
                  console.log(e.target)
                }
              >
                {open ? (
                  !item.subMenu && (
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <item.icon aria-label={item.title} color="primary" />
                    </ListItemIcon>
                  )
                ) : (
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <item.icon color="primary" />
                  </ListItemIcon>
                )}
                <ListItemText
                  primary={
                    item.subMenu ? (
                      <CustomAccordianMenu
                        menuTitle={item.title}
                        menuList={item.subMenu}
                        menuIcon={<item.icon color="primary" />}
                      />
                    ) : (
                      <Typography>{item.title}</Typography>
                    )
                  }
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
