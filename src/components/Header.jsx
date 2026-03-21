import { useState } from "react";
import "../styles/Header.css";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#gallery", label: "Operations" },
  { href: "#quality", label: "Quality" },
  { href: "#contact-form", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#top" className="brand">
          SHV Foods
        </a>
        <button
          className="menu-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav className={`site-nav ${open ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="mailto:orders@shvfoods.com?subject=Order%20Inquiry"
            className="button button-nav"
            onClick={() => setOpen(false)}
          >
            Order Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
