import React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleViewCart = () => {
    navigate('/cart');
    handleClose();
  };

  return (
    <div>
      <IconButton color="inherit" onClick={handleClick}>
        <Badge badgeContent={cart.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 2, maxWidth: 250 }}>
          <Typography variant="h6" gutterBottom>
            Shopping Cart
          </Typography>
          {cart.map((item) => (
            <Typography key={item.id} gutterBottom>
              {item.name} - ${item.price}
            </Typography>
          ))}
          {cart.length === 0 && <Typography>Your cart is empty.</Typography>}
          <Button
            variant="contained"
            color="primary"
            onClick={handleViewCart}
            sx={{ marginTop: 5 }}
          >
            View Cart
          </Button>
        </Box>
      </Popover>
    </div>
  );
};

export default Cart;
