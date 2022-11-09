import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import FeaturesCard from "../../Cards/Cards";
import "./Features.css";
import Aos from "aos";
import "aos/dist/aos.css";
import fIcon1 from "../../Image/FeatureIcons/fIcon1.png";
import fIcon2 from "../../Image/FeatureIcons/fIcon2.png";
import fIcon3 from "../../Image/FeatureIcons/fIcon3.png";
import fIcon4 from "../../Image/FeatureIcons/fIcon4.png";
import fIcon5 from "../../Image/FeatureIcons/fIcon5.png";
import fIcon6 from "../../Image/FeatureIcons/fIcon6.png";
Aos.init({ delay: "500", duration: "1400", ease: "ease" });
const Features = () => {
  return (
    <div id="Features" className="second">
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
              heading="Book your favorite products on the go.."
              footer="Book products and pickup from the store after complete satisfaction."
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
              heading="Checkout latest collections before anyone else in the city."
              footer="Follow the shops to get quick notifications and products."
              imgUrl={fIcon3}
            />
          </Grid>
          <Grid item lg={6} sm={12}>
            <FeaturesCard
              heading="Find products with best prices within the city."
              footer="Get best price quotes from shopkeepers in the city. "
              imgUrl={fIcon4}
            />
          </Grid>
          <Grid item lg={6} sm={12}>
            <FeaturesCard
              heading="Browse products in the short video format."
              footer="Check out your favorite products from all the angles through short videos."
              imgUrl={fIcon5}
            />
          </Grid>
          <Grid item lg={6} sm={12}>
            <FeaturesCard
              heading="Checkout latest deals of the day and more offers."
              footer="Deals of the day and best prices are only available on litchies."
              imgUrl={fIcon6}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Features;
