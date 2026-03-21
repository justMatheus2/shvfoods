import "../styles/Hero.css";

const Hero = () => (
  <section id="top" className="hero section">
    <div className="container hero-content reveal">
      <p className="eyebrow">SHV Foods</p>
      <h1>Freshly Sourced, Masterfully Prepared</h1>
      <p>
        Premium culinary ingredients delivered with traceable quality, modern
        safety standards, and fast, reliable service.
      </p>
      <a
        className="button button-large"
        href="mailto:orders@shvfoods.com?subject=Order%20Inquiry"
      >
        Order Now
      </a>
      <div className="hero-microcopy">
        <span>Quality Guaranteed</span>
        <span>Fast delivery nationwide</span>
        <span>Flexible order volumes</span>
      </div>
    </div>
  </section>
);

export default Hero;
