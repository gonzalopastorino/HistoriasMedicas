import { useEffect } from "react";
import { Link } from "react-router-dom";
import RegistrarsePage from "../registrarsepage/RegistrarsePage";
import "./InfoLandingPage.css";

const InfoLandingPage = () => {
 

  return (
    <header className="header-info-landing-page">
      <nav className="nav-info-landing-page container">
        <h2 className="logo-info-landing-page">
          <Link to="/" className="link-info-landing-page">
            Grupo 2
          </Link>
        </h2>

        <ul className="list-info-landing-page">
          <li className="item-info-landing-page">
            <Link to="/" className="link-info-landing-page">
              Home
            </Link>
          </li>
        </ul>
      </nav>

      <section className="main-info-landing-page container">
        <div className="texts-info-landing-page">
          <h3 className="title-info-landing-page">InfoLandingPage</h3>
          <p className="subtitle-info-landing-page">
            Bienvenido a Historial Médico: una plataforma diseñada para facilitar el acceso y la gestión de información médica...
          </p>
          <Link to="/login" className="cta-2-info-landing-page">
            Iniciar Sesión
          </Link>
        </div>

        <figure className="figure-info-langing-page">
          <img
            className="img-info-landing-page"
            src="../../src/uttils/information.svg"
            alt="image-info-doctors"
          />
        </figure>
      </section>

      <div className="wave-info-landing-page">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 320">
          <path fill="#fff" d="M0,192L1440,288L1440,320L0,320Z"></path>
        </svg>
      </div>

      <div id="registrarse">
        <RegistrarsePage />
      </div>
    </header>
  );
};

export default InfoLandingPage;
