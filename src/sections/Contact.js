import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [notification, setNotification] = useState('');

  const handleCopy = () => {
    const phoneNumber = '+91 9528506236';

    // Copy the phone number to the clipboard
    navigator.clipboard.writeText(phoneNumber)
      .then(() => {
        // Set the notification message
        setNotification('Phone number copied to clipboard!');
        // Hide notification after 3 seconds
        setTimeout(() => setNotification(''), 3000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>
        I'm always open to new opportunities and collaborations. Feel free to reach out through any of the following methods:
      </p>
      <div className="contact-options">
        <a href="https://www.linkedin.com/in/rishesh-gangwar-bb7026241/" className="contact-link" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://wa.me/9528506236" className="contact-link" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        <span 
          className="contact-link phone-number" 
          onClick={handleCopy}
        >
          Phone: +91 9528506236
        </span>
      </div>
      {notification && <div className="notification">{notification}</div>}
    </section>
  );
};

export default Contact;
