import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (

    <header className="header">

      <div className="logo">
        MyBrand
      </div>

      <nav>

        <ul className="nav-links">

          <li>
            <Link to="/home">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/">Login</Link>
          </li>

        </ul>

      </nav>

    </header>
  );
};

export default Header;