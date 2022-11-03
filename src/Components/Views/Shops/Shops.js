import {
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import "./Shops.css";
import data from "./data";
import { Box, Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import React from "react";
import SimplePaper from "../../Cards/shopsCard";

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

const Shops = () => {
  const [status, setStatus] = React.useState(["Recent"]);
  const [Data, setData] = React.useState(data);
  const [select, setSelect] = React.useState(false);
  const [shop, setShop] = React.useState(1);

  const handleChange = (event) => {
    setStatus(event.target.value);
    filter();
  };

  const filter = () => {
    setData(() => filterData);
    console.log(status);
    const filterData = data.filter((item) => item.type == status);
    console.log(filterData);
  };
  const handleSelected = (event) => {
    setShop(event.target.value);
    setSelect(true);
  };

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

          <Container maxWidth="xs" sx={{ my: 4 }}>
            <Paper
              sx={{
                backgroundColor: "rgba(255,228,228,1)",
                borderRadius: 1,
                boxShadow: "none",
              }}
            >
              <StyledToggleButtonGroup
                size="medium"
                fullWidth
                onClick={handleChange}
                value={status}
                aria-label="text alignment"
              >
                <ToggleButton
                  value="Recent"
                  variant="contained"
                  sx={{ border: "none", mx: 2, borderRadius: 3 }}
                >
                  Newest
                </ToggleButton>
                <ToggleButton
                  value="Popular"
                  sx={{ border: "none", mx: 2, borderRadius: 3 }}
                >
                  Popular
                </ToggleButton>
                <ToggleButton
                  value="Active"
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
            exclusive
            label="shops"
            sx={{
              justifyContent: { lg: "center", sm: "flex" },
              overflowX: { lg: "hidden", xs: "scroll" },
              width: "50vw",
            }}
          >
            {Data.map((D) => (
              <SimplePaper
                isShadow={shop}
                value={D.id}
                imgUrl={D.img}
                name={D.shop_name}
                name2={D.name}
                handleChange={handleSelected}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Shops;
