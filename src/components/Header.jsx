import { useState } from "react";
import { IconMenu } from "./icons.jsx";

const links = [
  { href: "#hero", label: "Hjem" },
  { href: "#about", label: "Om os" },
  { href: "#services", label: "Tjenester" },
  { href: "#pricing", label: "Priser" },
  { href: "#trainers", label: "Trænere" },
  { href: "#contact", label: "Kontakt" },
];

// Fast header med logo og hamburger-menu til mobil, matcher Figma-designet
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#hero" className="nav__logo">
          <img
            className="nav__logo-mark"
            src="/assets/icons/logo.png"
            alt="Xtreme Fitness logo"
          />
          XTREME FITNESS
        </a>

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
              <a
                href={link.href}
                className="nav__link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
