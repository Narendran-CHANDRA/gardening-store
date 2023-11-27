// BuyPage.js
import React from 'react';
import Typography from '@mui/material/Typography';

const BuyPage = ({ cart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  const handlePayment = () => {
    // Implement your payment logic here
    console.log('Processing payment...');
    // You can redirect to a payment gateway or show a payment form, etc.
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Buy Page
      </Typography>
      {cart.map((item) => (
        <div key={item.id} style={{ marginBottom: '16px' }}>
          <img src={item.image} alt={item.name} style={{ maxWidth: '100px' }} />
          <Typography gutterBottom>
            {item.name} - ${item.price}
          </Typography>
        </div>
      ))}
      {cart.length === 0 && <Typography>Your cart is empty.</Typography>}
      <Typography variant="h6" style={{ marginTop: '16px' }}>
        Total: ${totalPrice.toFixed(2)}
      </Typography>
      <button onClick={handlePayment} style={{ marginTop: '16px', backgroundColor: '#27ae60', color: 'white', padding: '10px' }}>
        Pay Now
      </button>
      {/* Add payment form or other relevant content here */}
    </div>
  );
};

export default BuyPage;
