import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const usuarioRegistrado = JSON.parse(localStorage.getItem('usuario'));

        if (usuarioRegistrado) {
            if (email === usuarioRegistrado.email && password === usuarioRegistrado.password) {
                alert(`Bienvenido, ${usuarioRegistrado.nombre}`);
                navigate('/bienvenida');  
            } else {
                alert('Contraseña incorrecta');
            }
        } else {
            alert('Usuario no registrado');
        }
    };

    return (
        <div className="form">
            <h3>Iniciar Sesión</h3>
            <form onSubmit={handleLogin} className="formulario">
                <div className="input1">
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
                <p>No tienes una cuenta?</p>
                <Link to={'/'} className="btn btn-primary">Registrarse</Link>
            </div>
        </div>
    );
};

export default Login;



