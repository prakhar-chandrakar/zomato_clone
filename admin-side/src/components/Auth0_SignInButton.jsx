import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

const SigninButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <Button
        size={"large"}
        variant={"contained"}
        onClick={() => loginWithRedirect()}
      >
        Sign In
      </Button>
    )
  );
};

export default SigninButton;
