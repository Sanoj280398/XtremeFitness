import { useState } from "react";
import { IconPlay } from "./icons.jsx";

// Kontaktformular - matcher de tre felter fra designet (Navn, Telefon, Email)
function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Send data til en rigtig server/API når den findes
    console.log("Formular indsendt:", formData);
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <section
      id="contact"
      className="section contact"
      style={{
        backgroundImage: "url('/assets/images/contact_us_background.jpg')",
      }}
    >
      <div className="container">
        <img
          className="contact__decoration"
          src="/assets/images/contact_us.png"
          alt=""
          aria-hidden="true"
        />
        <p
          className="eyebrow"
          style={{ textAlign: "center", display: "block" }}
        >
          Kontakt os
        </p>
        <h2 className="section-title section-title--center">
          Send os en besked og vi svarer hurtigst muligt
        </h2>

        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Navn"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Telefon"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn contact__submit">
            Send
            <span className="btn__icon">
              <IconPlay />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
