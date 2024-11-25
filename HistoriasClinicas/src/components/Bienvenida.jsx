import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/bienvenida.css';

const Bienvenida = () => {
    const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const [menuVisible, setMenuVisible] = useState(false);  // Estado para el menú de perfil
    const [sideMenuVisible, setSideMenuVisible] = useState(false);  // Estado para el menú lateral
    const [medicosVisible, setMedicosVisible] = useState(false);  // Estado para mostrar el submenú de médicos

    useEffect(() => {
        if (!usuario) {
            navigate('/login');  // Si no hay usuario logueado, redirige al login
        }
    }, [usuario, navigate]);

    const cerrarSesion = () => {
        navigate('/login');  // Solo redirige al login, sin eliminar el usuario del localStorage
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);  // Alterna la visibilidad del menú de perfil
    };

    const toggleSideMenu = () => {
        setSideMenuVisible(!sideMenuVisible);  // Alterna la visibilidad del menú lateral
    };

    const toggleMedicosMenu = () => {
        setMedicosVisible(!medicosVisible);  // Alterna la visibilidad del submenú de médicos
    };

    return (
        <div>
            <header className="bienvenida-header">
                {/* Menú hamburguesa */}
                <div className="hamburguesa" onClick={toggleSideMenu}>
                    <span className="linea"></span>
                    <span className="linea"></span>
                    <span className="linea"></span>
                </div>

                {sideMenuVisible && (
                    <nav className="side-menu">
                        <ul>
                            <li onClick={toggleMedicosMenu}>
                                Médicos
                                <span className="flecha">&gt;</span>
                            </li>
                            {medicosVisible && (
                                <ul className="sub-menu">
                                    <li onClick={() => navigate('/pacientes')}>Ver Pacientes</li>
                                    
                                </ul>
                                
                            )}
                            <li onClick={() => navigate('/pacientes')}>Pacientes</li>
                        </ul>
                    </nav>
                )}

                <p>Hola, {usuario?.nombre}</p>
                <div className="menu-container">
                    <img
                        src="/imagenes/imagen1.png"
                        alt="Perfil"
                        className="imagen-perfil"
                        onClick={toggleMenu}  // Mostrar/ocultar menú al hacer clic
                    />
                    {menuVisible && (
                        <div className="menu-desplegable">
                            <a href="#" onClick={cerrarSesion} className="enlace-cerrar-sesion">Cerrar Sesión</a>
                        </div>
                    )}
                </div>
            </header>
        </div>
    );
};

export default Bienvenida;
