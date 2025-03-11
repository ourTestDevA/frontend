import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchFlightOffers = async (requestData) => {
  try {
    const response = await axios.post(`${API_URL}/duffel-flights-list-offers`, requestData);
    return response.data;
  } catch (error) {
    console.error('Error fetching flight offers:', error);
    throw error;
  }
};
