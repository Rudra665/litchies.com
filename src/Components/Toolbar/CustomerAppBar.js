import React from "react";
import Box from "@mui/material/Box";
import Logo from "../Image/logo/logo.js";

import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

import { AppBar, CssBaseline, Hidden, SwipeableDrawer } from "@mui/material";
import { HashLink as MyLink } from "react-router-hash-link";
import { fontSize, fontWeight } from "@mui/system";

const CustomAppBar = (props) => {
  const pages = [
    { id: "1", name: "Home", to: "#home" },
    { id: "2", name: "About Us", to: "#About" },
    { id: "3", name: "Features", to: "#Features" },
    { id: "4", name: "Products", to: "#Products" },
    { id: "5", name: "Contact Us", to: "#Contact" },
  ];
  const Navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleClick = () => {
    Navigate("/Seller");
  };

  return (
    <>
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
                    height: "fit-content",

                    backgroundColor: "Black",
                  },
                }}
                align="center"
                anchor="top"
                open={anchorElNav}
              >
                {pages.map((Page) => (
                  <MyLink
                    key={Page.toString()}
                    smooth
                    to={Page.to}
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                  >
                    <MenuItem
                      sx={{ justifyContent: "center" }}
                      key={Page.id}
                      onClick={() => handleCloseNavMenu(Page)}
                    >
                      <Typography>{Page.name}</Typography>
                    </MenuItem>
                  </MyLink>
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
                <MyLink
                  to={page.to}
                  key={page.toString()}
                  smooth
                  style={{ textDecoration: "none" }}
                >
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
                </MyLink>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                textDecoration: "none",
              }}
            >
              <Button
                size="large"
                style={{
                  boxShadow: "none",
                  borderRadius: "10px",
                  color: "white",
                  backgroundColor: "#ec5858",
                  paddingInline: "27px",
                  textDecoration: "none",
                }}
                onClick={handleClick}
              >
                Are You a Seller?
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default CustomAppBar;
