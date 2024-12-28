import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import SidebarMenu from "../siderbar/SiderBarMenu";
import MenuHamburguesa from "../menuhamburguesa/MenuHamburguesa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/carousel";

const ProtectedLayout = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className={`sidebar-container ${menuVisible ? "visible" : "hidden"}`}>
        <SidebarMenu toggleMenu={toggleMenu} />
      </div>

      {/* Main Content */}
      <div className="flex-grow-1">
        <MenuHamburguesa toggleMenu={toggleMenu} />
        <Navbar />

        {/* Carrusel */}
        <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://via.placeholder.com/1200x400?text=Bienvenido"
                className="d-block w-100"
                alt="Slide 1"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Bienvenido</h5>
                <p>Gestiona tus pacientes de manera eficiente.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/1200x400?text=Registra+Pacientes"
                className="d-block w-100"
                alt="Slide 2"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Registra Pacientes</h5>
                <p>Añade nuevos pacientes rápidamente.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://via.placeholder.com/1200x400?text=Administra+Tu+Agenda"
                className="d-block w-100"
                alt="Slide 3"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Administra Tu Agenda</h5>
                <p>Organiza citas y tareas fácilmente.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Contenido dinámico */}
        <div className="content p-4">{children}</div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
