import { Box } from "@mui/material";
import LoginSignUpCard from "./LoginSignUpCard";
import "./pattern.css";
const Signup = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "auto",
        display: "flex",
      }}
    >
      <div className="pattern">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
      </div>
      <Box flex={1}>
        <LoginSignUpCard />
      </Box>
    </Box>
  );
};

export default Signup;
