import React from "react";
import { Container } from "@mui/system";
import Logo from "../../Image/logo/litchies_logo.png";
import Facebook from "../../Image/linkButtons/facebook.svg";
import LinkedIn from "../../Image/linkButtons/Linkedin.svg";
import Twitter from "../../Image/linkButtons/twitter.svg";
import Instagram from "../../Image/linkButtons/instagram.svg";
import IconButton from "@mui/material/IconButton";
import {
  Box,
  Grid,
  Hidden,
  Link,
  List,
  Paper,
  Select,
  Typography,
} from "@mui/material";
const Footer = () => {
  return (
    <>
      <div className="footer" style={{ width: "100%" }}>
        <Container maxWidth="xl">
          <Grid container alignItems="center" justifyContent="center">
            <Hidden mdDown>
              <Grid item lg={6} xs={12} align="left" mt={2}>
                <img src={Logo} width="20%" height="100%"></img>
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Grid item lg={4} xs={12} align="center" mt={2}>
                <img src={Logo} width="30%" height="100%"></img>
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Grid item lg={6} xs={12} align="center" m={2}>
                <IconButton>
                  <img src={Facebook}></img>
                </IconButton>
                <IconButton>
                  <img src={Instagram}></img>
                </IconButton>
                <IconButton>
                  <img src={Twitter}></img>
                </IconButton>
                <IconButton>
                  <img src={LinkedIn}></img>
                </IconButton>
              </Grid>
            </Hidden>
            <Hidden mdDown>
              <Grid item lg={3} xs={12} align="end" m={2}>
                <IconButton>
                  <img src={Facebook}></img>
                </IconButton>
                <IconButton>
                  <img src={Instagram}></img>
                </IconButton>
                <IconButton>
                  <img src={Twitter}></img>
                </IconButton>
                <IconButton>
                  <img src={LinkedIn}></img>
                </IconButton>
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </div>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          backgroundColor: "#ec5858",
          padding: 2,
        }}
      >
        <Typography color="#ffff">
          copyright <span>&copy;</span> 2022
        </Typography>
      </div>
    </>
  );
};

export default Footer;
