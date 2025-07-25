import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="about-page" style={{ minHeight: '80vh', background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)', padding: '0 0 4rem 0' }}>
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 2rem 0 2rem' }}>
      <h1 style={{ color: '#00b894', fontWeight: 800, fontSize: 38, marginBottom: 8, letterSpacing: 1 }}>About Us</h1>
      <p style={{ color: '#636e72', fontSize: 20, marginBottom: 40, maxWidth: 700 }}>
        TakeMe is a next-gen ride-sharing platform founded in 2023. Our goal? Make urban travel safer, greener, and smarter.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 60, alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <ul style={{ flex: 1, minWidth: 320, maxWidth: 420, listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: 32, color: '#636e72', fontSize: 18 }}>
            <span style={{ fontSize: 28, marginRight: 16 }}>🛡️</span>Safe Rides: Drivers are background-checked. Vehicles inspected.
          </li>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: 32, color: '#636e72', fontSize: 18 }}>
            <span style={{ fontSize: 28, marginRight: 16 }}>⏰</span>24/7 Support: We're here whenever you need us.
          </li>
          <li style={{ display: 'flex', alignItems: 'center', marginBottom: 32, color: '#636e72', fontSize: 18 }}>
            <span style={{ fontSize: 28, marginRight: 16 }}>🌱</span>Eco-Conscious: We love green rides and carpooling.
          </li>
        </ul>
        <div style={{ flex: 1, minWidth: 260, maxWidth: 340, marginTop: 10 }}>
          <h2 style={{ color: '#0984e3', fontWeight: 700, fontSize: 24, marginBottom: 18 }}>Get in Touch</h2>
          <p style={{ color: '#636e72', fontSize: 17, marginBottom: 24 }}>Questions? Feedback? <br />We'd love to hear from you.</p>
          <Link to="/contact" style={{ color: '#00b894', textDecoration: 'underline', fontSize: 18, fontWeight: 600 }}>Contact Us</Link>
        </div>
      </div>
    </div>
  </div>
);

export default About;
