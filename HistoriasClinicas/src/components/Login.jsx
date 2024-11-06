import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const usuarioRegistrado = JSON.parse(localStorage.getItem('usuario'));

        if (usuarioRegistrado) {
            if (email === usuarioRegistrado.email && password === usuarioRegistrado.password) {
                alert(`Bienvenido, ${usuarioRegistrado.nombre}`);
                navigate('/welcome');  
            } else {
                alert('Contraseña incorrecta');
            }
        } else {
            alert('Usuario no registrado');
        }
    };

    const handleScroll = () => {
        // Cambia isVisible a true cuando el usuario desplaza más de 100px
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`form ${isVisible ? 'fade-in' : 'hidden'}`} id='login-form-container'>
            <h3>Iniciar Sesión</h3>
            <form onSubmit={handleLogin} className="formulario">
                <div className="input-container">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Ingrese su email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password" className="form-label">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Ingrese su contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="btn btn-success">Iniciar Sesión</button>
                </div>
            </form>
            <div className="registrarse">
                <p>¿No tienes una cuenta?</p>
                <Link to={'/CreateAccount'} className="btn btn-primary">Registrarse</Link>
            </div>
        </div>
    );
};

export default Login;
