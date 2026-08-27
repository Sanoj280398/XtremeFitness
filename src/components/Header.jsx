import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconMenu } from "./icons.jsx";

const links = [
  { href: "/", label: "Hjem" },
  { href: "/about", label: "Om os" },
  { href: "/services", label: "Tjenester" },
  { href: "/subscriptions", label: "Priser" },
  { href: "/employees", label: "Trænere" },
  { href: "/reviews", label: "Anmeldelser" },
  { href: "/blogs", label: "Blog" },
  { href: "/messages", label: "Kontakt" },
  { href: "/my-page", label: "Min side" },
];

// Fast header med logo og hamburger-menu til mobil, matcher Figma-designet
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const hasSolidBackground = pathname !== "/";

  return (
    <header className={`header ${hasSolidBackground ? "header--solid" : ""}`}>
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <img
            className="nav__logo-mark"
            src="/assets/icons/logo.png"
            alt="Xtreme Fitness logo"
          />
        </Link>

        <button
          className="nav__burger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Åbn/luk menu"
        >
          <IconMenu />
        </button>

        <ul className={`nav__list ${isMenuOpen ? "nav__list--open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="nav__link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
