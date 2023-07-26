 
// frontend/src/components/MessageDetails.js

import React, { useState } from 'react';

const MessageDetails = ({ messages }) => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const handleOrderClick = (orderId) => {
    const message = messages.find((msg) => msg.order_id === orderId);
    setSelectedMessage(message);
  };

  return (
    <div>
      <h2>Message Details</h2>
      <ul>
        {/* Display the list of order IDs as clickable links */}
        {messages.map((message) => (
          <li key={message.order_id} onClick={() => handleOrderClick(message.order_id)}>
            Order ID: {message.order_id}
          </li>
        ))}
      </ul>
      {selectedMessage && (
        <div>
          <h3>Selected Message:</h3>
          <p>Order ID: {selectedMessage.order_id}</p>
          <p>From: {selectedMessage.from}</p>
          <p>To: {selectedMessage.to}</p>
          {/* Display other message details here */}
          <p>Content: {selectedMessage.content}</p>
        </div>
      )}
    </div>
  );
};

export default MessageDetails;
