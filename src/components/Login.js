import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Make an API request to login the user
      const response = await axios.post('/api/auth/login', {
        username,
        password,
      });

      // Login successful
      console.log('Login successful:', response.data);

      // You can handle successful login here, such as storing user data in state or local storage, and redirecting the user to the appropriate dashboard
      // For example: history.push(`/${response.data.userType}`);
    } catch (error) {
      // Login failed
      console.error('Login failed:', error.message);

      // You can handle login errors here, such as showing an error message to the user
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
