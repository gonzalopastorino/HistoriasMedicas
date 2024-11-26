import "./landingPage.css"
import ImageLandingPage from "../components/ImageLandingPage"



const LandingPage = () => {
  return (

    <>
    <header className="header-landing-page">
      <nav className="nav-landing-page container">
          <h2 className="logo-landing-page">Historial Medico</h2>
        <ul className="list-landing-page">
          <li className="item-landing-page"><a className="link-landing-page" href="#">Home</a></li>
        </ul>
      </nav>
            

      <section className="main-landing-page container">
        <div className="texts-landing-page">
          <h1 className="title-landing-page">Hola!, el Grupo 2 te da la Bienvenida!</h1>
          <p className="subtitle-landing-page">La mejor aplicacion para la gestion de Historial Medico</p>
          <button className="cta-landing-page">Entra ya!</button>
        </div>

        <figure className="figure-langing-page">
          <ImageLandingPage />
        </figure>

      </section>
        
        <div className="wave-landing-page">
          <img className="wave-landing-page-end" src="./src/uttils/wave.svg" alt="" />
        </div>
    </header>
      

    </>
  )
}

export default LandingPage