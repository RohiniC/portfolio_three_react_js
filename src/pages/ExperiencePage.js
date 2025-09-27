// src/pages/HomePage.js
import React from 'react';
import Experience from '../components/Experience';
import './ExperiencePage.css';

const ExperiencePage = () => {
  return (
    <div className="experience-page">
      <div className="page-content animate-in">
        <Experience />
      </div>
    </div>
  );
};

export default ExperiencePage;
