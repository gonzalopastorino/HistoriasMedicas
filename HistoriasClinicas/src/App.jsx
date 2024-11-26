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
                  setVistaActiva("inicio"); // Cambiamos la vista a inicio tras el login
                }}
              />
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
        return (
          <div className="d-flex">
            {/* Mostrar el componente de bienvenida a la derecha del Sidebar */}
            <SidebarMenu
              onRegistrarPacientes={() => setVistaActiva("registrar-pacientes")}
              onChangeView={setVistaActiva}
            />
            {usuario && <Bienvenida usuario={usuario} />}
          </div>
        );
      default:
        return <h1>Bienvenido a la aplicación</h1>;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">{renderContenido()}</div>
    </div>
  );
}

export default App;
