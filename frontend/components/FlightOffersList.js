import React from 'react';

const FlightOffersList = ({ offers }) => {
  return (
    <div>
      {offers.map((offer) => (
        <div key={offer.id} className="offer">
          <h3>Offer ID: {offer.id}</h3>
          <p>Total Amount: {offer.total_amount} {offer.total_currency}</p>
          <p>Base Amount: {offer.base_amount} {offer.base_currency}</p>
          <p>Tax Amount: {offer.tax_amount} {offer.tax_currency}</p>
          <p>Total Emissions: {offer.total_emissions_kg} kg</p>
          <p>Payment Required By: {offer.payment_requirements.payment_required_by}</p>
          <p>Instant Payment Required: {offer.payment_requirements.requires_instant_payment ? 'Yes' : 'No'}</p>
          <p>Passenger Identity Documents Required: {offer.passenger_identity_documents_required ? 'Yes' : 'No'}</p>
          <div>
            <h4>Slices:</h4>
            {offer.slices.map((slice) => (
              <div key={slice.id} className="slice">
                <p>Origin: {slice.origin.iata_code}</p>
                <p>Destination: {slice.destination.iata_code}</p>
                <p>Departure: {slice.segments[0].departing_at}</p>
                <p>Arrival: {slice.segments[slice.segments.length - 1].arriving_at}</p>
                <p>Duration: {slice.duration}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightOffersList;
