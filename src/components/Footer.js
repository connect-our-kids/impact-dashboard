import React from 'react';

import './Footer.scss';

const Footer = () => (
  <div className="footer-container">
    <p className="copyright">© {new Date().getFullYear()} <a href="http://www.connectourkids.org/">Connect Our Kids</a></p>
    <ul>
      <li><a href="#">Terms and Conditions</a></li>
      <li><a href="#">Privacy Policy</a></li>
      <li><a href="#">Contact Support</a></li>
    </ul>
  </div>
)

export default Footer;