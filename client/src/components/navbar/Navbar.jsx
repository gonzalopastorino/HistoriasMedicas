import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import "./navbar.css";
const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
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
                    onClick={logout} // Llamada a la función de logout
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
  );
};

export default Navbar;
