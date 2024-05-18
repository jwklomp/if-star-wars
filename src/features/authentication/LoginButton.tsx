import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
//
import { User } from "./userAtom.ts";

interface LoginButtonProps {
  onLoginSuccess: (user: User) => void;
  onLoginError: (error: unknown) => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  onLoginSuccess,
  onLoginError,
}) => {
  const login = useGoogleLogin({
    onSuccess: onLoginSuccess,
    onError: onLoginError,
  });
  const handleLoginClick = () => {
    login();
  };

  return (
    <button type="button" className="btn btn-dark" onClick={handleLoginClick}>
      Sign in with Google 🚀
    </button>
  );
};

export default LoginButton;
