/*import React from "react";
import "../styles/registrarse.css"
import { Link } from "react-router-dom";

const Registrarse = () => {
    return (
        <div className="form">
            <h3>Registrarse</h3>
            <form action="" className="formulario">
                <div className="input1">
                    <label htmlFor="nombre">Nombre:</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        placeholder="Ingrese su nombre" 
                    />

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

                   
                    <button type="submit" className="btn btn-success">
                        Registrarse
                    </button>
                </div>
            </form>
            <div className="loguin">
                <p>Ya tienes una cuenta?</p>
                <Link to={'/login'} type="submit" className="btn btn-primary">
                    IniciarSesion

                </Link>
            </div>
        </div>
    )
}

export default Registrarse;*/



import React, { useState } from 'react';
import '../styles/registrarse.css';
import { Link } from 'react-router-dom';

const Registrarse = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        if (nombre && email && password) {
            const usuario = { nombre, email, password }; // Almacena también la contraseña
            // Guardar usuario en localStorage
            localStorage.setItem('usuario', JSON.stringify(usuario));
            alert('Usuario registrado correctamente');
        } else {
            alert('Por favor, complete todos los campos');
        }
    };

    return (
        <div className="form">
            <h3>Registrarse</h3>
            <form onSubmit={handleRegister} className="formulario">
                <div className="input1">
                    <label htmlFor="nombre" className="form-label">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        className="form-control"
                        placeholder="Ingrese su nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />

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
                    
                    <button type="submit" className="btn btn-success">Registrarse</button>
                </div>
            </form>
            <div className="loguin">
                <p>Ya tienes una cuenta?</p>
                <Link to={'/login'} className="btn btn-primary">Iniciar Sesión</Link>
            </div>
        </div>
    );
};

export default Registrarse;
