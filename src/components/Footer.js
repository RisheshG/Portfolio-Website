// src/sections/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Rishesh Gangwar. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.canva.com/design/DAGPoNnC3gk/FyQNSsi_6Gq1yTHgYHdVhw/edit" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="https://github.com/RisheshG" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
