import React, { useState, useEffect } from 'react';
import UserNavbar from '../../components/UserNavbar';
import { bookRide, getUserRides } from '../../services/RideService';
import RideCard from '../../components/RideCard';
import Spinner from '../../components/Spinner';
import { useNavigate } from 'react-router-dom';

const EmptyState = ({ message }) => (
  <div style={{ textAlign: 'center', margin: '2rem 0', color: '#aaa' }}>
    <div style={{ fontSize: 48, marginBottom: 8 }}>🛣️</div>
    <div style={{ fontSize: 18 }}>{message}</div>
  </div>
);

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [rides, setRides] = useState([]);
  const [ridesLoading, setRidesLoading] = useState(false);
  const [ridesError, setRidesError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.id) {
      fetchRides();
    }
    // eslint-disable-next-line
  }, [user?.id]);

  const fetchRides = async () => {
    setRidesLoading(true);
    setRidesError('');
    try {
      const res = await getUserRides(user.id);
      setRides(res.data.rides || []);
    } catch (err) {
      setRidesError('Failed to load ride history.');
    } finally {
      setRidesLoading(false);
    }
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    setLoading(true);
    if (!pickup || !drop) {
      setErrorMsg('Please enter both pickup and drop locations.');
      setLoading(false);
      return;
    }
    try {
      await bookRide({
        userId: user.id,
        pickupLocation: pickup,
        dropLocation: drop,
      });
      setSuccessMsg("Ride booked successfully!");
      setPickup('');
      setDrop('');
      fetchRides();
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Booking failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-dashboard">
      <UserNavbar />
      <div className="dashboard-content">
        <h2 style={{ color: '#00b894' }}>Welcome, {user?.username} 👋</h2>
        <p style={{ color: '#b2bec3' }}>Ready to book your next ride?</p>
        <form onSubmit={handleBooking} className="booking-form">
          <input
            type="text"
            placeholder="Pickup Location"
            value={pickup}
            onChange={e => setPickup(e.target.value)}
            required
            style={{ color: '#222', background: '#eaf6fb', border: '1px solid #00b894' }}
          />
          <input
            type="text"
            placeholder="Drop Location"
            value={drop}
            onChange={e => setDrop(e.target.value)}
            required
            style={{ color: '#222', background: '#eaf6fb', border: '1px solid #00b894' }}
          />
          <button type="submit" disabled={loading} style={{ background: '#00b894', color: '#fff', fontWeight: 600 }}>
            {loading ? <Spinner size={20} /> : "Book Ride"}
          </button>
        </form>
        {successMsg && <p className="success-msg">{successMsg}</p>}
        {errorMsg && <p className="error-msg">{errorMsg}</p>}
        <hr style={{ margin: '2rem 0', borderColor: '#00b894' }} />
        <h3 style={{ color: '#00b894' }}>Your Ride History</h3>
        {ridesLoading ? (
          <Spinner />
        ) : ridesError ? (
          <p className="error-msg">{ridesError}</p>
        ) : rides.length === 0 ? (
          <EmptyState message="No rides found. Book your first ride!" />
        ) : (
          <div className="ride-history-list">
            {rides.map((ride) => (
              <div key={ride.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/ride/${ride.id}`)}>
                <RideCard ride={ride} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
