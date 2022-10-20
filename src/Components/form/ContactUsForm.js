import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import OutlinedInput from "@mui/material/OutlinedInput";
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
    <Container component="main" maxWidth="lg" alignCon>
      <CssBaseline />
      <Grid
        container
        columnSpacing={3}
        backgroundColor="white"
        justifyContent="space-around"
      >
        <Grid item lg={6} justifyContent="left"></Grid>
        <Grid item lg={6}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "transparent",
            }}
          >
            <Typography component="h1" variant="h2">
              Contact Us
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Mobile"
                    name="email"
                    autoComplete="Mobile"
                    sx={{ boxShadow: "1px 2px #fdeeee inset" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="filled-textarea"
                    label="Comments"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                    sx={{ boxShadow: "1px 2px #fdeeee inset" }}
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                style={{
                  boxShadow: "none",
                  borderRadius: "10px",
                  color: "white",
                  marginTop: 15,
                  backgroundColor: "#ec5858",

                  height: "4vh",
                }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
