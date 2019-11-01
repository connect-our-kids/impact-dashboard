import React from 'react';

const Footer = () => (
  <div className="footer-container">
    <p>© {new Date().getFullYear()} Connect Our Kids</p>
    <a href="#">Terms and Conditions</a>
    <a href="#">Privacy Policy</a>
    <a href="#">Contact Support</a>
  </div>
)

export default Footer;