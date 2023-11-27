// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import MainContent from './MainContent';
import AboutPage from './AboutPage';
import HelpPage from './HelpPage';
import { AuthProvider } from './AuthContext';
import ProductList from './ProductList';
import Cart from './Cart';
import CartPage from './CartPage';
import BuyPage from './BuyPage';
import ProductPage from './ProductPage'; // Import the ProductPage component

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const contentStyle = {
  flex: 1,
};

const pageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const App = () => {
  const [cart, setCart] = useState([]);   

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const products = [
    // ... (your product data)
      {
    id: 1,
    name: 'Smart Garden Sensor',
    price: 49.99,
    description: 'Advanced sensor for monitoring soil moisture, sunlight, and temperature in your garden.',
    image: 'img1.jpg',
  },
  {
    id: 2,
    name: 'Indoor Herb Garden Kit',
    price: 29.99,
    description: 'All-in-one kit for growing fresh herbs indoors, perfect for culinary enthusiasts.',
    image: 'img2.jpg',
  },
  {
    id: 3,
    name: 'Telescopic Pruning Loppers',
    price: 39.99,
    description: 'Extendable loppers for reaching high branches and pruning with precision.',
    image: 'img3.jpg',
  },
  {
    id: 4,
    name: 'Automatic Plant Watering System',
    price: 59.99,
    description: 'Convenient system for automating the watering of your plants, ensuring they stay hydrated.',
    image: 'img4.jpg',
  },
  {
    id: 5,
    name: 'Bamboo Garden Fence',
    price: 24.99,
    description: 'Natural and eco-friendly bamboo fence for enhancing the aesthetic of your garden.',
    image: 'https://example.com/bamboo-garden-fence.jpg',
  },
  {
    id: 6,
    name: 'Insect Hotel',
    price: 19.99,
    description: 'Attractive wooden insect hotel to provide shelter for beneficial insects in your garden.',
    image: 'https://example.com/insect-hotel.jpg',
  },
  {
    id: 7,
    name: 'Garden Tool Organizer Rack',
    price: 19.99,
    description: 'Sturdy rack for organizing and storing your garden tools in one place.',
    image: 'https://example.com/tool-organizer-rack.jpg',
  },
  {
    id: 8,
    name: 'Decorative Garden Stepping Stones',
    price: 14.99,
    description: 'Set of decorative stepping stones to add charm to your garden pathway.',
    image: 'https://example.com/stepping-stones.jpg',
  },
  {
    id: 9,
    name: 'Folding Garden Kneeler and Seat',
    price: 29.99,
    description: 'Versatile kneeler and seat for comfortable gardening, with folding design for easy storage.',
    image: 'https://example.com/garden-kneeler-seat.jpg',
  },
  {
    id: 10,
    name: 'Rain Barrel',
    price: 49.99,
    description: 'Collect rainwater for your garden with this durable and eco-friendly rain barrel.',
    image: 'https://example.com/rain-barrel.jpg',
  },
  {
    id: 11,
    name: 'Ornamental Wind Chimes',
    price: 12.99,
    description: 'Elegant wind chimes to add a soothing musical element to your garden.',
    image: 'https://example.com/wind-chimes.jpg',
  },
  {
    id: 12,
    name: 'Solar-Powered Garden Fountain',
    price: 69.99,
    description: 'Beautiful fountain powered by solar energy, creating a tranquil atmosphere in your garden.',
    image: 'https://example.com/solar-fountain.jpg',
  },
  {
    id: 13,
    name: 'Garden Hammock',
    price: 39.99,
    description: 'Relax and unwind in your garden with this comfortable and durable hammock.',
    image: 'https://example.com/garden-hammock.jpg',
  },
  {
    id: 14,
    name: 'Eco-Friendly Plant Pots',
    price: 9.99,
    description: 'Set of biodegradable plant pots made from eco-friendly materials.',
    image: 'https://example.com/eco-friendly-plant-pots.jpg',
  },
  {
    id: 15,
    name: 'Outdoor Umbrella',
    price: 34.99,
    description: 'Stylish outdoor umbrella to provide shade in your garden on sunny days.',
    image: 'https://example.com/outdoor-umbrella.jpg',
  },
  ];

  return (
    <AuthProvider>
      <Router>
        <div style={containerStyle}>
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  style={{
                    maxWidth: '800px',
                    margin: 'auto',
                    padding: '1rem',
                    ...contentStyle,
                  }}
                >
                  <LoginForm />
                </motion.div>
              }
            />
            <Route
              path="/register"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  style={{
                    maxWidth: '800px',
                    margin: 'auto',
                    padding: '1rem',
                    ...contentStyle,
                  }}
                >
                  <RegisterForm />
                </motion.div>
              }
            />
            <Route
              path="/main"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  style={{
                    maxWidth: '800px',
                    margin: 'auto',
                    padding: '1rem',
                    ...contentStyle,
                  }}
                >
                  <Navbar cart={cart} />
                  <MainContent />
                  <Footer />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  style={{
                    maxWidth: '800px',
                    margin: 'auto',
                    padding: '1rem',
                    ...contentStyle,
                  }}
                >
                  <AboutPage />
                </motion.div>
              }
            />
            <Route
              path="/help"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  style={{
                    maxWidth: '800px',
                    margin: 'auto',
                    padding: '1rem',
                    ...contentStyle,
                  }}
                >
                  <HelpPage />
                </motion.div>
              }
            />
            <Route
              path="/products"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  style={{
                    maxWidth: '800px',
                    margin: 'auto',
                    padding: '1rem',
                    ...contentStyle,
                  }}
                >
                  <Navbar cart={cart} />
                  <ProductList addToCart={addToCart} />
                  <Footer />
                </motion.div>
              }
            />
            <Route
              path="/cart"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  style={contentStyle}
                >
                  <CartPage cart={cart} />
                </motion.div>
              }
            />
            <Route
              path="/buy"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  style={{
                    maxWidth: '800px',
                    margin: 'auto',
                    padding: '1rem',
                    ...contentStyle,
                  }}
                >
                  <BuyPage cart={cart} />
                </motion.div>
              }
            />
            {/* ProductPage route */}
            <Route
              path="/products/:productId"
              element={
                <motion.div
                  variants={pageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  style={{
                    maxWidth: '800px',
                    margin: 'auto',
                    padding: '1rem',
                    ...contentStyle,
                  }}
                >
                  <Navbar cart={cart} />
                  <ProductPage products={products} />
                  <Footer />
                </motion.div>
              }
            />
          </Routes>
          <Cart cart={cart} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
