import React from 'react';

import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="copyright">© {new Date().getFullYear()} <a className="copyright__link" href="http://www.connectourkids.org/">Connect Our Kids</a></div>
      <div className="footer__menu">
        <a className="footer__link" href="https://www.connectourkids.org/terms">Terms and Conditions</a>
        <a className="footer__link" href="https://www.connectourkids.org/privacy">Privacy Policy</a>
        <a className="footer__link" href="mailto:support@connectourkids.org?subject=Impact%20Dashboard%20Help">Contact Support</a>
      </div>
    </div>
  </footer>
)

export default Footer;