import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const getDuffelOrders = async () => {
  try {
    const response = await axios.get(`${API_URL}/duffel-flights-list-orders`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Duffel orders:', error);
    throw error;
  }
};
