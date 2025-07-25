import React from 'react';
import '../../Styles/Home.css';
import Navbar from '../../components/Navbar';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-modern-bg">
      <Navbar showSupport={false} showProfile={false} showNotifications={false} showWallet={false} />
      <main className="new-hero">
        <div className="new-hero-content">
          <h1 className="new-title">Move Freely, Move Smart</h1>
          <p className="new-tagline">Your city, your ride. Seamless journeys start here.</p>
          <div className="new-cta-group">
            <button className="new-login" onClick={() => navigate('/login')}>Login</button>
            <button className="new-signup" onClick={() => navigate('/signup')}>Sign Up</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;