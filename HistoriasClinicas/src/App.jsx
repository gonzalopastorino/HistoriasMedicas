import React, { useState } from "react";
import SidebarMenu from "./components/Sidebar/SidebarMenu";
import PacientesForm from "./components/PacientesForm";
import Registrarse from "./components/Registrarse";
import Login from "./components/login";
import "../src/styles/registrarse.css";

function App() {
  // Estado para controlar la vista actual
  const [vistaActiva, setVistaActiva] = useState("registrarse"); // Se inicia en 'registrarse'

  const renderContenido = () => {
    switch (vistaActiva) {
      case "registrarse":
        return (
          <div className="text-center">
            <h1 className="mb-4">Registrarse</h1>
            <div className="mx-auto" style={{ maxWidth: "600px" }}>
              <Registrarse onCambiarVista={() => setVistaActiva("login")} />
            </div>
          </div>
        );
      case "login":
        return (
          <div className="text-center">
            <h1 className="mb-4">Iniciar Sesión</h1>
            <div className="mx-auto" style={{ maxWidth: "600px" }}>
              <Login onCambiarVista={() => setVistaActiva("registrarse")} />
            </div>
          </div>
        );
      case "registrar-pacientes":
        return (
          <div className="text-center">
            <h1 className="mb-4">Registrar Pacientes</h1>
            <div className="mx-auto" style={{ maxWidth: "600px" }}>
              <PacientesForm agregarPaciente={() => {}} editandoPaciente={null} />
            </div>
          </div>
        );
      case "inicio":
        // Muestra el formulario de Registrarse o Login al hacer clic en "Inicio"
        return (
          <div className="text-center">
            <h1 className="mb-4">Registrarse</h1>
            <div className="mx-auto" style={{ maxWidth: "600px" }}>
              <Registrarse onCambiarVista={() => setVistaActiva("login")} />
            </div>
          </div>
        );
      default:
        return <h1>Bienvenido a la aplicación</h1>;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <SidebarMenu
          onRegistrarPacientes={() => setVistaActiva("registrar-pacientes")}
          onChangeView={setVistaActiva} // Pasamos la función de actualización de vista aquí
        />

        {/* Contenido principal */}
        <div className="col p-4">{renderContenido()}</div>
      </div>
    </div>
  );
}

export default App;
