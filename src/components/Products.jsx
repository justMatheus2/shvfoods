const highlights = [
  'Fresh chicken cuts prepared for retail and foodservice',
  'Cold-chain integrity maintained from processing to delivery',
  'Rigorous inspection and handling standards at every stage',
  'Scalable output supporting nationwide distribution networks',
];

const Products = () => (
  <section id="products" className="section products">
    <div className="container reveal">
      <p className="eyebrow">Our Products</p>
      <h2>Reliable Supply of High-Quality Chicken Products</h2>
      <p className="section-intro">
        We produce a broad range of fresh chicken products designed to meet the requirements of wholesale,
        retail, and foodservice partners. Our processing standards ensure consistency, freshness, and full
        confidence in every shipment.
      </p>
      <ul className="highlight-list">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default Products;
