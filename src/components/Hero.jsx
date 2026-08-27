import { IconPlay } from "./icons.jsx";

// Hero-sektion: baggrundsbillede fra Figma + rød gradient-overlay for læsbarhed
function Hero() {
  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: "url('/assets/images/mainHeader.jpg')" }}
    >
      <div className="container hero__content">
        <div className="hero__logo">
          <img
            className="hero__logo-mark"
            src="/assets/icons/logo.png"
            alt="Xtreme Fitness logo"
          />
        </div>
        <h1 className="hero__title">BLIV STÆRK</h1>
        <p className="hero__subtitle">
          Det bedste fitnesscenter — hvor styrke og fællesskab mødes sammen.
        </p>
        <a href="/subscriptions" className="btn">
          Tilmeld dig nu
          <span className="btn__icon">
            <IconPlay />
          </span>
        </a>
      </div>
    </section>
  );
}

export default Hero;
