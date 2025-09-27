import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme, isCollapsed, toggleCollapse } = useTheme();
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showThemeMsg, setShowThemeMsg] = useState(() => {
    return localStorage.getItem('themeMsgShown') !== 'true';
  });

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light1':
        return 'fas fa-sun';
      case 'light2':
        return 'fas fa-leaf';
      case 'darkA':
        return 'fas fa-moon';
      case 'darkB':
        return 'fas fa-star';
      default:
        return 'fas fa-moon';
    }
  };

  const getThemeLabel = () => {
    switch (theme) {
      case 'light1':
        return 'Switch to Light Green Theme';
      case 'light2':
        return 'Switch to Light Blue Theme';
      case 'darkA':
        return 'Switch to Dark Cyan Theme';
      case 'darkB':
        return 'Switch to Dark Green Theme';
      default:
        return 'Switch Theme';
    }
  };

  return (
    <>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <i className="fas fa-bars"></i>
      </button>

      <div className={`mobile-overlay ${isMobileOpen ? 'mobile-open' : ''}`} onClick={closeMobileMenu}></div>

      <nav className={`navbar ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}>
        <div className="navbar-header">
          <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
            <i className="fas fa-user navbar-brand-icon"></i>
            <span className="navbar-text">RC</span>
          </Link>
        </div>

        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link 
              to="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <i className="fas fa-home navbar-icon"></i>
              <span className="navbar-text">Home</span>
            </Link>
          </li>
          
          <li className="navbar-item">
            <Link 
              to="/about" 
              className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <i className="fas fa-user navbar-icon"></i>
              <span className="navbar-text">About</span>
            </Link>
          </li>
          
          <li className="navbar-item">
            <Link 
              to="/skills" 
              className={`navbar-link ${isActive('/skills') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <i className="fas fa-tools navbar-icon"></i>
              <span className="navbar-text">Skills</span>
            </Link>
          </li>
          
          <li className="navbar-item">
            <Link 
              to="/experience" 
              className={`navbar-link ${isActive('/experience') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <i className="fas fa-briefcase navbar-icon"></i>
              <span className="navbar-text">Experience</span>
            </Link>
          </li>
          
          <li className="navbar-item">
            <Link 
              to="/projects" 
              className={`navbar-link ${isActive('/projects') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <i className="fas fa-project-diagram navbar-icon"></i>
              <span className="navbar-text">Projects</span>
            </Link>
          </li>
          
          <li className="navbar-item">
            <Link 
              to="/contact" 
              className={`navbar-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              <i className="fas fa-envelope navbar-icon"></i>
              <span className="navbar-text">Contact</span>
            </Link>
          </li>
        </ul>

        <div className="navbar-controls">
          <button className="navbar-toggle" onClick={toggleCollapse}>
            <i className={`fas fa-chevron-${isCollapsed ? 'right' : 'left'}`}></i>
          </button>
          <div className="theme-toggle-wrapper">
            <button className="theme-toggle" onClick={() => {
              toggleTheme();
              if (showThemeMsg) {
                setShowThemeMsg(false);
                localStorage.setItem('themeMsgShown', 'true');
              }
            }} title={getThemeLabel()}>
              <i className={getThemeIcon()}></i>
            </button>
            {showThemeMsg && (
              <div className="theme-popover">
                <span>Try changing the theme!</span>
                <button className="theme-popover-close" onClick={() => {
                  setShowThemeMsg(false);
                  localStorage.setItem('themeMsgShown', 'true');
                }} aria-label="Close popover">
                  &times;
                </button>
                <div className="theme-popover-arrow" />
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
