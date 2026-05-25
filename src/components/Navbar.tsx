// components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Features', 'About', 'Calculator', 'Contact'];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <div className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="14" fill="#f59e0b" stroke="#d97706" strokeWidth="2"/>
              <path d="M16 6V10M16 22V26M22 16H26M6 16H10M19.5 12.5L22.5 9.5M9.5 22.5L12.5 19.5M19.5 19.5L22.5 22.5M9.5 9.5L12.5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="16" cy="16" r="4" fill="white"/>
            </svg>
          </div>
          <span className="logo-text">Nexon<span>Solar</span></span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="nav-cta">Get Quote</button>
        </div>

        <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={`toggle-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`toggle-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`toggle-line ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;