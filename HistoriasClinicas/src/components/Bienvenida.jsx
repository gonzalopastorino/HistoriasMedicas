import React from "react";

const Bienvenida = ({ usuario }) => {
  return (
    <div className="d-flex align-items-center ms-auto">
      <span className="me-2">Hola, <strong>{usuario?.nombre || "Usuario"}</strong></span>
      <i className="bi bi-person-circle fs-4"></i>
    </div>
  );
};

export default Bienvenida;
