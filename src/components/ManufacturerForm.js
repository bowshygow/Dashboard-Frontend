import React, { useState } from 'react';
import axios from 'axios';

const ManufacturerForm = () => {
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
      const response = await axios.post('http://localhost:5000/api/manufacturer/order', formData);

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
    <div>
      <h2>Manufacturer Form</h2>
      <input type="text" placeholder="Order ID" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
      <input type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
      <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        <option value="1">1 ton</option>
        <option value="2">2 ton</option>
        <option value="3">3 ton</option>
      </select>
      <input type="text" placeholder="Pickup Address" value={pickupAddress} onChange={(e) => setPickupAddress(e.target.value)} />
      <select value={selectedTransporter} onChange={(e) => setSelectedTransporter(e.target.value)}>
        <option value="">Select Transporter</option>
        {/* Display the list of transporters here */}
      </select>
      <button onClick={handleFormSubmit}>Submit Request</button>
    </div>
  );
};

export default ManufacturerForm;
