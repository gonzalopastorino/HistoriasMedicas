import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useTasks } from "../Context/TasksContext";

const TablasForm = () => {
  const { tasks, getTasks } = useTasks(); // Obtener tareas desde el contexto
  const [search, setSearch] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]); // Estado de filas seleccionadas

  // Obtener tareas al montar
  useEffect(() => {
    const fetchTasks = async () => {
      await getTasks();
    };
    fetchTasks();
  }, [getTasks]);

  // Filtrar tareas al cambiar `search` o `tasks`
  useEffect(() => {
    const filtered = tasks.filter((task) =>
      task.nombre.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredTasks(filtered);
  }, [search, tasks]);

  // Manejar búsqueda
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Configuración de columnas
  const columns = [
    { name: "Nombre", selector: (row) => row.nombre, sortable: true },
    { name: "Apellido", selector: (row) => row.apellido, sortable: true },
    { name: "DNI", selector: (row) => row.dni, sortable: true },
    { name: "Edad", selector: (row) => row.edad, sortable: true },
    { name: "Diagnóstico", selector: (row) => row.diagnostico, sortable: true },
    { name: "Obra Social", selector: (row) => row.obrasocial, sortable: true },
    { name: "Localidad", selector: (row) => row.localidad, sortable: true },
    { name: "Dirección", selector: (row) => row.direccion, sortable: true },
  ];

  // Controlar selección/deselección
  const handleRowSelect = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
  };

  // Marcar las filas seleccionadas correctamente
  const handleRowClicked = (row) => {
    const isSelected = selectedRows.some((selected) => selected._id === row._id);
    if (isSelected) {
      // Si el paciente ya está seleccionado, lo desmarcamos
      setSelectedRows((prev) => prev.filter((selected) => selected._id !== row._id));
    } else {
      // Si no está seleccionado, lo agregamos a la lista de seleccionados
      setSelectedRows((prev) => [...prev, row]);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Tabla de Pacientes</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="🔍 Buscar por nombre del paciente"
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <DataTable
        title="Datos de Pacientes"
        data={filteredTasks}
        columns={columns}
        pagination
        fixedHeader
        selectableRows
        onSelectedRowsChange={handleRowSelect}
        selectedRows={selectedRows.map((row) => row._id)} // Sincronizar selección con estado
        onRowClicked={handleRowClicked} // Agregar evento de click en fila
      />

      <div className="mt-4">
        <h4>Pacientes seleccionados:</h4>
        <ul>
          {selectedRows.map((row) => (
            <li key={row._id}>
              {row.nombre} {row.apellido}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TablasForm;
