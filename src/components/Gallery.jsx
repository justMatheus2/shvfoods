import "../styles/Gallery.css";

const photos = [
  {
    title: 'Monitored process',
    detail: 'Production lines with strict hygiene and temperature control.',
    image:
      './public/workers.png',
  },
  {
    title: 'Modern infrastructure',
    detail: 'High-performance equipment for maximum operational efficiency.',
    image:
      './public/machine.jpg',
  },
  {
    title: 'Specialized team',
    detail: 'Trained professionals in every stage to ensure excellence.',
    image:
      './public/quality-control.png',
  },
  {
    title: 'Logistics and dispatch',
    detail: 'Efficient preparation for safe deliveries across Ireland.',
    image:
      './public/logistc.png',
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
