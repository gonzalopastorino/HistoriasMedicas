import { useState } from 'react';
import './Registro.css';
import { Link } from 'react-router-dom';

const Registrarse = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();

        if (nombre && email && password) {
            const usuario = { nombre, email, password };
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
                <div className="input-container">
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
            <div className="login">
                <p>¿Ya tienes una cuenta?</p>
                <Link to={'/login'} className="btn btn-primary">Iniciar Sesión</Link>
            </div>
        </div>
    );
};

export default Registrarse;
