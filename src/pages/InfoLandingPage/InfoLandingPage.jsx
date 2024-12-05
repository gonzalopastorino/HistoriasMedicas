//import { useNavigate } from 'react-router-dom'
import './InfoLandingPage.css'

const InfoLandingPage = () => {

  //const navigate = useNavigate();

  //const handleNavigateToInfo = () => {
    //navigate("/informacion#registrarse"); // Redirige con un ancla
  //};

  return (
    <>InfoLandingPage

<header className="header-info-landing-page">
        <nav className="nav-info-landing-page container">
          <h2 className="logo-info-landing-page">Grupo 2</h2>

          <ul className="list-info-landing-page">
            <li className="item-info-landing-page">
              <a className="link-info-landing-page" href="/">
                Home
              </a>
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
              src="src/utils/information.svg"
              alt="image-info-doctors"
            />
          </figure>
        </section>

        <div className="wave-info-landing-page">
          <img
            className="wave-info-landing-page-end"
            src='src/utils/wave (1).svg'
            alt="wave"
          />
        </div>
      </header>


    </>
  )
}

export default InfoLandingPage