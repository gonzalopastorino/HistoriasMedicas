import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "./SidebarMenu.css";

const SidebarMenu = ({ onRegistrarPacientes, onChangeView }) => {
  return (
    <div className="bg-dark col-auto col-md-2 min-vh-100 d-flex flex-column justify-content-between pt-5">
      {/* Menú principal */}
      <div>
        <ul className="nav nav-pills flex-column">
          {/* Inicio */}
          <li className="nav-item text-white my-3">
            <a
              className="text-decoration-none text-white p-2 d-flex align-items-center"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onChangeView("inicio");
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
              className="dropdown-menu dropdown-menu-end bg-dark text-white"
              aria-labelledby="pacientesDropdown"
            >
              <li>
                <a
                  className="dropdown-item text-white"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onRegistrarPacientes();
                  }}
                >
                  Registrar Pacientes
                </a>
              </li>
              <li>
                <a className="dropdown-item text-white" href="#">
                  Ver Pacientes
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
        </ul>
      </div>

      {/* Usuario (Tócame) */}
      <div className="dropdown my-3">
        <button
          className="btn btn-dark d-flex align-items-center"
          type="button"
          id="triggerId"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="bi bi-person-circle fs-4"></i>
          <span className="ms-3 d-none d-sm-inline">Tócame</span>
        </button>
        <div
          className="dropdown-menu dropdown-menu-end"
          style={{ backgroundColor: "#000", color: "#fff" }}
          aria-labelledby="triggerId"
        >
          <a className="dropdown-item text-white" href="#">
            Base de Datos
          </a>
          <a
            className="dropdown-item text-white"
            href="#"
            style={{ backgroundColor: "#000" }}
          >
            Perfil
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
