import axios from 'axios';
import React, { useState } from 'react';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('manufacturer'); // Default value set to 'manufacturer'
  let token;

  //axios link to be checked

  const handleRegister = async () => {
    try {
      if (userType === 'manufacturer') {
        const response = await axios.post('http://localhost:5000/api/auth/register/manufacturer', {
          username,
          password,
        });

        // Registration successful for manufacturer
        console.log('Manufacturer registration successful:', response.data);

        // You can handle successful registration here, such as showing a success message or redirecting the user to the login page
      } else if (userType === 'transporter') {
        const response = await axios.post('http://localhost:5000/api/auth/register/transporter', {
          username,
          password,
        });

        // Registration successful for transporter
        console.log('Transporter registration successful:', response.data);
        token= response.data.token;
        console.log(token);

        // You can handle successful registration here, such as showing a success message or redirecting the user to the login page
      }
    } catch (error) {
      // Registration failed
      console.error('Registration failed:', error.message);

      // You can handle registration errors here, such as showing an error message to the user
    }
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
