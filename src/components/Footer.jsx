import { IconFacebook, IconTwitter, IconInstagram } from "./icons.jsx";

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
            XTREME FITNESS
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
          <h3>Kontakt os</h3>
          <p>Adresse: Nørregade 43, 9000 Aalborg</p>
          <p>Email: info@xtremefitness.dk</p>
          <p>Telefon: +45 99 99 9999</p>
        </div>
      </div>

      <p className="footer__copy">
        &copy; {new Date().getFullYear()} Xtreme Fitness - All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
