import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap'; // Import Bootstrap components
import LogoutButton from './LogoutButton';
import './FormStyles.css'; // Import the form style CSS file
import api from '../services/api';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('manufacturer');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    try {
      if (userType === 'manufacturer') {
        const response = await axios.post('http://localhost:5000/api/auth/register/manufacturer', {
          username,
          password,
        });

        // const response = await api('auth/register/manufacturer', 'p', {
        //   username,
        //   password
        //   // Add any other required fields according to your API
        // });
        

        // Registration successful for manufacturer
        setSuccessMessage('Manufacturer registration successful');
        setErrorMessage('');
      } else if (userType === 'transporter') {
        const response = await axios.post('http://localhost:5000/api/auth/register/transporter', {
          username,
          password,
        });

        // const response = await api('auth/register/manufacturer', 'p', {
        //   username,
        //   password
        // });
        

        // Registration successful for transporter
        setSuccessMessage('Transporter registration successful');
        setErrorMessage('');
      }
    } catch (error) {
      // Registration failed
      setSuccessMessage('');
      setErrorMessage('Registration failed');

      console.error('Registration failed:', error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Registration</h2>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form>
        <Form.Group className="form-group">
          <Form.Label className="form-label">Username</Form.Label>
          <Form.Control type="text" className="form-input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Label className="form-label">Password</Form.Label>
          <Form.Control type="password" className="form-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Form.Group className="form-group">
          <Form.Label className="form-label">User Type</Form.Label>
          <Form.Control as="select" className="form-select" value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="manufacturer">Manufacturer</option>
            <option value="transporter">Transporter</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={handleRegister} className="form-button">
          Register
        </Button>
      </Form>
      <LogoutButton />
    </div>
  );
};

export default Registration;
