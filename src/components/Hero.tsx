// components/Hero.tsx
import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-icon">☀️</span>
            <span>Power Your Future with Solar</span>
          </div>
          <h1 className="hero-title">
            Harness the Power of<br />
            <span className="hero-highlight">Clean Energy</span>
          </h1>
          <p className="hero-description">
            Join the green revolution. Reduce your carbon footprint and save up to 70% on electricity bills 
            with our state-of-the-art solar solutions. Professional installation, premium panels, and lifetime support.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Free Consultation</button>
            <button className="btn-secondary">View Projects</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat">
              <span className="stat-number">500MW</span>
              <span className="stat-label">Installed Capacity</span>
            </div>
            <div className="stat">
              <span className="stat-number">25+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-card card-1">
            <span>💰 Save $200/month</span>
          </div>
          <div className="floating-card card-2">
            <span>🌱 2,000 lbs CO₂ saved</span>
          </div>
          <div className="hero-image-wrapper">
            <svg viewBox="0 0 400 400" className="solar-svg">
              <circle cx="200" cy="200" r="180" fill="#fff8e7" stroke="#f59e0b" strokeWidth="2"/>
              <path d="M200 60 L220 140 L200 120 L180 140 Z" fill="#f59e0b"/>
              <path d="M200 340 L220 260 L200 280 L180 260 Z" fill="#f59e0b"/>
              <path d="M60 200 L140 180 L120 200 L140 220 Z" fill="#f59e0b"/>
              <path d="M340 200 L260 180 L280 200 L260 220 Z" fill="#f59e0b"/>
              <path d="M101 101 L159 159 L145 145 L159 159 L145 145 Z" fill="#fbbf24"/>
              <path d="M299 299 L241 241 L255 255 L241 241 L255 255 Z" fill="#fbbf24"/>
              <path d="M299 101 L241 159 L255 145 L241 159 L255 145 Z" fill="#fbbf24"/>
              <path d="M101 299 L159 241 L145 255 L159 241 L145 255 Z" fill="#fbbf24"/>
              <rect x="175" y="160" width="50" height="80" rx="5" fill="#1e3a5f"/>
              <rect x="190" y="140" width="20" height="25" rx="3" fill="#2c5a7a"/>
              <rect x="185" y="240" width="30" height="40" rx="3" fill="#475569"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;