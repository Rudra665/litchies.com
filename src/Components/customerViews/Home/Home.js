import { Button, Grid, Hidden } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import ShareModal from "../../Modal/ShareModal";
import image from "../../Image/image.png";
import "./Home.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useNavigate } from "react-router-dom";
const Home = () => {
  Aos.init({
    duration: "500",
    ease: "ease-in",
  });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const Navigate = useNavigate()
  const handleClick = () => {
    Navigate("/Seller");
  }
  return (
    <div

      id="home"
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
            mt: "12vh",
            justifyContent: "space-around",
          }}
        >
          <Grid
            item
            display="flex"
            xs={12}
            md={6}
            lg={6}
            sx={{ mt: 4, alignItems: "center", justifyContent: "center" }}
          >




            <Box justifyContent="center" alignItems="center">
              <Button

                data-aos="fade-up"
                style={{
                  boxShadow: "none",
                  borderRadius: "20px",
                  color: "#ec5858",

                  paddingInline: "15px",
                  textDecoration: "none",
                  backgroundColor: "#fdeeee",
                  height: "3.65vh",
                  fontSize: "16px",

                }}
                onClick={handleClick}
              >
                Are You A Seller ?
              </Button>
              <h1
                data-aos="fade-up"
                style={{
                  fontFamily: "Inter",
                  fontWeight: "600",
                  fontSize: "7.5vh",
                  lineHeight: "7.5vh",
                }}
              >
                Your local shopping solution.
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
                Join Litchies to checkout offerings of your favorite shops in
                the city.
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
                      marginRight: 5,
                      marginBlock: 4,
                      width: "171px",
                      // height: "5vh",
                    }}
                  >
                    Download App
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
                    marginRight: 5,
                    marginBlock: 4,
                    width: "171px",
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
