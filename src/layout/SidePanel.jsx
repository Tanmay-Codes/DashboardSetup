import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ExpandMore as ExpandMoreIcon,
  Inbox as InboxIcon,
  Mail as MailIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export const SidePanel = ({ drawerWidth, handleDrawerToggle, drawerOpen }) => {
  const CustomAccordion = styled(Accordion)(() => ({
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
    "& .MuiAccordionSummary-root": {
      padding: 16,
    },
    "& .MuiAccordionSummary-content": {
      margin: 0,
    },
    "& .MuiAccordionDetails-root": {
      padding: 0,
    },
  }));
  const drawer = (
    <div>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <List>
        {["Projects", "Clients", "Contributors", "Finance", "Profile"].map(
          (text) => (
            <CustomAccordion
              // style={{ boxShadow: "none", borderBottom: 0 }}
              key={text}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{text}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {["Overview", "List", "Details", "Reports", "Settings"].map(
                    (item, i) => (
                      <ListItem
                        type="button"
                        key={item}
                        component={Link}
                        to={`/${text.toLowerCase()}/${item.toLowerCase()}`}
                      >
                        <ListItemIcon>
                          {i % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                    )
                  )}
                </List>
              </AccordionDetails>
            </CustomAccordion>
          )
        )}
      </List>
    </div>
  );

  return (
    <Drawer
      variant="persistent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      anchor="left"
      open={drawerOpen}
    >
      {drawer}
    </Drawer>
  );
};
