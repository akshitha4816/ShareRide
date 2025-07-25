import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Navbar from '../../components/Navbar';

const OWNER_EMAIL = 'takeme@ridesharing.com';

const getDashboardRoute = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.role === 'driver') return '/driver/dashboard';
  if (user && user.role === 'user') return '/user/dashboard';
  return '/';
};

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [sent, setSent] = useState(false);
  const dashboardRoute = getDashboardRoute();

  const handleMail = (e) => {
    e.preventDefault();
    const mailto = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setSubject('');
    setBody('');
  };

  return (
    <div className="contact-page" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '0 0 3rem 0' }}>
      <div style={{ width: '100%', maxWidth: 1100, margin: '0 auto', padding: '4rem 1rem 0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ fontSize: 70, display: 'block', marginBottom: 10 }}>📬</span>
          <h1 style={{ color: '#0984e3', fontWeight: 800, fontSize: 44, marginBottom: 10, letterSpacing: 1 }}>Contact Us</h1>
          <p style={{ color: '#636e72', fontSize: 22, marginBottom: 0, maxWidth: 700, margin: '0 auto' }}>We'd love to hear from you! Reach out for questions, support, or feedback. Our team is here to help you 7 days a week.</p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'stretch', justifyContent: 'center', background: 'rgba(255,255,255,0.98)', borderRadius: 18, boxShadow: '0 4px 32px rgba(0,0,0,0.07)', padding: '2.5rem 2.5rem', margin: '0 auto', border: '1.5px solid #e0eafc', maxWidth: 950 }}>
          <form onSubmit={handleMail} style={{ flex: 1, minWidth: 280, maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 18, justifyContent: 'center' }}>
            <h2 style={{ color: '#00b894', fontWeight: 700, fontSize: 22, marginBottom: 6 }}>Send us a message</h2>
            <label htmlFor="subject" style={{ color: '#636e72', fontSize: 16, marginBottom: 2 }}>Subject</label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              required
              style={{ width: '100%', padding: 12, borderRadius: 8, border: '1.5px solid #dfe6e9', fontSize: 16, background: '#f7fbfd', outline: 'none', transition: 'border 0.2s' }}
              onFocus={e => (e.target.style.border = '1.5px solid #0984e3')}
              onBlur={e => (e.target.style.border = '1.5px solid #dfe6e9')}
            />
            <label htmlFor="body" style={{ color: '#636e72', fontSize: 16, marginBottom: 2 }}>Message</label>
            <textarea
              id="body"
              value={body}
              onChange={e => setBody(e.target.value)}
              required
              rows={6}
              style={{ width: '100%', padding: 12, borderRadius: 8, border: '1.5px solid #dfe6e9', fontSize: 16, background: '#f7fbfd', outline: 'none', resize: 'vertical', transition: 'border 0.2s' }}
              onFocus={e => (e.target.style.border = '1.5px solid #0984e3')}
              onBlur={e => (e.target.style.border = '1.5px solid #dfe6e9')}
            />
            <button type="submit" style={{ width: '100%', background: 'linear-gradient(90deg, #00b894 0%, #0984e3 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '0.8rem 0', fontWeight: 700, fontSize: 18, letterSpacing: 1, cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, transition: 'background 0.2s' }}>
              <span style={{ fontSize: 20 }}>✉️</span> Send Email
            </button>
            {sent && <div style={{ color: '#00b894', marginTop: 8, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6, fontSize: 16 }}><span style={{ fontSize: 20 }}>✔️</span>Message window opened!</div>}
          </form>
          <div style={{ flex: 1, minWidth: 220, maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 18, justifyContent: 'center' }}>
            <h2 style={{ color: '#00b894', fontWeight: 700, fontSize: 22, marginBottom: 6 }}>Other ways to reach us</h2>
            <div style={{ color: '#636e72', fontSize: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <span style={{ marginRight: 10, fontSize: 20 }}>📧</span>
                <a href={`mailto:${OWNER_EMAIL}`} style={{ color: '#0984e3', textDecoration: 'none', fontSize: 16 }}>takeme@ridesharing.com</a>
              </div>
              <div>
                <span style={{ marginRight: 10, fontSize: 20 }}>📞</span>
                +1 (123) 456-7890
              </div>
              <div>
                <span style={{ marginRight: 10, fontSize: 20 }}>🌐</span>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0984e3', marginRight: 14 }}>Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0984e3', marginRight: 14 }}>Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#0984e3' }}>Instagram</a>
              </div>
            </div>
            <div style={{ marginTop: 30 }}>
              <Link to={dashboardRoute} style={{ color: '#fff', background: 'linear-gradient(90deg, #0984e3 0%, #00b894 100%)', padding: '0.6rem 1.5rem', borderRadius: 8, fontWeight: 600, fontSize: 16, textDecoration: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 18 }}>←</span> Back to {dashboardRoute === '/' ? 'Home' : dashboardRoute === '/user/dashboard' ? 'User Dashboard' : 'Driver Dashboard'}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1100px) {
          .contact-page > div > div[style*='display: flex'] {
            flex-direction: column !important;
            gap: 0 !important;
            padding: 1.5rem 0.5rem !important;
            max-width: 98vw !important;
          }
        }
        @media (max-width: 700px) {
          .contact-page > div {
            padding: 2rem 0.2rem 0 0.2rem !important;
          }
          .contact-page > div > div[style*='display: flex'] {
            padding: 1rem 0.1rem !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
};

export default Contact;