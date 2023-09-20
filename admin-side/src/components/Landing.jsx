import { useNavigate } from "react-router-dom";
import banner from "../Assets/zomato-banner.png";
import { Button, Grid, Typography } from "@mui/material";
// import SigninButton from "./Auth0_SignInButton";
// import SignupButton from "./Auth0_SignUpButton";
import LogoutButton from "./Auth0_LogOutButton";
import { useAuth0 } from "@auth0/auth0-react";
import SendIcon from "@mui/icons-material/Send";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";
// import Signin from "./Signin";
// import Signup from "./Signup";

function Landing() {
  const navigate = useNavigate();
  const { user, isLoading, error, isAuthenticated } = useAuth0();
  const setUser = useSetRecoilState(userState);

  // if (isAuthenticated) console.log(user);
  return (
    <>
      <div>
        <Grid container style={{ padding: "5vw" }}>
          <Grid item xs={12} md={6} lg={6}>
            <div
              style={{ marginTop: 100, fontWeight: "bolder", color: "white" }}
            >
              <Typography variant={"h2"}> Zomato Admin</Typography>
              <Typography variant={"h6"}>
                Get almost, anything, anywhere !
              </Typography>
              <div style={{ display: "flex", marginTop: 20, gap: 10 }}>
                <div>
                  {!isAuthenticated && !isLoading && (
                    <Button
                      size={"large"}
                      variant={"contained"}
                      onClick={() => {
                        navigate("/signup");
                      }}
                    >
                      SignUp
                    </Button>
                  )}
                </div>
                <div>
                  {!isAuthenticated && !isLoading && (
                    <Button
                      size={"large"}
                      variant={"contained"}
                      onClick={() => {
                        navigate("/signin");
                      }}
                    >
                      SignIn
                    </Button>
                  )}
                  {!error && isLoading && <Typography>Loading ...</Typography>}
                  {error && <Typography>Authentication Error </Typography>}
                  {!error && !isLoading && isAuthenticated && (
                    <>
                      <br />
                      <Typography style={{ padding: 5 }}>
                        Welcome, {user.name}
                      </Typography>
                      <div style={{ display: "flex", gap: 5 }}>
                        <LogoutButton />
                        <Button
                          endIcon={<SendIcon />}
                          variant="outlined"
                          onClick={() => {
                            const username = user.email;
                            // console.log(username);
                            //  axios
                            //    .post("http://localhost:3000/admin/auth0", {
                            //      headers: {
                            //        "username": { username },
                            //      },
                            //    })
                            //    .then((response) => {
                            //      console.log(response.data);
                            //      //   navigate("/restaurants");
                            //    });
                            fetch("http://localhost:3000/admin/auth0", {
                              method: "POST",
                              headers: {
                                "username": { username },
                              },
                            }).then((res) => {
                              res.json().then((data) => {
                                localStorage.setItem("token", data.token);
                                setUser({
                                  isLoading: false,
                                  userEmail: username,
                                });
                                navigate("/restaurants");
                              });
                            });
                          }}
                        >
                          Go to the website
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <div style={{ marginTop: 10 }}>
              <img src={banner} width="100%" />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Landing;
