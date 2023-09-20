import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user";
import { userEmailState } from "../store/selectors/userEmail";
import { isUserLoading } from "../store/selectors/isUserLoading";

function Appbar() {
  const navigate = useNavigate();
  const userLoading = useRecoilValue(isUserLoading);
  const userEmail = useRecoilValue(userEmailState);
  const setUser = useSetRecoilState(userState);

  if (userLoading) {
    return <></>;
  }
  console.log(userEmail);
  if (userEmail) {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 4,
            backgroundColor: "#4E4FEB",
          }}
        >
          <div
            style={{ marginLeft: 10, cursor: "pointer", fontWeight: "bolder" }}
            onClick={() => navigate("/restaurants")}
          >
            <Typography variant="h5">Zomato</Typography>
          </div>
          <div style={{ display: "flex", gap: 8, paddingBottom: 4 }}>
            <div style={{ color: "black" }}>
              <Button
                // color="success"
                variant="contained"
                onClick={() => {
                  navigate("/addRestaurant");
                }}
              >
                Add Restaurant
              </Button>
            </div>
            <div>
              <Button
                // color="success"
                variant="contained"
                onClick={() => {
                  navigate("/");
                  localStorage.setItem("token", null);
                  setUser({
                    isLoading: false,
                    userEmail: null,
                  });
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 4,
            backgroundColor: "#4E4FEB",
          }}
        >
          <div
            style={{ marginLeft: 10, cursor: "pointer", fontWeight: "bolder" }}
            onClick={() => navigate("/")}
          >
            <Typography variant="h5">Zomato</Typography>
          </div>
          {/* <div>
            <Typography variant="h6"> </Typography>
          </div> */}
          {/* <div style={{ display: "flex", gap: 5, paddingBottom: 4 }}>
            <div>
              <Button
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
                variant={"contained"}
                onClick={() => {
                  navigate("/signin");
                }}
              >
                SignIn
              </Button>
            </div>
          </div> */}
        </div>
      </>
    );
  }
}
export default Appbar;
