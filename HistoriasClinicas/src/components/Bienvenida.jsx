import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bienvenida.css'
import imagenPerfil from '../assets/images/imagenPerfil.png'; // Importacion como variable

const Bienvenida = () => {
    const navigate = useNavigate();
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    const [menuVisible, setMenuVisible] = useState(false);  

    useEffect(() => {
        if (!usuario) {
            navigate('/login');  
        }
    }, [usuario, navigate]);

    const cerrarSesion = () => {
        localStorage.removeItem('usuario'); // Elimina usuario del localStorage
        navigate('/home');  
    };

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);  
    };

    return (
        <div>
            <header className="bienvenida-header">
                <p>Hola, {usuario?.nombre}</p>
                <div className="menu-container">
                    <img 
                        src={imagenPerfil} 
                        alt="Perfil" 
                        className="imagen-perfil" 
                        onClick={toggleMenu}  
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
