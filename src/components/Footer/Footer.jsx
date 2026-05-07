import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>MinhaMarca</h3>
          <p>Dota2</p>
        </div>
        
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Profile</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Redes Sociais</h4>
          <div className="social-icons">
            <span className="icon">Do</span>
            <span className="icon">ti</span>
            <span className="icon">nha</span>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;