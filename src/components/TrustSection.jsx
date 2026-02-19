const items = [
  { title: 'Locally sourced', text: 'Trusted local producer network in West Cork.', icon: '🗺️' },
  { title: 'Quality controlled', text: 'Continuous monitoring for quality and safety.', icon: '🌡️' },
  { title: 'HACCP compliant', text: 'Compliance with recognized food safety protocols.', icon: '🛡️' },
  { title: 'Modern facilities', text: 'Updated infrastructure for high productivity.', icon: '🏭' },
  { title: 'Nationwide delivery', text: 'Logistics built for reliable national-scale delivery.', icon: '🚛' },
];

const TrustSection = () => (
  <section id="quality" className="section quality">
    <div className="container reveal">
      <p className="eyebrow">Trust & Quality</p>
      <h2>Operational excellence for demanding partners</h2>
      <div className="trust-grid">
        {items.map((item) => (
          <article key={item.title} className="trust-card">
            <span className="trust-icon" aria-hidden="true">
              {item.icon}
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
