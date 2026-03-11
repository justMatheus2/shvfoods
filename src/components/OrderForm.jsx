import { useState } from "react";

// Replace with your Formspree form ID or endpoint in Vite env: VITE_FORMSPREE_ENDPOINT
const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/mwkajnqv";

const OrderForm = () => {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setStatus("success");
      setMessage(
        "Thanks! Your inquiry was sent. We’ll reply within one business day.",
      );
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        "Sorry — we could not send your message. Please try again or email orders@shvfoods.com directly.",
      );
    }
  };

  return (
    <section id="contact-form" className="section contact-form">
      <div className="container">
        <p className="eyebrow">Talk to our team</p>
        <h2>Order inquiries & pricing</h2>
        <p className="section-intro">
          Send your order details and we'll respond with availability, lead
          times, and the best approach for your production schedule.
        </p>
        <p>
          Prefer to send an email?{" "}
          <a href="mailto:orders@shvfoods.com">orders@shvfoods.com</a> or call{" "}
          <a href="tel:+1234567890">+1 (234) 567‑890</a>.
        </p>

        <form className="form-grid" onSubmit={handleSubmit}>
          <label>
            Name
            <input required type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Company
            <input type="text" name="company" placeholder="Company name" />
          </label>
          <label>
            Email
            <input
              required
              type="email"
              name="email"
              placeholder="you@company.com"
            />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" placeholder="+1 (234) 567‑890" />
          </label>
          <label className="full-width">
            Message
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us what you need (volume, delivery location, etc.)"
            />
          </label>

          <button
            type="submit"
            className="button button-large"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Submit inquiry"}
          </button>

          {message && (
            <p
              className={`form-status ${status === "success" ? "success" : "error"}`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default OrderForm;
