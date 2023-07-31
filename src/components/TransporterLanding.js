import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransporterLanding = ({ username }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Make an API request to fetch messages for the transporter
        const response = await axios.post('http://localhost:5000/api/transporter/orders', { username });

        // Update the "messages" state with the received messages
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error.message);
      }
    };

    // Call the fetchMessages function
    fetchMessages();
  }, [username]);

  return (
    <div>
      <h2>Transporter Landing</h2>
      <ul>
        {/* Display the list of messages here */}
        {messages.map((message) => (
          <li key={message.order_id}>
            <h3>Order ID: {message.order_id}</h3>
            <p>
              <strong>From:</strong> {message.from}
            </p>
            <p>
              <strong>To:</strong> {message.to}
            </p>
            <p>
              <strong>Quantity:</strong> {message.quantity} ton(s)
            </p>
            <p>
              <strong>Pickup Address:</strong> {message.pickupAddress}
            </p>
            <p>
              <strong>Manufacturer:</strong> {message.sender ? message.sender : 'Not assigned'}
            </p>
            <p>
              <strong>Price:</strong> {message.price ? `$${message.price.toFixed(2)}` : 'Not set'}
            </p>
            {message.accepted ? (
              <p style={{ color: 'green' }}>Order Accepted</p>
            ) : (
              <p style={{ color: 'red' }}>Order Not Accepted</p>
            )}
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransporterLanding;
