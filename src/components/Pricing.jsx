import { IconCheck, IconPlay } from "./icons.jsx";

// Data for medlemskaber - matcher priserne fra designet
const plans = [
  {
    name: "Basic Gym",
    price: "149 DKK",
    image: "/assets/images/mainHeader.jpg",
    features: [
      "Fri adgang til alle træningsområder",
      "Træn når det passer dig",
      "Adgang til basis holdtræning",
      "Gratis introduktionstime",
      "Motiverende atmosfære",
    ],
  },
  {
    name: "Standard Gym",
    price: "199 DKK",
    image: "/assets/images/video_img.jpg",
    features: [
      "Alt fra basis – plus lidt ekstra",
      "Flere hold på skemaet",
      "Fri adgang til lidt eksklusivt område",
      "Personlig træningsplan",
      "Rabatter på events og workshops",
    ],
  },
  {
    name: "Premium Gym",
    price: "249 DKK",
    image: "/assets/images/subscriptionsHeader.png",
    features: [
      "Alt fra basis og standard",
      "Ubegrænset adgang til specialhold",
      "Personlig træner hver måned",
      "Eksklusiv adgang til wellness-område",
      "VIP-fordele og goodies",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <p
          className="eyebrow"
          style={{ textAlign: "center", display: "block" }}
        >
          Priser
        </p>
        <h2 className="section-title section-title--center">
          Vores abonnementer
        </h2>

        <div className="pricing__grid">
          {plans.map((plan) => (
            <div className="price-card" key={plan.name}>
              <div
                className="price-card__image"
                style={{ backgroundImage: `url('${plan.image}')` }}
              >
                <span className="price-card__badge">
                  {plan.price}
                  <small>/ Mdr</small>
                </span>
              </div>
              <h3>{plan.name}</h3>
              <ul className="price-card__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <IconCheck /> {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn">
                Tilmeld dig nu
                <span className="btn__icon">
                  <IconPlay />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
