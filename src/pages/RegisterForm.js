import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phi_Id: '',
    nic: '',
    address: '',
    email: '',
    phone: '',
    officeLocation: '',
    district: '',
    gn_divisions: '',
    password: '',
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      await axios.post('http://localhost:8080/api/auth/register', formData);
      setSuccess(true);
      setFormData({
        name: '',
        phi_Id: '',
        nic: '',
        address: '',
        email: '',
        phone: '',
        officeLocation: '',
        district: '',
        gn_divisions: '',
        password: '',
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      {success && <p style={{ color: 'green' }}>Registration successful!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={styles.form}>
        {[
          { label: 'Full Name', name: 'name' },
          { label: 'PHI ID', name: 'phi_Id' },
          { label: 'NIC', name: 'nic' },
          { label: 'Address', name: 'address' },
          { label: 'Email', name: 'email' },
          { label: 'Phone', name: 'phone' },
          { label: 'Office Location', name: 'officeLocation' },
          { label: 'District', name: 'district' },
          { label: 'GN Divisions', name: 'gn_divisions' },
          { label: 'Password', name: 'password', type: 'password' },
        ].map(({ label, name, type = 'text' }) => (
          <div key={name} style={styles.field}>
            <label>{label}:</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
        ))}
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  field: {
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    width: '100%',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default RegisterForm;
