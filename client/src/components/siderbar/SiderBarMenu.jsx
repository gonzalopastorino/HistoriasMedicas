import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "./siderbarmenu.css";

const SidebarMenu = () => {
  const navigate = useNavigate();
  const [menuCollapsed, setMenuCollapsed] = useState(true); // Comenzar colapsado  

  const toggleMenu = () => {
    setMenuCollapsed((prevState) => !prevState); // Cambiar el estado del menú colapsado  
  };

  return (
    <div className="d-flex">
      {/* Contenedor fijo para el menú */}
      <div
        className={`bg-black min-vh-100 d-flex flex-column justify-content-between pt-5 ${menuCollapsed ? "collapsed" : ""}`}
        style={{
          transition: "all 0.3s",
          width: menuCollapsed ? "80px" : "250px", // Ancho del menú completo y reducido  
        }}
      >
        {/* Botón del menú hamburguesa (siempre visible en todas las pantallas y fijo en la parte superior izquierda) */}
        <button
          className="btn text-white mt-2 pt-2 d-flex align-items-center"
          onClick={toggleMenu}
          style={{
            position: "absolute",  // Hacer que el botón sea fijo
            top: "10px",
            zIndex: "1050",
            border: "none",
          }}
        >
          <i className="bi bi-list fs-4 "></i>
        </button>

        {/* Menú principal */}
        <div className="mt-5"> {/* Añadir margen superior a las opciones del menú */}
          <ul className="nav nav-pills flex-column bg-black">
            {/* Inicio */}
            <li className="nav-item text-white my-3">
              <a
                className="text-decoration-none text-white p-2 d-flex align-items-center"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/bienvenida"); // Navegar a la página de inicio  
                }}
              >
                <i className="bi bi-house-door-fill text-white" title="Inicio"></i>
                <span className={`ms-3 ${menuCollapsed ? "d-none" : "d-inline"}`}>Inicio</span>
              </a>
            </li>



            {/* Pacientes con submenú */}
            <li className="nav-item text-white my-3 dropdown">
              <a
                className="text-decoration-none text-white p-2 d-flex align-items-center"
                href="#"
                id="pacientesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-people-fill text-white" title="Pacientes"></i>
                <span className={`ms-3 ${menuCollapsed ? "d-none" : "d-inline"}`}>Pacientes</span>
                <i className="bi bi-caret-right-fill ms-auto"></i>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end bg-dark text-white"
                aria-labelledby="pacientesDropdown"
              >
                <li>
                  <a
                    className="dropdown-item text-white"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/add-task");
                    }}
                  >
                    Registrar Pacientes
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-white"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/tasks");
                    }}
                  >
                    Ver Pacientes
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item text-white"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/tablas-pacientes");
                    }}
                  >
                    Tabla Pacientes
                  </a>
                </li>
              </ul>
            </li>

            {/* Cita */}
            <li className="nav-item text-white my-3">
              <a
                className="text-decoration-none text-white p-2 d-flex align-items-center"
                href="#"
              >
                <i className="bi bi-calendar-event text-white" title="Turno"></i>
                <span className={`ms-3 ${menuCollapsed ? "d-none" : "d-inline"}`}>Turno</span>
              </a>
            </li>



            {/* Calendario */}
            <li className="nav-item text-white my-3">
              <a
                className="text-decoration-none text-white p-2 d-flex align-items-center"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/calendario"); // Navegar a la página de inicio  
                }}
              >
                <i className="bi bi-calendar-date text-white" title="Calendario"></i>
                <span className={`ms-3 ${menuCollapsed ? "d-none" : "d-inline"}`}>Calendario</span>
              </a>
            </li>

            {/* Configuración */}
            <li className="nav-item text-white my-3">
              <a
                className="text-decoration-none text-white p-2 d-flex align-items-center"
                href="#"
              >
                <i className="bi bi-gear text-white" title="Configuración"></i>
                <span className={`ms-3 ${menuCollapsed ? "d-none" : "d-inline"}`}>Configuración</span>
              </a>
            </li>

            {/* Usuario (Tócame) */}
            <li className="nav-item text-white my-3 dropdown">
              <a
                className="text-decoration-none text-white p-2 d-flex align-items-center"
                href="#"
                id="triggerId"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle fs-4" title="Tócame"></i>
                <span className={`ms-3 ${menuCollapsed ? "d-none" : "d-inline"}`}>Tócame</span>
                <i className="bi bi-caret-right-fill ms-auto"></i>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end  text-white"
                aria-labelledby="triggerId"
              >
                <li>
                  <a className="dropdown-item text-white" href="#"

                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/profile");
                    }}
                  >
                    Perfil
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
