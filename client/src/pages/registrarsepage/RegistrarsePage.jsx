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
      <form className="formulario-registro" onSubmit={onSubmit}>
        <h3 className="formulario-registrarse-title">Registrarse</h3>

        {/* Mostrar errores del backend aquí */}
        {registerErrors.length > 0 && (
          <div className="errores-backend">
            {registerErrors.map((error, i) => (
              <p key={i} className="mensaje-error-backend">
                {error}
              </p>
            ))}
          </div>
        )}

        <div className="formulario-contenedor">
          <div className={`form-input-group ${errors.username ? "has-error" : ""}`}>
            <input
              type="text"
              placeholder="Nombre"
              {...register("username", { required: true })}
              className="form-control"
            />
            {errors.username && (
              <p className="mensaje-error">El nombre de usuario es requerido</p>
            )}
          </div>

          <div className={`form-input-group ${errors.email ? "has-error" : ""}`}>
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
              className="form-control"
            />
            {errors.email && <p className="mensaje-error">El email es requerido</p>}
          </div>

          <div className={`form-input-group ${errors.password ? "has-error" : ""}`}>
            <input
              type="password"
              placeholder="Contraseña"
              {...register("password", { required: true })}
              className="form-control"
            />
            {errors.password && (
              <p className="mensaje-error">La contraseña es requerida</p>
            )}
          </div>

          <button type="submit" className="button-registrarse">
            Registrarse
          </button>
        </div>
      </form>
    </section>
  </>
  );
};

export default RegistrarsePage;