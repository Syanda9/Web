import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/shop">Shop</a>
        <a href="/contact-us">Contact Us</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
        <a href="/refund-policy">Refund Policy</a>
        <a href="/shipping-policy">Shipping Policy</a>
        <a href="/faq">FAQ</a>
        <a href="/track-order">Track My Order</a>
      </div>
      <div className="footer-copyright">
        © 2024 . ARSEMA PURE NATURALS. Site Designed By Pholoba
      </div>
    </footer>
  );
};

export default Footer;
