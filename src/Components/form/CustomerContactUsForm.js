import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Contact from "../Image/contactUs/image.jpg";
import Container from "@mui/material/Container";
import axios from "axios";

import { Box } from "@mui/system";
import { Alert, Snackbar } from "@mui/material";

export default function ContactUsForm() {
  const [open, setOpen] = React.useState(false);
  const [disable, setDisable] = React.useState(false);
  const [fields, setFields] = React.useState({
    name: "",
    email: "",
    mobile: "",
    // store: "",
    comment: "",
  });
  const { name, email, mobile, store, comment } = fields;
  const [error, setError] = React.useState({
    name: false,
    mobile: false,
    // store: false,
    email: false,
  });

  const handleSubmit = () => {
    
    setOpen(true);
   
    if (!Object.values(error).includes(true) && !Object.values(fields).includes("")) {
      
      const data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("mobile", mobile);
      data.append("store", store);
      data.append("comment", comment);
      axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
      axios
        .post(
          "https://script.google.com/macros/s/AKfycbzVYqgXhc0LywB__JbvZ0Q1gNkbtzBVS5f22NyM9wnKYMr0l_P3f2tH307e_lQ7RpO3CA/exec",
          data
        )
        .then(function (response) {
          console.log(response);
        });
      setFields({
        name: "",
        email: "",
        mobile: "",
        store: "",
        comment: "",
      });
    }
      setDisable(true);
  };

  const handleChangeFields = (e) => {
    if (
      e.target.name === "name" ||
      e.target.name === "mobile" ||
      // e.target.name === "store" ||
      e.target.name === "email"
    ) {
      setDisable(false);
      if (e.target.name === "mobile") {
        
        if (e.target.value.length !== 10) {
          setError({ ...error, [e.target.name]: true });
        } else {
          setError({ ...error, [e.target.name]: false });
        }
      } else if (e.target.name === "email") {
        if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(e.target.value))
          setError({ ...error, [e.target.name]: false });
        else {
          setError({ ...error, [e.target.name]: true });
        }
      } else if (e.target.value == "") {
        setError({ ...error, [e.target.name]: true });
      } else {
        setError({ ...error, [e.target.name]: false });
      }
    }
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div id="Contact">
        <Box sx={{ py: 5 }}>
          <Container component="main" maxWidth="lg">
            <CssBaseline />

            <div
              style={{
                paddingY: 24,
                boxShadow: "0 14px 12px  rgba(116, 115, 128, 0.1)",
                borderRadius:15,
                backgroundColor: "white",
              }}
            >
              <Grid
                container
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Grid item lg={6}>
                  <Box>
                    <img src={Contact} width="100%" />
                  </Box>
                </Grid>
                <Grid item lg={6} p="4">
                  <Box
                    maxWidth="sm"
                    align="center"
                    justifyContent="space-between"
                  >
                    <Typography
                      align="center"
                      variant="h3"
                      noWrap
                      color="#ec5858"
                    >
                      Contact Us
                    </Typography>
                    <Typography
                      variant="p"
                      align="center"
                      style={{ wordSpacing: 2, color: "grey" }}
                    >
                      We would love to hear from You
                    </Typography>
                    <Box sx={{ p: 4 }}>
                      <Grid container spacing={1}>
                        <Grid item lg={6} xs={12}>
                          <TextField
                            variant="standard"
                            fullWidth
                            required
                            error={error.name || disable}
                            helperText={error.name && "Invalid Name !"}
                            type="text"
                            id="Name"
                            label="Your Name"
                            name="name"
                            value={name}
                            autoComplete="name"
                            onChange={handleChangeFields}
                          />
                        </Grid>

                      
                        <Grid item lg={6} xs={12}>
                          <TextField
                            variant="standard"
                            fullWidth
                            inputProps={{ maxLength: 12 }}
                            required
                            id="mobile"
                            type="number"
                            label="Mobile"
                            name="mobile"
                            helperText={
                              error.mobile && "Invalid Mobile !"
                            }
                            error={error.mobile || disable}
                            value={mobile}
                            autoComplete="mobile"
                            onChange={handleChangeFields}
                          />
                        </Grid>
                        <Grid item lg={12} xs={12}>
                          <TextField
                            // sx={{ my: "1" }}
                            variant="standard"
                            fullWidth
                            id="email"
                            type="email"
                            error={error.email || disable}
                            helperText={error.email && " Invalid Email !"}
                            label="Email"
                            name="email"
                            value={email}
                            autoComplete="email"
                            onChange={handleChangeFields}
                          />
                        </Grid>
                        <Grid item lg={12} xs={12}>
                          <TextField
                            variant="standard"
                            fullWidth
                            label="Comments"
                            name="comment"
                            value={comment}
                            multiline
                            onChange={handleChangeFields}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Box mt={4}>
                            <Button
                              onClick={handleSubmit}
                              
                              style={{
                                borderRadius: "10px",
                                paddingInline: "10%",
                                color: "white",
                                backgroundColor: "#ec5858",
                                size: "large",
                              }}
                            >
                              Send
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </Container>
        </Box>
        <Snackbar
          open={open}
          onClose={() => setOpen(false)}
          autoHideDuration={3000}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          
        >
          <Alert
            severity={ Object.values(error).includes(true) || Object.values(fields).includes("") ? "error" : "success"}
          >
            {Object.values(error).includes(true) && !Object.values(fields).includes("")
              ? "please check your form"
              : "thanks for reaching out"}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}
