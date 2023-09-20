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
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";
// import SignupButton from "./Auth0_SignUpButton";
import LogoutButton from "./Auth0_LogOutButton";
import { useAuth0 } from "@auth0/auth0-react";

function Signin() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        <form>
          <Card
            variant="outlined"
            sx={{ maxWidth: 325, minWidth: 200 }}
            style={{
              display: "flex",
              flexDirection: "column",
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
              Sign in
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} lg={12}>
                <TextField
                  autoComplete="email"
                  name="userEmail"
                  required
                  fullWidth={true}
                  id="useremail"
                  label="Email Address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={12} lg={12}>
                <TextField
                  autoComplete="current-password"
                  name="password"
                  required
                  fullWidth={true}
                  id="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
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
                  label="Show Password"
                  onClick={() => {
                    setShowPassword((prevShowPassword) => !prevShowPassword);
                  }}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 1 }}
              onClick={async () => {
                // console.log("button clicked");
                fetch("http://localhost:3000/admin/login", {
                  method: "POST",
                  headers: {
                    "username": email,
                    "password": password,
                    "Content-type": "application/json",
                  },
                }).then((res) => {
                  // console.log(res.status);
                  if (res.status === 403) {
                    alert(
                      res.statusText + " -" + " Invalid username or password."
                    );
                  } else {
                    // console.log("Response received");
                    // console.log(res);
                    res.json().then((data) => {
                      localStorage.setItem("token", data.token);
                      // console.log("Data received", data);
                      setUser({
                        userEmail: email,
                        isLoading: false,
                      });
                      navigate("/restaurants");
                    });
                  }
                });
              }}
            >
              Sign In
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
              <Grid item style={{ marginTop: -10, marginBottom: -15 }}>
                <Link to="/signup" variant="body2">
                  <Typography variant="h">
                    <p>Don&lsquo;t have an account? Sign Up</p>
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </Card>
        </form>
      </div>
    </>
  );
}

export default Signin;
