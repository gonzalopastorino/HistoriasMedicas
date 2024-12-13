import React, { useEffect } from "react";  
import { useAuth } from "../../components/Context/AuthContext";  
import { useForm } from 'react-hook-form';  
import { Link, useNavigate } from "react-router-dom";  
import "./login.css";  

const LoginPage = () => {  
    const { register, handleSubmit, formState: { errors } } = useForm();  
    const { signin, errors: signinErrors, isAuthenticated } = useAuth();  
    const navigate = useNavigate();  

    // Verificar el estado de autenticación cada vez que cambia  
    useEffect(() => {  
      console.log('Estado de isAuthenticated en Login:', isAuthenticated); // Log del estado de autenticación  
      if (isAuthenticated) {  
          navigate("/bienvenida"); // Realiza la redirección  
      }  
  }, [isAuthenticated, navigate]);
    const onSubmit = handleSubmit(data => {  
      console.log('Datos de inicio de sesión enviados:', data); // Mostrar datos enviados  
      signin(data);  
  });
    return (  
        <div className="form">  
            <h3 className="inicios">Iniciar Sesión</h3>  
            {signinErrors.map((error, i) => (  
                <div className="errores-registro" key={i}>  
                    {error}  
                </div>  
            ))}  
            <form onSubmit={onSubmit} className="formulario">  
                <div className="form-input-group">  
                    <input  
                        type="email"  
                        placeholder="Email"  
                        {...register("email", { required: true })}  
                        className="form-control"  
                    />  
                    {errors.email && (  
                        <p className="text-red-500 mensaje-error">  
                            El email es requerido  
                        </p>  
                    )}  
                </div>  

                <div className="form-input-group">  
                    <input  
                        type="password"  
                        placeholder="Contraseña"  
                        {...register("password", { required: true })}  
                        className="form-control"  
                    />  
                    {errors.password && (  
                        <p className="text-red-500 mensaje-error">  
                            La contraseña es requerida  
                        </p>  
                    )}  
                </div>  

                <button type="submit" className="btn btn-success mt-3">  
                    Iniciar Sesión  
                </button>  
            </form>  
            <div className="registrarse mt-4">  
                <p>¿No tienes una cuenta?</p>  
                <button className="btn btn-primary">  
                    <Link className="registrate" to='../informacion#registrarse'>Registrate</Link>  
                </button>  
            </div>  
        </div>  
    );  
};  

export default LoginPage;