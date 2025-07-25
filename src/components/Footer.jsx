import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/share/1CNcCV9De9/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
        <a href="https://www.instagram.com/female_corner2002?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://maps.app.goo.gl/R4XiyL9tngz8U6o96" target="_blank" rel="noopener noreferrer">
          <FaMapMarkerAlt className="social-icon" />
        </a>
        <a href="https://wa.me/201009630011" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="social-icon" />
        </a>
      </div>
      <p>By_Ahmed Bakry</p>
    </footer>
  );
}

export default Footer;