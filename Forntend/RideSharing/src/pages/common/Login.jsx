import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import '../../Styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const response = await AuthService.login(role, email.trim().toLowerCase(), password.trim());
      const user = response.data;

      if (user.role !== role) {
        setError("Incorrect role selected");
        setLoading(false);
        return;
      }

      localStorage.setItem("user", JSON.stringify(user));
      if (role === "Driver") navigate("/driver");
      else navigate("/user");
   } catch (error) {
  setError(error.response?.data?.message || 
          error.response?.data?.error || 
          error.message || 
          "Invalid credentials.");
}
  };

  return (
    <div className="container">
      <h2 style={{ color: 'white' }}>Login to TakeMe</h2>
      <form onSubmit={handleLogin}>
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Select Role</option>
          <option value="User">User</option>
          <option value="Driver">Driver</option>
        </select>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
        {error && <p className="error-msg">{error}</p>}
        <p className="toggle-link">Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );
}
export default Login;