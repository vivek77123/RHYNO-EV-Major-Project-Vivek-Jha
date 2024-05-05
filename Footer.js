import React from 'react';
import Insta from './instag.png';
import Linkedin from './linkedin.png';
import './footer.css'; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/refund-policy">Refund Policy</a>
        <a href="/website-policy">Website Policy</a>
        <a href="contact">Contact Us</a>
        <a href="/product">Products</a>
        <a href="https://www.linkedin.com/company/rhyno-wheels/?originalSubdomain=in">Career</a>
        <a href="/rentals">Rentals</a>
      </div>
      <div className="social-icons">
        <a href="https://www.instagram.com/rhyno.in?igsh=MXRoMHdkOGR4ZHB5OA==" target="_blank" rel="noopener noreferrer">
          <img src={Insta} alt="Instagram" />
        </a>
        <a href="https://www.linkedin.com/company/rhyno-wheels/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
