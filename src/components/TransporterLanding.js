import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap'; // Import Bootstrap ListGroup components
import api from '../services/api';

const TransporterLanding = ({ username,sharedVariable }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // Make an API request to fetch messages for the transporter
        // const response = await axios.post('http://localhost:5000/api/transporter/orders', { username });
        let response = await api('transporter/orders', 'p', { username });
        response= await response.json();


        // Update the "messages" state with the received messages
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error.message);
      }
    };

    // Call the fetchMessages function
    fetchMessages();
  }, [sharedVariable]);

  return (
    <div>
      <h2>Orders</h2>
      <ListGroup>
        {/* Display the list of messages here */}
        {messages ? (messages.map((message) => (
          <ListGroupItem key={message.order_id}>
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
          </ListGroupItem>
        ))):
        (
          <p>Still no orders???? Create and assgn some orders.</p>
        )
        }
      </ListGroup>
    </div>
  );
};

export default TransporterLanding;
