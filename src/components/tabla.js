import React from 'react';
import './tabla.css';

const Tabla = ({ datos }) => {
  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Categoría</th>
          <th>Ingresos</th>
          <th>Gastos</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((item, index) => (
          <tr key={index}>
            <td>{item.descripcion}</td>
            <td>{item.categoria}</td>
            <td>{item.ingresos}</td>
            <td>{item.gastos}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
