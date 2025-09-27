// src/components/Home.js
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getYearsOfExperience } from '../utils/experience';
import './Home.css';

const HomePage = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const yearsOfExperience = getYearsOfExperience();

  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    technologies: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    // Animate hero section on mount
    if (heroRef.current) {
      heroRef.current.classList.add('animate-in');
    }

    // Animate stats after a short delay
    const timer = setTimeout(() => {
      if (statsRef.current) {
        statsRef.current.classList.add('animate-in');
        startCountUp();
      }
    }, 400);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startCountUp = () => {
    const durationMs = 1200;
    const startTime = performance.now();

    const targets = {
      experience: yearsOfExperience,
      projects: 50,
      technologies: 15,
      satisfaction: 100,
    };

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
      const eased = easeOutCubic(progress);

      setCounts({
        experience: Math.round(targets.experience * eased),
        projects: Math.round(targets.projects * eased),
        technologies: Math.round(targets.technologies * eased),
        satisfaction: Math.round(targets.satisfaction * eased),
      });

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <div className="home-section">
      <div className="home-container">
        {/* Hero Section */}
        <section ref={heroRef} className="hero-section">
          <header className="hero-header">
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">Rohini Chellapandian</span>
            </h1>
            <h2 className="hero-subtitle">Technical Architect &bull; Full‑Stack Engineer &bull; Product Builder</h2>
            <p className="hero-description">
              <strong>{yearsOfExperience}+ years</strong> building scalable web products, leading engineering teams, and delivering elegant solutions across <span className="highlight-tech">React</span>, <span className="highlight-tech">Node.js</span> and modern web technologies.
            </p>
          </header>

          <div className="hero-actions">
            <Link to="/projects" className="hero-btn hero-btn-primary">
              <i className="fas fa-code"></i>
              View Projects
            </Link>
            <Link to="/contact" className="hero-btn hero-btn-secondary">
              <i className="fas fa-envelope"></i>
              Get In Touch
            </Link>
          </div>

          <div className="floating-icons" aria-hidden="true">
            <span className="floating-icon floating-icon-react"><i className="fab fa-react"></i></span>
            <span className="floating-icon floating-icon-js"><i className="fab fa-js-square"></i></span>
            <span className="floating-icon floating-icon-node"><i className="fab fa-node-js"></i></span>
            <span className="floating-icon floating-icon-cloud"><i className="fas fa-cloud"></i></span>
            <span className="floating-icon floating-icon-database"><i className="fas fa-database"></i></span>
            <span className="floating-icon floating-icon-ai"><i className="fas fa-robot"></i></span>
            <span className="floating-icon floating-icon-lead"><i className="fas fa-users"></i></span>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={statsRef} className="stats-section">
          <div className="stats-row">
            <div className="stat-card">
              <span className="stat-number">{counts.experience}+</span>
              <div className="stat-label">Years Experience</div>
              <div className="stat-description">Hands-on across frontend, backend, and architecture</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">{counts.projects}+</span>
              <div className="stat-label">Projects Delivered</div>
              <div className="stat-description">From MVPs to complex enterprise platforms</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">{counts.technologies}+</span>
              <div className="stat-label">Technologies</div>
              <div className="stat-description">React, Node.js, MongoDB, AWS, and more</div>
            </div>
            <div className="stat-card">
              <span className="stat-number">{counts.satisfaction}%</span>
              <div className="stat-label">Client Satisfaction</div>
              <div className="stat-description">Trusted by clients and teams worldwide</div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="quick-links-section">
          <h2 className="section-title">Explore My Work</h2>
          <div className="quick-links-grid">
            <Link to="/about" className="quick-link-card">
              <span className="quick-link-icon">
                <i className="fas fa-user"></i>
              </span>
              <div className="quick-link-title">About Me</div>
              <div className="quick-link-description">Learn about my journey and values</div>
            </Link>
            <Link to="/skills" className="quick-link-card">
              <span className="quick-link-icon">
                <i className="fas fa-tools"></i>
              </span>
              <div className="quick-link-title">Skills</div>
              <div className="quick-link-description">Explore my technical expertise</div>
            </Link>
            <Link to="/projects" className="quick-link-card">
              <span className="quick-link-icon">
                <i className="fas fa-folder"></i>
              </span>
              <div className="quick-link-title">Projects</div>
              <div className="quick-link-description">See recent work and case studies</div>
            </Link>
            <Link to="/experience" className="quick-link-card">
              <span className="quick-link-icon">
                <i className="fas fa-briefcase"></i>
              </span>
              <div className="quick-link-title">Experience</div>
              <div className="quick-link-description">My professional journey</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
