import "../../src/components/InfoLandingPage.css"

const InfoLandingPage = () => {
  return (
    <>

    
    <div className="informacion-landing-page">
      <section className="info-landing-page content">
        <div className="texts-info-landing-page">
        <h3 className="title-info-landing-page">InfoLandingPage</h3>
          <p className="paragraph-info-landing-page">
              Bienvenido a Historial Médico: una plataforma diseñada para facilitar el acceso y la gestión de información médica. Con nuestra app, podrás registrar y consultar datos de pacientes de forma rápida y segura, brindando un seguimiento eficiente de su historial clínico.          
              ¡Descubre más sobre nuestras funcionalidades y cómo podemos ayudarte a optimizar la gestión de la salud!
          </p>                  
        </div>         
      </section>
          <figure className="figure-landing-page">
            <img className="img-landing-page" src="../../src/uttils/information.svg" alt="image-task" />
          </figure>

          <div className="wave-info-landing-page">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 320">
            <path fill="#fff" d="M0,192L1440,288L1440,320L0,320Z"></path>
            </svg>
          </div>
    </div>
      



    </>
  )
}

export default InfoLandingPage