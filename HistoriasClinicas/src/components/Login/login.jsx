import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import "./login.css";

const Login = ({ onLoginExitoso }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleLogin = (e) => {
    e.preventDefault();

    const usuarioRegistrado = JSON.parse(localStorage.getItem("usuario"));

    if (usuarioRegistrado) {
      if (email === usuarioRegistrado.email && password === usuarioRegistrado.password) {
        alert(`Bienvenido, ${usuarioRegistrado.nombre}`);
        onLoginExitoso(usuarioRegistrado); // Enviamos el usuario al componente principal
      } else {
        alert("Contraseña incorrecta");
      }
    } else {
      alert("Usuario no registrado");
    }
  };

  // Navega a la página de InfoLandingPage
  const handleNavigateToInfo = () => {
    navigate("/informacion#registrarse"); 
  };

  return (
    <div className="form">
      <h3 className="inicios">Iniciar Sesión</h3>
      <form onSubmit={handleLogin} className="formulario">
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
          Iniciar Sesión
        </button>
      </form>
      <div className="registrarse mt-4">
        <p>¿No tienes una cuenta?</p>
        <button onClick={handleNavigateToInfo} className="btn btn-primary">
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default Login;
