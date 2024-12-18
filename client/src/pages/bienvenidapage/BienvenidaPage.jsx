import React, { useState } from "react";  
import SidebarMenu from "../../components/siderbar/SiderBarMenu"; // Ruta correcta al SidebarMenu  
import PacientesForm from "../../components/pacientes/PacientesForm"; // Ruta correcta al PacientesForm  
import "./bienvenida.css"; // Archivo CSS para estilos personalizados  
import { useAuth } from "../../components/Context/AuthContext";
import { Link } from "react-router-dom";  

const BienvenidaPage = () => {  
  const [view, setView] = useState("inicio"); // Controla la vista actual (inicio o pacientes)  

  // Cambiar la vista actual  
  const handleChangeView = (newView) => {  
    setView(newView);  
  };  

  const { isAuthenticated, logout, user } = useAuth();

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
         

          {/* Menú de usuario con mensaje de bienvenida */}
          <div className="d-flex align-items-center">
            {isAuthenticated && (
              <>
                <span className="bienvenido-text me-3">Bienvenido, {user.username}</span>
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
                      <Link  
                        to="/"  
                        className="dropdown-item text-white"  
                        style={{ hover: { backgroundColor: "#61276a" } }}  
                        onClick={logout}  
                      >  
                        Cerrar Sesión  
                      </Link>  
                    </li>  
                  </ul>  
                </div>
              </>
            )}
            {!isAuthenticated && (
              <Link to="/login" className="btn btn-light">
                Login
              </Link>
            )}
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

export default BienvenidaPage;