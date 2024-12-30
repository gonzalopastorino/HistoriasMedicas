import React from "react";
import "./errorpage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error-page">
      <div className="error-content">
        <h3 className="formulario-registrarse-title">Oops... Error 404</h3>
        <p>La página que buscas no existe o hubo un error inesperado.</p>
        <Link to="/" className="btn btn-primary">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
