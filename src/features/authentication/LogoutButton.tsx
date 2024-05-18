import React from "react";
import { googleLogout } from "@react-oauth/google";

interface LogoutButtonProps {
  onLogout: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onLogout }) => {
  const handleLogoutClick = () => {
    googleLogout();
    onLogout();
  };

  return (
    <button type="button" className="btn btn-dark" onClick={handleLogoutClick}>
      Log out
    </button>
  );
};

export default LogoutButton;
