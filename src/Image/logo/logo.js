import { Box } from "@mui/material";
import React from "react";
import litchies_logo from "../logo/litchies_logo.png";
import "./logo.css";
const Logo = () => {
  return (
    <Box className="logo">
      <img src={litchies_logo} alt="logo" />
    </Box>
  );
};

export default Logo;
