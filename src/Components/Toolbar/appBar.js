import React from "react";
import Box from "@mui/material/Box";
import Logo from "../Image/logo/logo.js";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
// import CustomButton fro "../CustomButtons/customButton.js";
import { AppBar } from "@mui/material";

const CustomAppBar = () => {
  const pages = ["Home", "Products", "Pricing", "Blog"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ background: "white", boxShadow: "none", position: "sticky" }}>
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
              display: { xs: "flex", md: "none", justifyContent: "right" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuTwoToneIcon /> */}
              <img
                src="https://img.icons8.com/ios-filled/50/000000/menu--v1.png"
                alt="menu-icon"
                style={{ width: "20px", height: "20px" }}
              />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              marginLeft: 5,
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 1, color: "black", display: "block", paddingX: 3 }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              size="large"
              style={{
                boxShadow: "none",
                borderRadius: "10px",
                color: "white",
                backgroundColor: "#ec5858",
                paddingInline: "27px",
                // height: "5vh",
              }}
            >
              Are You Seller?
              {/* Invite Friends */}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default CustomAppBar;
