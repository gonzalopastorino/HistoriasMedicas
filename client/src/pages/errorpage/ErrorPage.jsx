import React from "react";
import "./errorpage.css";
import errorImage from "../../uttils/imagesErrors/img1.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="error-page">
      <div className="error-content">
        <h3 className="formulario-registrarse-title">Oops... Error 404</h3>
        <img src={errorImage} alt="Error" className="error-image" />
        <p>La página que buscas no existe o hubo un error inesperado.</p>
        <Link to="/" className="btn btn-primary">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
