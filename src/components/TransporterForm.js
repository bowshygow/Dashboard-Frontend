  // frontend/src/components/TransporterForm.js

import React, { useState } from 'react';
import axios from 'axios'; // Import axios

const TransporterForm = () => {
  const [orderId, setOrderId] = useState(''); // You can populate the list of order IDs here
  const [price, setPrice] = useState('');

  const handleReply = async () => {
    try {
      // Check if an order ID is selected
      if (!orderId) {
        return alert('Please select an Order ID.');
      }

      // Check if the price is provided
      if (!price) {
        return alert('Please provide the price.');
      }

      // Make an API request to reply to the manufacturer
      await axios.post('/api/transporter/reply', {
        orderId,
        price,
      });

      // If the API request is successful, show a success message
      alert('Reply sent successfully.');
    } catch (error) {
      // If there is an error, show an error message
      alert('Error occurred while sending the reply.');
      console.error('Error sending reply:', error.message);
    }
  };

  return (
    <div>
      <h2>Transporter Form</h2>
      <select value={orderId} onChange={(e) => setOrderId(e.target.value)}>
        <option value="">Select Order ID</option>
        {/* Populate the list of order IDs here */}
      </select>
      <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={handleReply}>Reply</button>
    </div>
  );
};

export default TransporterForm;

