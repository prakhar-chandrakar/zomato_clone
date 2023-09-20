import {
  Button,
  Checkbox,
  Divider,
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
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";
import LogoutButton from "./Auth0_LogOutButton";
import { useAuth0 } from "@auth0/auth0-react";

function Signup() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const setUser = useSetRecoilState(userState);

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
          sx={{ maxWidth: 325, minWidth: 200 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
            alignItems: "center",
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            borderRadius: 15,
            backgroundColor: "white",
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
                size="small"
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
                size="small"
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
                size="small"
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
              {/* <FormControl sx={{ width: "40ch" }} variant="outlined"> */}
              <TextField
                htmlFor="outlined-adornment-password"
                autoComplete="new-password"
                size="small"
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
              {/* </FormControl> */}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              style={{ marginLeft: 5, marginTop: -15, marginBottom: -5 }}
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
            sx={{ mt: 1, mb: 1 }}
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
                  setUser({
                    isLoading: false,
                    userEmail: email,
                  });
                  localStorage.setItem("token", data.token);
                  window.location = "/restaurants";
                });
              });
            }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent={"center"}>
            <Grid item style={{ marginTop: 10 }}>
              <Divider style={{ width: 300, marginBottom: 10 }}>OR</Divider>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 20,
                  marginTop: -10,
                }}
              >
                <LogoutButton />
                {!isAuthenticated && (
                  <Button
                    variant="text"
                    onClick={() => {
                      loginWithRedirect();
                    }}
                  >
                    <img
                      src="https://cdn.auth0.com/website/assets/pages/signup/assets/google-avatar-9fb334183c.svg"
                      alt="Google logo"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </Button>
                )}
                {!isAuthenticated && (
                  <Button
                    variant="text"
                    onClick={() => {
                      loginWithRedirect();
                    }}
                  >
                    <img
                      src="https://cdn.auth0.com/website/assets/pages/signup/assets/github-avatar-a52f5d5824.svg"
                      alt="Github logo"
                    />
                  </Button>
                )}
              </div>
            </Grid>
          </Grid>
          <Grid container justifyContent={"flex-end"}>
            <Grid item style={{ margin: 10, marginRight: 0, marginBottom: 0 }}>
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
