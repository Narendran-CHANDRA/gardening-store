// AboutPage.js
import React from 'react';

const AboutPage = () => {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '2rem',
    padding: '50px',
    borderRadius: '10px',
    backgroundImage: `url(${process.env.PUBLIC_URL}image.jpg)`, // Replace with your image path
    backgroundSize: '100% 100%', // Fill the entire screen
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh', // Full height of the screen
    margin: 'auto',
    color: 'black', // Set text color to white or another suitable color for better visibility
  };

  return (
    <div style={containerStyle}>
      <h1>About Us</h1>
      <h3>
        Welcome to our website! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </h3>
      <p>
        If you have any questions or need assistance, please feel free to contact us.
      </p>
    </div>
  );
};

export default AboutPage;
