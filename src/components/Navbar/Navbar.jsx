import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { Oulet } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
    <nav className='navBar'>
      <div className="contenedor-logo d-flex">
        <i className="logo-icon bi bi-activity px-1"></i>
        <Link  to="/" className="logo text-decoration-none text-white">NavBar</Link>
      </div>
      <div className="inicio-boton-salir d-flex">
      <Link to="/inicio" className="inicio text-decoration-none text-white">Inicio</Link>
        <button className="btn btn-outline-info">Cerrar Secion</button>
      </div>
    </nav>
    <br />
    <Oulet />

    </>
  )
}

export default NavBar