const OrderForm = () => (
  <section id="contact-form" className="section contact-form">
    <div className="container reveal">
      <p className="eyebrow">Speak with a specialist</p>
      <h2>Request commercial contact</h2>
      <p className="section-intro">
        Send your company details and our team will get back to you with availability, terms, and supply
        options.
      </p>
      <form className="form-grid">
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Company
          <input type="text" name="company" placeholder="Company name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="you@company.com" />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" placeholder="+353 ..." />
        </label>
        <label className="full-width">
          Message
          <textarea name="message" rows="4" placeholder="I would like to receive information about..." />
        </label>
        <button type="submit" className="button button-large">
          I WANT TO SPEAK WITH A SPECIALIST
        </button>
      </form>
    </div>
  </section>
);

export default OrderForm;
