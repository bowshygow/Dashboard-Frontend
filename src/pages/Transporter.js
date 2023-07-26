// frontend/src/pages/Transporter.js

import React, { useState, useEffect } from 'react';
import TransporterForm from '../components/TransporterForm';
import TransporterLanding from '../components/TransporterLanding';
import MessageDetails from '../components/MessageDetails'; // Import the MessageDetails component

const TransporterPage = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Implement fetching messages logic here (e.g., making API requests to get messages)
    // Update the "messages" state with the received messages
    // For this example, we'll use a dummy list of messages
    setMessages([
      {
        order_id: 'XB120',
        from: 'Manufacturer A',
        to: 'Destination B',
        content: 'This is the content of message 1 from Manufacturer A.',
      },
      {
        order_id: 'XB121',
        from: 'Manufacturer C',
        to: 'Destination D',
        content: 'This is the content of message 2 from Manufacturer C.',
      },
      // Add more messages as needed
    ]);
  }, []);

  return (
    <div>
      <h1>Transporter Dashboard</h1>
      <TransporterForm />
      <TransporterLanding />
      {/* Pass the "messages" array to the MessageDetails component */}
      <MessageDetails messages={messages} />
    </div>
  );
};

export default TransporterPage;
