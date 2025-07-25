import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    return <Navigate to="/login" />;
  }

  const user = JSON.parse(storedUser);

  if (user.role !== role) {
    // Redirect to role-based home if wrong role tries to access
    return <Navigate to={user.role === "Driver" ? "/driver" : "/user"} />;
  }

  return children;
};

export default ProtectedRoute;
