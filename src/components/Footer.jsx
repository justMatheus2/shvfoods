const Footer = () => (
  <footer id="contact" className="site-footer">
    <div className="container footer-grid">
      <div>
        <h3>SHV Foods</h3>
        <p>Premium food ingredients, crafted for professionals.</p>
      </div>
      <div>
        <h4>Contact</h4>
        <p>
          Phone: <a href="tel:+1234567890">+1 (234) 567‑890</a>
        </p>
        <p>
          Email: <a href="mailto:orders@shvfoods.com">orders@shvfoods.com</a>
        </p>
        <a
          className="button button-footer"
          href="mailto:orders@shvfoods.com?subject=Order%20Inquiry"
        >
          Order Now
        </a>
      </div>
    </div>
    <div className="copyright">
      © {new Date().getFullYear()} SHV Foods. All rights reserved.
    </div>
  </footer>
);

export default Footer;
