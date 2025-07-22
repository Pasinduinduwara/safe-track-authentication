import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import axios from 'axios';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    rememberDevice: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      // Add your actual authentication logic here
      console.log('Login submitted:', credentials);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // On successful login
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    navigate('/'); // Navigates back to WelcomePage
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <button 
          onClick={handleBack}
          className="back-button"
          disabled={isLoading}
        >
          &larr; Back to Home
        </button>

        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Enter Valid Details to Continue</p>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username/Email or Mobile No</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="rememberDevice"
                name="rememberDevice"
                checked={credentials.rememberDevice}
                onChange={handleChange}
                disabled={isLoading}
              />
              <label htmlFor="rememberDevice">Remember This Device</label>
            </div>
            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>

          <button 
            type="submit" 
            className="login-button"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;