// components/Features.tsx
import React from 'react';
import './Features.css';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#f59e0b"/>
          <circle cx="12" cy="12" r="4" stroke="#f59e0b"/>
        </svg>
      ),
      title: 'High Efficiency Panels',
      description: 'Premium monocrystalline panels with up to 22% efficiency rating, ensuring maximum energy production.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#f59e0b"/>
          <path d="M8 12h8" stroke="#f59e0b"/>
          <path d="M12 8v8" stroke="#f59e0b"/>
        </svg>
      ),
      title: 'Smart Monitoring',
      description: 'Real-time energy tracking via mobile app. Monitor production, consumption, and savings instantly.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#f59e0b"/>
          <path d="M12 6v6l4 2" stroke="#f59e0b"/>
        </svg>
      ),
      title: '25-Year Warranty',
      description: 'Comprehensive warranty coverage on panels, inverters, and installation workmanship.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="#f59e0b"/>
          <path d="M12 6L9 9h6l-3-3z" stroke="#f59e0b"/>
          <path d="M9 15l3 3 3-3" stroke="#f59e0b"/>
        </svg>
      ),
      title: 'Battery Storage',
      description: 'Optional battery storage solutions for energy independence and backup power during outages.'
    }
  ];

  return (
    <section id="features" className="features section">
      <div className="container">
        <h2 className="section-title">Why Choose NexonSolar?</h2>
        <p className="section-subtitle">
          We provide end-to-end solar solutions with cutting-edge technology and unmatched customer service
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;