import { useEffect } from "react";
import "./registrarse.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../components/Context/AuthContext";
import { useNavigate } from "react-router-dom";

const RegistrarsePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/login");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <>
    
      <section className="section-formulario-registro">
        {registerErrors.map((error, i) => (
          <div className="errores-registro" key={i}>
            {error}
          </div>
        ))}
        
        <form className="formulario-registro" onSubmit={onSubmit}>
          <h3 className="formulario-registrarse-title">Registrarse</h3>

          <div className="formulario-contenedor">
            <div className={`form-input-group ${errors.username ? "has-error" : ""}`}>
              <input
                type="text"
                placeholder="Nombre"
                {...register("username", { required: true })}
                className="form-control"
              />
              {errors.username && (
                <p className="mensaje-error">
                  El nombre de usuario es requerido
                </p>
              )}
            </div>

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
              Registrarse
            </button>
          </div>
        </form>

        
        <div className="figure-registro-up">
          <img className="img-registro-up"
          src="../../uttils/registrarse-up.svg" 
          alt="" />
        </div>

      </section>

      <div className="wave-registrarse-end">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 320"><path fill="#f3f4f5" d="M0,128L80,154.7C160,181,320,235,480,218.7C640,203,800,117,960,74.7C1120,32,1280,32,1360,32L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
    </>
  );
};

export default RegistrarsePage;