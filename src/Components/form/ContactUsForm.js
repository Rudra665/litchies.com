import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import OutlinedInput from "@mui/material/OutlinedInput";
import contactUsImage from "../Image/contactUs/contactUsImage.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
export default function ContactUsForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      Name: data.get(""),
      password: data.get(""),
    });
  };

  return (
    <Container component="main" maxWidth="lg">
      <CssBaseline />

      <Grid container columnSpacing={3} justifyContent="center" marginY={25}>
        <Grid item lg>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "white",
              paddingX: "10%",
            }}
          >
            <Typography component="h1" variant="h2" noWrap color="#ec5858">
              Contact Us
            </Typography>
            <Typography variant="h6" style={{ wordSpacing: 2, color: "grey" }}>
              We would love to hear from You
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
              paddingBottom={10}
            >
              <Grid container spacing={2} my={5}>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    name="Name"
                    autoComplete="family-name"
                    sx={{ boxShadow: "1px 2px #fdeeee inset" }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    fullWidth
                    id="company"
                    label="Company"
                    name="company"
                    autoComplete="company"
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <TextField
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile"
                    name="Mobile"
                    autoComplete="Mobile"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="outlined-multiline-static"
                    label="Comments"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                  />
                </Grid>
              </Grid>
              {/* <Grid item>
                <Checkbox
                  {...label}
                  defaultChecked
                  sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
                /><Typography></Typography>
              </Grid> */}
              <Grid item align="center" margin="10">
                <Button
                  style={{
                    boxShadow: "none",
                    borderRadius: "10px",
                    color: "white",
                    paddingInline: "10%",
                    backgroundColor: "#ec5858",
                    size: "large",
                  }}
                >
                  Send
                </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
