// src/pages/HomePage.js
import React from 'react';
import Projects from '../components/Projects';
import './ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <div className="page-content animate-in">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
