
import React, { useState, useEffect } from 'react';
import ManufacturerForm from '../components/ManufacturerForm';
import ManufacturerLanding from '../components/ManufacturerLanding';
import MessageDetails from '../components/MessageDetails'; // Import the MessageDetails component
import { useLocation } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';

const ManufacturerPage = () => {
  const [messages, setMessages] = useState([]);
  const [ transporters, setTransporters ] = useState([]);

  const location = useLocation();
  const { username } = location.state;

  useEffect(() => {
    // Implement fetching messages logic here (e.g., making API requests to get messages)
    // Update the "messages" state with the received messages
    // For this example, we'll use a dummy list of messages
    setMessages([
      {
        order_id: 'XB120',
        from: 'Source A',
        to: 'Destination B',
        content: 'This is the content of message 1.',
      },
      {
        order_id: 'XB121',
        from: 'Source C',
        to: 'Destination D',
        content: 'This is the content of message 2.',
      },
      // Add more messages as needed
    ]);
  }, []);

  useEffect(()=>{ fetchtTransporterData() }, [] );

  const fetchtTransporterData = async() => {
    const transporterData = await fetch("http://localhost:5000/api/transporter/all");
    let jsonResponse = await transporterData.json();
    if( jsonResponse ){
      setTransporters( jsonResponse );
    }
 };

  return (
    <div>
      <h1>Manufacturer Dashboard</h1>
      <h2>Welcome {username}</h2>
      <ManufacturerForm transporters = {transporters} username={username} />
      <ManufacturerLanding username={username} />
      {/* Pass the "messages" array to the MessageDetails component */}
      {/* <MessageDetails messages={messages} /> */}
    </div>
  );
};

export default ManufacturerPage;