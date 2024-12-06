import React, { useState } from "react";  
import SidebarMenu from "../Sidebar/SidebarMenu"; // Ruta correcta al SidebarMenu  
import PacientesForm from "../Pacientes/PacientesForm"; // Ruta correcta al PacientesForm  
import "./Bienvenida.css"; // Archivo CSS para estilos personalizados  

const Bienvenida = ({ usuario, onCerrarSesion }) => {  
  const [view, setView] = useState("inicio"); // Controla la vista actual (inicio o pacientes)  

  // Cambiar la vista actual  
  const handleChangeView = (newView) => {  
    setView(newView);  
  };  

  return (  
    <div className="bienvenida-container d-flex">  
      {/* SidebarMenu */}  
      <SidebarMenu   
        onRegistrarPacientes={() => handleChangeView("registrarPacientes")}  
        onChangeView={handleChangeView}  
      />  

      {/* Contenido principal */}  
      <div className="content-container flex-grow-1">  
        {/* Barra de navegación */}  
        <div className="navbar bg-dark text-white p-3 d-flex justify-content-between align-items-center">  
          <div className="d-flex align-items-center">  
            {/* Encuentra aquí el contenedor flex para alinear el texto y el icono */}  
            Hola, <strong className="ms-2">{usuario?.nombre || "Usuario"}</strong>  
          </div>  
          <div className="dropdown">  
            <button  
              className="btn btn-dark d-flex align-items-center"  
              type="button"  
              id="dropdownMenuButton"  
              data-bs-toggle="dropdown"  
              aria-expanded="false"  
            >  
              <i className="bi bi-person-circle fs-4"></i>  
            </button>  
            <ul  
              className="dropdown-menu dropdown-menu-end"  
              aria-labelledby="dropdownMenuButton"  
              style={{ backgroundColor: "#000", color: "#fff" }}  
            >  
              <li>  
                <button  
                  className="dropdown-item text-white"  
                  style={{ backgroundColor: "#000", hover: { backgroundColor: "#6f42c1" } }}  
                  onClick={onCerrarSesion}  
                >  
                  Cerrar Sesión  
                </button>  
              </li>  
            </ul>  
          </div>  
        </div>  

        {/* Contenido dinámico */}  
        <div className="content p-4">  
          {view === "inicio" && <p>Este es el contenido principal de inicio.</p>}  
          {view === "registrarPacientes" && <PacientesForm />}  
        </div>  
      </div>  
    </div>  
  );  
};  

export default Bienvenida;