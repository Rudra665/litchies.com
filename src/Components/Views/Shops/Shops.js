import { Button, Grid, Paper, Typography } from "@mui/material";
import "./Shops.css";
import data from "./data";
import { Box, Container } from "@mui/system";
import React from "react";
import SimplePaper from "../../Cards/shopsCard";

const styles = {
  border: "none",
  px: 4,
  my: 1,

  borderRadius: 1,
  backgroundColor: "tansparent",
  color: "Black",
  "MuiButton-text": {
    "&.Mui-selected": {
      backgroundColor: "#ec5858",
      color: "white",
    },
  },
};

const Shops = () => {
  const [status, setStatus] = React.useState("R");
  const [Data, setData] = React.useState(data);
  const [shop, setShop] = React.useState(1);

  const handleSelected = (value) => {
    setShop(value);
  };

  React.useEffect(() => {
    if (status) {
      const filterData = data.filter((item) => item.type == status);
      setData(filterData);
    }
  }, [status]);

  return (
    <div id="Shop" paddingBlockStart="90px">
      <Container sx={{ marginY: 5 }}>
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

          <Container maxWidth="xs" sx={{ my: 2 }}>
            <Paper
              sx={{
                backgroundColor: "rgba(255,228,228,1)",
                borderRadius: 1,
                boxShadow: "none",
                justifyContent: "space-between",
              }}
            >
              <Button
                variant="text"
                sx={{
                  ...styles,
                  "&:hover": {
                    backgroundColor: "#fce5e",
                  },
                  "&:active": {
                    backgroundColor: "#ec5858",
                  },
                }}
                color={status == "R" ? true : false}
                onClick={() => setStatus("R")}
              >
                Newest
              </Button>
              <Button
                variant="text"
                sx={{
                  ...styles,
                  "&:hover": {
                    backgroundColor: "#fce5e",
                  },
                  "&:active": {
                    backgroundColor: "#ec5858",
                  },
                }}
                selected={status == "P" ? true : false}
                onClick={() => setStatus("P")}
              >
                Popular
              </Button>
              <Button
                variant="text"
                sx={{
                  ...styles,
                  "&:hover": {
                    backgroundColor: "#fce5e",
                  },
                  "&:active": {
                    backgroundColor: "#ec5858",
                  },
                }}
                selected={status == "A" ? true : false}
                onClick={() => setStatus("A")}
              >
                Active
              </Button>
            </Paper>
          </Container>

          <Box
            exclusive
            label="shops"
            sx={{
              justifyContent: { lg: "center", xs: "flexStart" },
              overflowX: { xs: "scroll" },
            }}
          >
            <Grid container>
              <div>
                {Data.map((D) => (
                  <Grid item lg={3}>
                    <SimplePaper
                      isShadow={shop === D.id}
                      value={D.id}
                      imgUrl={D.img}
                      name={D.shop_name}
                      name2={D.name}
                      handleChange={handleSelected}
                    />
                  </Grid>
                ))}
              </div>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Shops;
