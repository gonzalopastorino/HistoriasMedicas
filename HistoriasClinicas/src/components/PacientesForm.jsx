import React, { useState, useEffect } from "react";

const PacientesForm = () => {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [diagnostico, setDiagnostico] = useState("");
  const [pacientes, setPacientes] = useState([]);
  const [editandoIndex, setEditandoIndex] = useState(null);

  // Cargar pacientes desde el localStorage al montar
  useEffect(() => {
    const pacientesGuardados = JSON.parse(localStorage.getItem("pacientes")) || [];
    setPacientes(pacientesGuardados);
  }, []);

  // Guardar pacientes en el localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoPaciente = { name, apellido, edad, diagnostico };

    if (editandoIndex !== null) {
      // Editar un paciente existente
      const pacientesActualizados = [...pacientes];
      pacientesActualizados[editandoIndex] = nuevoPaciente;
      setPacientes(pacientesActualizados);
      setEditandoIndex(null);
    } else {
      // Agregar un nuevo paciente
      setPacientes([...pacientes, nuevoPaciente]);
    }

    // Limpiar formulario
    setName("");
    setApellido("");
    setEdad("");
    setDiagnostico("");
  };

  const handleEditar = (index) => {
    const paciente = pacientes[index];
    setName(paciente.name);
    setApellido(paciente.apellido);
    setEdad(paciente.edad);
    setDiagnostico(paciente.diagnostico);
    setEditandoIndex(index);
  };

  const handleEliminar = (index) => {
    const pacientesActualizados = pacientes.filter((_, i) => i !== index);
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="mb-4">
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
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
              value={edad}
              onChange={(e) => setEdad(e.target.value)}
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
              value={diagnostico}
              onChange={(e) => setDiagnostico(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          {editandoIndex !== null ? "Actualizar Paciente" : "Agregar Paciente"}
        </button>
      </form>

      {/* Mostrar lista de pacientes */}
      <div>
        <h2 className="text-center mb-4">Lista de Pacientes</h2>
        {pacientes.length === 0 ? (
          <p className="text-center">No hay pacientes registrados.</p>
        ) : (
          pacientes.map((paciente, index) => (
            <div
              key={index}
              className="card mb-3"
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              <div className="card-body">
                <p>
                  <strong>Nombre:</strong> {paciente.name}
                </p>
                <p>
                  <strong>Apellido:</strong> {paciente.apellido}
                </p>
                <p>
                  <strong>Edad:</strong> {paciente.edad}
                </p>
                <p>
                  <strong>Diagnóstico:</strong> {paciente.diagnostico}
                </p>
                <div className="d-flex justify-content-end">
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleEditar(index)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleEliminar(index)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PacientesForm;
