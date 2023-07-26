  
// frontend/src/components/ManufacturerLanding.js

import React, { useState, useEffect } from 'react';

const ManufacturerLanding = () => {
  const [messages, setMessages] = useState([]); // An array to store the received messages

  useEffect(() => {
    // Implement fetching messages logic here (e.g., making API requests to get messages)
    // Update the "messages" state with the received messages
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
