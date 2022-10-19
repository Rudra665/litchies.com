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
          position: "fixed",
          height: "90vh",
          width: "100%",
        }}
      >
        <Grid container spacing={2} sx={{ mt: 10, justifyContent: "center" }}>
          <Grid item xs={12} md={6} xl={4} paddingX={"6vw"}>
            <Box sx={{ paddingX: "2.3vw" }}>
              <h1
                style={{
                  fontFamily: "Inter",
                  fontWeight: "700",
                  fontSize: "5.5vh",
                  lineHeight: "7vh",
                }}
              >
                Your Solutions For Community!
              </h1>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "2vh",
                  lineHeight: "3.5vh",
                  fontFamily: "Inter",
                  fontStyle: "normal",
                }}
              >
                More than 2 billion people in over countries use social book to
                stay in touch with friends & family.
              </p>

              <Button
                variant="contained"
                style={{
                  borderRadius: "12px",
                  color: "aliceblue",
                  backgroundColor: "#ec5858",
                  marginRight: 5,
                }}
              >
                Invite Friends
              </Button>
              <Button
                variant="outlined"
                style={{
                  b0orderRadius: "12px",
                  color: "#ec5858",
                  borderColor: "#ec5858",
                  marginTop: 5,
                }}
              >
                Invite Friends
              </Button>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "right",
                paddingX: "3vw",
              }}
            >
              <img src={image} alt="comm" width="700"></img>
            </Box>
          </Grid>
        </Grid>
      </div>
      <div></div>
    </>
  );
};

export default App;
