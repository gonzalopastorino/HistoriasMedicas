import React, { useState } from "react";
import "./registrarse.css"

const Registrarse = ({ onCambiarVista }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (nombre && email && password) {
      const usuario = { nombre, email, password };
      localStorage.setItem("usuario", JSON.stringify(usuario));
      alert("Usuario registrado correctamente");
    } else {
      alert("Por favor, complete todos los campos");
    }
  };

  return (
    <>
    <div className="section-formulario-registro">

      <form onSubmit={handleRegister} className="formulario-registro">
      <h3 className="formulario-registrarse-title">Registrarse</h3>

      <div className="formulario-contenedor">
        <div className="form-input-group">
          <label htmlFor="nombre" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            placeholder=""
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="form-input-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-input-group">
          <label htmlFor="password" className="form-label">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <button type="submit" className="boton-form-registrarse">
          Registrarse
        </button>
        </div>
        </div>
      </form>
    </div>

      <div className="wave-form">
      <svg className="wave-form-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 320"><path fill="#fff" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </>
  );
};

export default Registrarse;
