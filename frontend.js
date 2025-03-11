// Function to call the backend API for creating a pending cancellation
async function createPendingCancellation(flightId, userId) {
  try {
    const response = await fetch('http://localhost:5000/duffel-flights-create-pending-cancellation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ flightId, userId }),
    });
    const data = await response.json();
    console.log('Response from server:', data);
    return data;
  } catch (error) {
    console.error('Error creating pending cancellation:', error);
  }
}

// Example usage
createPendingCancellation('flight123', 'user456');