import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/api.js";
import PageLayout from "./PageLayout.jsx";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleCustomerLogin = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await loginUser(formData);
      sessionStorage.setItem("xf_customer_auth", "true");
      navigate("/my-page");
    } catch {
      setError("Login mislykkedes. Kontrollér dine oplysninger og prøv igen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <section className="login-page">
        <div className="login-page__overlay">
          <div className="login-page__panel">
            <p className="eyebrow">Xtreme Fitness</p>
            <h1>Login</h1>
            <p className="login-page__intro">
              Log ind for at se dit abonnement og dine holdtilmeldinger.
            </p>

            <form className="login-page__form" onSubmit={handleCustomerLogin}>
              <label htmlFor="customer-username">Brugernavn eller email</label>
              <input
                id="customer-username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
                required
              />
              <label htmlFor="customer-password">Adgangskode</label>
              <input
                id="customer-password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
              />
              {error && <p className="login-page__error">{error}</p>}
              <button className="btn" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Logger ind..." : "Kunde-login"}
              </button>
            </form>

            <div className="login-page__choices">
              <Link to="/backoffice" className="login-page__admin-link">
                Admin-login
              </Link>
              <Link to="/" className="login-page__guest-link">
                Fortsæt som gæst
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default LoginPage;
