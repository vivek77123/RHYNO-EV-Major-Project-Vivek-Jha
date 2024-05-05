import React from 'react';
import Insta from './instag.png';
import Linkedin from './linkedin.png';
import './icon.css'; // Import CSS file for styling

const SocialBar = () => {
  return (
    <div className="social-bar">
      <a href="https://www.instagram.com/rhyno.in?igsh=MXRoMHdkOGR4ZHB5OA==" target="_blank" rel="noopener noreferrer">
        <img src={Insta} alt="Instagram" />
      </a>
      <a href="https://www.linkedin.com/company/rhyno-wheels/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
        <img src={Linkedin} alt="LinkedIn" />
      </a>
    </div>
  );
}

export default SocialBar;
