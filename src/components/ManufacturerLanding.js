import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap'; // Import Bootstrap components
import api from '../services/api';

const ManufacturerLanding = ({ username,sharedVariable  }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // const response = await axios.post('http://localhost:5000/api/manufacturer/orders', { username });
        let response = (await api('manufacturer/orders','p',{ username }));
        response= await response.json();
        console.log('messages',response);
        setMessages(response.data);
      } catch (error) {
        console.error('Error fetching messages:', error.message);
      }
    };

    fetchMessages();
  }, [sharedVariable]);

  return (
    <div>
      <h2>Orders</h2>
      <ListGroup>
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
              <strong>Transporter:</strong> {message.transporter ? message.transporter : 'Not assigned'}
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
        ))):(
          <p>Still no orders???? go create some</p>
        )
        }
      </ListGroup>
    </div>
  );
};

export default ManufacturerLanding;
