import api from '../services/api';
import React, { useState, useEffect } from 'react';
import ManufacturerForm from '../components/ManufacturerForm';
import ManufacturerLanding from '../components/ManufacturerLanding';
import MessageDetails from '../components/MessageDetails'; // Import the MessageDetails component
import { useLocation } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';

const ManufacturerPage = () => {
  const [messages, setMessages] = useState([]);
  const [ transporters, setTransporters ] = useState([]);
  const [sharedVariable, setSharedVariable] = useState("Initial Value");
  

  const location = useLocation();
  const { username } = location.state;

  useEffect(()=>{ fetchtTransporterData() }, [] );

  const fetchtTransporterData = async() => {
    // const transporterData = await fetch("http://localhost:5000/api/transporter/all");

    const transporterData = await api('transporter/all', 'g');
    let jsonResponse = await transporterData.json();
    if( jsonResponse ){
      setTransporters( jsonResponse );
    }
    // if( transporterData ){
    // setTransporters( transporterData );
    // } 
    
 };

  return (
    <div>
      <h1>Manufacturer Dashboard</h1>
      <h2>Welcome {username}</h2>
      <ManufacturerForm transporters = {transporters} username={username}
              sharedVariable={sharedVariable}
              setSharedVariable={setSharedVariable} />
      <ManufacturerLanding username={username} sharedVariable={sharedVariable} />
    </div>
  );
};

export default ManufacturerPage;