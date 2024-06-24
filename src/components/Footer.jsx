import React from 'react';
import './Footer.css'; // Import the CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">Shopping App</h2>
          <p>
            Welcome to Shopping App, your number one source for all things shopping. We're dedicated to giving you the very best of products, with a focus on dependability, customer service, and uniqueness.
          </p>
        </div>
        <div className="footer-section links">
          <h2 className="footer-title">Useful Links</h2>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2 className="footer-title">Contact</h2>
          <p>Email: support@shoppingapp.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Shopping St, Shopville, Shopland</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shopping App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
