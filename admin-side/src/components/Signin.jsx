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
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";

function Signin() {
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
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              // alignContent: "center",
              alignItems: "center",
              width: 350,
              padding: 13,
              backgroundColor: "#eeeeee",
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
                xs={6}
                sm={6}
                lg={6}
                style={{ marginLeft: 5, marginTop: -10, marginBottom: -5 }}
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
              sx={{ mt: 3, mb: 2 }}
              onClick={async () => {
                console.log("button clicked");
                fetch("http://localhost:3000/admin/login", {
                  method: "POST",
                  headers: {
                    "username": email,
                    "password": password,
                    "Content-type": "application/json",
                  },
                }).then((res) => {
                  console.log(res.status);
                  if (res.status === 403) {
                    alert(
                      res.statusText + " -" + " Invalid username or password."
                    );
                  } else {
                    console.log("Response received");
                    console.log(res);
                    res.json().then((data) => {
                      localStorage.setItem("token", data.token);
                      // console.log("Data received", data);
                      setUser({
                        userEmail: email,
                        isLoading: false,
                      });
                      setEmail("");
                      setPassword("");
                      navigate("/restaurants");
                    });
                  }
                });
              }}
            >
              Sign In
            </Button>

            <Grid container justifyContent={"flex-end"}>
              <Grid item style={{ margin: -15, marginRight: 7 }}>
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
