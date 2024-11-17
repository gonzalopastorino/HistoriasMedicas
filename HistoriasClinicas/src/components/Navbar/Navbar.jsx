import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"


const NavBar = () => {
  return (
    <>
    <nav className='navBar'>
      <div className="contenedor-logo d-flex">
        <i className="bi bi-activity px-1"></i>
        <a href="#" className="logo text-decoration-none text-white">NavBar</a>
      </div>
      <div className="boton-salir d-flex">
        <button className="btn btn-outline-info">Salir</button>
      </div>
    </nav>

    </>
  )
}

export default NavBar