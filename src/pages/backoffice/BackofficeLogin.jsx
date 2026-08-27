import { useState } from "react";
import { login } from "./auth.js";

// Login-formular til backoffice
function BackofficeLogin({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await login(username, password);
      setError("");
      onLoginSuccess();
    } catch {
      setError("Forkert brugernavn eller adgangskode.");
    }
  };

  return (
    <div
      className="backoffice-login"
      style={{ backgroundImage: "url('/assets/images/loginHeader.png')" }}
    >
      <form className="backoffice-login__form" onSubmit={handleSubmit}>
        <h1 className="backoffice-login__title">Backoffice login</h1>
        <input
          type="text"
          placeholder="Brugernavn"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          required
        />
        <input
          type="password"
          placeholder="Adgangskode"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
        {error && <p className="backoffice-login__error">{error}</p>}
        <button type="submit" className="btn">
          Log ind
        </button>
      </form>
    </div>
  );
}

export default BackofficeLogin;
