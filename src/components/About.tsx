// components/About.tsx
import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title" style={{ textAlign: 'left' }}>About NexonSolar</h2>
            <p className="about-text">
              Founded in 2015, NexonSolar has been at the forefront of the renewable energy revolution. 
              We believe that clean, affordable energy should be accessible to everyone.
            </p>
            <p className="about-text">
              Our team of certified solar experts has completed over 10,000 installations across the country, 
              helping families and businesses transition to sustainable energy while saving thousands on electricity costs.
            </p>
            <div className="about-mission">
              <h3>Our Mission</h3>
              <p>To accelerate the world's transition to sustainable energy by providing high-quality, affordable solar solutions that empower communities and protect our planet for future generations.</p>
            </div>
            <div className="about-values">
              <div className="value">
                <div className="value-dot"></div>
                <span>Quality First</span>
              </div>
              <div className="value">
                <div className="value-dot"></div>
                <span>Customer Centric</span>
              </div>
              <div className="value">
                <div className="value-dot"></div>
                <span>Sustainable Future</span>
              </div>
            </div>
          </div>
          <div className="about-stats-grid">
            <div className="stat-badge">
              <span className="stat-badge-number">10K+</span>
              <span>Installations</span>
            </div>
            <div className="stat-badge">
              <span className="stat-badge-number">98%</span>
              <span>Satisfaction Rate</span>
            </div>
            <div className="stat-badge">
              <span className="stat-badge-number">24/7</span>
              <span>Support</span>
            </div>
            <div className="stat-badge">
              <span className="stat-badge-number">15+</span>
              <span>Years Avg. Panel Life</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;