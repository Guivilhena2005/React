import React from "react";
import "./Footer.css";

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

            <li>Home</li>

            <li>About</li>

            <li>Profile</li>

          </ul>

        </div>

        <div className="footer-section">

          <h4>Redes Sociais</h4>

          <p>Dotinha</p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Todos os direitos reservados.
        </p>

      </div>

    </footer>
  );
};

export default Footer;