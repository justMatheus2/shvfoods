const StickyOrderBar = () => (
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
          Call +1 (234) 567‑890
        </a>
      </div>
    </div>
  </div>
);

export default StickyOrderBar;
