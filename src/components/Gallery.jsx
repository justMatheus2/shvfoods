import { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Production Facility',
    image:
      'https://images.unsplash.com/photo-1576866209830-589e1bfbaa4d?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Packaging Process',
    image:
      'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Fresh Chicken Products',
    image:
      'https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=1400&q=80',
  },
  {
    title: 'Team at Work',
    image:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1400&q=80',
  },
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const goTo = (next) => {
    const normalized = (next + slides.length) % slides.length;
    setIndex(normalized);
  };

  return (
    <section id="gallery" className="section gallery">
      <div className="container reveal">
        <p className="eyebrow">Inside Our Operations</p>
        <h2>Facility & Process Gallery</h2>
        <div className="carousel">
          <button className="carousel-btn" onClick={() => goTo(index - 1)} aria-label="Previous slide">
            ‹
          </button>
          <div className="slide-frame">
            {slides.map((slide, slideIndex) => (
              <article
                className={`slide ${slideIndex === index ? 'active' : ''}`}
                key={slide.title}
                aria-hidden={slideIndex !== index}
              >
                <img src={slide.image} alt={slide.title} />
                <div className="slide-caption">{slide.title}</div>
              </article>
            ))}
          </div>
          <button className="carousel-btn" onClick={() => goTo(index + 1)} aria-label="Next slide">
            ›
          </button>
        </div>
        <div className="dots">
          {slides.map((slide, dotIndex) => (
            <button
              key={slide.title}
              className={`dot ${dotIndex === index ? 'active' : ''}`}
              onClick={() => goTo(dotIndex)}
              aria-label={`Go to ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
