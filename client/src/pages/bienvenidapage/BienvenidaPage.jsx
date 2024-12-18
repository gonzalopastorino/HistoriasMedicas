import React, { useState } from "react";  
import SidebarMenu from "../../components/siderbar/SiderBarMenu";  
import PacientesForm from "../../components/pacientes/PacientesForm";  
import "./bienvenida.css";  
import { useAuth } from "../../components/Context/AuthContext";
import { Link } from "react-router-dom";  

const BienvenidaPage = () => {  
  const [view, setView] = useState("inicio");  
  const [menuVisible, setMenuVisible] = useState(false);  

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const handleChangeView = (newView) => setView(newView);

  const { isAuthenticated, logout, user } = useAuth();

  return (  
    <div className="bienvenida-container d-flex">  
      <div className={`sidebar-container ${menuVisible ? "visible" : "hidden"}`}>
        <SidebarMenu   
          onRegistrarPacientes={() => handleChangeView("registrarPacientes")}  
          onChangeView={handleChangeView}  
        />
      </div>

      <button 
        className="btn-hamburguesa" 
        onClick={toggleMenu}
      >
        <i className="bi bi-list"></i>
      </button>

      <div className="content-container flex-grow-1">  
        <div className="navbar bg-dark text-white p-3 d-flex justify-content-between align-items-center">  
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
                  <ul className="dropdown-menu dropdown-menu-end bg-dark text-white">
                    <li>
                      <Link 
                        to="/" 
                        className="dropdown-item text-white"
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
              <Link to="/login" className="btn btn-light">Login</Link>
            )}
          </div>
        </div>

        <div className="content p-4">  
          {view === "inicio" && <p>Este es el contenido principal de inicio.</p>}  
          {view === "registrarPacientes" && <PacientesForm />}  
        </div>  
      </div>  
    </div>  
  );  
};

export default BienvenidaPage;