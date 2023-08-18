// frontend/src/pages/Transporter.js

import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import TransporterForm from '../components/TransporterForm';
import TransporterLanding from '../components/TransporterLanding';
import MessageDetails from '../components/MessageDetails'; // Import the MessageDetails component
import LogoutButton from '../components/LogoutButton';

const TransporterPage = () => {
  const [messages, setMessages] = useState([]);
  const [sharedVariable, setSharedVariable] = useState("Initial Value");

  const location = useLocation();
  const { username } = location.state;

  return (
    <div>
      <h1>Transporter Dashboard</h1>
      <TransporterForm 
        username={username} 
        sharedVariable={sharedVariable}
        setSharedVariable={setSharedVariable} />
      
      <TransporterLanding 
        username={username} 
        sharedVariable={sharedVariable} />
    </div>
  );
};

export default TransporterPage;
