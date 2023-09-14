import { useNavigate } from "react-router-dom";
import banner from "../Assets/zomato-banner.png";
import { Button, Grid, Typography } from "@mui/material";

function Landing() {
  const navigate = useNavigate();
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
                Get almost almost anything anywhere
              </Typography>
              <div style={{ display: "flex", marginTop: 20, gap: 10 }}>
                <div>
                  <Button
                    size={"large"}
                    variant={"contained"}
                    onClick={() => {
                      navigate("/signup");
                    }}
                  >
                    SignUp
                  </Button>
                </div>
                <div>
                  <Button
                    size={"large"}
                    variant={"contained"}
                    onClick={() => {
                      navigate("/signin");
                    }}
                  >
                    SignIn
                  </Button>
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
