import { useState } from "react";
import { IconArrowLeft, IconArrowRight } from "./icons.jsx";

// Karrusel med de øvelser/fordele centeret tilbyder, ét kort ad gangen
const exercises = [
  {
    title: "Styrkeøgning",
    text: "Vil du bygge dig større, stærkere og se bedre ud i spejlet? Så er det tid til at fokusere på de mest effektive styrkeøvelser.",
  },
  {
    title: "Udholdenhed",
    text: "Byg en stærkere kondition, så du kan holde til mere - både i træningscenteret og i hverdagen.",
  },
  {
    title: "Fleksibilitet",
    text: "Bedre bevægelighed forebygger skader og gør alle dine andre øvelser lettere at udføre korrekt.",
  },
];

function ExclusiveExercises() {
  const [index, setIndex] = useState(0);
  const current = exercises[index];

  const showPrevious = () => {
    setIndex((prev) => (prev === 0 ? exercises.length - 1 : prev - 1));
  };

  const showNext = () => {
    setIndex((prev) => (prev === exercises.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section exercises">
      <div className="container">
        <p
          className="eyebrow"
          style={{ textAlign: "center", display: "block" }}
        >
          Dette tilbyder vi
        </p>
        <h2 className="section-title section-title--center">
          Vi tilbyder eksklusive øvelser
        </h2>

        <div className="exercises__card">
          <div className="exercises__icon" aria-hidden="true">
            🏋
          </div>
          <h3>{current.title}</h3>
          <p>{current.text}</p>
        </div>

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

export default ExclusiveExercises;
