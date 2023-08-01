import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import RegisterButton from './RegisterButton';
import './FormStyles.css'; // Import FormStyles.css

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleLogin = async () => {
    try {
      // Make an API request to login the user
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        username,
        password,
      });

      // Login successful
      console.log('Login successful:', response.data);
      toast.success('Login successful:');

      // Get the token from the response
      const token = response.data.token;

      // Store the token in local storage
      localStorage.setItem('authToken', token);

      // Decode the token to get additional user information, such as the user's role (manufacturer or transporter)
      const decodedToken = jwt_decode(token);
      console.log('User Role:', decodedToken.userType);

      // Redirect the user to the appropriate dashboard based on user type
      if (decodedToken.userType === 'manufacturer') {
        history.push({
          pathname: '/manufacturer',
          state: { username }, // Pass the username as a state object
        });
        window.location.reload();
      } else if (decodedToken.userType === 'transporter') {
        history.push({
          pathname: '/transporter',
          state: { username }, // Pass the username as a state object
        });
        window.location.reload();
      }
    } catch (error) {
      // Login failed
      console.error('Login failed:', error.message);
      toast.error('Login failed:');

      // You can handle login errors here, such as showing an error message to the user
    }
  };

  return (
    <div className="form-container">
      <div className="form-group">
        <h2 className="form-heading">Login</h2>
        <p className="form-subtitle">Welcome back! Please enter your credentials to log in.</p>
      </div>
      <div className="form-group">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-input"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-input"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="form-button" onClick={handleLogin}>
        Login
      </button>
      <br />
      <h2 className="form-subtitle mt-3">Not a user?</h2>
      <RegisterButton />
    </div>
  );
};

export default Login;
