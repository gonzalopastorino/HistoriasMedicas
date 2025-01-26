import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createEventRequest } from "../../api/calendario";

const CalendarioForm = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Obtener la fecha desde la URL
  const { fechaSeleccionada } = location.state || {}; // Recuperar la fecha seleccionada (si existe)

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    obrasocial: "",
    especialista: "",
    start: fechaSeleccionada ? new Date(fechaSeleccionada) : new Date(), // Convertir la fecha en Date si existe
  });

  useEffect(() => {
    if (fechaSeleccionada) {
      const fechaValida = new Date(fechaSeleccionada);
      if (!isNaN(fechaValida)) {
        setFormData((prevData) => ({ ...prevData, start: fechaValida }));
      }
    }
  }, [fechaSeleccionada]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEventRequest(formData);
      navigate("/calendario"); // Redirigir al calendario después de agregar el evento
    } catch (error) {
      console.error("Error al crear el evento:", error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Agregar Turno</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido:
          </label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="obrasocial" className="form-label">
            Obra Social:
          </label>
          <input
            type="text"
            className="form-control"
            id="obrasocial"
            name="obrasocial"
            value={formData.obrasocial}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="especialista" className="form-label">
            Especialista:
          </label>
          <input
            type="text"
            className="form-control"
            id="especialista"
            name="especialista"
            value={formData.especialista}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="start" className="form-label">
            Fecha:
          </label>
          <input
            type="date"
            className="form-control"
            id="start"
            name="start"
            value={formData.start ? formData.start.toISOString().split("T")[0] : ""} // Convertir fecha a formato adecuado
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Turno
        </button>
      </form>
    </div>
  );
};

export default CalendarioForm;
