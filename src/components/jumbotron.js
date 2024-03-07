import React from "react";
import "./jumbotron.css"; 

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="jumbotron-content">
        <img 
        src="https://i.pinimg.com/originals/90/05/71/90057163dfe76879b56746d069fdfc3f.jpg"
        alt = "imagen"
        className = "jumbotron-image"
        />
        <h1>Bienvenido a tu Dashboard</h1>
        <p>
          Registra tus gastos e ingresos para llevar un control de tus finanzas.
        </p>
      </div>
    </div>
  );
};

export default Jumbotron;
