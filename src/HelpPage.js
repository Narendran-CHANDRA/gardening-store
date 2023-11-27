// HelpPage.js
import React from 'react';

const HelpPage = () => {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '2rem',
    padding: '30px',
    borderRadius: '10px',
    backgroundImage: `url(${process.env.PUBLIC_URL}/image.jpg)`, // Replace with your image path
    backgroundSize: '100% 100%', // Fill the entire screen
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh', // Full height of the screen
    margin: 'auto',
    color: 'black', // Set text color to white
  };

  return (
    <div style={containerStyle}>
      <h1>Help</h1>
      <h2>
        Need assistance? Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </h2>
      <p>
        If you have any questions or issues, please feel free to contact our support team.
      </p>
    </div>
  );
};

export default HelpPage;
