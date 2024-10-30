// Auth.js
import React, { useState } from 'react';
import './Auth.css';

const Auth = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true); // Track whether we're in login or sign up mode
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Simulate login validation
      if (formData.username === 'testuser' && formData.password === 'password123') {
        onLogin();
        alert('Login successful!');
      } else {
        alert('Incorrect username or password. Please try again.');
      }
    } else {
      // Simulate sign-up
      alert(`Sign-up successful for ${formData.username}!`);
    }
  };

  const toggleMode = () => {
    setIsLogin((prevMode) => !prevMode);
    setFormData({ username: '', password: '', email: '' });
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        {!isLogin && (
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
      </form>
      <p onClick={toggleMode} className="toggle-link">
        {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Log In'}
      </p>
    </div>
  );
};

export default Auth;
