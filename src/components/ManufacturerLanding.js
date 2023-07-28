import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

const ManufacturerLanding = () => {
  const [messages, setMessages] = useState([]); // An array to store the received messages

  useEffect(() => {
    // Implement fetching messages logic here (e.g., making API requests to get messages)
    const fetchMessages = async () => {
      try {
        // Make an API request to get all orders for the Manufacturer
        const response = await axios.get('/api/manufacturer/orders');

        // Update the "messages" state with the received messages
        setMessages(response.data.data);
      } catch (error) {
        console.error('Error fetching messages:', error.message);
      }
    };

    // Call the fetchMessages function to get the messages when the component mounts
    fetchMessages();
  }, []);

  return (
    <div>
      <h2>Manufacturer Landing</h2>
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

export default ManufacturerLanding;
