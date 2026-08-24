import { IconFacebook, IconTwitter, IconInstagram } from "./icons.jsx";

// Data for trænerne - navn og speciale (ingen individuelle fotos i assets, så vi viser initialer)
const trainersData = [
  { name: "Mikkel Jensen", role: "Crossfit" },
  { name: "Sofie Madsen", role: "Kardio & Kondition" },
  { name: "Rasmus Kristensen", role: "Fitness" },
];

function Trainers() {
  return (
    <section
      id="trainers"
      className="section trainers"
      style={{ backgroundImage: "url('/assets/images/employeesHeader.jpg')" }}
    >
      <div className="container">
        <p
          className="eyebrow"
          style={{ color: "#fff", textAlign: "center", display: "block" }}
        >
          Trænere
        </p>
        <h2 className="section-title section-title--center">
          Vores hold af eksperter
        </h2>

        <div className="trainers__grid">
          {trainersData.map((trainer) => (
            <div className="trainer-card" key={trainer.name}>
              <div className="trainer-card__avatar">
                {trainer.name.charAt(0)}
              </div>
              <h3>{trainer.name}</h3>
              <p>{trainer.role}</p>
              <div className="trainer-card__socials">
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;
