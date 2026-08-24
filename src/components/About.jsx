import { IconPlay } from "./icons.jsx";

// Statistik-tal der vises i "Om os"-sektionen
const stats = [
  { number: "600K+", label: "Arbejdstimer" },
  { number: "790+", label: "Programmer" },
  { number: "2560+", label: "Glade kunder" },
  { number: "2560+", label: "Sundere kroppe" },
];

function About() {
  return (
    <section
      id="about"
      className="about"
      style={{
        backgroundImage: "url('/assets/images/about_us_background.jpg')",
      }}
    >
      <div className="about__overlay">
        <div className="container">
          <p className="eyebrow">Om os</p>
          <h2 className="section-title">Velkommen til Xtreme Fitness</h2>
          <p className="about__text">
            Xtreme Fitness er stedet, hvor god musik går hånd i hånd. Vi lover
            mirakler - men vi lover, at du bliver stærkere, gladere og får ondt
            i muskler, du ikke vidste, du havde!
          </p>

          <div className="about__stats">
            {stats.map((stat) => (
              <div className="about__stat" key={stat.label}>
                <span className="about__stat-number">{stat.number}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <a href="#services" className="btn">
            Læs mere
            <span className="btn__icon">
              <IconPlay />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
