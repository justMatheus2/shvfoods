import { useState } from 'react';

const storySlides = [
  {
    title: 'Founding family roots',
    caption: 'Our story began with a Clonakilty family deeply connected to local agriculture.',
    image:
      'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'The original West Cork farm',
    caption: 'The rural heritage of West Cork still guides every stage of our operation.',
    image:
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Modern facilities',
    caption: 'We continuously invest in technology to ensure safety and consistency.',
    image:
      'https://images.unsplash.com/photo-1581093588401-12f2a5a2f37f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Today’s team',
    caption: 'Experienced professionals protect quality from intake to dispatch.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  },
];

const About = () => {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(null);

  return (
    <section id="about" className="section about">
      <div className="container about-layout">
        <div className="reveal about-copy">
          <p className="eyebrow">Our Story</p>
          <h2>Family Tradition in West Cork</h2>
          <p>
            Founded by a Clonakilty family with deep ties to the countryside, Clonakilty Poultry Co. evolved
            from a regional processor into a strategic partner for retailers, food service, and distributors
            across Ireland.
          </p>
          <p>
            We combine hands-on expertise with strict process controls at every stage, from sourcing to
            dispatch, while maintaining our commitment to traceability, hygiene, and consistency.
          </p>
          <p>
            We continue to grow responsibly, investing in energy efficiency, waste reduction, and smart
            logistics to preserve quality, safety, and sustainability.
          </p>
          <span className="since-pill">Since 1987</span>
        </div>

        <div className="reveal story-carousel" role="region" aria-label="Company story gallery">
          {storySlides.map((slide, index) => (
            <button
              type="button"
              key={slide.title}
              className={`story-card ${active === index ? 'active' : ''}`}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setLightbox(index)}
            >
              <img src={slide.image} alt={slide.title} />
              <span className="story-label">{slide.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="container story-cta reveal">
        <h3>Ready to secure the best of Irish poultry?</h3>
        <p>
          Talk to our commercial team and discover how we can meet your demand with quality and tradition.
        </p>
        <a className="button button-large" href="#contact">
          I WANT TO SPEAK WITH A SPECIALIST
        </a>
      </div>

      {lightbox !== null && (
        <button className="lightbox" type="button" onClick={() => setLightbox(null)} aria-label="Close image">
          <figure className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <img src={storySlides[lightbox].image} alt={storySlides[lightbox].title} />
            <figcaption>
              <strong>{storySlides[lightbox].title}</strong>
              <span>{storySlides[lightbox].caption}</span>
            </figcaption>
          </figure>
        </button>
      )}
    </section>
  );
};

export default About;
