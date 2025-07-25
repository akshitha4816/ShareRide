import React, { useEffect, useState } from 'react';
import { getUserRides } from '../../services/RideService';
import RideCard from '../../components/RideCard';
import Spinner from '../../components/Spinner';

const statusOptions = ['All', 'Completed', 'Pending', 'Cancelled', 'Accepted'];

const EmptyState = ({ message }) => (
  <div style={{ textAlign: 'center', margin: '2rem 0', color: '#aaa' }}>
    <div style={{ fontSize: 48, marginBottom: 8 }}>🛣️</div>
    <div style={{ fontSize: 18 }}>{message}</div>
  </div>
);

const RideHistory = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [rides, setRides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    if (user?.id) fetchRides();
    // eslint-disable-next-line
  }, [user?.id]);

  const fetchRides = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await getUserRides(user.id);
      setRides(res.data.rides || []);
    } catch (err) {
      setError('Failed to load ride history.');
    } finally {
      setLoading(false);
    }
  };

  const filteredRides = statusFilter === 'All'
    ? rides
    : rides.filter((r) => (r.status || 'Completed') === statusFilter);

  return (
    <div className="ride-history-page">
      <div className="dashboard-content">
        <h2>Your Ride History</h2>
        <div style={{ margin: '1rem 0' }}>
          <label htmlFor="statusFilter"><strong>Filter by Status:</strong> </label>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
            style={{ padding: '0.4rem 1rem', borderRadius: 6, marginLeft: 8 }}
          >
            {statusOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <p className="error-msg">{error}</p>
        ) : filteredRides.length === 0 ? (
          <EmptyState message="No rides found for this filter." />
        ) : (
          <div className="ride-history-list">
            {filteredRides.map((ride) => (
              <RideCard key={ride.id} ride={ride} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RideHistory;
