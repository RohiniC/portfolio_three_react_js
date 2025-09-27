import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="brand-mark">RC</span>
          <div className="brand-text">
            <strong>Rohini Chellapandian</strong>
            <span>Technical Architect</span>
          </div>
        </div>

        <nav className="footer-nav">
          <a href="/" className="footer-link">Home</a>
          <a href="#/about" className="footer-link">About</a>
          <a href="#/skills" className="footer-link">Skills</a>
          <a href="#/projects" className="footer-link">Projects</a>
          <a href="#/experience" className="footer-link">Experience</a>
          <a href="#/contact" className="footer-link">Contact</a>
        </nav>

        <div className="footer-contacts">
          <a href="mailto:crohini90@gmail.com" aria-label="Email" className="icon-btn"><i className="fas fa-envelope"></i></a>
          <a href="https://linkedin.com/in/rohini-chellapandian" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/RohiniC" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn"><i className="fab fa-github"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} Rohini Chellapandian</span>
      </div>
    </footer>
  );
};

export default Footer;





