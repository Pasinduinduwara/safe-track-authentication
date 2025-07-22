// src/pages/WelcomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';
import logo from '../assets/images/logo.png';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome To</h1>
      <div className="logo-section">
        <img src={logo} alt="SafeTrack Logo" className="logo" />
        <h2 className="brand-text">Safe<span>Track</span></h2>
      </div>
      <p className="subtitle">Ensuring Safe Food Practices with Smart Inspections</p>
      <div className="button-group">
        <button 
          className="login-btn" 
          onClick={() => navigate('/login')}
        >
          Login
        </button>
        <button 
          className="register-btn"
          onClick={() => navigate('/register')}
        >
          PHI Register
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;