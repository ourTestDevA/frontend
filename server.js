const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Endpoint to handle flight cancellation requests
app.post('/duffel-flights-create-pending-cancellation', (req, res) => {
  // Extract necessary data from request body
  const { flightId, userId } = req.body;
  
  // Here you would typically interact with a service or database to process the cancellation
  // For now, we simulate a successful pending cancellation response
  console.log(`Received cancellation request for flight ID: ${flightId} by user ID: ${userId}`);
  res.json({ status: 'pending cancellation created', flightId, userId });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});