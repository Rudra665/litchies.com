import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material/useMediaQuery";

const FeaturesCard = (props) => {
  const { imgUrl, heading, footer } = props;
  // const theme = useTheme();
  // const match = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Card
      sx={{
        m: 4,
        boxShadow: "14px 22px 52px -12px rgba(127, 127, 127, 0.13)",
        borderRadius: "14px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: { sm: "center" },
        }}
      >
        <Box>
          <img src={imgUrl} alt="img" />
        </Box>
        <Box sx={{ mt: 2, px: 1 }}>
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
      </CardContent>
    </Card>
  );
};
export default FeaturesCard;
