// src/components/About.js
import React, { useEffect, useRef } from 'react';
import { getYearsOfExperience } from '../utils/experience';
import './About.css';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    aboutRef.current.classList.add('fade-in');
  }, []);

  const experienceYears = getYearsOfExperience();
  const experienceYearsLabel = `${experienceYears}+`;

  return (
    <section ref={aboutRef} className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Get to know me better - my journey, passion, and what drives me in the world of technology.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Hi, I'm Rohini Chellapandian</h3>
              <p className="intro-text">
                A passionate Technical Architect with {experienceYearsLabel} years of experience in the software industry.
                My journey began as a developer, and since then, I've been passionate about crafting robust
                and scalable solutions that make a real impact.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-section">
                <h4><i className="fas fa-code"></i> Technical Expertise</h4>
                <p>
                  My expertise spans HTML, CSS, JavaScript (ES6+), and modern frameworks like React, Angular, and Bootstrap. 
                  I specialize in creating intuitive user interfaces and designing backend systems with Node.js and MongoDB. 
                  I'm constantly learning and adapting to new technologies to stay ahead in this ever-evolving field.
                </p>
              </div>

              <div className="detail-section">
                <h4><i className="fas fa-briefcase"></i> Professional Journey</h4>
                <p>
                  Currently, I lead technical initiatives at Payoda Technologies, focusing on delivering impactful solutions 
                  and mentoring junior developers. 
                </p>
              </div>

              <div className="detail-section">
                <h4><i className="fas fa-lightbulb"></i> What Drives Me</h4>
                <p>
                  I love turning complex problems into simple, beautiful, and intuitive designs. My approach combines 
                  technical excellence with creative problem-solving, ensuring that every solution is not only functional 
                  but also user-friendly and scalable.
                </p>
              </div>

              <div className="detail-section">
                <h4><i className="fas fa-users"></i> Recognition & Impact</h4>
                <p>
                  My contributions have been recognized by companies I've worked with. At Localize, I was celebrated as an 
                  "exceptional engineer" and "cornerstone of the team".
                </p>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div className="stat-info">
                  <h4>{experienceYearsLabel} Years</h4>
                  <p>Experience</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-project-diagram"></i>
                </div>
                <div className="stat-info">
                  <h4>50+ Projects</h4>
                  <p>Completed</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-users"></i>
                </div>
                <div className="stat-info">
                  <h4>15+ Teams</h4>
                  <p>Led</p>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <i className="fas fa-code-branch"></i>
                </div>
                <div className="stat-info">
                  <h4>20+ Technologies</h4>
                  <p>Mastered</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-values">
          <h3>My Values</h3>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h4>Innovation</h4>
              <p>Constantly exploring new technologies and approaches to solve complex problems.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>Collaboration</h4>
              <p>Believing in the power of teamwork and fostering strong relationships with clients and colleagues.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h4>Growth</h4>
              <p>Committed to continuous learning and growing from developer to full-stack expert.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h4>Excellence</h4>
              <p>Bringing dedication and technical excellence to every project, no matter how big or small.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
