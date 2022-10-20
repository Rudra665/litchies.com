import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import CustomAppBar from "./Components/Toolbar/appBar";
import "./app.css";
import image from "./Components/Image/image.png";
import contactUsImage from "./Components/Image/contactUs/contactUsImage.png";
import ContactUsForm from "./Components/form/ContactUsForm";
import { Container } from "@mui/system";
// import CustomButton from "./Components/CustomButtons/customButton";
const App = () => {
  return (
    <>
      <CustomAppBar />
      {/* <Divider color="aliceblue" position="sticky" /> */}

      <div
        className="header"
        style={{
          height: "90vh",
          width: "100%",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={2}
            sx={{
              mt: "3vh",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Grid
              item
              xs={12}
              md={5}
              lg={5}
              sx={{ mt: 4, justifyContent: "center" }}
            >
              <Box alignItems={"center"}>
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "none",
                    color: "#ec5858",
                    // borderColor: "",
                    backgroundColor: "#Fdeeee",
                    // borderColor: "#ec5858",
                    width: "180px",
                    height: "4vh",
                  }}
                >
                  Litchies Shopping
                </Button>
                <h1
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "600",
                    fontSize: "7.5vh",
                    lineHeight: "6.5vh",
                  }}
                >
                  Get discovered by customers easily.
                </h1>
                <p
                  style={{
                    fontWeight: "400",
                    fontSize: "2vh",
                    lineHeight: "3vh",
                    fontFamily: "Inter",
                    fontStyle: "normal",
                  }}
                >
                  Join Litchies to grow business and promote the products
                  without paying high fees.
                </p>
                <Box>
                  <Button
                    variant="contained"
                    size="large"
                    style={{
                      boxShadow: "none",
                      borderRadius: "10px",
                      color: "white",
                      backgroundColor: "#ec5858",
                      marginRight: 5,

                      width: "160px",
                      // height: "5vh",
                    }}
                  >
                    Join Litchies
                  </Button>
                  <Button
                    size="large"
                    style={{
                      boxShadow: "none",
                      borderRadius: "10px",
                      color: "white",
                      backgroundColor: "#ec5858",
                      width: "160px",
                      // height: "5vh",
                    }}
                  >
                    Invite Friends
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item md={7} lg={7}>
              <Box
                sx={{
                  display: { xs: "none", md: "flex", lg: "block" },
                }}
              >
                <img src={image} alt="comm" width="100%" height="auto"></img>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Box style={{ background: `url(${contactUsImage})` }}>
        <ContactUsForm />
      </Box>
    </>
  );
};

export default App;
