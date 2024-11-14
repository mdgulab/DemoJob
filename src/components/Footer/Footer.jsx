import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; 2024 LinkedIn Clone | All Rights Reserved</p>
        <div className="footer__links">
          <a href="#" className="footer__link">
            About
          </a>
          <a href="#" className="footer__link">
            Accessibility
          </a>
          <a href="#" className="footer__link">
            Help Center
          </a>
          <a href="#" className="footer__link">
            Privacy & Terms
          </a>
          <a href="#" className="footer__link">
            Advertising
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
