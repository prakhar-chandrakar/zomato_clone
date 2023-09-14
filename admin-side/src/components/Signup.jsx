import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: 80,
        }}
      >
        <Card
          variant="outlined"
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            width: 400,
            padding: 10,
            backgroundColor: "#eeeeee",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography variant="h6" style={{ marginBottom: 10 }}>
            Sign up
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={6}>
              <TextField
                autoComplete="given-name"
                name="lastName"
                fullWidth
                id="lastName"
                label="Last Name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <TextField
                autoComplete="email"
                name="userEmail"
                required
                fullWidth
                id="useremail"
                label="Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} lg={12}>
              <TextField
                autoComplete="new-password"
                name="password"
                required
                fullWidth
                type={showPassword ? "text" : "password"}
                id="password"
                label="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              lg={6}
              style={{ marginLeft: 5, marginTop: -10, marginBottom: -5 }}
            >
              <FormControlLabel
                control={<Checkbox value="visibility" color="primary" />}
                onClick={() => {
                  setShowPassword((prevShowPassword) => !prevShowPassword);
                }}
                label="Show Password"
              />
            </Grid>
          </Grid>
          <Button
            disabled={!email || !password || !firstName}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                body: JSON.stringify({
                  firstname: firstName,
                  lastname: lastName,
                  username: email,
                  password: password,
                }),
                headers: {
                  "Content-type": "application/json",
                },
              }).then((res) => {
                res.json().then((data) => {
                  localStorage.setItem("token", data.token);
                  window.location = "/restaurants";
                });
              });
            }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent={"flex-end"}>
            <Grid item>
              <Link to="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Card>
      </div>
    </>
  );
}

export default Signup;
