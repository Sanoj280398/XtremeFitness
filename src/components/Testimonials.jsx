import { useState } from "react";
import { IconArrowLeft, IconArrowRight } from "./icons.jsx";

// Anmeldelser fra kunder, vist ét citat ad gangen
const testimonials = [
  {
    quote:
      "Det bedste ved centeret er stemningen – man føler sig altid velkommen, uanset niveau. Trænerne er dygtige og imødekommende, og det gør en kæmpe forskel for motivationen.",
    name: "Cecilie Caspersen",
    role: "Medlem",
  },
  {
    quote:
      "Jeg har prøvet mange centre, men Xtreme Fitness er det eneste sted, hvor jeg faktisk glæder mig til at træne igen og igen.",
    name: "Jonas Berg",
    role: "Medlem",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const showPrevious = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const showNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section testimonials">
      <div className="container">
        <p
          className="eyebrow"
          style={{ textAlign: "center", display: "block" }}
        >
          Kunder
        </p>
        <h2 className="section-title section-title--center">
          Det siger vores kunder om os
        </h2>

        <img
          className="testimonials__quote-icon"
          src="/assets/icons/testimonials_apostrophy.png"
          alt=""
          aria-hidden="true"
        />
        <blockquote className="testimonials__quote">
          "{current.quote}"
        </blockquote>
        <p className="testimonials__name">{current.name}</p>
        <p className="testimonials__role">{current.role}</p>

        <img
          className="testimonials__photo"
          src="/assets/images/reviews.png"
          alt="Medlem der træner hos Xtreme Fitness"
        />

        <div className="arrow-group">
          <button
            className="arrow-btn"
            onClick={showPrevious}
            aria-label="Forrige"
          >
            <IconArrowLeft />
          </button>
          <button className="arrow-btn" onClick={showNext} aria-label="Næste">
            <IconArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
