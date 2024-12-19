import { useEffect } from "react";  
import { useAuth } from "../../components/Context/AuthContext";  
import { useForm } from 'react-hook-form';  
import { Link, useNavigate } from "react-router-dom";  
import "./login.css";  

const LoginPage = () => {  
    const { register, handleSubmit, formState: { errors } } = useForm();  
    const { signin, errors: signinErrors, isAuthenticated } = useAuth();  
    const navigate = useNavigate();  

    useEffect(() => {  
        console.log('Estado de isAuthenticated en Login:', isAuthenticated);  
        if (isAuthenticated) {  
            navigate("/bienvenida");  
        }  
    }, [isAuthenticated, navigate]);

    const onSubmit = handleSubmit(data => {  
        console.log('Datos de inicio de sesión enviados:', data);  
        signin(data);  
    });

    return (  
        <div className="section-formulario-registro">  
            <div className="formulario-registro">  
                <h3 className="formulario-registrarse-title">Iniciar Sesión</h3>  
                {signinErrors.map((error, i) => (  
                    <div className="errores-registro" key={i}>  
                        {error}  
                    </div>  
                ))}  
                <form onSubmit={onSubmit} className="formulario">  
                    <div className={`form-input-group ${errors.email ? "has-error" : ""}`}>  
                        <input  
                            type="email"  
                            placeholder="Email"  
                            {...register("email", { required: true })}  
                            className="form-control"  
                        />  
                        {errors.email && (  
                            <p className="mensaje-error">  
                                El email es requerido  
                            </p>  
                        )}  
                    </div>  

                    <div className={`form-input-group ${errors.password ? "has-error" : ""}`}>  
                        <input  
                            type="password"  
                            placeholder="Contraseña"  
                            {...register("password", { required: true })}  
                            className="form-control"  
                        />  
                        {errors.password && (  
                            <p className="mensaje-error">  
                                La contraseña es requerida  
                            </p>  
                        )}  
                    </div>  

                    <button type="submit" className="button-registrarse">  
                        Iniciar Sesión  
                    </button>  
                </form>  
                <div className="registrarse mt-4">  
                    <p>¿No tienes una cuenta?</p>  
                    {/* Cambio aquí, ahora solo usamos Link para la navegación */}
                    <Link to='../informacion#registrarse' className="button-registrarse">  
                        Registrate  
                    </Link>  
                </div>  
            </div>  
            <figure className="img-registrarse-up">
                <img src="../../uttils/registrarse-up.svg" alt="" />
            </figure>
        </div>  
    );  
};  

export default LoginPage;
