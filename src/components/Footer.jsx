import { IconFacebook, IconTwitter, IconInstagram } from "./icons.jsx";
import { Link } from "react-router-dom";

// Footer med logo, kontaktinfo og sociale ikoner
function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__decoration footer__decoration--left"
        src="/assets/icons/footer_left_icon.png"
        alt=""
        aria-hidden="true"
      />
      <img
        className="footer__decoration footer__decoration--right"
        src="/assets/icons/footer_right_icon.png"
        alt=""
        aria-hidden="true"
      />
      <div className="container footer__grid">
        <div>
          <div className="footer__logo">
            <img
              className="hero__logo-mark"
              src="/assets/icons/logo.png"
              alt="Xtreme Fitness logo"
            />
          </div>
          <p>Fitness handler om glæde, kvalitet og resultater.</p>
          <div className="footer__socials">
            <a href="#" aria-label="Facebook">
              <IconFacebook />
            </a>
            <a href="#" aria-label="Twitter">
              <IconTwitter />
            </a>
            <a href="#" aria-label="Instagram">
              <IconInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3>Åbningstider</h3>
          <p>Mandag - Fredag</p>
          <p>12.00 - 14.00</p>
          <p>Lørdag</p>
          <p>17.30 - 00.00</p>
          <p>Søndag</p>
          <p>17.30 - 00.00</p>
        </div>

        <div>
          <h3>Hurtige links</h3>
          <ul className="footer__links">
            <li><Link to="/about">Om os</Link></li>
            <li><Link to="/services">Tjenester</Link></li>
            <li><Link to="/employees">Trænere</Link></li>
            <li><Link to="/subscriptions">Priser</Link></li>
            <li><Link to="/messages">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h3>Kontakt os</h3>
          <p>Adresse:</p>
          <p>Nørregade 42, 9000 Aalborg</p>
          <p>Email:</p>
          <p>info@xtremefitness.dk</p>
          <p>Telefon:</p>
          <p>+45 99 751642</p>
        </div>
      </div>

      <p className="footer__copy">
        &copy; {new Date().getFullYear()} Xtreme Fitness - All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
