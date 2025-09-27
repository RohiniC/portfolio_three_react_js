// src/pages/ContactPage.js
import React from 'react';
import Contact from '../components/Contact';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="page-content animate-in">
        <Contact />
      </div>
    </div>
  );
};

export default ContactPage;
