// frontend/src/pages/Manufacturer.js or Transporter.js

import React, { useState, useEffect } from 'react';
import ManufacturerForm from '../components/ManufacturerForm';
import ManufacturerLanding from '../components/ManufacturerLanding';
import MessageDetails from '../components/MessageDetails'; // Import the MessageDetails component

const ManufacturerPage = () => {
  const [messages, setMessages] = useState([]);

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

  return (
    <div>
      <h1>Manufacturer Dashboard</h1>
      <ManufacturerForm />
      <ManufacturerLanding />
      {/* Pass the "messages" array to the MessageDetails component */}
      <MessageDetails messages={messages} />
    </div>
  );
};

export default ManufacturerPage;
