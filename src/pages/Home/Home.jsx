import React from 'react';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <Header />
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <Link to="/profile">Usuario</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;