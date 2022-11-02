import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import FeaturesCard from "../../Cards/Cards";
import fIcon1 from "../../Image/FeatureIcons/fIcon1.png";
import fIcon2 from "../../Image/FeatureIcons/fIcon2.png";
import fIcon3 from "../../Image/FeatureIcons/fIcon3.png";
import fIcon4 from "../../Image/FeatureIcons/fIcon4.png";
import fIcon5 from "../../Image/FeatureIcons/fIcon5.png";
import fIcon6 from "../../Image/FeatureIcons/fIcon6.png";
const Features = () => {
  return (
    <div
      id="Features"
      className="second"
      
    >
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
  );
};

export default Features;
