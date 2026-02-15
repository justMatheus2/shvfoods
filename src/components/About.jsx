const About = () => (
  <section id="about" className="section about">
    <div className="container two-col">
      <div className="reveal">
        <p className="eyebrow">About Our Company</p>
        <h2>Decades of Experience Serving Ireland's Food Supply Chain</h2>
        <p>
          Founded by a Clonakilty family with deep agricultural ties, Clonakilty Poultry Co. has grown from
          a regional processor into a trusted partner for retailers, foodservice providers, and distributors
          across Ireland. While our operations have expanded significantly, our values remain local:
          consistency, accountability, and long-term relationships.
        </p>
        <p>
          Our team combines hands-on expertise with disciplined process controls. Every stage of production,
          from sourcing through packing and dispatch, is managed under strict hygiene, traceability, and
          quality procedures. This commitment has allowed us to scale responsibly while maintaining the high
          standards expected of an established West Cork producer.
        </p>
        <p>
          Sustainability is built into our day-to-day decisions. We continually invest in energy efficiency,
          waste reduction, and logistics planning to minimize environmental impact, while protecting product
          quality and food safety for customers nationwide.
        </p>
      </div>
      <div className="about-image reveal">
        <img
          src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1200&q=80"
          alt="Modern poultry processing facility"
        />
      </div>
    </div>
  </section>
);

export default About;
