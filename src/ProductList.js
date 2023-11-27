// ProductList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const products = [
    {
      id: 1,
      name: 'Smart Garden Sensor',
      price: 49.99,
      description: 'Advanced sensor for monitoring soil moisture, sunlight, an.',
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
      description: 'Convenient system for automating the watering of your ',
      image: 'img4.jpg',
    },
    {
      id: 5,
      name: 'Bamboo Garden Fence',
      price: 24.99,
      description: 'Natural and eco-friendly bamboo fence for enhancing the aesthetic of your garden.',
      image: 'img5.jpg',
    },
    {
      id: 6,
      name: 'Insect Hotel',
      price: 19.99,
      description: 'Attractive wooden insect hotel to provide shelter for beneficial insects in your garden.',
      image: 'img6.jpg',
    },
    {
      id: 7,
      name: 'Garden Tool Organizer Rack',
      price: 19.99,
      description: 'Sturdy rack for organizing and storing your garden tools in one place.',
      image: 'img7.jpg',
    },
    {
      id: 8,
      name: 'Decorative Garden Stepping Stones',
      price: 14.99,
      description: 'Set of decorative stepping stones to add charm to your garden pathway.',
      image: 'img8.jpg',
    },
    {
      id: 9,
      name: 'Folding Garden Kneeler and Seat',
      price: 29.99,
      description: 'Versatile kneeler and seat for comfortable gardening, with folding design for easy storage.',
      image: 'img9.jpg',
    },
    {
      id: 10,
      name: 'Rain Barrel',
      price: 49.99,
      description: 'Collect rainwater for your garden with this durable and eco-friendly rain barrel.',
      image: 'img10.jpg',
    },
    {
      id: 11,
      name: 'Ornamental Wind Chimes',
      price: 12.99,
      description: 'Elegant wind chimes to add a soothing musical element to your garden.',
      image: 'img11.jpg',
    },
    {
      id: 12,
      name: 'Solar-Powered Garden Fountain',
      price: 69.99,
      description: 'Beautiful fountain powered by solar energy, creating a tranquil atmosphere in your garden.',
      image: 'img12.jpg',
    },
    {
      id: 13,
      name: 'Garden Hammock',
      price: 39.99,
      description: 'Relax and unwind in your garden with this comfortable and durable hammock.',
      image: 'img13.jpg',
    },
    {
      id: 14,
      name: 'Eco-Friendly Plant Pots',
      price: 9.99,
      description: 'Set of biodegradable plant pots made from eco-friendly materials.',
      image: 'img14.jpg',
    },
    {
      id: 15,
      name: 'Outdoor Umbrella',
      price: 34.99,
      description: 'Stylish outdoor umbrella to provide shade in your garden on sunny days.',
      image: 'img15.jpg',
    },
    // ... (your product data)
  ];
  


const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProductList = ({ cart, addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <br />

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ margin: '20px', padding: '10px', width: '80%', maxWidth: '400px' }}
      />

      {/* Product List */}
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {filteredProducts.map((product) => (
          <motion.li
            key={product.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            style={{
              border: '1px solid #eee',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '16px',
              marginRight: '16px',
              width: '200px',
            }}
          >
            <img src={product.image} alt={product.name} style={{ maxWidth: '100px' }} />
            <motion.h3>{product.name}</motion.h3>
            <motion.p>{product.description}</motion.p>
            <motion.p>${product.price}</motion.p>
            {/* Link to Product Details Page */}
            <Link to={`/products/${product.id}`}>
              <motion.button whileHover={{ scale: 1.1 }}>View Details</motion.button>
            </Link>
            <motion.button
              onClick={() => addToCart(product)}
              whileHover={{ scale: 1.1 }}
              style={{
                marginTop: '8px',
                backgroundColor: '#3498db',
                color: 'white',
                fontSize: '12px',
                padding: '5px',
              }}
            >
              Add to Cart
            </motion.button>
            <Link to="/buy">
              <motion.button
                whileHover={{ scale: 1.1 }}
                style={{
                  marginTop: '8px',
                  backgroundColor: '#2ecc71',
                  color: 'white',
                  fontSize: '12px',
                  padding: '5px',
                }}
              >
                Buy Now
              </motion.button>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProductList;
