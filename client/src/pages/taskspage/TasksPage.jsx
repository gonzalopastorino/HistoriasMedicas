import { useEffect } from 'react';
import { useTasks } from '../../components/Context/TasksContext';

import { useNavigate } from 'react-router-dom'; // Importamos useNavigate para navegar a otras páginas
import TaskCard from '../../components/card/TaskCard'
import '../../pages/taskspage/taskPage.css'


function TasksPage() {
  const { getTasks, tasks } = useTasks(); // Obtén las tareas del contexto
  const navigate = useNavigate(); // Hook de navegación
  
  useEffect(() => {
    getTasks();
  }, [getTasks]); // Asegúrate de pasar getTasks como dependencia

  if (tasks.length === 0) {
    return (
      <div className="d-flex">
        
        <div className="main-content ms-3">
          <h1 className='title-tasks-page'>No hay pacientes registrados</h1>
        </div>
        
      </div>
      
    );
  }

  return (
    <div className="container mt-4">
  <div className="row">
    {tasks.map((task) => (
      <TaskCard task={task} key={task._id} />
    ))}
  </div>
</div>

  );
}

export default TasksPage;
