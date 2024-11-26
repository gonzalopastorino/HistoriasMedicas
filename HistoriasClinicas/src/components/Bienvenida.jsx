import React from "react";
import "../styles/bienvenida.css"; // Crear un archivo CSS para estilos específicos

const Bienvenida = ({ usuario }) => {
  return (
    <div className="bienvenida ">
      <i className="bi bi-person-circle"></i>
      <p className="bienvenida-header mt-3">
        Hola, <strong>{usuario.nombre}</strong>
      </p>
    </div>
  );
};

export default Bienvenida;
