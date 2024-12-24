import React from "react";
import { useNavigate } from "react-router-dom";  // Importamos useNavigate para navegar entre rutas
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "./siderbarmenu.css";

const SidebarMenu = ({ onRegistrarPacientes }) => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);  // Navega a la ruta proporcionada
  };

  return (
    <div className="bg-black col-auto col-md-2 min-vh-100 d-flex flex-column justify-content-between pt-5">
      {/* Menú principal */}
      <div>
        <ul className="nav nav-pills flex-column bg-black">
          {/* Inicio */}
          <li className="nav-item text-white my-3">
            <a
              className="text-decoration-none text-white p-2 d-flex align-items-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation("/bienvenida"); // Navegar a la página de inicio
              }}
            >
              <i className="bi bi-house-door-fill text-white"></i>
              <span className="ms-3 d-none d-sm-inline">Inicio</span>
            </a>
          </li>

          {/* Médico */}
          <li className="nav-item text-white my-3">
            <a
              className="text-decoration-none text-white p-2 d-flex align-items-center"
              href="#"
            >
              <i className="bi bi-person text-white"></i>
              <span className="ms-3 d-none d-sm-inline">Médico</span>
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
              <i className="bi bi-people-fill text-white"></i>
              <span className="ms-3 d-none d-sm-inline">Pacientes</span>
              <i className="bi bi-caret-right-fill ms-auto"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end bg-black text-white"
              aria-labelledby="pacientesDropdown"
            >
              <li>
                <a
                  className="dropdown-item text-white"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onRegistrarPacientes(); // Llama a la función que abrirá el formulario
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
                    handleNavigation("/tasks"); // Navega a la página de tareas
                  }}
                >
                  Ver Pacientes
                </a>
              </li>
            </ul>
          </li>

          {/* Cita y otras opciones... */}
          <li className="nav-item text-white my-3">
            <a
              className="text-decoration-none text-white p-2 d-flex align-items-center"
              href="#"
            >
              <i className="bi bi-calendar-event text-white"></i>
              <span className="ms-3 d-none d-sm-inline">Cita</span>
            </a>
          </li>

          {/* Consultas */}
          <li className="nav-item text-white my-3">
            <a
              className="text-decoration-none text-white p-2 d-flex align-items-center"
              href="#"
            >
              <i className="bi bi-question-circle text-white"></i>
              <span className="ms-3 d-none d-sm-inline">Consultas</span>
            </a>
          </li>

          {/* Calendario */}
          <li className="nav-item text-white my-3">
            <a
              className="text-decoration-none text-white p-2 d-flex align-items-center"
              href="#"
            >
              <i className="bi bi-calendar-date text-white"></i>
              <span className="ms-3 d-none d-sm-inline">Calendario</span>
            </a>
          </li>

          {/* Configuración */}
          <li className="nav-item text-white my-3">
            <a
              className="text-decoration-none text-white p-2 d-flex align-items-center"
              href="#"
            >
              <i className="bi bi-gear text-white"></i>
              <span className="ms-3 d-none d-sm-inline">Configuración</span>
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
              <i className="bi bi-person-circle fs-4"></i>
              <span className="ms-3 d-none d-sm-inline">Tócame</span>
              <i className="bi bi-caret-right-fill ms-auto"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end bg-black text-white"
              aria-labelledby="triggerId"
            >
              <li>
                <a className="dropdown-item text-white" href="#">
                  Base de Datos
                </a>
              </li>
              <li>
                <a className="dropdown-item text-white" href="#">
                  Perfil
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
