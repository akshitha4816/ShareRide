import React from 'react';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div style={{ maxWidth: 600, margin: '3rem auto', padding: '2rem', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
      <h1 style={{ color: '#0984e3', fontWeight: 800, fontSize: 32, marginBottom: 18 }}>Profile</h1>
      <p style={{ color: '#636e72', fontSize: 18, marginBottom: 24 }}>View and edit your profile information here.</p>
      {user ? (
        <div style={{ color: '#636e72', fontSize: 17 }}>
          <div><strong>Name:</strong> {user.username}</div>
          <div><strong>Email:</strong> {user.email}</div>
          <div><strong>Role:</strong> {user.role}</div>
          {/* Add edit form, avatar, etc. here */}
        </div>
      ) : (
        <div style={{ color: '#d63031' }}>You are not logged in.</div>
      )}
    </div>
  );
};

export default Profile; 