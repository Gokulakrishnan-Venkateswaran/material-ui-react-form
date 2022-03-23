import React, { Fragment, useState } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import {
  Paper,
  Grid,
  Typography,
  Container,
  Box,
  TextField,
  Button,
} from "@mui/material";

function Form() {
  const [enteredFristName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMobile, setEnteredMobile] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      fisrtName: enteredFristName,
      lastName: enteredLastName,
      email: enteredEmail,
      mobile: enteredMobile,
      message: enteredMessage,
    };

    console.log(formData);

    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredEmail("");
    setEnteredMobile("");
    setEnteredMessage("");
  };

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ padding: "45px" }}>
          <Typography
            variant="h4"
            component="h1"
            color="primary"
            align="center"
            sx={{ fontFamily: "Tahoma", fontStyle: "oblique" }}>
            Creating React Form Using Material UI
          </Typography>
        </Box>
        <form onSubmit={submitHandler}>
          <Paper elevation={3} sx={{ padding: "15px", marginBottom: "50px" }}>
            <Grid style={{ padding: "10px 5px 10px 5px" }}>
              <Typography
                variant="h5"
                component="h4"
                color="Primary"
                align="center"
                fontWeight="500"
                paddingBottom="5"
                size="small">
                Contact Us
              </Typography>
            </Grid>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder="Enter Your First Name"
                  onChange={(e) => setEnteredFirstName(e.target.value)}
                  value={enteredFristName}
                  variant="outlined"
                  fullWidth
                  size="small"
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  placeholder="Enter Your Last Name"
                  onChange={(e) => setEnteredLastName(e.target.value)}
                  value={enteredLastName}
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  label="Email"
                  placeholder="Enter Your Email"
                  onChange={(e) => setEnteredEmail(e.target.value)}
                  value={enteredEmail}
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="number"
                  label="Mobile Number"
                  placeholder="Enter Your Mobile Number"
                  onChange={(e) => setEnteredMobile(e.target.value)}
                  value={enteredMobile}
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Your Comments Here! "
                  onChange={(e) => setEnteredMessage(e.target.value)}
                  value={enteredMessage}
                  variant="outlined"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </Container>
    </Fragment>
  );
}

export default Form;
