import { useState } from "react";
import BackofficeLogin from "./backoffice/BackofficeLogin.jsx";
import BackofficeDashboard from "./backoffice/BackofficeDashboard.jsx";
import { isAuthenticated, logout } from "./backoffice/auth.js";
import "./backoffice/backoffice.css";

// Indgangspunkt for /backoffice - viser login eller dashboard alt efter login-status
function Backoffice() {
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
  };

  if (!loggedIn) {
    return <BackofficeLogin onLoginSuccess={() => setLoggedIn(true)} />;
  }

  return <BackofficeDashboard onLogout={handleLogout} />;
}

export default Backoffice;
