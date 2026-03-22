import "../styles/StickyOrderBar.css";

const StickyOrderBar = () => (
  <>
    <div
      className="sticky-order-bar"
      role="complementary"
      aria-label="Quick order"
    >
      <div className="sticky-order-inner">
        <div className="sticky-order-text">
          <strong>Ready to order?</strong> Get a quote in minutes.
        </div>
        <div className="sticky-order-actions">
          <a
            className="button button-small"
            href="mailto:orders@shvfoods.com?subject=Order%20Inquiry"
          >
            Order Now
          </a>
          <a className="button button-light" href="tel:+1234567890">
            Call +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>

    <a
      className="mobile-call-button"
      href="tel:+1234567890"
      aria-label="Call SHV Foods"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.35 1.78.68 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.25a2 2 0 0 1 2.11-.45c.84.33 1.72.56 2.62.68A2 2 0 0 1 22 16.92z" />
      </svg>
    </a>
  </>
);

export default StickyOrderBar;
