import React, { useState } from 'react';
import axios from 'axios';
import './FormStyles.css'; // Import the shared form styles
import { Form, Button } from 'react-bootstrap'; // Import Bootstrap form components
import LogoutButton from './LogoutButton';

const ManufacturerForm = ({ transporters, username }) => {
  const [orderId, setOrderId] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [pickupAddress, setPickupAddress] = useState('');
  const [selectedTransporter, setSelectedTransporter] = useState('');

  const handleFormSubmit = async () => {
    const formData = {
      order_id: orderId,
      from,
      to,
      quantity,
      pickupAddress,
      transporter: selectedTransporter,
    };

    try {
      console.log(username);
      const response = await axios.post('http://localhost:5000/api/manufacturer/order', {
        ...formData,
        username: username,
      });

      console.log('Order created successfully:', response.data);

      // Reset the form fields after successful submission
      setOrderId('');
      setFrom('');
      setTo('');
      setQuantity('1');
      setPickupAddress('');
      setSelectedTransporter('');
    } catch (error) {
      console.error('Order creation failed:', error.message);
      // Handle order creation errors, e.g., show an error message to the user
    }
  };

  return (
    <div className="form-container">
      <h2>Manufacturer Form</h2>
      <Form>
        <Form.Group controlId="orderId" className="form-group">
          <Form.Label>Order ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="from" className="form-group">
          <Form.Label>From</Form.Label>
          <Form.Control
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="to" className="form-group">
          <Form.Label>To</Form.Label>
          <Form.Control
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="quantity" className="form-group">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            as="select"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="form-select"
          >
            <option value="1">1 ton</option>
            <option value="2">2 ton</option>
            <option value="3">3 ton</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="pickupAddress" className="form-group">
          <Form.Label>Pickup Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pickup Address"
            value={pickupAddress}
            onChange={(e) => setPickupAddress(e.target.value)}
            className="form-input"
          />
        </Form.Group>

        <Form.Group controlId="selectedTransporter" className="form-group">
          <Form.Label>Selected Transporter</Form.Label>
          <Form.Control
            as="select"
            value={selectedTransporter}
            onChange={(e) => setSelectedTransporter(e.target.value)}
            className="form-select"
          >
            <option value="">Select Transporter</option>
            {transporters.map((transporter) => {
              return (
                <option key={transporter._id} value={transporter.username}>
                  {transporter.username}
                </option>
              );
            })}
          </Form.Control>
        </Form.Group>
        
        <div className="form-button-container">
          <Button variant="primary" onClick={handleFormSubmit} className="form-button">
          Submit Request
          </Button>
        </div>

        <LogoutButton/>
      </Form>
    </div>
  );
};

export default ManufacturerForm;
