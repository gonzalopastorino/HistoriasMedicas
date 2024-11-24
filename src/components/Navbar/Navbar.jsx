import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"


const NavBar = () => {
  return (
    <>
    <nav className='navBar'>
      <div className="contenedor-logo d-flex">
        <i className="logo-icon bi bi-activity px-1"></i>
        <a href="#" className="logo text-decoration-none text-white">NavBar</a>
      </div>
      <div className="inicio-boton-salir d-flex">
      <a href="inicio" className="inicio text-decoration-none text-white">Inicio</a>
        <button className="btn btn-outline-info">Cerrar Secion</button>
      </div>
    </nav>

    </>
  )
}

export default NavBar