import React from 'react';
import { useParams } from 'react-router-dom';

const RideDetails = () => {
  const { id } = useParams();
  return (
    <div style={{ maxWidth: 600, margin: '3rem auto', padding: '2rem', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
      <h1 style={{ color: '#00b894', fontWeight: 800, fontSize: 32, marginBottom: 18 }}>Ride Details</h1>
      <p style={{ color: '#636e72', fontSize: 18, marginBottom: 24 }}>Details for ride ID: <span style={{ color: '#0984e3' }}>{id}</span></p>
      <div style={{ color: '#636e72', fontSize: 17 }}>More ride info coming soon.</div>
    </div>
  );
};

export default RideDetails; 