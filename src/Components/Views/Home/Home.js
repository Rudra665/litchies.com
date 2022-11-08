import { Button, Grid } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ShareModal from "../../Modal/ShareModal";
import image from "../../Image/image.png";
import "./Home.css";
import "aos/dist/aos.css";
import Aos from "aos";
const Home = () => {
  Aos.init({
    delay: "2",
    duration: "1400",
    ease: "ease",
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div
      data-aos-anchor="Bottom"
      id="home"
      className="header"
      alignItems="center"
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
            mt: "3vh",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{ mt: 4, justifyContent: "center" }}
          >
            <Box
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              alignItems={"center"}
            >
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
                Join Litchies to grow business and promote the products without
                paying high fees.
              </p>
              <Box>
                <a
                  href="https://play.google.com/store/apps/details?id=com.atflabs.litchies"
                  target={"_blank"}
                  style={{ textDecoration: "none" }}
                >
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
                </a>
                <Button
                  size="large"
                  onClick={handleOpen}
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
                <ShareModal open={open} onClose={handleClose}></ShareModal>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} lg={6} xs={12}>
            <Box
              data-aos="zoom-in"
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
  );
};
export default Home;
