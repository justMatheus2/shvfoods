import "../styles/Hero.css";

const heroGifSrc = `${import.meta.env.BASE_URL}hero-gif.gif`;

const Hero = () => (
  <section id="top" className="hero section">
    <div className="container hero-shell reveal">
      <div className="hero-content">
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

      <div className="hero-art" aria-hidden="true">
        <div className="hero-art-frame">
          <img src={heroGifSrc} alt="" className="hero-gif" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
