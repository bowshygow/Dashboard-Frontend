  
// frontend/src/components/ManufacturerForm.js

import React, { useState } from 'react';

const ManufacturerForm = () => {
  const [orderId, setOrderId] = useState(''); // You may generate a unique order ID here
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [quantity, setQuantity] = useState('1'); // Default value set to '1'
  const [pickupAddress, setPickupAddress] = useState('');
  const [selectedTransporter, setSelectedTransporter] = useState('');

  const handleFormSubmit = () => {
    // Implement form submission logic here (e.g., making API requests to send the order)
    // You can use the states to get the form data
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
      {/* Drop-down menu to select transporter */}
      {/* You can fetch the transporter list from the backend and display it as options */}
      <select value={selectedTransporter} onChange={(e) => setSelectedTransporter(e.target.value)}>
        <option value="">Select Transporter</option>
        {/* Display the list of transporters here */}
      </select>
      <button onClick={handleFormSubmit}>Submit Request</button>
    </div>
  );
};

export default ManufacturerForm;
