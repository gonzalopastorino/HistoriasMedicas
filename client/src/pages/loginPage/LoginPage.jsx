import React, { useEffect } from "react";  
import { useAuth } from "../../components/Context/AuthContext";  
import { useForm } from 'react-hook-form';  
import { Link, useNavigate } from "react-router-dom";  
import "./login.css";  

const LoginPage = () => {  
    const { register, handleSubmit, formState: { errors } } = useForm();  
    const { signin, errors: signinErrors = [], isAuthenticated } = useAuth();  // Definir signinErrors como un arreglo vacío por defecto
    const navigate = useNavigate();  

    useEffect(() => {  
        if (isAuthenticated) {  
            navigate("/bienvenida");  
        }  
    }, [isAuthenticated, navigate]);

    const onSubmit = handleSubmit(data => {  
        signin(data);  // Llamamos al signin con los datos del formulario
    });

    return (  
        <div className="section-formulario-registro">  
            <div className="formulario-registro">  
                <h3 className="formulario-registrarse-title">Iniciar Sesión</h3>  

                {/* Errores de backend, como "contraseña incorrecta" */}
                {signinErrors.length > 0 && signinErrors.map((error, i) => (  // Verificamos que signinErrors no esté vacío
                    <div className="errores-registro" key={i}>  
                        {error}  
                    </div>  
                ))}  

                <form onSubmit={onSubmit} className="formulario">  
                    {/* Campo de email */}
                    <div className={`form-input-group ${errors.email ? "has-error" : ""}`}>  
                        <input  
                            type="email"  
                            placeholder="Email"  
                            {...register("email", { required: "El email es requerido" })}  
                            className="form-control"  
                        />  
                        {errors.email && (  
                            <p className="mensaje-error">  
                                {errors.email.message}  {/* Mostrar el mensaje de error de react-hook-form */}
                            </p>  
                        )}  
                    </div>  

                    {/* Campo de contraseña */}
                    <div className={`form-input-group ${errors.password ? "has-error" : ""}`}>  
                        <input  
                            type="password"  
                            placeholder="Contraseña"  
                            {...register("password", { required: "La contraseña es requerida" })}  
                            className="form-control"  
                        />  
                        {errors.password && (  
                            <p className="mensaje-error">  
                                {errors.password.message}  {/* Mostrar el mensaje de error de react-hook-form */}
                            </p>  
                        )}  
                    </div>  

                    <button type="submit" className="button-registrarse">  
                        Iniciar Sesión  
                    </button>  
                </form>  

                <div className="registrarse mt-4">  
                    <p>¿No tienes una cuenta?</p>  
                    <Link to='../informacion' className="button-registrarse">  
                        Registrate  
                    </Link>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default LoginPage;
