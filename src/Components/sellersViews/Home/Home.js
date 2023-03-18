import { Button, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ShareModal from "../../Modal/ShareModal";
import image from "../../Image/image.png";
import "./Home.css";
import "aos/dist/aos.css";
import Aos from "aos";
const Home = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (

    <div
      id="home"
      className="header"
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          sx={{
            mt: "auto",
            justifyContent: "space-around",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            alignItems="center"
            sx={{ mt: 4, justifyContent: "center", display: "flex" }}
          >
            <Box justifyContent={"center"} sx={{ mt: 3 }} >
              <h1
                data-aos="fade-up"
                style={{
                  fontFamily: "Inter",
                  fontWeight: "600",
                  fontSize: "7.5vh",
                  lineHeight: "7.5vh",
                }}
              >
                Get Discovered by Customers Easily.
              </h1>
              <p
                data-aos="fade-up"
                data-aos-delay="500"
                style={{
                  fontWeight: "400",
                  fontSize: "2vh",
                  lineHeight: "3vh",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                }}
              >
                Join Litchies to grow business and promote the products without
                paying high fees.
              </p>
              <Box>
                <a
                  href="https://play.google.com/store/apps/details?id=com.litchies"
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    data-aos="fade-up"
                    data-aos-delay="1000"
                    variant="contained"
                    size="large"
                    style={{
                      boxShadow: "none",
                      borderRadius: "10px",
                      color: "white",
                      backgroundColor: "#ec5858",
                      margin: 5,

                      width: "160px",
                      // height: "5vh",
                    }}
                  >
                    Join Litchies
                  </Button>
                </a>
                <Button
                  data-aos="fade-up"
                  data-aos-delay="1500"
                  size="large"
                  onClick={handleOpen}
                  style={{
                    boxShadow: "none",
                    borderRadius: "10px",
                    color: "white",
                    backgroundColor: "#ec5858",
                    width: "160px",
                    margin: 5,

                    // height: "5vh",
                  }}
                >
                  Invite Friends
                </Button>
                <ShareModal open={open} onClose={handleClose}></ShareModal>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} lg={6} xs={12}>
            <Box
              sx={{
                display: { xs: "none", md: "flex", lg: "block" },
              }}
            >
              <img
                data-aos="zoom-in"
                data-aos-delay="1500"
                src={image}
                alt="comm"
                width="100%"
                height="auto"
              ></img>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
export default Home;
