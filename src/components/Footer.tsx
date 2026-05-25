// components/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="#f59e0b"/>
                <path d="M16 6V10M16 22V26M22 16H26M6 16H10M19.5 12.5L22.5 9.5M9.5 22.5L12.5 19.5M19.5 19.5L22.5 22.5M9.5 9.5L12.5 12.5" stroke="white" strokeWidth="2"/>
                <circle cx="16" cy="16" r="4" fill="white"/>
              </svg>
              <span>SolarEco</span>
            </div>
            <p>Empowering a sustainable future with clean, renewable energy solutions for homes and businesses.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#about">About</a>
            <a href="#calculator">Calculator</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-links">
            <h4>Resources</h4>
            <a href="#">Solar Guide</a>
            <a href="#">Financing Options</a>
            <a href="#">Tax Incentives</a>
            <a href="#">Case Studies</a>
            <a href="#">FAQs</a>
          </div>
          <div className="footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Get the latest solar news and offers</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email" />
              <button>→</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 SolarEco. All rights reserved. Powering a cleaner tomorrow.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;