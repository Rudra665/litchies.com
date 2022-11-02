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
import React from "react";
import CustomAppBar from "./Components/Toolbar/appBar";
import "./app.css";
import Contact from "./Components/form/Contact.jpg";
import Logo from "./Components/Image/logo/litchies_logo.png";
import Facebook from "./Components/Image/linkButtons/facebook.svg";
import LinkedIn from "./Components/Image/linkButtons/Linkedin.svg";
import Twitter from "./Components/Image/linkButtons/twitter.svg";
import Instagram from "./Components/Image/linkButtons/instagram.svg";
import IconButton from "@mui/material/IconButton";
import shop1 from "./Components/Image/newShopsImg/shop1.png";
import shop2 from "./Components/Image/newShopsImg/shop2.png";
import shop3 from "./Components/Image/newShopsImg/shop3.png";
import Line from "./Components/Image/Bullets/Line.png";
// import { createTheme } from "@mui/material/styles";
import Home from "./Components/Views/Home/Home";
import Shops from "./Components/Views/Shops/Shops";
import Features from "./Components/Views/Features/Features";
import ContactUsForm from "./Components/form/ContactUsForm";
import { Container } from "@mui/system";
import About from "./Components/Views/About/About";

// import CustomButton from "./Components/CustomButtons/customButton";
const App = () => {
  const [open, setOpen] = React.useState(false);
  const [shop, setShop] = React.useState("1");

  const heading = "";
  const footer = "";
  const imgUrl = "";
  const name2 = "";
  return (
    <>
      <CustomAppBar />
      <Home />
      <About />
      <Features />

      <Shops />

      {/* <Container>
        <Box marginY={20}>
          <Typography variant="h4" align="center" pb={5}>
            New Shops Joining Everyday
          </Typography>

          <Box>
            <Grid container>
              <Grid item lg={4} sm={12}>
                <Box sx={{}}>
                  <img src={shop1}></img>
                </Box>
                <Box my={2} display="flex">
                  <Box>
                    <img src={Line}></img>
                  </Box>
                  <Box mx={2} maxWidth="sm">
                    <Typography fontWeight="600">
                      It Does Not Matter Hows Slowly go as Long
                    </Typography>
                    <a href="#" style={{ textDecoration: "none" }}>
                      <Typography my={3} fontFamily="inter" color="grey">
                        Continue Reading
                      </Typography>
                    </a>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={4} sm={12}>
                <Box>
                  <img src={shop2}></img>
                </Box>
                <Box my={2} display="flex">
                  <Box>
                    <img src={Line}></img>
                  </Box>
                  <Box mx={2} maxWidth="xs">
                    <Typography fontWeight="600">
                      Netbook Network Added New Photo Filter
                    </Typography>
                    <a href="#" textDecoration="none">
                      <Typography my={3} color="grey" fontFamily="inter">
                        Continue Reading
                      </Typography>
                    </a>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={4} sm={12}>
                <Box>
                  <img src={shop3}></img>
                </Box>
                <Box my={2} display="flex">
                  <Box>
                    <img src={Line}></img>
                  </Box>
                  <Box mx={2} maxWidth="sm">
                    <Typography fontWeight="600">
                      We Optimised Netbooks Better Navigation
                    </Typography>
                    <a href="#" textDecoration="none">
                      <Typography my={3} fontFamily="inter" color="grey">
                        Continue Reading
                      </Typography>
                    </a>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container> */}
      <div style={{ background: { Contact } }}>
        <ContactUsForm />
      </div>
      <div className="footer">
        <Container maxWidth="xl">
          <Grid container alignItems="center" justifyContent="center">
            <Hidden mdDown>
              <Grid item lg={3} xs={12} align="left" mt={2}>
                <img src={Logo} width="30%" height="100%"></img>
              </Grid>
            </Hidden>
            <Hidden smUp>
              <Grid item lg={4} xs={12} align="center" mt={2}>
                <img src={Logo} width="40%" height="100%"></img>
              </Grid>
            </Hidden>
            <Grid item container lg={4} xs={12} justifyContent="end" p={2}>
              <Hidden mdUp>
                <Grid item lg={12} xs={12} align="center">
                  <Typography variant="h6" color="white">
                    Contact Us
                  </Typography>
                </Grid>
                <Grid item lg={12} xs={12}>
                  <Box>
                    <Typography align="center" color="white">
                      Mobile:
                    </Typography>
                  </Box>
                  <Box align="center">
                    <Typography align="center" color="white">
                      Email:
                    </Typography>
                  </Box>
                </Grid>
              </Hidden>
              <Hidden mdDown>
                <Grid item lg={7} xs={12}>
                  <Typography variant="h6" color="white">
                    Contact Us
                  </Typography>
                </Grid>
                <Grid item lg={7} xs={7}>
                  <Box>
                    <Typography color="white">Mobile: </Typography>
                  </Box>
                  <Box>
                    <Typography color="white">Email: </Typography>
                  </Box>
                </Grid>
              </Hidden>
            </Grid>
            <Hidden smUp>
              <Grid item lg={3} xs={12} align="center" m={2}>
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

export default App;
