import "../styles/About.css";

const features = [
  {
    icon: "✅",
    title: "Quality Guaranteed",
    text: "Rigorous audits, full traceability, and third-party certification at every step.",
  },
  {
    icon: "🌱",
    title: "Fresh ingredients",
    text: "Sustainably sourced, cold-chain managed, and prepared for consistent flavor.",
  },
  {
    icon: "🚚",
    title: "Fast delivery",
    text: "Reliable logistics with temperature-controlled transport for a seamless supply.",
  },
];

const About = () => (
  <section id="about" className="section about">
    <div className="container about-layout">
      <div className="reveal about-copy">
        <p className="eyebrow">About us</p>
        <h2>Premium Ingredients, Proven Expertise</h2>
        <p>
          At SHV Foods we deliver culinary ingredients that help chefs and
          retailers exceed expectations. Our sourcing standards, processing
          controls, and transparency create confidence at every stage.
        </p>
        <p>
          From supplier vetting to cold-chain delivery, our team ensures that
          every load meets the quality and safety benchmarks required by
          demanding kitchens and store shelves.
        </p>

        <div className="feature-grid">
          {features.map((item) => (
            <article key={item.title} className="feature-card">
              <span className="feature-icon" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="reveal about-visual">
        <img
          src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?auto=format&fit=crop&w=1200&q=80"
          alt="Chef adding final touches"
        />
      </div>
    </div>
  </section>
);

export default About;
