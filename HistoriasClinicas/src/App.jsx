import React, { useState } from "react";
import SidebarMenu from "./components/Sidebar/SidebarMenu";
import PacientesForm from "./components/PacientesForm";
import Registrarse from "./components/Registrarse";
import Login from "./components/login";
import Bienvenida from "./components/Bienvenida";
import "../src/styles/registrarse.css";

function App() {
  const [vistaActiva, setVistaActiva] = useState("registrarse");
  const [usuario, setUsuario] = useState(null); // Estado para guardar el usuario logueado

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
              <Login
                onCambiarVista={() => setVistaActiva("registrarse")}
                onLoginExitoso={(usuarioLogueado) => {
                  setUsuario(usuarioLogueado);
                  setVistaActiva("inicio");
                }}
              />
            </div>
          </div>
        );
      case "registrar-pacientes":
        return (
          <div className="d-flex">
            {/* SidebarMenu fijo a la izquierda */}
            <SidebarMenu
              onRegistrarPacientes={() => setVistaActiva("registrar-pacientes")}
              onChangeView={setVistaActiva}
            />
            {/* Contenedor del contenido principal */}
            <div className="w-100">
              <header className="header bg-dark text-white d-flex align-items-center justify-content-between p-3">
                {usuario && <Bienvenida usuario={usuario} />}
              </header>
              <div className="mx-auto" style={{ maxWidth: "600px" }}>
                <h1 className="text-center mb-4">Registrar Pacientes</h1>
                <PacientesForm agregarPaciente={() => {}} editandoPaciente={null} />
              </div>
            </div>
          </div>
        );
      case "inicio":
        return (
          <div className="d-flex">
            <SidebarMenu
              onRegistrarPacientes={() => setVistaActiva("registrar-pacientes")}
              onChangeView={setVistaActiva}
            />
            <div className="w-100">
              <header className="header bg-dark text-white d-flex align-items-center justify-content-between p-3">
                {usuario && <Bienvenida usuario={usuario} />}
              </header>
              <div className="text-center mt-5">
                <h1>Bienvenido, {usuario?.nombre || "Usuario"}.</h1>
              </div>
            </div>
          </div>
        );
      default:
        return <h1>Bienvenido a la aplicación</h1>;
    }
  };

  return <div>{renderContenido()}</div>;
}

export default App;
