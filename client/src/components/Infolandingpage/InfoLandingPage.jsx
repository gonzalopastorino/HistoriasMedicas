import { useEffect } from "react";
import { Link } from "react-router-dom";
import Registrarse from "../Registrarse/Registrarse";
import "./InfoLandingPage.css";

const InfoLandingPage = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#registrarse") {
      const registrarseSection = document.getElementById("registrarse");
      if (registrarseSection) {
        const scrollToElement = (element, duration) => {
          const start = window.scrollY;
          const targetPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const distance = targetPosition - start;
          let startTime = null;

          const animation = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            window.scrollTo(0, start + distance * progress);

            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            }
          };

          requestAnimationFrame(animation);
        };

        scrollToElement(registrarseSection, 1000);
      }
    }
  }, []);

  return (
    <>
    <header className="header-info-landing-page">
        <nav className="nav-info-landing-page container">
          <h2 className="logo-info-landing-page">Grupo 2</h2>

          <ul className="list-info-landing-page">
            <li className="item-info-landing-page">
              <Link className="link-info-landing-page" href="/">
                Home
              </Link>
            </li>
          </ul>
        </nav>

        <section className="main-info-landing-page container">
          <div className="texts-info-landing-page">
            <h3 className="title-info-landing-page">InfoLandingPage</h3>
            <p className="subtitle-info-landing-page">
            Bienvenido a Historial Médico: una plataforma diseñada para
              facilitar el acceso y la gestión de información médica. Con
              nuestra app, podrás registrar y consultar datos de pacientes de
              forma rápida y segura, brindando un seguimiento eficiente de su
              historial clínico. ¡Descubre más sobre nuestras funcionalidades y
              cómo podemos ayudarte a optimizar la gestión de la salud!
            </p>
            <button className="cta-2-info-landing-page">
              Iniciar Sesión
            </button>
          </div>

          <figure className="figure-info-langing-page">
            <img
              className="img-info-landing-page"
              src="../src/uttils/information.svg"
              alt="image-info-doctors"
            />
          </figure>
        </section>

        <div className="wave-info-landing-page">
          <img
            className="wave-info-landing-page-end"
            src='../src/uttils/wave (1).svg'
            alt="wave"
          />
        </div>
      </header>

      <div id="registrarse">
        <Registrarse />
      </div>
  </>
  );
};

export default InfoLandingPage;
