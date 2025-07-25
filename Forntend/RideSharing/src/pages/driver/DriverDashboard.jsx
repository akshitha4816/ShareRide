// src/pages/UserDashboard.jsx
import React, { useEffect, useState } from 'react';
import DriverNavbar from '../../components/DriverNavbar';
import { getRideRequests } from '../../services/RideService';
import Spinner from '../../components/Spinner';
import { useNavigate } from 'react-router-dom';

const EmptyState = ({ message }) => (
  <div style={{ textAlign: 'center', margin: '2rem 0', color: '#aaa' }}>
    <div style={{ fontSize: 48, marginBottom: 8 }}>🛣️</div>
    <div style={{ fontSize: 18 }}>{message}</div>
  </div>
);

const cardStyle = {
  background: '#23272f',
  color: '#fff',
  padding: '1rem 2rem',
  borderRadius: 12,
  boxShadow: '0 2px 8px rgba(0,0,0,0.18)',
  width: 350,
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  marginBottom: 16,
};

const DriverDashboard = () => {
  const driver = JSON.parse(localStorage.getItem('user'));
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [actionLoading, setActionLoading] = useState(false);
  const [actionMsg, setActionMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await getRideRequests();
      setRequests(res.data.rides || []);
    } catch (err) {
      setError('Failed to load ride requests.');
    } finally {
      setLoading(false);
    }
  };

  // Simulate Accept/Reject API logic
  const handleAccept = async (rideId) => {
    setActionLoading(true);
    setActionMsg('');
    setTimeout(() => {
      setActionLoading(false);
      setActionMsg('Ride accepted!');
      setRequests((prev) => prev.filter((r) => r.id !== rideId));
    }, 1200);
  };
  const handleReject = async (rideId) => {
    setActionLoading(true);
    setActionMsg('');
    setTimeout(() => {
      setActionLoading(false);
      setActionMsg('Ride rejected.');
      setRequests((prev) => prev.filter((r) => r.id !== rideId));
    }, 1200);
  };

  return (
    <div className="driver-dashboard">
      <DriverNavbar />
      <div className="dashboard-content">
        <h2 style={{ color: '#00b894' }}>Welcome, {driver?.username} 👋</h2>
        <h3 style={{ color: '#00b894' }}>Available Ride Requests</h3>
        {loading ? (
          <Spinner />
        ) : error ? (
          <p className="error-msg">{error}</p>
        ) : requests.length === 0 ? (
          <EmptyState message="No ride requests available." />
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {requests.map((ride) => (
              <div key={ride.id} style={{ ...cardStyle, cursor: 'pointer' }} onClick={() => navigate(`/ride/${ride.id}`)}>
                <div><strong>User:</strong> <span style={{ color: '#00b894' }}>{ride.user?.username || ride.userId}</span></div>
                <div><strong>Pickup:</strong> <span style={{ color: '#0984e3' }}>{ride.pickupLocation?.latitude ? `${ride.pickupLocation.latitude.toFixed(5)}, ${ride.pickupLocation.longitude.toFixed(5)}` : ride.pickupLocation}</span></div>
                <div><strong>Drop:</strong> <span style={{ color: '#0984e3' }}>{ride.dropLocation?.latitude ? `${ride.dropLocation.latitude.toFixed(5)}, ${ride.dropLocation.longitude.toFixed(5)}` : ride.dropLocation}</span></div>
                <div><strong>Status:</strong> <span style={{ color: '#fdcb6e' }}>{ride.status}</span></div>
                <div style={{ marginTop: 8 }}>
                  <button onClick={e => { e.stopPropagation(); handleAccept(ride.id); }} style={{ marginRight: 8, background: '#00b894', color: '#fff', border: 'none', borderRadius: 6, padding: '0.4rem 1rem', cursor: 'pointer', fontWeight: 600 }} disabled={actionLoading}>{actionLoading ? <Spinner size={16} /> : 'Accept'}</button>
                  <button onClick={e => { e.stopPropagation(); handleReject(ride.id); }} style={{ background: '#d63031', color: '#fff', border: 'none', borderRadius: 6, padding: '0.4rem 1rem', cursor: 'pointer', fontWeight: 600 }} disabled={actionLoading}>{actionLoading ? <Spinner size={16} /> : 'Reject'}</button>
                </div>
              </div>
            ))}
            {actionMsg && <div style={{ color: '#00b894', marginTop: 12, fontWeight: 600 }}>{actionMsg}</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default DriverDashboard;
