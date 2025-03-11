import React, { useState } from 'react';
import { fetchFlightOffers } from '../api';

const FlightSearchForm = () => {
  const [formData, setFormData] = useState({
    origin: '',
    destination: '',
    departureDate: '',
    cabinClass: 'economy',
    passengers: [{ type: 'adult' }],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestData = {
        data: {
          slices: [{
            origin: formData.origin,
            destination: formData.destination,
            departure_date: formData.departureDate,
          }],
          passengers: formData.passengers,
          cabin_class: formData.cabinClass,
        },
      };
      const offers = await fetchFlightOffers(requestData);
      console.log('Flight offers:', offers);
    } catch (error) {
      console.error('Error fetching flight offers:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="origin"
        value={formData.origin}
        onChange={handleChange}
        placeholder="Origin"
        required
      />
      <input
        type="text"
        name="destination"
        value={formData.destination}
        onChange={handleChange}
        placeholder="Destination"
        required
      />
      <input
        type="date"
        name="departureDate"
        value={formData.departureDate}
        onChange={handleChange}
        required
      />
      <select
        name="cabinClass"
        value={formData.cabinClass}
        onChange={handleChange}
      >
        <option value="economy">Economy</option>
        <option value="premium_economy">Premium Economy</option>
        <option value="business">Business</option>
        <option value="first">First</option>
      </select>
      <button type="submit">Search Flights</button>
    </form>
  );
};

export default FlightSearchForm;
