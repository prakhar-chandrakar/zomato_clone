import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Appbar() {
  const navigate = useNavigate();

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
        <div style={{ display: "flex", gap: 5, paddingBottom: 4 }}>
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
        </div>
      </div>
    </>
  );
}
export default Appbar;
