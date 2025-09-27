// src/pages/HomePage.js
import React from 'react';
import Skills from '../components/Skills';
import useAnimation from '../hooks/useAnimation';
import './SkillsPage.css';

const SkillsPage = () => {
  const animationRef = useAnimation();

  return (
    <div className="skills-page">
      <div ref={animationRef} className="page-content">
        <Skills />
      </div>
    </div>
  );
};

export default SkillsPage;
