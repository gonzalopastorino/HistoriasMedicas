import React from "react";  
import "bootstrap/dist/css/bootstrap.min.css";  
import "bootstrap-icons/font/bootstrap-icons.css";  
import "bootstrap/js/dist/dropdown";  
import "./siderbarmenu.css";  
import { useNavigate } from "react-router";


const SidebarMenu = ({ onRegistrarPacientes,onVerPacientes, onChangeView }) => {  
  let navigate = useNavigate();

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
                <a className="dropdown-item text-white" href="#" 
                  onClick={(e) => {                      
                  navigate("/patients")
                  e.preventDefault();  
                  onVerPacientes();  
                }}  >  
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
              className="dropdown-menu dropdown-menu-end bg-dark text-white"  
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