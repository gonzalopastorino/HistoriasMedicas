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
    <div className="form">
      <h3>Registrarse</h3>
      <form onSubmit={handleRegister} className="formulario">
        <div className="input-group">
          <label htmlFor="nombre" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            className="form-control"
            placeholder="Ingrese su nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Ingrese su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password" className="form-label">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-success mt-3">
          Registrarse
        </button>
      </form>
      
    </div>
  );
};

export default Registrarse;
