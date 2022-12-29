import React from "react";
import { Container } from "@mui/system";
import Logo from "../../Image/logo/litchies_logo.png";
import Facebook from "../../Image/linkButtons/facebook.svg";
import LinkedIn from "../../Image/linkButtons/Linkedin.svg";
import Twitter from "../../Image/linkButtons/twitter.svg";
import Instagram from "../../Image/linkButtons/instagram.svg";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';
import IconButton from "@mui/material/IconButton";
import {
  Box,
  Button,
  Grid,
  Hidden,
  Link,
  List,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const Footer = () => {


  const Navigate = useNavigate()

  const handleClick = () => {
    Navigate("/TermsCondition");
  }

  return (
    <>
      <div className="footer" style={{ width: "100%" }}>
        <Container maxWidth="xl">
          <Grid container justifyContent="center">
            <Hidden mdDown>
              <Grid item lg={4} xs={12} align="left" mt={4}>
                <img src={Logo} width="200vh" ></img>
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Grid item lg={4} xs={12} align="center" mt={2}>
                <img src={Logo} width="200vh" ></img>
              </Grid>
            </Hidden>
            <Hidden smDown mdUp>
              <Grid item lg={4} xs={12} align="center" mt={2}>
                <img src={Logo} width="200vh"></img>
              </Grid>
            </Hidden>
            <Hidden mdDown>
              <Grid item lg={3} xs={12} m={2}>
                <Box display="grid" justifyContent="left">
                  <Typography variant="h6" fontWeight="700" color="black" >Contact</Typography>
                  <Box display="flex" justifyContent="left">
                    <Box display="grid">
                      <ApartmentIcon sx={{ fontSize: "20px", color: "white", mx: 1, mt: 2, fontWeight: "500" }} />
                      <EmailIcon sx={{ fontSize: "20px", color: "white", mx: 1, fontWeight: "500" }} />
                      <LocalPhoneIcon sx={{ fontSize: "20px", color: "white", mx: 1, fontWeight: "500" }} />
                    </Box>
                    <Box display="block">
                      <a href="https://atf-labs.com/" target={"_blank"}><Typography sx={{ color: "black", mb: 1, ml: 3, mt: 2, '& :hover': { color: "red" } }}>www.atf-labs.com</Typography></a>
                      <Typography sx={{ color: "black", mb: 1, ml: 3 }}>litchies2022@gmail.com</Typography>
                      <Typography sx={{ color: "black", mb: 1, ml: 3 }}>8266847277</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid></Hidden >
            <Hidden smUp>
              <Grid item lg={4} xs={12} m={2}>
                <Box display="grid" justifyContent="center">
                  <Typography variant="h6" fontWeight="700" color="black" align="center">Contact</Typography>
                  <Box display="flex" >
                    <Box display="grid">
                      <ApartmentIcon sx={{ fontSize: "20px", color: "white", mx: 1, mt: 2, fontWeight: "500" }} />
                      <EmailIcon sx={{ fontSize: "20px", color: "white", mx: 1, fontWeight: "500" }} />
                      <LocalPhoneIcon sx={{ fontSize: "20px", color: "white", mx: 1, fontWeight: "500" }} />
                    </Box>
                    <Box display="block">
                      <a href="https://atf-labs.com/" target={"_blank"}> <Typography align="left" sx={{ color: "black", mb: 1, ml: 3, mt: 2, '& :hover': { color: "red" } }}>www.atf-labs.com</Typography></a>
                      <Typography align="left" sx={{ color: "black", mb: 1, ml: 3 }}>litchies2022@gmail.com</Typography>
                      <Typography align="left" sx={{ color: "black", mb: 1, ml: 3 }}>8266847277</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid></Hidden>
            <Hidden smDown mdUp>
              <Grid item lg={4} xs={12} align="center" m={2}>
                <Box display="grid" justifyContent="center">
                  <Typography variant="h6" sx={{ fontWeight: "700", color: "black", mb: "2vh" }} align="center">Contact</Typography>
                  <Box display="flex" >
                    <Box display="grid">
                      <ApartmentIcon sx={{ fontSize: "20px", color: "white", mx: 1, mt: 2, fontWeight: "500" }} />
                      <EmailIcon sx={{ fontSize: "20px", color: "white", mx: 1, fontWeight: "500" }} />
                      <LocalPhoneIcon sx={{ fontSize: "20px", color: "white", mx: 1, fontWeight: "500" }} />
                    </Box>
                    <Box display="block">
                      <a href="https://atf-labs.com/" target={"_blank"}  > <Typography align="left" sx={{ color: "black", mb: 1, ml: 3, mt: 2, textDecoration: "none", '& :hover': { color: "red" } }}>www.atf-labs.com</Typography></a>
                      <Typography align="left" sx={{ color: "black", mb: 1, ml: 3 }}>litchies2022@gmail.com</Typography>
                      <Typography align="left" sx={{ color: "black", mb: 1, ml: 3 }}>8266847277</Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid></Hidden>
            <Hidden smUp>
              <Grid item lg={4} xs={12} align="center" m={2}>
                <a href="https://www.instagram.com/litchies_official/" target="_blank"><IconButton>
                  <img src={Facebook}></img>
                </IconButton></a>
                <a href='https://www.facebook.com/profile.php?id=100088295311242' target="_blank"><IconButton>
                  <img src={Instagram}></img>
                </IconButton></a>

                <IconButton>
                  <img src={LinkedIn}></img>
                </IconButton>
              </Grid>
            </Hidden>

            <Hidden mdDown>
              <Grid item lg={3} xs={12} align="end" m={2}>
                <a href="https://www.instagram.com/litchies_official/" target="_blank"><IconButton>
                  <img src={Facebook}></img>
                </IconButton></a>
                <a href='https://www.facebook.com/profile.php?id=100088295311242' target="_blank"><IconButton>
                  <img src={Instagram}></img>
                </IconButton></a>

                <IconButton>
                  <img src={LinkedIn}></img>
                </IconButton>
              </Grid>
            </Hidden>
            <Hidden smDown mdUp>
              <Grid item lg={3} xs={12} align="center" m={2}>
                <a href="https://www.instagram.com/litchies_official/" target="_blank"><IconButton>
                  <img src={Facebook}></img>
                </IconButton></a>
                <a href='https://www.facebook.com/profile.php?id=100088295311242' target="_blank"><IconButton>
                  <img src={Instagram}></img>
                </IconButton></a>

                <IconButton>
                  <img src={LinkedIn}></img>
                </IconButton>
              </Grid>
            </Hidden>

          </Grid>
          <Grid item lg={3} xs={12} align="end"  >
            <Hidden mdDown>
              <Button onClick={handleClick} sx={{ mr: "6.7vw", color: "#303030", cursor: "pointer", fontSize: "12px" }}><u>Terms & Conditions</u></Button>
            </Hidden>
            <Hidden smUp>
              <Button onClick={handleClick} sx={{ mr: "25vw", color: "#303030", cursor: "pointer", fontSize: "12px" }}><u>Terms & conditions</u></Button>
            </Hidden>
          </Grid>
        </Container >
      </div >
      <div
        style={{
          width: "100%",
          textAlign: "center",
          backgroundColor: "#ec5858",
          padding: 2,
        }}
      >
        <Typography color="#ffff">
          Copyright <span>&copy;</span> 2022
        </Typography>
      </div>
    </>
  );
};

export default Footer;
