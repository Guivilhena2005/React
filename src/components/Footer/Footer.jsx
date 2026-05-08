import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-box">
          <h2>GameStore</h2>
          <p>
            Sua loja gamer favorita com os melhores produtos e novidades.
          </p>
        </div>

        <div className="footer-box">
          <h3>Navegação</h3>

          <a href="#">Início</a>
          <a href="#">Produtos</a>
          <a href="#">Contato</a>
        </div>

        <div className="footer-box">
          <h3>Contato</h3>

          <p>Email: suporte@gamestore.com</p>
          <p>Telefone: (11) 99999-9999</p>
        </div>

      </div>

      <div className="footer-copy">
        <p>© 2026 GameStore - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;