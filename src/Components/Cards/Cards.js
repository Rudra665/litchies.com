import * as React from "react";
// import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Hidden from "@mui/material/Hidden";
const FeaturesCard = (props) => {
  const { imgUrl, heading, footer } = props;
  // const theme = useTheme();
  // const match = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Card
      data-aos="flip-up"
      sx={{
        m: 2,
        boxShadow: "14px 22px 52px -12px rgba(127, 127, 127, 0.13)",
        borderRadius: "14px",
      }}
    >
      <CardContent>
        <Grid container justifyContent="center">
          <Grid item lg={2} md={2} sm={2}>
            <img src={imgUrl} alt="img" />
          </Grid>

          <Grid item lg={10} md={10} sm={10}>
            <Hidden smUp>
              <Box
                align="center"
                sx={{
                  mt: 2,
                  px: {
                    sm: "none",
                    lg: 4,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "24px",
                    fontFamily: "inter",
                    lineHeight: "26px",
                  }}
                >
                  {heading}
                </Typography>
                <Typography
                  color="text.secondary"
                  component="div"
                  lineHeight="20px"
                  fontSize="16px"
                  sx={{ mt: 1 }}
                >
                  {footer}
                </Typography>
              </Box>
            </Hidden>
            <Hidden mdDown>
              <Box
                align="left"
                sx={{
                  display: "flexBox",
                  mt: 2,
                  px: {
                    sm: "none",
                    lg: 4,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "24px",
                    fontFamily: "inter",
                    lineHeight: "26px",
                  }}
                >
                  {heading}
                </Typography>
                <Typography
                  color="text.secondary"
                  component="div"
                  lineHeight="20px"
                  fontSize="16px"
                  sx={{ mt: 1 }}
                >
                  {footer}
                </Typography>
              </Box>
            </Hidden>
            <Hidden smDown mdUp>
              <Box
                align="Left"
                sx={{
                  display: "flexBox",
                  mt: 2,
                  px: {
                    sm: "none",

                    lg: 4,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "24px",
                    fontFamily: "inter",
                    lineHeight: "26px",
                  }}
                >
                  {heading}
                </Typography>
                <Typography
                  color="text.secondary"
                  component="div"
                  lineHeight="20px"
                  fontSize="16px"
                  sx={{ mt: 1 }}
                >
                  {footer}
                </Typography>
              </Box>
            </Hidden>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default FeaturesCard;
