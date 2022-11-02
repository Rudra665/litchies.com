import {
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import React from "react";
import SimplePaper from "../../Cards/shopsCard";
import Abstrack from "../../Image/Shops/Abstrack.png";
import Abstrack2 from "../../Image/Shops/Abstrack2.png";
import Abstrack3 from "../../Image/Shops/Abstrack3.png";
import Abstrack4 from "../../Image/Shops/Abstrack4.png";

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
  const [status, setStatus] = React.useState(1);
  const [select, setSelect] = React.useState(false);
  const [shop, setShop] = React.useState(1);
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  const handleSelected = (value) => {
    setShop(value);
  };
  const selected = (event) => {
    setShop(event.target.value);
    setSelect(true);
  };

  return (
    <div
      id="Shop"
      height="60%"
      justifyContent="center"
      alignItems="center"
      style={{ paddingBlock: "1vh" }}
    >
      <Container sx={{ marginY: 5, my: 20 }}>
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
                borderRadius: 3,
                boxShadow: "none",
              }}
            >
              <StyledToggleButtonGroup
                size="medium"
                fullWidth
                value={status}
                exclusive
                onChange={handleChange}
                aria-label="text alignment"
              >
                <ToggleButton
                  value="1"
                  variant="contained"
                  sx={{ border: "none", mx: 2, borderRadius: 3 }}
                >
                  Newest
                </ToggleButton>
                <ToggleButton
                  value="2"
                  sx={{ border: "none", mx: 2, borderRadius: 3 }}
                >
                  Popular
                </ToggleButton>
                <ToggleButton
                  value="3"
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
            onChange={handleChange}
            sx={{
              justifyContent: { lg: "center", sm: "flexStart" },
              overflowX: "scroll",
            }}
          >
            <SimplePaper
              isShadow={shop === 1}
              value={1}
              imgUrl={Abstrack}
              name="Rajat Jain Sterling"
              name2="Rajat Jain"
              handleChange={handleSelected}
            />
            <SimplePaper
              isShadow={shop === 2}
              value={2}
              imgUrl={Abstrack2}
              name="Delhi 6"
              name2="Ayush Upadhyay"
              handleChange={handleSelected}
            />
            <SimplePaper
              isShadow={shop === 3}
              value={3}
              imgUrl={Abstrack3}
              name="M K Enterprises"
              name2="Anuj Jain"
              handleChange={handleSelected}
            />
            <SimplePaper
              isShadow={shop === 4}
              value={4}
              imgUrl={Abstrack4}
              name="Time World"
              name2="Arjun Singh"
              handleChange={handleSelected}
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Shops;
