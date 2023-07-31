import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransporterForm = ({username}) => {
  const [orderId, setOrderId] = useState('');
  const [price, setPrice] = useState('');
  const [orderIdsList, setOrderIdsList] = useState([]);

  useEffect(() => {
    fetchTransporterOrders();
  }, []);

  const fetchTransporterOrders = async () => {
    try {
      // Make an API request to fetch all orders assigned to the transporter
      // needs username for post req
      const response = await axios.post('http://localhost:5000/api/transporter/orders',{username});

      // Extract order IDs from the response and update the orderIdsList state
      const orderIds = response.data.map((order) => order.order_id);
      setOrderIdsList(orderIds);
    } catch (error) {
      console.error('Error fetching transporter orders:', error.message);
      // Handle error, e.g., show an error message to the user
    }
  };

  const handleReply = async () => {
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
      await axios.post('http://localhost:5000/api/transporter/reply', {
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
      <h2>Transporter Form</h2>
      <select value={orderId} onChange={(e) => setOrderId(e.target.value)}>
        <option value="">Select Order ID</option>
        {orderIdsList.map((orderId) => (
          <option key={orderId} value={orderId}>
            {orderId}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={handleReply}>Accept</button>
    </div>
  );
};

export default TransporterForm;
