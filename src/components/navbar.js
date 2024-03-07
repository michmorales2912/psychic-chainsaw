import React from 'react';
import './navbar.css';

const Navbar = ({ onCambioDeRuta }) => {
  const handleClick = (ruta) => {
    onCambioDeRuta(ruta);
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="/" onClick={() => handleClick("inicio")}>
            Inicio
          </a>
        </li>
        <li>
          <button onClick={() => handleClick("aboutMe")}>
            About Me
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
