  
// frontend/src/components/Registration.js

import React, { useState } from 'react';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('manufacturer'); // Default value set to 'manufacturer'

  const handleRegister = () => {
    // Implement registration logic here (e.g., making API requests to create a new user)
    // You can use the "username", "password", and "userType" states to get user input
  };

  return (
    <div>
      <h2>Registration</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <select value={userType} onChange={(e) => setUserType(e.target.value)}>
        <option value="manufacturer">Manufacturer</option>
        <option value="transporter">Transporter</option>
      </select>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Registration;
