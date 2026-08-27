// Data for services - billeder er genbrugt fra de rigtige Figma-assets
const services = [
  {
    icon: "/assets/icons/video_img_icon.png",
    title: "Personlig træner",
    text: "En personlig træner hjælper dig med at træne smartere — ikke bare hårdere.",
    image: "/assets/images/about_us2.png",
  },
  {
    icon: "/assets/icons/video_img_icon.png",
    title: "Boksning",
    text: "Har du haft en lang dag? Kom og slå det ud lige her — helt lovligt!",
    image: "/assets/images/mainHeader.jpg",
  },
  {
    icon: "/assets/icons/video_img_icon.png",
    title: "Yoga timer",
    text: "Yoga hos Xtreme Fitness er for alle, der trænger til både styrke og indre ro.",
    image: "/assets/images/video_img.jpg",
  },
  {
    icon: "/assets/icons/video_img_icon.png",
    title: "Online coaching",
    text: "Med online coaching kan du få styrket og high-fives derhjemme i stuen.",
    image: "/assets/images/employeesHeader.jpg",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="section services"
      style={{
        backgroundImage: "url('/assets/images/section_background.png')",
      }}
    >
      <div className="container">
        <p className="eyebrow" style={{ color: "#fff" }}>
          Vores tjenester
        </p>
        <h2 className="section-title">
          Løsninger til at bevæge sig bedre og føle sig sundere
        </h2>
      </div>

      <div className="services__list">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div
              className="service-card__image"
              style={{ backgroundImage: `url('${service.image}')` }}
            >
              <img
                className="service-card__icon"
                src={service.icon}
                alt=""
                aria-hidden="true"
              />
            </div>
            <div className="service-card__body">
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
