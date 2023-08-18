import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'; // Import Bootstrap form components
import './FormStyles.css'; // Import custom CSS for styling
import LogoutButton from './LogoutButton';
import api from '../services/api';

const TransporterForm = ({ username,sharedVariable, setSharedVariable }) => {
  const [orderId, setOrderId] = useState('');
  const [price, setPrice] = useState('');
  const [orderIdsList, setOrderIdsList] = useState([]);

  useEffect(() => {
    fetchTransporterOrders();
  }, [sharedVariable]);

  const fetchTransporterOrders = async () => {
    try {
      // Make an API request to fetch all orders assigned to the transporter
      // needs username for post req
      // const response = await axios.post('http://localhost:5000/api/transporter/orders', { username });
      const response = await api('transporter/orders', 'p', { username });

      // Extract order IDs from the response and update the orderIdsList state
      const orderIds = response.data.map((order) => order.order_id);
      setOrderIdsList(orderIds);
    } catch (error) {
      console.error('Error fetching transporter orders:', error.message);
      // Handle error, e.g., show an error message to the user
    }
  };

  const handleReply = async () => {
    setSharedVariable("New Value from First Sibling");
    // Check if an order ID is selected
    if (!orderId) {
      return alert('Please select an Order ID.');
    }

    // Check if the price is provided
    if (!price) {
      return alert('Please provide the price.');
    }

    try {
      // Make an API request to reply to the manufacturer
      // await axios.post('http://localhost:5000/api/transporter/reply', {
      //   orderId,
      //   price,
      // });

      await api('transporter/reply', 'p', {
        orderId,
        price,
      });
      

      // If the API request is successful, show a success message
      alert('Reply sent successfully.');
    } catch (error) {
      // If there is an error, show an error message
      alert('Error occurred while sending the reply.');
      console.error('Error :', error.message);
    }
  };

  return (
    <div>
      <Form className="form-container">
      <Form.Group controlId="orderId" className="form-group">
        <Form.Label>Order ID</Form.Label>
        <select
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          className="form-control" // Use the appropriate className for your CSS
        >
          <option value="">Select Order ID</option>
          {orderIdsList.map((orderId) => (
            <option key={orderId} value={orderId}>
              {orderId}
            </option>
          ))}
        </select>
      </Form.Group>

        <Form.Group controlId="price" className="form-group">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-input"
          />
        </Form.Group>

        <div className="form-button-container"> {/* Wrap the buttons in a div with a class */}
          <Button variant="primary" onClick={handleReply} className="form-button">
            Accept
          </Button>


        </div>

        <LogoutButton/>
      </Form>
    </div>
  );
};

export default TransporterForm;
