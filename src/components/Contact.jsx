import { useState } from "react";
import { IconPlay } from "./icons.jsx";
import { createMessage } from "../api/api.js";

// Kontaktformular - matcher de tre felter fra designet (Navn, Telefon, Email)
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("");
    createMessage(formData)
      .then(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        setStatus("Beskeden er sendt.");
      })
      .catch(() => setStatus("Beskeden kunne ikke sendes lige nu."));
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
          <input
            type="text"
            name="subject"
            placeholder="Emne"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Besked"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className="btn contact__submit">
            Send
            <span className="btn__icon">
              <IconPlay />
            </span>
          </button>
          {status && <p className="contact__status">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
