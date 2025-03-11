import React, { useState } from 'react';
import PassengerDetails from './PassengerDetails';
import axios from 'axios';

const App = () => {
  const [selectedOfferId, setSelectedOfferId] = useState(null);
  const [response, setResponse] = useState(null);

  const handleOfferSelect = (offerId) => {
    setSelectedOfferId(offerId);
  };

  const handleSubmit = async (data) => {
    try {
      const res = await axios.post('http://localhost:5000/duffel-flights-create-orders', data);
      setResponse(res.data);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  return (
    <div className="App">
      <h1>Flight Booking</h1>
      {selectedOfferId ? (
        <PassengerDetails selectedOfferId={selectedOfferId} onSubmit={handleSubmit} />
      ) : (
        <div>
          <button onClick={() => handleOfferSelect('offer_123')}>Select Offer</button>
        </div>
      )}
      {response && (
        <div className="response">
          <h2>Order Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;