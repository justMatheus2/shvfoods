const Footer = () => (
  <footer id="contact" className="site-footer">
    <div className="container footer-grid">
      <div>
        <h3>Clonakilty Poultry Co.</h3>
        <p>Clonakilty, West Cork, Ireland</p>
      </div>
      <div>
        <h4>Get in Touch</h4>
        <p>
          Phone: <a href="tel:+353238800100">+353 (23) 880 0100</a>
        </p>
        <p>
          Email: <a href="mailto:info@clonakiltypoultry.ie">info@clonakiltypoultry.ie</a>
        </p>
        <div className="cta-links">
          <a className="button button-footer" href="tel:+353238800100">
            Call now
          </a>
          <a className="button button-footer" href="mailto:info@clonakiltypoultry.ie">
            Send email
          </a>
        </div>
      </div>
    </div>
    <div className="copyright">© {new Date().getFullYear()} Clonakilty Poultry Co. All rights reserved.</div>
  </footer>
);

export default Footer;
