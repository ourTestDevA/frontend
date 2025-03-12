import React, { useEffect, useState } from 'react';
import { getDuffelOrders } from '../api/duffelApi';

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getDuffelOrders();
        setOrders(data.data.users); // Adjust this line based on actual data structure
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Orders List</h1>
      <ul>
        {orders.map((order, index) => (
          <li key={index}>{order}</li> // Adjust this line based on actual data structure
        ))}
      </ul>
    </div>
  );
};

export default OrdersList;
