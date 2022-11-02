
import React from "react";
import CustomAppBar from "./Components/Toolbar/appBar";
import "./app.css";
import Contact from "./Components/form/Contact.jpg";

import shop1 from "./Components/Image/newShopsImg/shop1.png";
import shop2 from "./Components/Image/newShopsImg/shop2.png";
import shop3 from "./Components/Image/newShopsImg/shop3.png";
import Line from "./Components/Image/Bullets/Line.png";
import Home from "./Components/Views/Home/Home";
import Shops from "./Components/Views/Shops/Shops";
import Features from "./Components/Views/Features/Features";
import ContactUsForm from "./Components/form/ContactUsForm";

import About from "./Components/Views/About/About";
import Footer from "./Components/Views/Footer/Footer";

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
      <Footer />
    </>
  );
};

export default App;
