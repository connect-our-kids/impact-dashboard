import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss';

const Footer = () => (
  <div className="footer-container">
    <p className="copyright">© {new Date().getFullYear()} <a href="http://www.connectourkids.org/">Connect Our Kids</a></p>
    <ul>
      <li><Link to="/terms">Terms and Conditions</Link></li>
      <li><Link to="/privacy">Privacy Policy</Link></li>
      <li><a href="mailto:support@connectourkids.org?subject=Impact%20Dashboard%20Help">Contact Support</a></li>
    </ul>
  </div>
)

export default Footer;