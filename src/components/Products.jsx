const products = [
  {
    title: 'Fresh chicken cuts',
    description: 'Fresh cuts prepared for retail and food service with consistent standards.',
    icon: '🍗',
    image:
      'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Cold-chain integrity',
    description: 'Monitored cold chain from processing to final delivery.',
    icon: '❄️',
    image:
      'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Quality inspection',
    description: 'Strict inspection and controlled handling through every production stage.',
    icon: '✅',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Scalable distribution',
    description: 'Scalable capacity for distributors and nationwide retail networks.',
    icon: '🚚',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
  },
];

const Products = () => (
  <section id="products" className="section products">
    <div className="container reveal">
      <p className="eyebrow">Our Products</p>
      <h2>Reliable supply of premium poultry products</h2>
      <p className="section-intro">
        We produce a broad range of chicken products for distributors, retail chains, and food service
        operations that require consistency, freshness, and dependable delivery.
      </p>

      <div className="product-grid">
        {products.map((item) => (
          <article key={item.title} className="product-card" style={{ backgroundImage: `url(${item.image})` }}>
            <div className="product-overlay">
              <span className="product-icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
