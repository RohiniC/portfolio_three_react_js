// src/pages/AboutPage.js
import React from 'react';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import useAnimation from '../hooks/useAnimation';
import './AboutPage.css';

const AboutPage = () => {
  const animationRef = useAnimation();

  return (
    <div className="about-page">
      <div ref={animationRef} className="page-content">
        <About />
        <Testimonials />
      </div>
    </div>
  );
};

export default AboutPage;
