/* eslint-disable react/prop-types */
import { useTheme } from "@emotion/react";
import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemIcon,
  //   ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
const CustomAccordianMenu = ({ menuTitle, menuList, menuIcon }) => {
  const theme = useTheme();

  const CustomAccordion = styled(Accordion)(() => ({
    boxShadow: "none",
    "&:before": {
      display: "none",
    },
    "& .MuiAccordionSummary-root": {
      padding: 0,
    },
    "& .MuiAccordionSummary-content": {
      margin: 0,
    },
    "& .MuiAccordionDetails-root": {
      padding: 0,
    },
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.background.default
        : "inherit",
  }));
  return (
    <CustomAccordion>
      <AccordionSummary
        sx={{ minHeight: 22, display: "flex" }}
        expandIcon={<ExpandMore />}
      >
        <Box marginRight={3}>{menuIcon}</Box>
        <div>
          <Typography>{menuTitle}</Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {menuList.map((item, i) => (
            <ListItem type="button" key={i} component={Link} to={item.path}>
              {
                <ListItemIcon>
                  <item.icon color="primary" />
                </ListItemIcon>
              }
              <ListItemText
                primary={item.title}
                sx={{
                  ":hover": { color: "red" },
                  color: theme.palette.primary.main,
                }}
              />
            </ListItem>
          ))}
        </List>
      </AccordionDetails>
    </CustomAccordion>
  );
};

export default CustomAccordianMenu;
