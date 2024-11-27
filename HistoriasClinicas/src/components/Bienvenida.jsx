import React from "react";

const Bienvenida = ({ usuario, onCerrarSesion }) => {
  return (
    <div className="dropdown ms-auto">
      {/* Botón solo con la imagen */}
      <button
        className="btn btn-dark d-flex align-items-center"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="me-2">Hola, <strong>{usuario?.nombre || "Usuario"}</strong></span>
        <i className="bi bi-person-circle fs-4"></i>
      </button>

      {/* Menú desplegable personalizado */}
      <ul
        className="dropdown-menu dropdown-menu-end"
        aria-labelledby="dropdownMenuButton"
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <li>
          <button
            className="dropdown-item text-white"
            style={{ backgroundColor: "#000" }}
            onClick={onCerrarSesion}
          >
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Bienvenida;
