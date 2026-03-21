import "../styles/FinalCta.css";

const FinalCta = () => (
  <section className="section final-cta">
    <div className="container reveal">
      <h2>Let’s get your first order moving.</h2>
      <p>
        Speak with our team for a tailored quote, reliable lead times, and a
        smooth onboarding experience.
      </p>
      <div className="final-cta-actions">
        <a
          className="button button-large"
          href="mailto:orders@shvfoods.com?subject=Order%20Inquiry"
        >
          Order Now
        </a>
        <a className="button button-light" href="tel:+1234567890">
          Call us: +1 (234) 567‑890
        </a>
      </div>
    </div>
  </section>
);

export default FinalCta;
