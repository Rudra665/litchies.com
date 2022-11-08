import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Contact from "../Image/contactUs/image.jpg";
import Container from "@mui/material/Container";
import axios from "axios";
import ContactModal from "../Modal/ContactModal";
import { Box } from "@mui/system";
export default function ContactUsForm() {
  const [open, setOpen] = React.useState(false);

  const [fields, setFields] = React.useState({
    name: "",
    email: "",
    mobile: "",
    store: "",
    comment: "",
  });
  const { name, email, mobile, store, comment } = fields;
  const [error, setError] = React.useState({
    name: false,
    mobile: false,
    store: false,
  });

  const handleSubmit = () => {
    console.log(Object.values(error));
    if (!Object.values(error).includes(true)) {
      setOpen(true);
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
    } else {
      alert("Fix Invalid Fields !");
    }
  };

  const handleChangeFields = (e) => {
    if (
      e.target.name === "name" ||
      e.target.name === "mobile" ||
      e.target.name === "store"
    ) {
      if (e.target.value === "") {
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
          <Container
            component="main"
            maxWidth="lg"
            style={{ paddingBlockStart: "2vh" }}
          >
            <CssBaseline />

            <div
              style={{
                paddingY: 24,
                boxShadow: "0 14px 12px  rgba(116, 115, 128, 0.1)",
                backgroundColor: "white",
              }}
            >
              <Grid container>
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
                      component="h1"
                      variant="h2"
                      noWrap
                      color="#ec5858"
                    >
                      Contact Us
                    </Typography>
                    <Typography
                      align="center"
                      style={{ wordSpacing: 2, color: "grey" }}
                    >
                      We would love to hear from You
                    </Typography>
                    <Box sx={{ p: 4 }}>
                      <Grid container spacing="3">
                        <Grid lg={12}>
                          <TextField
                            variant="outlined"
                            fullWidth
                            required
                            error={error.name}
                            helperText={error.name && "NAME CANNOT BE EMPTY !"}
                            type="text"
                            id="Name"
                            label="Your Name"
                            name="name"
                            value={name}
                            autoComplete="name"
                            onChange={handleChangeFields}
                          />
                        </Grid>
                        <Grid item lg={12}>
                          <TextField
                            // sx={{ my: "1" }}
                            variant="outlined"
                            fullWidth
                            id="email"
                            type="email"
                            label="example: xyz@gmail.com"
                            name="email"
                            value={email}
                            autoComplete="email"
                            onChange={handleChangeFields}
                          />
                        </Grid>
                        <Grid item lg={12}>
                          <TextField
                            // sx={{ my: "1" }}
                            variant="outlined"
                            required
                            fullWidth
                            id="store"
                            type="store"
                            helperText={
                              error.store && "STORE CANNOT BE EMPTY !"
                            }
                            label="Your Store Name"
                            name="store"
                            error={error.store}
                            value={store}
                            autoComplete="store"
                            onChange={handleChangeFields}
                          />
                        </Grid>
                        <Grid item lg={12}>
                          <TextField
                            // sx={{ my: "1" }}
                            variant="outlined"
                            required
                            fullWidth
                            id="mobile"
                            type="number"
                            label="Mobile"
                            name="mobile"
                            helperText={
                              error.mobile && "MOBILE CANNOT BE EMPTY !"
                            }
                            error={error.mobile}
                            value={mobile}
                            autoComplete="mobile"
                            onChange={handleChangeFields}
                          />
                        </Grid>
                        <Grid item lg={12}>
                          <TextField
                            // sx={{ my: "1" }}
                            variant="outlined"
                            fullWidth
                            id="outlined-multiline-static"
                            label="Comments"
                            name="comment"
                            value={comment}
                            multiline
                            rows={4}
                            onChange={handleChangeFields}
                          />
                        </Grid>

                        <Grid item lg={12}>
                          <Button
                            onClick={handleSubmit}
                            sx={{
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
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </Container>
        </Box>
      </div>
      <ContactModal open={open} handleClose={() => setOpen(false)} />
    </>
  );
}
