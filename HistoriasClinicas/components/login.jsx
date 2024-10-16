/*import React from "react";
import '../styles/login.css';
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="form">
            <h3>Iniciar Sesion</h3>
            <form action="" className="formulario">
                <div className="input1">
                    
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Ingrese su email" 
                    />

                    <label htmlFor="contrasena">Contraseña:</label>
                    <input 
                        type="password" 
                        id="contrasena" 
                        placeholder="Ingrese su contraseña" 
                    />

                   
                    <button type="submit" className="btn btn-primary">
                        Iniciar Sesion
                    </button>
                </div>
            </form>
            <div className="loguin">
                <p>No tienes cuenta?</p>
                <Link to={'/'} type="submit" className="btn btn-success">
                    Registrate

                </Link>
            </div>
        </div>
    )
}

export default Login;*/

import React, { useState } from 'react';
import '../styles/login.css'; // Asegúrate de tener el archivo CSS para el login
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Obtener el usuario del localStorage
        const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

        if (usuarioGuardado) {
            // Verificar si el email coincide
            if (usuarioGuardado.email === email) {
                // Verificar si la contraseña coincide
                if (usuarioGuardado.password === password) {
                    alert(`Bienvenido, ${usuarioGuardado.nombre}`); // Muestra un mensaje de bienvenida
                } else {
                    alert('Contraseña incorrecta');
                }
            } else {
                alert('Email incorrecto');
            }
        } else {
            alert('No hay usuarios registrados con este email');
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
