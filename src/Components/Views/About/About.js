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
Aos.init({
  delay: "1400",
  ease: "ease",
});
const featuresImage = (justifyContent, pl) => {
  return (
    <Grid container item alignItems="center" justifyContent={justifyContent}>
      <Box data-aos="fade-left" p={1} pl={pl}>
        <img src={Video1} style={{ borderRadius: "20px" }} />
      </Box>
      <Grid container lg={6} sm={6} xs={12} justifyContent="center">
        <Grid item sm={12}>
          <Hidden>
            <Box data-aos="fade-down">
              <img src={Video2} style={{ borderRadius: "20px" }} />
            </Box>
          </Hidden>
        </Grid>
        <Grid item sm={12}>
          <Box data-aos="fade-up">
            <img src={Video3} style={{ borderRadius: "20px" }} />
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
const About = () => {
  return (
    <div id="About" style={{ width: "100%", paddingBlock: "12px" }}>
      <Container maxWidth="xl">
        <Box alignItems="center" marginY="15vh">
          <Grid container spacing={2} justifyContent="space-between">
            <Grid item lg={6} xs={12}>
              <Box data-aos="fade-up" align="left" sx={{ lineHeight: "3vh" }}>
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
                  data-aos="fade-up"
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
