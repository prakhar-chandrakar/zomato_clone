import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Button variant="outlined" size={"large"} onClick={() => logout()}>
        Log Out
      </Button>
    )
  );
};

export default LogoutButton;
