// src/MainContent.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductList from './ProductList'; // Import the ProductList component
import './MainContent.css';
import Cart from './Cart';
import image1 from './images/poi.jpg';
import image2 from './images/opi.jpg';
import image3 from './images/iop.jpg';

const MainContent = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="main-content-container">
      <Navbar />
      <br></br><Typography variant="h4" gutterBottom>
        Welcome to AGR Gardens
      </Typography>
      <Typography paragraph>
        Explore a world of greenery and tranquility in your garden with AGR Gardens. We offer a wide range of
        gardening products and expert advice to help you create the garden of your dreams.
      </Typography>
      <Slider {...sliderSettings} className="slider-container">
        <div className="slider-item">
          <img src={image1} alt="poi" className="slider-image" />
        </div>
        <div className="slider-item">
          <img src={image2} alt="opi" className="slider-image" />
        </div>
        <div className="slider-item">
          <img src={image3} alt="iop" className="slider-image" />
        </div>
      </Slider>
      <div className="cta-container">
        <Typography variant="h5" gutterBottom><br></br>
          Ready to transform your garden?
        </Typography>
        <Typography paragraph>
          Discover our curated collection of gardening essentials and bring your garden to life.
        </Typography>
        <button className="cta-button">Explore Products</button>
      </div>
      <ProductList />
    </div>
  );
};

export default MainContent;
