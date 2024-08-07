// src/pages/Login.jsx

import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography, Box } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your authentication logic here
    navigate("/projects");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4">Login</Typography>
      <TextField label="Username" margin="normal" />
      <TextField label="Password" type="password" margin="normal" />
      <Button variant="contained" onClick={handleLogin} sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
