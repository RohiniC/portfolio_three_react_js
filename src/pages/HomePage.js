// src/pages/HomePage.js
import React from 'react';
import Home from '../components/Home';
import Testimonials from '../components/Testimonials';
import useAnimation from '../hooks/useAnimation';
import './HomePage.css';

const HomePage = () => {
  const animationRef = useAnimation();

  return (
    <div className="home-page">
      <div ref={animationRef} className="page-content">
        <Home />
        <Testimonials />
      </div>
    </div>
  );
};

export default HomePage;
