import { useNavigate } from "react-router-dom";
import "./landingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigateToInfo = () => {
    navigate("/informacion"); // Redirige con un ancla
  };

  return (
    <>
      <header className="header-landing-page">
        <nav className="nav-landing-page container">
          <h2 className="logo-landing-page">Grupo 2</h2>

          <ul className="list-landing-page">
            <li className="item-landing-page">
              <a className="link-landing-page" href="/">
                Home
              </a>
            </li>
          </ul>
        </nav>

        <section className="main-landing-page container">
          <div className="texts-landing-page">
            <h1 className="title-landing-page">Hola!, Bienvenido!</h1>
            <p className="subtitle-landing-page">
              A la mejor aplicación para la gestión de Historial Médico
            </p>
            <button className="cta-landing-page" onClick={handleNavigateToInfo}>
              Entra ya!
            </button>
          </div>

          <figure className="figure-langing-page">
            <img
              className="img-landing-page"
              src="./src/uttils/undraw_doctors_p6aq.svg"
              alt="image-doctors"
            />
          </figure>
        </section>

        <div className="wave-landing-page">
          <img
            className="wave-landing-page-end"
            src="./src/uttils/wave.svg"
            alt="wave"
          />
        </div>
      </header>
    </>
  );
};

export default LandingPage; 