import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTasks } from "../Context/TasksContext";
import {useNavigate,useParams} from "react-router-dom";
import './pacientes.css'

const PacientesForm = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask, errors, setErrors} = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("nombre", task.nombre);
        setValue("apellido", task.apellido);
        setValue("dni", task.dni);
        setValue("edad", task.edad);
        setValue("diagnostico", task.diagnostico);
        setValue("obrasocial", task.obrasocial);
        setValue("localidad", task.localidad);
        setValue("direccion", task.direccion);
      }
    }
    loadTask();
  }, [params.id]);

  const onSubmit = handleSubmit(async (data) => {
    setErrors([]); 
    let success = false; 
  
    try {
      if (params.id) {
        await updateTask(params.id, data); 
        success = true; 
      } else {
        success = await createTask(data); 
      }
  
      if (success) {
        navigate("/tasks"); 
      }
    } catch (error) {
      console.log("Error al procesar la tarea:", error);
     
    }
  });
  
  
  
 

  return (
    <div className="container">
      <form onSubmit={onSubmit} className="mb-4">
        {/* Mostrar errores del backend */}
        {errors.length > 0 && (
          <div className="errores-backend">
            {errors.map((error, i) => (
              <p key={i} className="mensaje-error-backend">
                {error}
              </p>
            ))}
          </div>
        )}


        <div className="mb-3 row">
          <label
            className="col-12 col-md-2 col-form-label text-start text-md-end"
            htmlFor="name"
          >
            Nombre
          </label>
          <div className="col-12 col-md-10">
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Nombre del paciente"
             {...register('nombre')}
              required
            />
          </div>
        </div>

        {/* Apellido */}
        <div className="mb-3 row">
          <label
            className="col-12 col-md-2 col-form-label text-start text-md-end"
            htmlFor="apellido"
          >
            Apellido
          </label>
          <div className="col-12 col-md-10">
            <input
              id="apellido"
              type="text"
              className="form-control"
              placeholder="Apellido del paciente"
             {...register('apellido')}
              required
            />
          </div>
        </div>

        <div className="mb-3 row">
          <label
            className="col-12 col-md-2 col-form-label text-start text-md-end"
            htmlFor="name"
          >
            DNI
          </label>
          <div className="col-12 col-md-10">
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="ingrese su DNI"
             {...register('dni')}
              required
            />
          </div>
        </div>

        {/* Edad */}
        <div className="mb-3 row">
          <label
            className="col-12 col-md-2 col-form-label text-start text-md-end"
            htmlFor="edad"
          >
            Edad
          </label>
          <div className="col-12 col-md-10">
            <input
              id="edad"
              type="number"
              className="form-control"
              placeholder="Edad del paciente"
              {...register('edad')}
              required
            />
          </div>
        </div>

        {/* Diagnóstico */}
        <div className="mb-3 row">
          <label
            className="col-12 col-md-2 col-form-label text-start text-md-end"
            htmlFor="diagnostico"
          >
            Diagnóstico
          </label>
          <div className="col-12 col-md-10">
            <input
              id="diagnostico"
              type="text"
              className="form-control"
              placeholder="Diagnóstico del paciente"
              {...register('diagnostico')}
              required
            />
          </div>
         
        </div>

        <div className="mb-3 row">
  <label
    className="col-12 col-md-2 col-form-label text-start text-md-end"
    htmlFor="obrasocial"
  >
    Obra social
  </label>
  <div className="col-12 col-md-10">
    <select
      id="obrasocial"
      className="form-control"
      {...register('obrasocial')}
      required
    >
      <option value="">Selecciona una opción</option>
      <option value="Ioma">Ioma</option>
      <option value="Pami">Pami</option>
      <option value="Otra">Otra</option>
    </select>
  </div>
</div>


        <div className="mb-3 row">
          <label
            className="col-12 col-md-2 col-form-label text-start text-md-end"
            htmlFor="diagnostico"
          >
            Localidad
          </label>
          <div className="col-12 col-md-10">
            <input
              id="localidad"
              type="text"
              className="form-control"
              placeholder="Localidad "
              {...register('localidad')}
              required
            />
          </div>
         
        </div>


        <div className="mb-3 row">
          <label
            className="col-12 col-md-2 col-form-label text-start text-md-end"
            htmlFor="direccion"
          >
            Direccion
          </label>
          <div className="col-12 col-md-10">
            <input
              id="direccion"
              type="text"
              className="form-control"
              placeholder="Direccion"
              {...register('direccion')}
              required
            />
          </div>
        
        </div>
        
        <div className="button-pacientes-form">
          <button className="button-agregar-paciente">Agregar paciente</button>
        </div>
      </form>

    
    </div>
  );
};

export default PacientesForm;