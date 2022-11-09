import React from "react";
import Box from "@mui/material/Box";
import Logo from "../Image/logo/logo.js";
import { styled, useTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import {
  AppBar,
  CssBaseline,
  Divider,
  List,
  ListItem,
  ListItemButton,
  SwipeableDrawer,
} from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";

const CustomAppBar = (props) => {
  const pages = [
    { id: "1", name: "Home", to: "#home" },
    { id: "2", name: "About Us", to: "#About" },
    { id: "3", name: "Features", to: "#Features" },
    { id: "4", name: "Shop", to: "#Shop" },
    { id: "5", name: "Contact Us", to: "#Contact" },
  ];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <BrowserRouter>
      <AppBar position="fixed" sx={{ background: "white", boxShadow: "none" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Logo />
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <Logo />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "flex",
                  md: "none",
                  justifyContent: "right",
                },
              }}
            >
              <CssBaseline />
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png"
                  alt="menu-icon"
                  style={{ width: "20px", height: "20px" }}
                />
              </IconButton>
              <SwipeableDrawer
                onClose={handleCloseNavMenu}
                sx={{
                  "& .MuiDrawer-paper": {
                    width: "100%",
                    height: "36%",

                    backgroundColor: "Black",
                  },
                }}
                align="center"
                anchor="Top"
                open={anchorElNav}
              >
                {pages.map((page) => (
                  <Link
                    to={page.to}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <MenuItem
                      sx={{ justifyContent: "center" }}
                      key={page.id}
                      onClick={() => handleCloseNavMenu(page)}
                    >
                      <Typography>{page.name}</Typography>
                    </MenuItem>
                  </Link>
                ))}
              </SwipeableDrawer>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                marginLeft: 5,
              }}
            >
              {pages.map((page) => (
                <Link to={page.to} smooth style={{ textDecoration: "none" }}>
                  <Button
                    key={page.id}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 1,
                      color: "black",
                      display: "block",
                      paddingX: 3,
                    }}
                  >
                    {page.name}
                  </Button>
                </Link>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                textDecoration: "none",
              }}
            >
              <Link to="#Contact" style={{ textDecoration: "none" }}>
                <Button
                  size="large"
                  style={{
                    boxShadow: "none",
                    borderRadius: "10px",
                    color: "white",
                    backgroundColor: "#ec5858",
                    paddingInline: "27px",
                    textDecoration: "none",
                    // height: "5vh",
                  }}
                >
                  Are You a Seller?
                  {/* Invite Friends */}
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </BrowserRouter>
  );
};
export default CustomAppBar;
