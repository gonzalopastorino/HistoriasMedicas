import React, { useState, useEffect } from "react";
import { useTasks } from "../Context/TasksContext";

const TablasForm = () => {
  const { tasks, getTasks } = useTasks();
  const [search, setSearch] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  useEffect(() => {
    setFilteredTasks(
      tasks.filter((task) =>
        task.nombre.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, tasks]);

  return (
    <div className="container mt-4">
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Buscar por nombre del paciente"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-primary ms-2">
          <i className="bi bi-search"></i>
        </button>
      </div>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>DNI</th>
            <th>Edad</th>
            <th>Diagnóstico</th>
            <th>Obra social</th>
            <th>Localidad</th>
            <th>Direccion</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task._id}>
              <td>{task.nombre}</td>
              <td>{task.apellido}</td>
              <td>{task.dni}</td>
              <td>{task.edad}</td>
              <td>{task.diagnostico}</td>
              <td>{task.obrasocial}</td>
              <td>{task.localidad}</td>
              <td>{task.direccion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablasForm;
