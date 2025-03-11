import React, { useState } from 'react';

const PassengerDetails = ({ selectedOfferId, onSubmit }) => {
  const [passengers, setPassengers] = useState([{
    id: '',
    born_on: '',
    email: '',
    family_name: '',
    gender: '',
    given_name: '',
    phone_number: ''
  }]);

  const handleChange = (index, field, value) => {
    const newPassengers = [...passengers];
    newPassengers[index][field] = value;
    setPassengers(newPassengers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      data: {
        type: 'hold',
        selected_offers: [selectedOfferId],
        passengers
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {passengers.map((passenger, index) => (
        <div key={index} className="passenger-details">
          <input type="text" placeholder="Given Name" value={passenger.given_name} onChange={(e) => handleChange(index, 'given_name', e.target.value)} required />
          <input type="text" placeholder="Family Name" value={passenger.family_name} onChange={(e) => handleChange(index, 'family_name', e.target.value)} required />
          <input type="email" placeholder="Email" value={passenger.email} onChange={(e) => handleChange(index, 'email', e.target.value)} required />
          <input type="date" placeholder="Date of Birth" value={passenger.born_on} onChange={(e) => handleChange(index, 'born_on', e.target.value)} required />
          <input type="text" placeholder="Gender" value={passenger.gender} onChange={(e) => handleChange(index, 'gender', e.target.value)} required />
          <input type="tel" placeholder="Phone Number" value={passenger.phone_number} onChange={(e) => handleChange(index, 'phone_number', e.target.value)} required />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default PassengerDetails;