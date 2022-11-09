import { Box, Container, Grid, Hidden, Typography } from "@mui/material";
import React from "react";
import "./joinUs.css";
import gPlayButton from "../../Image/googlePlay/gPlayButton.png";
import Mobile from "../../Image/googlePlay/Mobile.svg";
import { Link } from "react-router-dom";
const JoinUsPage = () => {
  return (
    <div className="third">
      <Container maxWidth="xl">
        <Grid container>
          <Grid item lg={6} xs={12}>
            <Hidden mdDown>
              <Box maxWidth="sm" my={20}>
                <Box py={1}>
                  <Typography color="#ec5858" fontWeight={550}>
                    Get Our Aplication
                  </Typography>
                </Box>
                <Box py={1}>
                  <Typography variant="h4" fontWeight={"700"}>
                    You Can Easily Find Litchies!
                  </Typography>
                </Box>
                <Typography color="#ec5858" py={1}>
                  Download litchies app from the play store today and start a
                  new local shopping experience while sitting at home.
                </Typography>
                <a href="" py={1}>
                  <img
                    src={gPlayButton}
                    style={{
                      height: "60%",
                    }}
                  ></img>
                </a>
              </Box>
            </Hidden>
            <Hidden smUp>
              <Box maxWidth="md" align="center">
                <Box py={1}>
                  <Typography color="#ec5858" fontWeight={550}>
                    Get Our Aplication
                  </Typography>
                </Box>
                <Box py={1}>
                  <Typography variant="h4" fontWeight={"700"}>
                    You Can Easily Find Litchies!
                  </Typography>
                </Box>
                <Typography color="#ec5858" py={1}>
                  Download litchies app from the play store today and start a
                  new local shopping experience while sitting at home.
                </Typography>
                <a
                  href="https://play.google.com/store/apps/details?id=com.atflabs.litchies"
                  py={1}
                >
                  <img
                    src={gPlayButton}
                    style={{
                      height: "60%",
                    }}
                  />
                </a>
              </Box>
            </Hidden>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Hidden mdDown>
              <img
                src={Mobile}
                alt="comm"
                style={{ height: "100%", width: "100%" }}
              />
            </Hidden>
            <Hidden smUp>
              <img src={Mobile} alt="comm" style={{ display: "none" }} />
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default JoinUsPage;
