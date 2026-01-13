import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <a href="#" className="logo">Shannon<span>Vale</span> Foods</a>
          <button className="mobile-menu" onClick={toggleMenu}>
            ☰
          </button>
          <nav className={isMenuOpen ? 'active' : ''}>
            <ul>
              <li><a href="#about" onClick={closeMenu}>About Us</a></li>
              <li><a href="#products" onClick={closeMenu}>Products</a></li>
              <li><a href="#order" onClick={closeMenu}>Order NOW</a></li>
              <li><a href="#join" onClick={closeMenu}>Join Us</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;