// Seneste blogindlæg - viser ét fremhævet indlæg som i designet
const post = {
  date: "23 Jun",
  title: "Fra sofasurfer til bænkpresser",
  excerpt:
    "Hvordan et spontant medlemskab i Xtreme Fitness vendte hverdag på hovedet — på den allerbedste måde.",
  image: "/assets/images/blog-1.jpg",
};

function Blog() {
  return (
    <section id="blog" className="section blog">
      <div className="container">
        <p
          className="eyebrow"
          style={{ textAlign: "center", display: "block" }}
        >
          Vores nyheder
        </p>
        <h2 className="section-title section-title--center">
          Seneste blogindlæg
        </h2>

        <article className="blog-card">
          <div
            className="blog-card__image"
            style={{ backgroundImage: `url('${post.image}')` }}
          >
            <span className="blog-card__date">{post.date}</span>
          </div>
          <div className="blog-card__body">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href="#" className="blog-card__link">
              Læs mere
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Blog;
