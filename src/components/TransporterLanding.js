import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

const TransporterLanding = () => {
  const [messages, setMessages] = useState([]); // An array to store the received messages

  useEffect(() => {
    // Implement fetching messages logic here
    const fetchMessages = async () => {
      try {
        // Make an API request to fetch messages for the transporter
        const response = await axios.get('/api/transporter/orders');

        // Update the "messages" state with the received messages
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error.message);
      }
    };

    // Call the fetchMessages function
    fetchMessages();
  }, []);

  return (
    <div>
      <h2>Transporter Landing</h2>
      <ul>
        {/* Display the list of messages here */}
        {messages.map((message) => (
          <li key={message.order_id}>
            <span>Order ID: {message.order_id}</span>
            <span>From: {message.from}</span>
            <span>To: {message.to}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransporterLanding;
