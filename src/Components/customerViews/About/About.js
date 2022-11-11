import { ListItemDecorator } from "@mui/joy";
import { Grid, Hidden, List, ListItem, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Bullet from "../../Image/Bullets/bullet.png";
import Video1 from "../../Image/videoImages/vedio1.png";
import Video2 from "../../Image/videoImages/vedio2.png";
import Video3 from "../../Image/videoImages/vedio3.png";
Aos.init();
const featuresImage = (justifyContent, pl) => {
  return (
    <Grid container item alignItems="center" justifyContent={justifyContent}>
      <Box p={1} pl={pl} data-aos="flip-up" data-aos-delay="500">
        <img src={Video1} style={{ borderRadius: "20px" }} />
      </Box>
      <Grid container item lg={6} sm={6} xs={12} justifyContent="center">
        <Grid item sm={12}>
          <Box data-aos="flip-up" data-aos-delay="1000">
            <img src={Video2} style={{ borderRadius: "20px" }} />
          </Box>
        </Grid>
        <Grid item sm={12}>
          <Box data-aos="flip-up" data-aos-delay="1500">
            <img src={Video3} style={{ borderRadius: "20px" }} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

const About = () => {
  return (
    <div
      id="About"
      data-aos-anchor-palcement="up"
      style={{ width: "100%", paddingBlock: "12px" }}
    >
      <Container maxWidth="xl">
        <Box marginY="15vh">
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item lg={6} xs={12}>
              <Box align="left" sx={{ lineHeight: "3vh" }}>
                <Typography
                  data-aos="fade-up"
                  style={{ color: "#ec5858", fontWeight: "600" }}
                >
                  What's Litchies?
                </Typography>
                <Typography
                  data-aos="fade-up"
                  data-aos-delay="500"
                  marginY={2}
                  variant="h3"
                  style={{ fontWeight: 600 }}
                >
                  Why Join Litchies Shopping Network?
                </Typography>
                <Typography
                  data-aos="fade-up"
                  data-aos-delay="1000"
                  marginTop={5}
                  color="grey"
                >
                  Browse and check latest collections of your favorite shops in
                  the city. Explore the products before anyone else in the city
                  and book them in advanced.
                </Typography>
                <List
                  aria-labelledby="decorated-list-demo"
                  sx={{ "--List-decorator-size": "32px" }}
                >
                  <ListItem data-aos="fade-up" data-aos-delay="1200">
                    <ListItemDecorator>
                      <img src={Bullet}></img>
                    </ListItemDecorator>
                    Clothing Shops.
                  </ListItem>
                  <ListItem data-aos="fade-up" data-aos-delay="1400">
                    <ListItemDecorator>
                      <img src={Bullet}></img>
                    </ListItemDecorator>
                    Home Decor and Furniture
                  </ListItem>
                  <ListItem data-aos="fade-up" data-aos-delay="1600">
                    <ListItemDecorator>
                      <img src={Bullet}></img>
                    </ListItemDecorator>
                    Electronics
                  </ListItem>
                </List>
              </Box>
            </Grid>

            <Grid container item lg={6} xs={12} display="flex">
              {/* For Web */}
              <Hidden mdDown>{featuresImage("right", 0)}</Hidden>
              {/* For Mobile */}
              <Hidden smUp>{featuresImage("center", 2)}</Hidden>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
export default About;
