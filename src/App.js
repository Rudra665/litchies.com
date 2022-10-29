import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  List,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import CustomAppBar from "./Components/Toolbar/appBar";
import "./app.css";

// import { createTheme } from "@mui/material/styles";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Mobile from "./Components/Image/googlePlay/Mobile.png";
import gPlayButton from "./Components/Image/googlePlay/gPlayButton.png";
import fIcon1 from "./Components/Image/FeatureIcons/fIcon1.png";
import fIcon2 from "./Components/Image/FeatureIcons/fIcon2.png";
import fIcon3 from "./Components/Image/FeatureIcons/fIcon3.png";
import fIcon4 from "./Components/Image/FeatureIcons/fIcon4.png";
import fIcon5 from "./Components/Image/FeatureIcons/fIcon5.png";
import Abstrack from "./Components/Image/Shops/Abstrack.png";
import Abstrack2 from "./Components/Image/Shops/Abstrack2.png";
import Abstrack3 from "./Components/Image/Shops/Abstrack3.png";
import Abstrack4 from "./Components/Image/Shops/Abstrack4.png";
import fIcon6 from "./Components/Image/FeatureIcons/fIcon6.png";
import ListItem from "@mui/material/ListItem";
import Bullet from "./Components/Image/Bullets/bullet.png";
import image from "./Components/Image/image.png";
import { styled } from "@mui/material/styles";
import ContactUsForm from "./Components/form/ContactUsForm";
import Video1 from "./Components/Image/videoImages/vedio1.png";
import Video2 from "./Components/Image/videoImages/vedio2.png";
import Video3 from "./Components/Image/videoImages/vedio3.png";
import FeaturesCard from "./Components/Cards/Cards";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import { Container, flexbox, height, width } from "@mui/system";
import { NoEncryption, Phone } from "@mui/icons-material";
import SimplePaper from "./Components/Cards/shopsCard";
// import CustomButton from "./Components/CustomButtons/customButton";
const App = () => {
  const [status, setStatus] = React.useState(1);
  const [select, setSelect] = React.useState(false);
  const [shop, setShop] = React.useState("1");
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  const handleSelected = (event) => {
    setShop(event.target.value);
  };
  const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
      margin: theme.spacing(1),
      border: 0,
      "&.Mui-disabled": {
        border: 0,
      },
      "&:not(:first-of-type)": {
        borderRadius: 4,
      },
      "&:first-of-type": {
        borderRadius: 4,
      },
      "&.Mui-selected, &.Mui-selected:hover": {
        color: "white",
        backgroundColor: "#ec5858",
      },
    },
  }));
  const selected = (event) => {
    setShop(event.target.value);
    setSelect(true);
  };
  const heading = "";
  const footer = "";
  const imgUrl = "";
  const name2 = "";
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
              md={6}
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
            <Grid item md={6} lg={7}>
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
      <Container maxWidth="xl">
        <Box alignItems="center" marginY="15vh">
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item lg={6} xs={12}>
              <Box align="left" sx={{ lineHeight: "3vh" }}>
                <Typography style={{ color: "#ec5858", fontWeight: "600" }}>
                  What's Litchies?
                </Typography>
                <Typography
                  marginY={2}
                  variant="h3"
                  style={{ fontWeight: 600 }}
                >
                  Why Join to Litchies Shopping Network?
                </Typography>
                <Typography marginTop={5} color="grey">
                  Shopkeepers pay high marketing fees to acquire customers. Grow
                  your customer base with Litchies Digital Marketing solutions
                  and also take online booking.
                </Typography>
                <List
                  aria-labelledby="decorated-list-demo"
                  sx={{ "--List-decorator-size": "32px" }}
                >
                  <ListItem>
                    <ListItemDecorator>
                      <img src={Bullet}></img>
                    </ListItemDecorator>
                    Grow your organic customers base.
                  </ListItem>
                  <ListItem>
                    <ListItemDecorator>
                      <img src={Bullet}></img>
                    </ListItemDecorator>
                    Zero budget digital marketing.
                  </ListItem>
                  <ListItem>
                    <ListItemDecorator>
                      <img src={Bullet}></img>
                    </ListItemDecorator>
                    Increased earnings with advanced booking.
                  </ListItem>
                </List>
              </Box>
            </Grid>

            <Grid container lg={6} alignItems="center">
              <Grid container item lg={6} sm={6} xs={12} justifyContent="right">
                <Box p={2}>
                  <img src={Video1} style={{ borderRadius: "20px" }} />
                </Box>
              </Grid>
              <Grid container lg={6} sm={6} xs={12} justifyContent="">
                <Grid item lg={12} sm={12}>
                  <Box p={1}>
                    <img src={Video2} style={{ borderRadius: "20px" }} />
                  </Box>
                </Grid>
                <Grid item lg={12} sm={12}>
                  <Box p={1}>
                    <img src={Video3} style={{ borderRadius: "20px" }} />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <div className="second" style={{ paddingY: 4 }}>
        <Container>
          <Box>
            <Typography
              align="center"
              color="#ec5858"
              pb={1}
              style={{ fontWeight: "550" }}
            >
              Local Shops Community
            </Typography>
            <Typography align="center" variant="h4" style={{ fontWeight: 600 }}>
              Litchies Main Features
            </Typography>
            <Typography pt={1} align="center" style={{ textAlign: "center" }}>
              The wise man therefore always holds in these matters
              <br />
              to this principle of selection.
            </Typography>
          </Box>
          <Grid container sx={{ mt: 4 }}>
            <Grid item lg={6} sm={12}>
              <FeaturesCard
                heading="Free products photography and videography."
                footer="Litchies will do free Professional Photoshoots and Short Video"
                imgUrl={fIcon1}
              />
            </Grid>
            <Grid item lg={6} sm={12}>
              <FeaturesCard
                heading="Upload latest products seamlessly for your audience."
                footer="Get push notifications from shopkeepers directly."
                imgUrl={fIcon2}
              />
            </Grid>
            <Grid item lg={6} sm={12}>
              <FeaturesCard
                heading="Find customers interested in your products."
                footer="Checkout people liking products from your shop."
                imgUrl={fIcon3}
              />
            </Grid>
            <Grid item lg={6} sm={12}>
              <FeaturesCard
                heading="Take advanced booking of the products."
                footer="Customers can book products online for in store pickup later."
                imgUrl={fIcon4}
              />
            </Grid>
            <Grid item lg={6} sm={12}>
              <FeaturesCard
                heading="Online presence for small businesses."
                footer="Bring your small/home business online without high commission."
                imgUrl={fIcon5}
              />
            </Grid>
            <Grid item lg={6} sm={12}>
              <FeaturesCard
                heading="No hidden charges of any kind."
                footer="We don’t charge for our services in any way. Contact us today. "
                imgUrl={fIcon6}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div height="60%" justifyContent="center" alignItems="center">
        <Container sx={{ marginY: 5, my: 20 }}>
          <Box align="center">
            <Typography color="#ec5858" fontWeight={550}>
              Valuable Shops
            </Typography>
            <Typography variant="h4" fontWeight={700}>
              Our Active Shops
            </Typography>
            <Typography color="#656464" sx={{ mt: 2 }}>
              Our shopkeerps update their collection and prices regularly
              <br /> for the best shopping experience on LITCHIES.
            </Typography>

            <Container maxWidth="xs" sx={{ my: 4 }}>
              <Paper
                sx={{
                  backgroundColor: "rgba(255,228,228,1)",
                  borderRadius: 3,
                  boxShadow: "none",
                }}
              >
                <StyledToggleButtonGroup
                  size="medium"
                  fullWidth
                  value={status}
                  exclusive
                  onChange={handleChange}
                  aria-label="text alignment"
                >
                  <ToggleButton
                    value="1"
                    variant="contained"
                    sx={{ border: "none", mx: 2, borderRadius: 3 }}
                  >
                    Newest
                  </ToggleButton>
                  <ToggleButton
                    value="2"
                    sx={{ border: "none", mx: 2, borderRadius: 3 }}
                  >
                    Popular
                  </ToggleButton>
                  <ToggleButton
                    value="3"
                    sx={{ border: "none", mx: 2, borderRadius: 3 }}
                  >
                    Active
                  </ToggleButton>
                </StyledToggleButtonGroup>
              </Paper>
            </Container>
            <Box
              display="flex"
              marginY={5}
              value={shop}
              exclusive
              label="shops"
              onChange={handleChange}
              sx={{ justifyContent: "center" }}
            >
              <SimplePaper
                value={1}
                imgUrl={Abstrack}
                name="Rajat Jain Sterling"
                name2="Rajat Jain"
              />
              <SimplePaper
                value={2}
                imgUrl={Abstrack2}
                name="Delhi 6"
                name2="Ayush Upadhyay"
              />
              <SimplePaper
                value={3}
                imgUrl={Abstrack3}
                name="M K Enterprises"
                name2="Anuj Jain"
              />
              <SimplePaper
                value={4}
                imgUrl={Abstrack4}
                name="Time World"
                name2="Arjun Singh"
              />
              {/* <SimplePaper onCLick={selected} value={5} /> */}
            </Box>
          </Box>
        </Container>
      </div>
      <div className="third">
        <Container>
          <Grid container alignItems="center" justify="center">
            <Grid item lg={6} md={12} alignContent="center">
              <Box maxWidth="sm">
                <Box>
                  <Typography color="#ec5858" fontWeight={550}>
                    Get Our Aplication
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h4" fontWeight={"700"}>
                    You Can Easily Find Litchies!
                  </Typography>
                </Box>
                <Typography color="#ec5858">
                  Download litchies app from the play store today and start a
                  new local shopping experience while sitting at home.
                </Typography>
                <a href="">
                  <img
                    src={gPlayButton}
                    style={{
                      height: "60%",
                      width: "60%",
                    }}
                  ></img>
                </a>
              </Box>
            </Grid>
            <Grid item lg={6} justify="center">
              <Box
                sx={{
                  display: { md: "none", lg: "block" },
                }}
              >
                <img src={Mobile} alt="comm"></img>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Box marginY={20}>
        <Typography variant="h4">New Shops Joining Everyday</Typography>
      </Box>
      <Box>
        <ContactUsForm />
      </Box>
    </>
  );
};

export default App;
