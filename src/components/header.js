import React from 'react';
import './header.css'; 

const Header = () => {
  return (
    <header className="app-header">
      <img src="https://i.pinimg.com/originals/4a/e4/f8/4ae4f865ea5a07adc6863a7abe61e915.jpg" alt="Logo" className="logo" />
      <h1>Dashboard</h1>
      <button className="login-button">Iniciar sesión</button>
    </header>
  );
};

export default Header;
