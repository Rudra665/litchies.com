import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import { validEmail, validMobile } from "../Validation/Validation.js";
// import OutlinedInput from "@mui/material/OutlinedInput";
import contactUsImage from "../Image/contactUs/contactUsImage.png";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import validator from "validator";
import isNumeric from "validator/lib/isNumeric";

// import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import Contact from "../form/Contact.jpg";
import ContactModal from "../Modal/ContactModal";
export default function ContactUsForm() {
  const [open, setOpen] = React.useState(false);

  const [fields, setFields] = React.useState({
    name: "",
    email: "",
    mobile: "",
    comment: "",
  });
  const { name, email, mobile, comment } = fields;
  const [error, setError] = React.useState(false);
  const [error2, setError2] = React.useState(false);
  const handleSubmit = () => {
    setOpen(true);
    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("mobile", mobile);
    data.append("comments", comment);
    axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
    axios
      .post(
        "https://script.google.com/macros/s/AKfycbwcd_jndZGDbTqJzL2nbE-ib0vUvkdQIbuHRgqxuAtMrc5yln8p2lHI-IfMoKghkjcP_w/exec",
        data
      )
      .then(function (response) {
        console.log(response);
      });
  };
  const emailValidation = () => {
    if (validator.isEmail(fields.email) && !validator.isEmpty(fields.email)) {
      return setError(false);
    } else {
      return true;
    }
  };
  const mobileValidation = () => {
    return false
    if (
      validator.isNumeric(fields.mobile)<=10 &&
      !validator.isEmpty(fields.mobile)
    ) {
      return false;
    } else {
      return true;
    }
  };
  const handleChangeFields = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    emailValidation();
    mobileValidation();

  };

  return (
    <>
      <div id="Contact" style={{ marginBlockEnd: "4vh" }}>
        <Container
          component="main"
          maxWidth="lg"
          style={{ paddingBlockStart: "2vh" }}
        >
          <CssBaseline />

          <Grid container columnSpacing={3} justifyContent="center">
            <Grid item lg>
              <div
                style={{
                  marginBlock: 20,
                  padding: 15,
                  boxShadow: "0 14px 12px  rgba(116, 115, 128, 0.1)",
                }}
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
                <Box
                  component="form"
                  noValidate
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
                        name="name"
                        value={name}
                        autoComplete="family-name"
                        sx={{ boxShadow: "1px 2px #fdeeee inset" }}
                        onChange={handleChangeFields}
                      />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        error={!emailValidation}
                        value={email}
                        autoComplete="email"
                        onChange={handleChangeFields}
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
                        name="mobile"
                        error={!mobileValidation}
                        value={mobile}
                        autoComplete="mobile"
                        onChange={handleChangeFields}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="outlined-multiline-static"
                        label="Comments"
                        name="comment"
                        value={comment}
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        onChange={handleChangeFields}
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
                      onClick={handleSubmit}
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
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <ContactModal open={open} handleClose={() => setOpen(false)} />
    </>
  );
}
