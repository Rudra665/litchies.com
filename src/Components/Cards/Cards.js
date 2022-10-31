import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material/useMediaQuery";
import { Grid } from "@mui/material";

const FeaturesCard = (props) => {
  const { imgUrl, heading, footer } = props;
  // const theme = useTheme();
  // const match = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Card
      sx={{
        m: 2,

        boxShadow: "14px 22px 52px -12px rgba(127, 127, 127, 0.13)",
        borderRadius: "14px",
      }}
    >
      <CardContent>
        <Grid container justifyContent="center">
          <Grid item lg={2} md={2} sm={12}>
            <Box>
              <img src={imgUrl} alt="img" />
            </Box>
          </Grid>

          <Grid item lg={10} md={9} sm={12}>
            <Box
              sx={{
                mt: 2,
                px: {
                  sm: "none",
                  lg: 4,
                },
                lign: { sm: "center" },
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
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default FeaturesCard;
