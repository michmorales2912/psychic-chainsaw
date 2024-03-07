import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Tabla from "./components/tabla";
import AboutMe from "./components/aboutme"; 

const App = () => {
  const [ruta, setRuta] = useState("inicio");
  const [exchangeRates, setExchangeRates] = useState(null); 
  useEffect(() => {
    // Realizar la solicitud a la API de Open Exchange Rates aquí
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(
          "https://open.er-api.com/v6/latest/USD"
        );
        setExchangeRates(response.data.rates);
      } catch (error) {
        console.error("Error al obtener los tipos de cambio:", error);
      }
    };

    fetchExchangeRates();
  }, []); // Se ejecuta solo una vez al montar el componente

  const handleCambioDeRuta = (nuevaRuta) => {
    setRuta(nuevaRuta);
  };

  const datos = [
    { descripcion: 'Uber', categoria: 'Transporte', ingresos: 0, gastos: 50 },
    { descripcion: 'Carne', categoria: 'Supermercado', ingresos: 0, gastos: 75 },
    { descripcion: 'Cine', categoria: 'Ocio', ingresos: 0, gastos: 300 },
    { descripcion: 'Sueldo', categoria: 'Trabajo', ingresos: 2500, gastos: 0 },
    { descripcion: 'Venta blusa', categoria: 'Trabajo', ingresos: 300, gastos:0 },
  ];
  



  return (
    <div>
      <Header />
      <Navbar onCambioDeRuta={handleCambioDeRuta} />
      <Jumbotron />
      <main>
        {/*Render condicional */}
        {ruta === "inicio" && (
      <div>
        {exchangeRates && (
          <div>
            <h2>Tipos de Cambio</h2>
            <p>MXN: {exchangeRates.MXN}</p>
            <p>EUR: {exchangeRates.EUR}</p>
            <p>GBP: {exchangeRates.GBP}</p>
          </div>
        )}
        <Tabla datos={datos} exchangeRates={exchangeRates} />
      </div>
    )}
        {ruta === "aboutme" && <AboutMe />} 
      </main>
      <AboutMe />
      <Footer />
    </div>
  );
};

export default App;
