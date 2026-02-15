import { useState } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#quality', label: 'Quality' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a href="#top" className="brand">
          Clonakilty Poultry Co.
        </a>
        <button className="menu-toggle" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
          ☰
        </button>
        <nav className={`site-nav ${open ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
