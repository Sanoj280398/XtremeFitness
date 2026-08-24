const AUTH_KEY = "xf_backoffice_auth";

// Demo-login til backoffice.
// NB: Dette er KUN client-side gating uden en rigtig server bagved.
// Brug det ikke som reel sikkerhed - skal erstattes med et rigtigt
// login-API og server-side autorisation, foer siden gaar i produktion.
const DEMO_USERNAME = "admin";
const DEMO_PASSWORD = "xtreme2026";

export function login(username, password) {
  const isValid = username === DEMO_USERNAME && password === DEMO_PASSWORD;
  if (isValid) {
    sessionStorage.setItem(AUTH_KEY, "true");
  }
  return isValid;
}

export function logout() {
  sessionStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated() {
  return sessionStorage.getItem(AUTH_KEY) === "true";
}
