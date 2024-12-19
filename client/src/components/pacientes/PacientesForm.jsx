import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTasks } from "../Context/TasksContext";
const PacientesForm = () => {
  const {register,handleSubmit}= useForm();
  const {createTask}=useTasks();
  console.log(createTask);
  const onSubmit = handleSubmit((data)=>{
    console.log(data)
  });
  return (
    <div className="container">
      <form onSubmit={onSubmit} className="mb-4">
        {/* Nombre */}
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

        <button  className="btn btn-primary">agregar paciente</button>
      </form>

    
    </div>
  );
};

export default PacientesForm;