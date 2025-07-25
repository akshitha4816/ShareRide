import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from '../../components/Navbar';

const Help = () => (
  <div className="help-page" style={{ minHeight: '80vh', background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)', padding: '0 0 4rem 0' }}>
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '3rem 2rem 0 2rem' }}>
      <h1 style={{ color: '#0984e3', fontWeight: 800, fontSize: 38, marginBottom: 8, letterSpacing: 1 }}>Help & Support</h1>
      <p style={{ color: '#636e72', fontSize: 20, marginBottom: 40, maxWidth: 700 }}>
        Need assistance? We're here to help! Check out our FAQs or contact support.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 60, alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <ul style={{ flex: 1, minWidth: 320, maxWidth: 520, listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 36, color: '#636e72', fontSize: 18 }}>
            <span style={{ fontSize: 28, marginRight: 16, marginTop: 2 }}>🚗</span>
            <div>
              How do I book a ride?<br />
              <span style={{ color: '#0984e3' }}>Sign up/login, enter destination, choose ride.</span>
            </div>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 36, color: '#636e72', fontSize: 18 }}>
            <span style={{ fontSize: 28, marginRight: 16, marginTop: 2 }}>🧑‍✈️</span>
            <div>
              How do I become a driver?<br />
              <span style={{ color: '#0984e3' }}>Sign up, select "Driver" role, follow instructions.</span>
            </div>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 36, color: '#636e72', fontSize: 18 }}>
            <span style={{ fontSize: 28, marginRight: 16, marginTop: 2 }}>🔒</span>
            <div>
              Is my payment info secure?<br />
              <span style={{ color: '#0984e3' }}>Yes, we use encryption to protect your data.</span>
            </div>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 36, color: '#636e72', fontSize: 18 }}>
            <span style={{ fontSize: 28, marginRight: 16, marginTop: 2 }}>❓</span>
            <div>
              Need more help?<br />
              <Link to="/contact" style={{ color: '#0984e3', textDecoration: 'underline' }}>Contact Support</Link>
            </div>
          </li>
        </ul>
        <div style={{ flex: 1, minWidth: 260, maxWidth: 340, marginTop: 10 }}>
          <h2 style={{ color: '#00b894', fontWeight: 700, fontSize: 24, marginBottom: 18 }}>Learn more</h2>
          <p style={{ color: '#636e72', fontSize: 17, marginBottom: 24 }}>Discover more about our mission, team, and values.</p>
          <Link to="/about" style={{ color: '#00b894', textDecoration: 'underline', fontSize: 18, fontWeight: 600 }}>About Us</Link>
        </div>
      </div>
    </div>
  </div>
);

export default Help;