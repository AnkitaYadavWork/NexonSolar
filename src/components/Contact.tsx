// components/Contact.tsx
import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Ready to go solar? Our experts are here to help you every step of the way.
        </p>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <div>
                <h4>Visit Us</h4>
                <p>123 Solar Street, San Francisco, CA 94105</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">📞</div>
              <div>
                <h4>Call Us</h4>
                <p>+1 (888) 555-SOLAR</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">✉️</div>
              <div>
                <h4>Email Us</h4>
                <p>hello@solareco.com</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-icon">⏰</div>
              <div>
                <h4>Hours</h4>
                <p>Mon-Fri: 9AM - 6PM | Sat: 10AM - 4PM</p>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="form-group">
              <textarea
                rows={4}
                placeholder="Tell us about your energy needs..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;