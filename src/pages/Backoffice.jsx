import { useState } from "react";
import Header from "../components/Header.jsx";
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

  return (
    <>
      <Header />
      {loggedIn ? (
        <BackofficeDashboard onLogout={handleLogout} />
      ) : (
        <BackofficeLogin onLoginSuccess={() => setLoggedIn(true)} />
      )}
    </>
  );
}

export default Backoffice;
