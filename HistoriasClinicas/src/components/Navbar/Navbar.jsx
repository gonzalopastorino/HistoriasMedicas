import "./Navbar.css"




const Navbar = () => {
  return (
    <>

    <nav className='navBar'>
      <div className="contenedor-logo d-flex">
        <i className="logo-icon bi bi-activity px-1"></i>
        <a href='#' className="logo text-decoration-none text-white"></a>
      </div>
      <div className="inicio-boton-salir d-flex">
      <a 
          href="/login" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-outline-info"
        >
          Iniciar sesión
        </a>
      </div>
    </nav>
    
    </>
  )
}

export default Navbar 