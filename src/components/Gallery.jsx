const photos = [
  {
    title: 'Monitored process',
    detail: 'Production lines with strict hygiene and temperature control.',
    image:
      'https://images.unsplash.com/photo-1582719478144-61d5f2f7f728?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Modern infrastructure',
    detail: 'High-performance equipment for maximum operational efficiency.',
    image:
      'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Specialized team',
    detail: 'Trained professionals in every stage to ensure excellence.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Logistics and dispatch',
    detail: 'Efficient preparation for safe deliveries across Ireland.',
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80',
  },
];

const Gallery = () => (
  <section id="gallery" className="section gallery">
    <div className="container reveal">
      <p className="eyebrow">Inside Our Operations</p>
      <h2>Facilities, process, and people</h2>
      <div className="operations-grid">
        {photos.map((photo) => (
          <article key={photo.title} className="operations-item">
            <img src={photo.image} alt={photo.title} />
            <div className="operations-overlay">
              <h3>{photo.title}</h3>
              <p>{photo.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
