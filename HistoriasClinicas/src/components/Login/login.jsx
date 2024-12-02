import { useState } from "react";
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
    <>
    <div className="form-loguin-contenedor">

      <form onSubmit={handleLogin} className="formulario-loguin">
      <h3 className="form-loguin-title">Iniciar Sesión</h3>

        <div className="form-loguin-input-group">
          <label htmlFor="email" className="label-loguin">
            {/* Email: */}
          </label>
          <input
            type="email"
            id="email"
            className="input-control-loguin"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-loguin-input-group">
          <label htmlFor="password" className="label-loguin">
            {/* Contraseña: */}
          </label>
          <input
            type="password"
            id="password"
            className="input-control-loguin"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="buton-loguin-iniciar-sesion">
          Iniciar Sesión
        </button>
      </form>
      <div className="registro-loguin">
        <p className="registro-loguin-text">¿No tienes una cuenta?</p>
        <button onClick={handleNavigateToInfo} className="button-registo-loguin">
          Registrarse
        </button>
      </div>
    </div>

    <div className="wave-loguin">
    <svg className="wave-loguin-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 260"><path fill="#fff" d="M0,32L120,74.7C240,117,480,203,720,234.7C960,267,1200,245,1320,234.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
    </div>

    
    </>

    
    
  );
};

export default Login;
