const items = [
  'Locally sourced',
  'Quality controlled',
  'HACCP compliant',
  'Modern processing facilities',
  'Nationwide distribution',
];

const TrustSection = () => (
  <section id="quality" className="section quality">
    <div className="container reveal">
      <p className="eyebrow">Trust & Quality</p>
      <h2>Built for Reliability at Every Stage</h2>
      <ul className="quality-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default TrustSection;
