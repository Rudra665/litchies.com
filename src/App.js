import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import CustomAppBar from "./Components/Toolbar/appBar";
import "./app.css";
import image from "./Image/image.png";
import CustomButton from "./Components/CustomButtons/customButton";
import { width } from "@mui/system";
const App = () => {
  return (
    <>
      <CustomAppBar />
      <Divider color="aliceblue" />
      <div
        className="header"
        style={{
          position: "absolute",
          height: "90vh",
          width: "95%",
          paddingInline: "1%",
          overflow: "scroll",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6} sx={{ marginTop: "10%" }}>
            <CustomButton lable={"Community"} />
            <h1
              style={{
                fontFamily: "Inter",
                fontWeight: "700",
                fontSize: "56px",
                lineHeight: "66px",
              }}
            >
              Your Solutions For Community!
            </h1>
            <p
              style={{
                fontWeight: "400",
                fontSize: "18px",
                lineHeight: "28px",
                fontFamily: "Inter",
                fontStyle: "normal",
              }}
            >
              More than 2 billion people in over countries use social book to
              stay in touch with friends & family.
            </p>

            <CustomButton lable={"Add More"} varient="contained" />
            <Button
              variant="outlined"
              style={{
                borderRadius: "12px",
                color: "#ec5858",
                borderColor: "#ec5858",
                marginX: 2,
              }}
            >
              Invite Friends
            </Button>
          </Grid>
          <Grid item xs={12} md={5} marginLeft="3%" marginTop="4%">
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <img src={image} alt="comm"></img>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div></div>
    </>
  );
};

export default App;
