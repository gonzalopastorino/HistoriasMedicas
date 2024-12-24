import { useEffect } from 'react';
import { useTasks } from '../../components/Context/TasksContext';
import SidebarMenu from "../../components/siderbar/SiderBarMenu";  // Asegúrate de tener la ruta correcta
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para navegar a otras páginas

function TasksPage() {
  const { getTasks, tasks } = useTasks(); // Obtén las tareas del contexto
  const navigate = useNavigate(); // Hook de navegación
  
  useEffect(() => {
    getTasks();
  }, [getTasks]); // Asegúrate de pasar getTasks como dependencia

  if (tasks.length === 0) {
    return (
      <div className="d-flex">
        <SidebarMenu onRegistrarPacientes={() => navigate("/bienvenida")} />
        <div className="main-content ms-3">
          <h1>No hay pacientes registrados</h1>
        </div>
        
      </div>
      
    );
  }

  return (
    <div className="d-flex">
      <SidebarMenu onRegistrarPacientes={() => navigate("/add-task")} />
      <div className="main-content ms-3">
        {tasks.map((task) => (
          <div key={task._id}>
            <p>{task.nombre}</p>
            <p>{task.apellido}</p>
            <p>{task.edad}</p>
            <p>{task.diagnostico}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TasksPage;
