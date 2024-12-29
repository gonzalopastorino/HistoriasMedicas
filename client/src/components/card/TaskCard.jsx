import { useTasks } from "../Context/TasksContext";
import { Link } from "react-router-dom";
import "./card.css";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4"> {/* Columna adaptable */}
      <div className="card h-100"> {/* Card que se adapta al contenido */}
        <div className="card-body">
          {/* Información de la tarea */}
          <p><strong>Nombre:</strong> {task.nombre}</p>
          <p><strong>Apellido:</strong> {task.apellido}</p>
          <p><strong>Edad:</strong> {task.edad}</p>
          <p><strong>Diagnóstico:</strong> {task.diagnostico}</p>
        </div>
        <div className="card-body d-flex flex-wrap gap-2 justify-content-center">
          {/* Botones responsivos */}
          <Link 
            to={`/tasks/${task._id}`} 
            className="btn btn-primary flex-grow-1 flex-md-grow-0 w-100 w-md-auto"
          >
            Editar
          </Link>
          <button 
            className="btn btn-danger flex-grow-1 flex-md-grow-0 w-100 w-md-auto" 
            onClick={() => deleteTask(task._id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
