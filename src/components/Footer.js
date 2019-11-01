import React from 'react';

import './Footer.scss';

const Footer = () => (
  <div className="footer-container">
    <p className="copyright">© {new Date().getFullYear()} <a href="http://www.connectourkids.org/">Connect Our Kids</a></p>
    <ul>
      <li><a href="https://www.connectourkids.org/terms">Terms and Conditions</a></li>
      <li><a href="https://www.connectourkids.org/privacy">Privacy Policy</a></li>
      <li><a href="mailto:support@connectourkids.org?subject=Impact%20Dashboard%20Help">Contact Support</a></li>
    </ul>
  </div>
)

export default Footer;