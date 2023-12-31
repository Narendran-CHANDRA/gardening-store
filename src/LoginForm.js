// src/LoginForm.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useAuth } from './AuthContext';

const customAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 15,
    },
  },
};

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const controls = useAnimation();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = () => {
    // Validate login details (add your authentication logic here)
    const isValid = validateDetails(formData);

    if (isValid) {
      login(); // Simulate login
      navigate('/main');
    } else {
      alert('Invalid details. Please try again.'); // Show an alert for demo purposes
    }
  };

  const validateDetails = ({ email, password }) => {
    // Implement your validation logic here
    // For demo purposes, consider it valid if the email and password are not empty
    return email.trim() !== '' && password.trim() !== '';
  };

  useEffect(() => {
    controls.start('visible');
  }, [controls]); // Include controls in the dependency array

  return (
    <motion.div
      variants={customAnimation}
      initial="hidden"
      animate={controls}
      style={{
        textAlign: 'center',
        marginTop: '2rem',
        padding: '20px',
        borderRadius: '10px',
        backgroundImage: `url(${process.env.PUBLIC_URL}login.jpg)`, // Add background image
        backgroundSize: 'cover',
        width: '50%',
        margin: 'auto',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" gutterBottom style={{ color: '#fff' }}>
        Login Page
      </Typography>
      <TextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', width: '100%' }}
        variant="outlined"
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        style={{ marginBottom: '20px', width: '100%' }}
        variant="outlined"
      />
      <Button variant="contained" color="primary" onClick={handleFormSubmit} style={{ width: '100%' }}>
        Login
      </Button>
      <Typography paragraph style={{ marginTop: '1rem', color: '#fff' }}>
        Don't have an account? <Link to="/register" style={{ color: '#fff', fontWeight: 'bold' }}>Register here</Link>
      </Typography>
    </motion.div>
  );
};

export default LoginForm;
