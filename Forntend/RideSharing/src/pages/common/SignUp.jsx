import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/SignUp.css';
import axios from 'axios';

const API = 'http://localhost:8081';

const SignUp = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", confirmPassword: "", role: "", phone: "", age: "", location: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match!");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${API}/api/users/signup`, {
        username: formData.username,
        email: formData.email.toLowerCase(),
        password: formData.password,
        role: formData.role,
        phone: formData.phone,
        age: Number(formData.age),
        location: formData.location
      }, {
        headers: { "Content-Type": "application/json" }
      });

     if (response.status >= 200 && response.status < 300)
     {
        setSuccess("Account created successfully!");
        setFormData({ username: "", email: "", password: "", confirmPassword: "", role: "", phone: "", age: "", location: "" });
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data?.message || (typeof err.response.data === 'string' ? err.response.data : "Registration failed"));
      } else {
        setError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2 style={{ color: "white" }}>Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="Username" required value={formData.username} onChange={handleChange} />
        <input name="email" type="email" placeholder="Email ID" required value={formData.email} onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" required value={formData.password} onChange={handleChange} />
        <input name="confirmPassword" type="password" placeholder="Confirm Password" required value={formData.confirmPassword} onChange={handleChange} />
        <select name="role" required value={formData.role} onChange={handleChange}>
          <option value="">Select Role</option>
          <option value="User">User</option>
          <option value="Driver">Driver</option>
        </select>
        <div className="form-group">
          <input name="phone" type="text" placeholder="Phone Number" required value={formData.phone} onChange={handleChange} />
          <input name="age" type="number" placeholder="Age" required value={formData.age} onChange={handleChange} />
        </div>
        <input name="location" type="text" placeholder="Location" required value={formData.location} onChange={handleChange} />
        <button type="submit" disabled={loading}>{loading ? "Registering..." : "Register"}</button>
        {error && <p className="error-msg">{error}</p>}
        {success && <p className="success-msg">{success}</p>}
        <p className="toggle-link">Already have an account? <Link to="/login">Sign In</Link></p>
      </form>
    </div>
  );
};

export default SignUp;
