import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IconMenu } from "./icons.jsx";

const links = [
  { href: "/", label: "Forside" },
  { href: "/services", label: "Tjenester" },
  { href: "/employees", label: "Trænere" },
  { href: "/subscriptions", label: "Priser" },
  { href: "/about", label: "Om os" },
  { href: "/messages", label: "Kontakt" },
  { href: "/login", label: "Login" },
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
              <NavLink
                to={link.href}
                className={({ isActive }) =>
                  `nav__link ${isActive ? "nav__link--active" : ""}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
