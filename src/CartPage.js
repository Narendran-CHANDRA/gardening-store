// CartPage.js
import React from 'react';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CartPage = ({ cart }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Shopping Cart
      </Typography>
      {cart.map((item) => (
        <motion.div
          key={item.id}
          variants={itemVariants}
          style={{
            border: '1px solid #eee',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '16px',
            width: '200px',
          }}
        >
          <img src={item.image} alt={item.name} style={{ maxWidth: '100px' }} />
          <motion.h3>{item.name}</motion.h3>
          <motion.p>${item.price}</motion.p>
        </motion.div>
      ))}
      {cart.length === 0 && <Typography>Your cart is empty.</Typography>}
    </div>
  );
};

export default CartPage;
