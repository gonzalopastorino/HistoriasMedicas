import React, { useEffect } from "react";
import "./registrarse.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Registrarse = () => {
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
            <div className="form-input-group">
              <input
                type="text"
                placeholder="Nombre"
                {...register("username", { required: true })}
                className="form-control"
              />
              {errors.username && (
                <p className="text-red-500 mensaje-error">
                  El nombre de usuario es requerido
                </p>
              )}
            </div>

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

            <button type="submit" className="button-registrarse">
              Registrarse
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Registrarse;
